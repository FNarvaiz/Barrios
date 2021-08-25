using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200601214800), Tags("Default")]
    public class DefaultDB_20200601_214800_UpdateBarrios : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("[Barrios]").AddColumn("VerUserEnReservas").AsBoolean().WithDefaultValue(1).NotNullable();
        }
    }
}