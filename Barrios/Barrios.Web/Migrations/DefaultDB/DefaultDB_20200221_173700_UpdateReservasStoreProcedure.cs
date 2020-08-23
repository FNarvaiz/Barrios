using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200221173700), Tags("Default")]
    public class DefaultDB_20200221_173700_UpdateReservasStoreProcedure : AutoReversingMigration
    {
        public override void Up()
        {
            StringBuilder query = new StringBuilder();
            query.Append("ALTER  PROCEDURE [vecinosTodos].[YachtBookingTake] ");
            query.Append("                @resourceId int = null, ");
            query.Append("                @turnTypeId int = null, ");
            query.Append("                @turnStart int, ");
            query.Append("                @date date = null, ");
            query.Append("                @UserId int = null, ");
            query.Append("                @BarrioId int = null, ");
            query.Append("                @extraNeighborId int = null, ");
            query.Append("                @observaciones varchar(200) = null ");
            query.Append("                AS ");
            query.Append("                BEGIN ");
            query.Append("                    DECLARE @turnDuration   int ");
            query.Append("                    DECLARE @resourceType   int ");
            query.Append("                    DECLARE @count  int = 0 ");
            query.Append("                    DECLARE @OK bit ");
            query.Append("                    DECLARE @status  varchar(100) ");
            query.Append("                    DECLARE @extraNeighborRequired bit = null ");
            query.Append("                    DECLARE @admin bit = null ");


            query.Append("                    select @admin =case when exists(select RoleId from UserRoles where userid = @UserId and RoleId = 1) then 1 else 0 end");
           
            query.Append("                    If not @resourceId is null ");
            query.Append("                    Begin ");

            query.Append("                        SELECT  @turnDuration = RT.DURACION, ");
            query.Append("                        @extraNeighborRequired = RT.REQUIERE_VECINO_2, ");
            query.Append("                        @resourceType = RR.TIPO ");
            query.Append("                        FROM RESERVAS_TIPOS  RT ");
            query.Append("                        INNER JOIN[RESERVAS_RECURSOS] RR ");
            query.Append("                        ON RT.ID_RECURSO = RR.ID ");
            query.Append("                        Where RT.Id = @turnTypeId ");

            query.Append("                        If @resourceType != 4 ");/* NO ES TAPE Y DESTAPE */

            query.Append("                          SELECT @count = COUNT(*) FROM RESERVAS R  ");
            query.Append("                          inner join[RESERVAS_RECURSOS] RR  ");
            query.Append("                          ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType ");
            query.Append("                          WHERE FECHA_FIN > GETDATE() AND((ID_VECINO = @UserId OR ID_VECINO_2 = @UserId) OR(ID_VECINO = @extraNeighborId OR ID_VECINO_2 = @extraNeighborId)) ");

            query.Append("                        If @count < 2 or @admin=1 ");// REVISA CUANTAS RESERVAS TIENE REALIZADAS
            query.Append("                        BEGIN ");

            query.Append("                          SELECT @count = COUNT(*) ");
            query.Append("                          FROM RESERVAS R ");
            query.Append("                          inner join[RESERVAS_RECURSOS] RR ");
            query.Append("                          ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType ");
            query.Append("                          WHERE FECHA_FIN > GETDATE() AND((ID_VECINO = @UserId OR ID_VECINO_2 = @UserId) OR(ID_VECINO = @extraNeighborId OR ID_VECINO_2 = @extraNeighborId)) ");
            query.Append("                          AND dbo.TURNOS_RESERVA_SIMULTANEOS_O_ADYASCENTES(FECHA, INICIO, DURACION, @date, @turnStart, @turnDuration) = 1 ");

            query.Append("                          if @count = 1 and @admin =0 ");
            query.Append("                              THROW 50000,'Las reserva que intenta realizar es simultáneo o adyacente a otra reserva.', 1 ");

            query.Append("                          SELECT @OK = CAST(CASE WHEN GETDATE() <= dbo.FECHA_INICIO_TURNO(@date, @turnStart) THEN 1 ELSE 0 END AS BIT) ");

            query.Append("                          If @OK = 1  ");
            query.Append("                          BEGIN ");

            query.Append("                              SELECT @status = dbo.ESTADO_TURNO_RESERVA(@resourceId, @date, @turnStart, @turnDuration) ");

            query.Append("                              IF @status = 'DISPONIBLE' ");
            query.Append("                              BEGIN ");
            query.Append("                              if @resourceType = 1 ");

            query.Append("                                  SELECT @OK = CAST(CASE WHEN DATEDIFF(DAY, GETDATE(), @date) = 0 OR DATEPART(HOUR, GETDATE()) >= 8 THEN 1 ELSE 0 END AS BIT) ");

            query.Append("                              if  @OK = 0 and @admin =0 ");
            query.Append("                                  THROW 50000,'Las reservas para mañana se pueden efectuar recién a partir de las 8:00hs.', 1 ");
            query.Append("                              If @OK = 1 or @admin=1 ");

            query.Append("                                  INSERT INTO RESERVAS(BarrioId,ID_RECURSO, ID_VECINO, FECHA, INICIO, DURACION, ID_TIPO, ID_VECINO_2, DateInsert, UserInsert,observaciones) VALUES(@barrioId,@resourceId, @UserId, @date, @turnStart, @turnDuration, @turnTypeId, @extraNeighborId, GETDATE(), @UserId,@observaciones) ");

            query.Append("                              END ");
            query.Append("                              else ");
            query.Append("                                  THROW 50000,'El turno no está disponible.', 1 ");
            query.Append("                              END ");
            query.Append("                          else ");
            query.Append("                              THROW 50000,'El turno  ya no se puede reservar porque ha pasado el horario de comienzo.', 1 ");
            query.Append("                          END ");
            query.Append("                      else ");
            query.Append("                          THROW 50000,'Ya hay dos reservas a utilizar. Una vez que la utilices podrás realizar otra.', 1 ");
            query.Append("                      END ");
            query.Append("                  END ");
            Execute.Sql(query.ToString());
        }
    }
}