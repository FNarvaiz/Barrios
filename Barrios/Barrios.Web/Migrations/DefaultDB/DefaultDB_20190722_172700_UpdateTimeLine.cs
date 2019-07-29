using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190722172700), Tags("Default")]
    public class DefaultDB_20190722_172700_UpdateTimeLine : Migration
    {
        public override void Up()
        {
            Delete.Column("[ARCHIVO_FILESIZE]")
                .Column("[ARCHIVO_CONTENTTYPE]")
                .Column("[ARCHIVO_BINARYDATA]")
                .Column("[PERIODO_FECHA]")
                .Column("[PERIODO]")
                .Column("[MES]")
                .Column("[ANIO]")
                .FromTable("[LINEA_TIEMPO]");
            Alter.Table("[LINEA_TIEMPO]").AddColumn("[PERIODO_FECHA]").AsDate()
                .AddColumn("BarrioId").AsInt32().ForeignKey("BARRIOS", "ID");
            Alter.Table("ENCUESTAS").AddColumn("BarrioId").AsInt32().ForeignKey("BARRIOS", "ID");
            Alter.Table("PROVEEDORES").AddColumn("BarrioId").AsInt32().ForeignKey("BARRIOS", "ID");
            Alter.Table("AVISOS").AddColumn("BarrioId").AsInt32().ForeignKey("BARRIOS", "ID");
           
        }
        public override void Down()
        {
        }
    }
}