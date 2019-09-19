using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190917114500), Tags("Default")]
    public class DefaultDB_20190917_114500_AddResourceDescription : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("RESERVAS_RECURSOS").AddColumn("Description").AsString(1000).Nullable();
        }
    }
}