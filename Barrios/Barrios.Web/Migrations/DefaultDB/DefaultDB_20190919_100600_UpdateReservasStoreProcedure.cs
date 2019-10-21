using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190919100600), Tags("Default")]
    public class DefaultDB_20190919_100600_UpdateReservasStoreProcedure : AutoReversingMigration
    {
        public override void Up()
        {
            Execute.Sql("  ALTER  PROCEDURE [vecinosTodos].[YachtBookingTake] " +
                " @resourceId int = null, " +
                " @turnTypeId int = null, " +
                " @turnStart int, " +
                " @date date = null, " +
                " @UserId int = null, " +
                " @BarrioId int = null, " +
                " @extraNeighborId int = null " +
                " AS " +
                " BEGIN " +
                    " DECLARE @turnDuration   int " +
                    " DECLARE @resourceType   int " +
                    " DECLARE @count  int = 0 " +
                    " DECLARE @OK bit " +
                    " DECLARE @status  varchar(100) " +
                    " DECLARE @extraNeighborRequired bit = null " +
                    " If not @resourceId is null " +
                    " Begin " +
                        " SELECT  @turnDuration = RT.DURACION, " +
                          "       @extraNeighborRequired = RT.REQUIERE_VECINO_2, " +
                            "     @resourceType = RR.TIPO " +
                        " FROM RESERVAS_TIPOS  RT " +
                       " INNER JOIN[RESERVAS_RECURSOS] RR " +
                       " ON RT.ID_RECURSO = RR.ID " +
                        " Where RT.Id = @turnTypeId " +
                        " If @resourceType != 4 "+/* NO ES TAPE Y DESTAPE */
                          " SELECT @count = COUNT(*) FROM RESERVAS R  " +
                          " inner join[RESERVAS_RECURSOS] RR  " +
                          " ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType " +
                          " WHERE FECHA_FIN > GETDATE() AND((ID_VECINO = @UserId OR ID_VECINO_2 = @UserId) OR(ID_VECINO = @extraNeighborId OR ID_VECINO_2 = @extraNeighborId)) " +
                      " If @count < 2 " +
                      " BEGIN " +
                        " SELECT @OK = CAST(CASE WHEN GETDATE() <= dbo.FECHA_INICIO_TURNO(@date, @turnStart) THEN 1 ELSE 0 END AS BIT) " +
                        " If @OK = 1 " +
                        " BEGIN " +
                          " SELECT @status = dbo.ESTADO_TURNO_RESERVA(@resourceId, @date, @turnStart, @turnDuration) " +
                          " IF @status = 'DISPONIBLE' " +
                          " BEGIN " +
                            " if @resourceType = 1 " +
                              "   SELECT @OK = CAST(CASE WHEN DATEDIFF(DAY, GETDATE(), @date) = 0 OR DATEPART(HOUR, GETDATE()) >= 8 THEN 1 ELSE 0 END AS BIT) " +
                            " if  @OK = 0 " +
                              "   THROW 50000,'Las reservas para mañana se pueden efectuar recién a partir de las 8:00hs.', 1 " +
                            " If @OK = 1 " +
                              " INSERT INTO RESERVAS(BarrioId,ID_RECURSO, ID_VECINO, FECHA, INICIO, DURACION, ID_TIPO, ID_VECINO_2, DateInsert, UserInsert) VALUES(@barrioId,@resourceId, @UserId, @date, @turnStart, @turnDuration, @turnTypeId, @extraNeighborId, GETDATE(), @UserId) " +
                             " END " +
                          " else " +
                            " THROW 50000,'El turno no está disponible.', 1 " +
                        " END " +
                        " else " +
                          " THROW 50000,'El turno  ya no se puede reservar porque ha pasado el horario de comienzo.', 1 " +
                      " END " +
                      " else " +
                        " THROW 50000,'Ya hay dos reservas a utilizar. Una vez que la utilices podrás realizar otra.', 1 " +
                    " END " +
                " END ");
        }
    }
}