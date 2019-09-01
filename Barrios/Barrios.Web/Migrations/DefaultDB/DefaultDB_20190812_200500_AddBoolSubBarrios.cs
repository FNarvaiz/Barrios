using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190812200500), Tags("Default")]
    public class DefaultDB_20190812_200500_AddBoolSubBarrios : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("BARRIOS").AddColumn("UseSubBarrios").AsBoolean().NotNullable().WithDefaultValue(false);
        }
       

    }
}