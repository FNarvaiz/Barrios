using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200113150100), Tags("Default")]
    public class DefaultDB_20200113_150100_ResourceHoldId : Migration
    {
        public override void Up()
        {
            Alter.Table("[RESERVAS_RECURSOS]")
                .AddColumn("AppHoldId").AsInt32().Nullable()
                .AddColumn("NeedComment").AsBoolean().NotNullable().WithDefaultValue(false);
        }
        public override void Down()
        {
            Delete.Column("AppHoldId").FromTable("[RESERVAS_RECURSOS]");
            Delete.Column("NeedComment").FromTable("[RESERVAS_RECURSOS]");
        }
    }
}