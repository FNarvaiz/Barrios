using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190712121800), Tags("Default")]
    public class DefaultDB_20190712_121800_UpdateReservasStoreProcedure : Migration
    {
        public override void Up()
        {

            this.Alter.Table("Barrios")
               .AddColumn("CantDiasReservables").AsInt16().NotNullable().WithDefaultValue("7");
            this.Alter.Table("RESERVAS_RECURSOS")
               .AddColumn("TIPO").AsInt16().NotNullable().WithDefaultValue("1");

            Execute.Sql("ALTER FUNCTION [dbo].[LISTA_FECHAS](@cantDias smallint) " +
                " RETURNS @resultado TABLE(FECHA DATE) " +
                "AS " +
                " BEGIN " +
                  " DECLARE @fechaInicial DATE;  " +
                  " SELECT @fechaInicial = FECHA FROM HOY " +
                  " DECLARE @fechaFinal DATE;  " +
                  " SELECT @fechaFinal = DATEADD(d, @cantDias, @fechaInicial); " +

                  " WITH fechas(FECHA) AS ( " +
                    " SELECT @fechaInicial AS FECHA " +
                    "UNION ALL " +
                    " SELECT DATEADD(d, 1, FECHA) FROM fechas WHERE FECHA < @fechaFinal) " +

                    " INSERT INTO @resultado " +
                      " SELECT FECHA FROM fechas  " +
                  " RETURN " +
                " END  ");

            Execute.Sql(" ALTER FUNCTION [dbo].[ESTADOS_RESERVAS] ( @idRecurso smallint,@cantDias smallint,@turnosEspeciales bit ) " +
                " RETURNS @resultado TABLE(FECHA date, INICIO smallint, DURACION smallint, ID_TIPO smallint,  " +
                  " ID_VECINO smallint, ID_VECINO_2 smallint, ESTADO nvarchar(100)) " +
                " AS " +
                " BEGIN " +
                  " IF @turnosEspeciales = 1 " +
                    " INSERT INTO @resultado " +
                    " SELECT R.FECHA, R.INICIO, R.DURACION, R.ID_TIPO, R.ID_VECINO, R.ID_VECINO_2, " +
                      " dbo.ESTADO_TURNO_RESERVA(R.ID_RECURSO, R.FECHA, R.INICIO, R.DURACION) " +
                    " FROM RESERVAS R " +
                    " WHERE R.ID_RECURSO = @idRecurso AND R.FECHA >= (SELECT TOP 1 FECHA FROM HOY) " +
                  " ELSE " +
                    " INSERT INTO @resultado " +
                    " SELECT F.FECHA, T.INICIO, T.DURACION,  " +
                        " dbo.ID_TIPO_RESERVA(dbo.ID_RESERVA_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO, T.DURACION)), " +
                        " dbo.ID_VECINO_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO), " +
                        " dbo.ID_VECINO_2_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO), " +
                        " dbo.ESTADO_TURNO_RESERVA(@idRecurso, F.FECHA, T.INICIO, T.DURACION) " +
                      " FROM dbo.LISTA_FECHAS(@cantDias) AS F " +
                      " CROSS JOIN dbo.RESERVAS_TURNOS(@idRecurso) T  " +
                  " RETURN " +
                " END ");


            Execute.Sql("  CREATE PROCEDURE[YachtBookingTake] " +
                " @resourceId int = null, " +
                " @turnTypeId int = null, " +
                " @turnStart int, " +
                " @date date = null, " +
                " @UserId int = null, " +
                " @extraNeighborId int = null " +
                " AS " +
                " BEGIN " +
                    " DECLARE @turnDuration   int " +
                    " DECLARE @resourceType   int " +
                    " DECLARE @count  int " +
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
                        " SELECT @count = COUNT(*) FROM RESERVAS R " +
                         "  inner join[RESERVAS_RECURSOS] RR " +
                         " ON R.ID_RECURSO = RR.Id AND RR.TIPO = @resourceType " +
                        " WHERE FECHA_FIN > GETDATE() AND((ID_VECINO = @UserId OR ID_VECINO_2 = @UserId) OR(ID_VECINO = @extraNeighborId OR ID_VECINO_2 = @extraNeighborId)) " +
                      " If @count = 0 " +
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
                              " INSERT INTO RESERVAS(ID_RECURSO, ID_VECINO, FECHA, INICIO, DURACION, ID_TIPO, ID_VECINO_2, DateInsert, UserInsert) VALUES(@resourceId, @UserId, @date, @turnStart, @turnDuration, @turnTypeId, @extraNeighborId, GETDATE(), @UserId) " +
                             " END " +
                          " else " +
                            " THROW 50000,'El turno no está disponible.', 1 " +
                        " END " +
                        " else " +
                          " THROW 50000,'El turno  ya no se puede reservar porque ha pasado el horario de comienzo.', 1 " +
                      " END " +
                      " else " +
                        " THROW 50000,'Ya hay una reserva a utilizar. Una vez que la utilices podrás realizar otra.', 1 " +
                    " END " +
                " END ");
        }
        public override void Down()
        {
        }
    }
}