using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190805015500), Tags("Default")]
    public class DefaultDB_20190805_015500_CreateProcedureEspecialDates : Migration
    {
        public override void Up()
        {
            
            Execute.Sql("CREATE FUNCTION [dbo].[LISTA_FECHAS_ESPECIALES]( " +
                "@inicioDias Int, @finDias int " +
                ") " +
                "RETURNS @resultado TABLE(FECHA DATE) " +
                "AS " +
                "BEGIN " +
                  "DECLARE @fechaInicial DATE; " +
                            "SELECT @fechaInicial = FECHA FROM HOY " +
                  "DECLARE @fechaFinal DATE; " +
                            "SELECT @fechaFinal = DATEADD(d, @finDias, @fechaInicial); " +
                            "SELECT @fechaInicial = DATEADD(d, @inicioDias, @fechaInicial); " +
                            "WITH fechas(FECHA) AS( " +
                              "SELECT @fechaInicial AS FECHA" +
                             " UNION ALL " +
                              "SELECT DATEADD(d, 1, FECHA) FROM fechas WHERE FECHA < @fechaFinal)" +
                    "INSERT INTO @resultado " +
                     " SELECT FECHA FROM fechas " +
                  "RETURN " +
                "END");
            Execute.Sql("ALTER FUNCTION [dbo].[RESERVAS_TURNOS] "+
                  "   (@idRecurso SMALLINT) " +
                " RETURNS @resultado TABLE(ID SMALLINT, NOMBRE NVARCHAR(100), INICIO SMALLINT, DURACION SMALLINT,DIAS NVARCHAR(10))  " +
                " AS " +
                " BEGIN " +
                " DECLARE @apertura SMALLINT " +
                " DECLARE @cierre SMALLINT " +
                " DECLARE @resolucion SMALLINT " +
                " SELECT @apertura = APERTURA, @cierre = CIERRE, @resolucion = RESOLUCION " +
                    " FROM RESERVAS_RECURSOS " +
                  "   WHERE ID = @idRecurso " +
                " IF @resolucion = 0  " +
                    " INSERT INTO @resultado " +
                    " SELECT DISTINCT ID, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(INICIO)), INICIO, DURACION, DIAS " +
                  "       FROM RESERVAS_TURNOS_ESPECIALES WHERE ID_RECURSO = @idRecurso " +
                " ELSE " +
                " BEGIN " +
                    " DECLARE @inicio SMALLINT; SET @inicio = @apertura; " +
                    " WITH TURNOS(INICIO) AS( " +
                        " SELECT @inicio AS INICIO " +


                        " UNION ALL " +


                        " SELECT INICIO + @resolucion " +
                      "       FROM TURNOS WHERE INICIO + @resolucion<@cierre) " +
                    " INSERT INTO @resultado " +
                    " SELECT INICIO, dbo.HOUR_TO_STR(dbo.MINUTOS_A_HORA(INICIO)), INICIO, @resolucion  ,''  " +
                  "   FROM TURNOS " +
                " END " +
                " RETURN " +
                " END ");
        }
        public override void Down()
        {
        }
    }
}