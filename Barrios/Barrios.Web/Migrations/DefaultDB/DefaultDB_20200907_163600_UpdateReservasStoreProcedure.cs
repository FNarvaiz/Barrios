using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200907163600), Tags("Default")]
    public class DefaultDB_20200907_163600_UpdateReservasStoreProcedure : Migration
    {
        public override void Up()
        {
            Alter.Table("[RESERVAS_RECURSOS]").AddColumn("AmountForDays").AsInt16().WithDefaultValue("1").NotNullable();

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
            query.Append("                    DECLARE @countForDay  int = 0 ");
            query.Append("                    DECLARE @AmountToReserve  int = 0 ");
            query.Append("                    DECLARE @AmountForDays  int = 0 ");
            query.Append("                    DECLARE @UserUnit  varchar(10) ");
            query.Append("                    DECLARE @OK bit ");
            query.Append("                    DECLARE @status  varchar(100) ");
            query.Append("                    DECLARE @extraNeighborRequired bit = null ");
            query.Append("                    DECLARE @admin bit = null ");


            query.Append("                    select @admin =case when exists(select RoleId from UserRoles where userid = @UserId and RoleId = 1) then 1 else 0 end");
            query.Append("                    select @UserUnit=units from [Users-Barrios] where userid = @UserId AND BarrioId = @BarrioId");

            query.Append("                    If not @resourceId is null ");
            query.Append("                    Begin ");

            query.Append("                        SELECT @AmountForDays=RR.AmountForDays, @AmountToReserve=RR.AmountToReserve,@turnDuration = RT.DURACION, ");
            query.Append("                        @extraNeighborRequired = RT.REQUIERE_VECINO_2, ");
            query.Append("                        @resourceType = RR.TIPO ");
            query.Append("                        FROM RESERVAS_TIPOS  RT ");
            query.Append("                        INNER JOIN[RESERVAS_RECURSOS] RR ");
            query.Append("                        ON RT.ID_RECURSO = RR.ID ");
            query.Append("                        Where RT.Id = @turnTypeId ");

            query.Append("                        If @resourceType != 4 ");/* NO ES TAPE Y DESTAPE */

            query.Append("                          SELECT @count = COUNT(*), @countForDay= isnull(SUM(case when FECHA = @date then 1 else 0 end),0) FROM RESERVAS R  ");
            query.Append("                          inner join[RESERVAS_RECURSOS] RR  ");
            query.Append("                          ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType ");
            query.Append("                          inner join [Users] US ");
            query.Append("                          ON (R.ID_VECINO = US.UserId OR R.ID_VECINO_2 = US.UserId) "); 
            query.Append("                          inner join [Users-Barrios] UB");
            query.Append("                          ON UB.UserId = US.UserId AND UB.BarrioId = @BarrioId AND UB.Units = @UserUnit  ");
            query.Append("                          WHERE FECHA_FIN > GETDATE() ");

            query.Append("                        If (@count < @AmountToReserve and @countForDay<@AmountForDays)  or @admin=1 ");// REVISA CUANTAS RESERVAS TIENE REALIZADAS TOTALES Y POR DIA
            query.Append("                        BEGIN ");

            query.Append("                          SELECT @count = COUNT(*) ");
            query.Append("                          FROM RESERVAS R ");
            query.Append("                          inner join[RESERVAS_RECURSOS] RR ");
            query.Append("                          ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType ");
            query.Append("                          WHERE FECHA_FIN > GETDATE() AND((ID_VECINO = @UserId OR ID_VECINO_2 = @UserId) OR(ID_VECINO = @extraNeighborId OR ID_VECINO_2 = @extraNeighborId)) ");
            query.Append("                          AND dbo.TURNOS_RESERVA_SIMULTANEOS_O_ADYASCENTES(FECHA, INICIO, DURACION, @date, @turnStart, @turnDuration) = 1 ");

            query.Append("                          if @count = 1 and @admin =0 ");// REVISA QUE EL TURNO NO SE PISE CON OTRO TURNO Y NO SEA CONSECUTIVA CON OTRA
            query.Append("                              THROW 50000,'Las reserva que intenta realizar es simultáneo o adyacente a otra reserva.', 1 ");

            query.Append("                          SELECT @OK = CAST(CASE WHEN GETDATE() <= dbo.FECHA_INICIO_TURNO(@date, @turnStart) THEN 1 ELSE 0 END AS BIT) ");
            
            query.Append("                          If @OK = 1  ");// COMPRUEBA QUE EL TURNO NO HAY CONCLUIDO O PASADO
            query.Append("                          BEGIN ");

            query.Append("                              SELECT @status = dbo.ESTADO_TURNO_RESERVA(@resourceId, @date, @turnStart, @turnDuration) ");

            query.Append("                              IF @status = 'DISPONIBLE' ");// REVISA QUE SIGA DISPONIBLE EL TURNO
            query.Append("                              BEGIN ");
            query.Append("                              if @resourceType = 1 ");// SI ES TENIS SOLO PUEDE RESERVARCE PASANDO LAS 8AM

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
            query.Append("                          THROW 50000,'Ya tienes la cantidad máxima de reservas a utilizar en el día o en total. Una vez que la utilices podrás realizar otra.', 1 ");
            query.Append("                      END ");
            query.Append("                  END ");
            Execute.Sql(query.ToString());
        }
        public override void Down()
        {
        }
    }
}