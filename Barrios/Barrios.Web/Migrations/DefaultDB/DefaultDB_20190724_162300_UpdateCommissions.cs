using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190724162300), Tags("Default")]
    public class DefaultDB_20190724_162300__UpdateCommissionss : Migration
    {
        public override void Up()
        {
            
            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] DROP CONSTRAINT TIPOS_DATOS_LINEA_TIEMPO_PK_COMISIONES_INTEGRANTES");
            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] DROP COLUMN ID");
            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] ADD PRIMARY KEY(ID)");

            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] DROP CONSTRAINT COMISIONES_INTEGRANTES_COMISION_FK");
            Execute.Sql("ALTER TABLE[COMISIONES_INTEGRANTES] DROP COLUMN [ID_COMISION]");
            Execute.Sql("ALTER TABLE[COMISIONES] DROP CONSTRAINT COMISIONES_PK");
            Execute.Sql("ALTER TABLE[COMISIONES] DROP COLUMN ID");
            Execute.Sql("ALTER TABLE[COMISIONES] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql("ALTER TABLE[COMISIONES] ADD PRIMARY KEY(ID)");

            Delete.Column("[COLOR]")
               .Column("[SIGLA]")
               .FromTable("[COMISIONES]");

            Alter.Table("[COMISIONES_INTEGRANTES]").AddColumn("[ID_COMISION]").AsInt16().ForeignKey("[COMISIONES]", "ID");
        }
        public override void Down()
        {
        }
    }
}