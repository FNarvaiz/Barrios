using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190820131700), Tags("Default")]
    public class DefaultDB_20190820_131700_HolidaysTable : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("HOLIDAYS")
                .WithColumn("Id").AsInt32().NotNullable().Identity().PrimaryKey()
                .WithColumn("Reason").AsString(100).NotNullable()
                .WithColumn("Type").AsInt16().NotNullable()
                .WithColumn("Day").AsDate().NotNullable()
                .WithColumn("ApiId").AsString(100).Nullable();
        }
    }
}