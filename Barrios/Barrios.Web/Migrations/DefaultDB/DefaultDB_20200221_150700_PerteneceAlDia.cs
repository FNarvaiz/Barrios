using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200221150700), Tags("Default")]
    public class DefaultDB_20200221_150700_PerteneceAlDia : Migration
    {
        public override void Up()
        {
            Execute.Sql("CREATE FUNCTION PERTENECEALDIA" +
                        " (" +
                        "    @fecha date," +
                        "    @dias Varchar(10)," +
                        "    @feriado date" +
                        "   )" +
                        "   RETURNS BIT" +
                        "   AS" +
                        "   BEGIN" +

                        "      RETURN(" +
                        "      select " +

                        "      case when(@feriado IS NOT null AND CHARINDEX('7', @dias) > 0)" +

                        "      OR CHARINDEX(CONVERT(varchar(1), DATEPART(dw, @fecha) - 1), @dias) > 0 THEN 1 ELSE 0 END" +

                        "      ) " +

                        "END "
                );
            Execute.Sql("ALTER FUNCTION [dbo].[TURNO_RESERVA_DISPONIBLE] (  @idRecurso SMALLINT,  @fecha DATETIME,  @inicio SMALLINT,  @duracion SMALLINT  )  " +
                        "RETURNS BIT  AS  " +
                        "BEGIN " +
                        "RETURN(SELECT  " +
                            "CASE WHEN NOT EXISTS( " +
                                "SELECT * FROM RESERVAS  WHERE ID_RECURSO = @idRecurso AND FECHA = @fecha AND Confirmada = 1 " +
                                "AND " +
                                "dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @inicio, @duracion) = 1)  THEN 1  " +
                            "ELSE 0  END" +
                        ")  " +
                        "END " 
                );

        }
        public override void Down()
        {
            Execute.Sql("DROP FUNCTION PERTENECEALDIA");
        }
    }
}