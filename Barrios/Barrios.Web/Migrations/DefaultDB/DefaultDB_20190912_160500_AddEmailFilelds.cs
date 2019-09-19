using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190912160500), Tags("Default")]
    public class DefaultDB_20190912_160500_AddEmailFilelds : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("BARRIOS").AddColumn("Emails").AsString(255).Nullable();
            Alter.Table("RESERVAS_RECURSOS").AddColumn("MailBody").AsString(1000).Nullable();
        }
    }
}