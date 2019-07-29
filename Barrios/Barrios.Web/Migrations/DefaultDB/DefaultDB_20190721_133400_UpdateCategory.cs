using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190721133400), Tags("Default")]
    public class DefaultDB_20190721_133400_UpdateCategory : Migration
    {
        public override void Up()
        {
            // CATEGORY ID

            Execute.Sql("ALTER TABLE[AVISOS] DROP CONSTRAINT AVISOS_ID_CATEGORIA_FK");
            Execute.Sql("ALTER TABLE[categorias] DROP CONSTRAINT CATEGORIAS_AVISOS_PK");
            Execute.Sql("TRUNCATE TABLE[categorias]");
            Execute.Sql("ALTER TABLE[categorias] DROP COLUMN ID");
            Execute.Sql("ALTER TABLE[categorias] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql("ALTER TABLE[categorias] ADD PRIMARY KEY(ID)");

            Delete.Column("[ARCHIVO_FILESIZE]")
                .Column("[ARCHIVO_CONTENTTYPE]")
                .Column("[ARCHIVO_BINARYDATA]")
                .Column("[PERIODO_FECHA]")
                .Column("[PERIODO]")
                .Column("[MES]")
                .Column("[ANIO]")
                .FromTable("[LINEA_TIEMPO]");

            Alter.Table("[LINEA_TIEMPO]").AddColumn("[PERIODO_FECHA]").AsDate();
            
    }
        public override void Down()
        {
        }
    }
}