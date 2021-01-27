using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20201020001500), Tags("Default")]
    public class DefaultDB_20201020_001500_UpdateUsersBarrios : Migration
    {
        public override void Up()
        {
            Alter.Table("Users-barrios").AddColumn("LimitDate").AsDate().Nullable()
                .AddColumn("Owner").AsBoolean().NotNullable().WithDefaultValue(true);

           string  query= "UPDATE UB SET LimitDate=U.TenantLimitDate ,UB.Owner=U.Owner " +
                "from [Users-barrios] UB inner join Users U on U.UserId=UB.UserId " ;
            Execute.Sql(query);

            Delete.Column("TenantLimitDate").FromTable("Users");
            Delete.UniqueConstraint("DF_[Users]_Owner").FromTable("Users");
            Delete.Column("Owner").FromTable("Users");
        }
        public override void Down()
        {
            Alter.Table("Users").AddColumn("TenantLimitDate").AsDate().Nullable()
               .AddColumn("Owner").AsBoolean().NotNullable().WithDefaultValue(true);

            string query = "UPDATE U SET TenantLimitDate=UB.LimitDate ,U.Owner=UB.Owner " +
               "from [Users-barrios] UB inner join Users U on U.UserId=UB.UserId ";
            Execute.Sql(query);

            Delete.Column("LimitDate").FromTable("Users-barrios");
            Delete.Column("Owner").FromTable("Users-barrios");
        }
    }
}