using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190809145800), Tags("Default")]
    public class DefaultDB_20190809_145800_SubBarrios : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SUBBARRIOS")
                .WithColumn("Id").AsInt16().Identity().PrimaryKey()
                .WithColumn("Nombre").AsString(50).NotNullable()
                .WithColumn("barrioId").AsInt32().NotNullable().ForeignKey("BARRIOS","ID");

            Alter.Table("Users").AddColumn("subBarrioId").AsInt16().ForeignKey("SUBBARRIOS", "ID").Nullable();

            Create.Table("SUBBARRIOS_RECURSOS")
                .WithColumn("subBarrioId").AsInt16().PrimaryKey().ForeignKey("SUBBARRIOS", "ID")
                .WithColumn("recursoId").AsInt16().PrimaryKey().ForeignKey("RESERVAS_RECURSOS", "ID");
        }
       

    }
}