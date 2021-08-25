using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20201011014800), Tags("Default")]
    public class DefaultDB_20201011_014800_CreateReservasRecurrentes : Migration
    {
        public override void Up()
        {
            Create.Table("RESERVAS_RECURRENTES").WithColumn("id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Dias").AsString(8).NotNullable()
                .WithColumn("Observaciones").AsString(150).NotNullable()
                .WithColumn("ResourceId").AsInt16().ForeignKey("[RESERVAS_RECURSOS]", "id").NotNullable()
                .WithColumn("Inicio").AsInt16().NotNullable()
                .WithColumn("Duracion").AsInt16().NotNullable();

           string  query="ALTER FUNCTION[dbo].[TURNO_RESERVA_DISPONIBLE] " +
                "(@idRecurso SMALLINT, @fecha DATETIME, @inicio SMALLINT, @duracion SMALLINT) " +
                " RETURNS BIT AS  BEGIN RETURN(SELECT CASE WHEN NOT EXISTS( " +
                "SELECT id FROM RESERVAS WHERE ID_RECURSO = @idRecurso AND FECHA = @fecha AND Confirmada = 1 " +
                "AND dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @inicio, @duracion) = 1 " +
                "union " +
                "select RR.id FROM [RESERVAS_RECURRENTES] RR " +
                "left join HOLIDAYS H on H.Day = @fecha " +
                "WHERE ResourceId = @idRecurso  AND dbo.PERTENECEALDIA(@fecha, RR.DIAS, H.Day) = 1 " +
                "AND dbo.TURNO_RESERVA_CONFLICTO(@fecha, INICIO, DURACION, @fecha, @inicio, @duracion)= 1 " +
                ") THEN 1  ELSE 0  END)  END";
            Execute.Sql(query);
        }
        public override void Down()
        {
            Delete.Table("RESERVAS_RECURRENTES");
            string query = "ALTER FUNCTION[dbo].[TURNO_RESERVA_DISPONIBLE] " +
               "(@idRecurso SMALLINT, @fecha DATETIME, @inicio SMALLINT, @duracion SMALLINT) " +
               " RETURNS BIT AS  BEGIN RETURN(SELECT CASE WHEN NOT EXISTS( " +
               "SELECT id FROM RESERVAS WHERE ID_RECURSO = @idRecurso AND FECHA = @fecha AND Confirmada = 1 " +
               "AND dbo.TURNO_RESERVA_CONFLICTO(FECHA, INICIO, DURACION, @fecha, @inicio, @duracion) = 1 " +               
               ") THEN 1  ELSE 0  END)  END";
            Execute.Sql(query);
        }
    }
}