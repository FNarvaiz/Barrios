using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200302101300), Tags("Default")]
    public class DefaultDB_20200302_101300_UpdateResourceBody : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Column("MailBody").OnTable("[RESERVAS_RECURSOS]").AsString(6000).Nullable();
        }
    }
}