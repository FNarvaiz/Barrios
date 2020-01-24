using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200108181100), Tags("Default")]
    public class DefaultDB_20200108_181100_CreateNotes : Migration
    {
        public override void Up()
        {
            Create.Table("NOTES").WithColumn("id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Message").AsString(1000).NotNullable()
                .WithColumn("DestinationUserId").AsInt32().ForeignKey("Users", "UserId").NotNullable()
                .WithColumn("CreateUserId").AsInt32().ForeignKey("Users", "UserId").NotNullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("UpdatetionUserId").AsInt32().ForeignKey("Users", "UserId").NotNullable()
                .WithColumn("UpdateDate").AsDateTime().NotNullable()
                .WithColumn("ShowUser").AsBoolean().NotNullable();

            Alter.Table("Users").AddColumn("AppHoldId").AsInt32().Nullable()
                .AddColumn("Phone").AsString().Nullable();
        }
        public override void Down()
        {
            Delete.Table("NOTES");
            Delete.Column("AppHoldId").Column("Phone").FromTable("Users");
        }
    }
}