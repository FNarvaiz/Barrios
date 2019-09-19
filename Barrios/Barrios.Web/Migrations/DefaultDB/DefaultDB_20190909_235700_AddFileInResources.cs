using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190909235700), Tags("Default")]
    public class DefaultDB_20190909_235700_AddFileInResources : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("RESERVAS_RECURSOS").AddColumn("Regulation").AsString(255).Nullable();
        }
    }
}