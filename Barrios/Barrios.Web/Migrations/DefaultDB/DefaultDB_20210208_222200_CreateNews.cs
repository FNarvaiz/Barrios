using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20210208222200), Tags("Default")]
    public class DefaultDB_20210208_222200_CreateNews : Migration
    {
        public override void Up()
        {
            Create.Table("NEWS").WithColumn("id").AsInt32().PrimaryKey().Identity()
               .WithColumn("NOMBRE").AsString(100).NotNullable()
               .WithColumn("DESCRIPCION").AsString().NotNullable()
               .WithColumn("Imagen").AsString(100).Nullable()
               .WithColumn("UserInsert").AsInt32().Nullable()
               .WithColumn("DateInsert").AsDateTime().NotNullable()
               .WithColumn("UserUpdate").AsInt32().Nullable()
               .WithColumn("DateUpdate").AsDateTime().Nullable()
               .WithColumn("VIGENTE").AsBoolean().NotNullable();

            Alter.Table("NEWS").AddColumn("BarrioId").AsInt32().NotNullable().WithDefaultValue(1)
              .ForeignKey("Barrios", "ID");
        }
        public override void Down()
        {

            Execute.Sql("DROP TABLE[dbo].[NEWS]");
        }
     }
}