using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200107175400), Tags("Default")]
    public class DefaultDB_20200107_175400_UpdateBookingResources : Migration
    {
        public override void Up()
        {
             Alter.Table("[RESERVAS_RECURSOS]").AddColumn("Desde").AsInt16().Nullable();
            Alter.Table("[RESERVAS_RECURSOS]").AddColumn("Hasta").AsInt16().Nullable();
            Execute.Sql("update [RESERVAS_RECURSOS] set Desde=0,Hasta=180 where resolucion=0");
        }
        public override void Down()
        {
            Delete.Column("Desde").FromTable("[RESERVAS_RECURSOS]");
            Delete.Column("Hasta").FromTable("[RESERVAS_RECURSOS]");
        }
    }
}