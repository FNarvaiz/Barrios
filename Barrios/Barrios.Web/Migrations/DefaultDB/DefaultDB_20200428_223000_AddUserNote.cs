using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200428223000), Tags("Default")]
    public class DefaultDB_20200428_223000_AddUserNote : Migration
    {
        public override void Up()
        {
            Alter.Table("Users-barrios").AddColumn("Note").AsString(1000).Nullable()
                .AddColumn("Units").AsString(100).NotNullable().WithDefaultValue("1");
            Execute.Sql("UPDATE UB set Units = U.Unit from [Users-Barrios] UB inner join Users U on UB.UserId = U.UserId ");
            
        }
        public override void Down()
        {
            Delete.Column("Note").Column("Units").FromTable("Users-barrios");
        }
    }
}