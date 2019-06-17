using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190321090000), Tags("Default")]
    public class DefaultDB_20190321_090000_Locations : Migration
    {
        public override void Up()
        {
            Execute.Sql("CREATE TABLE TABLE_TEMP_FOREING_KEY("+
                 "DESCRIPTIONCOLUMN VARCHAR(200) not null" +
                 "); "+

                 "insert into TABLE_TEMP_FOREING_KEY "+
                "SELECT [Description] FROM  [VersionInfo];"

                );




            this.CreateTableWithId64("Location", "Id", s => s
                .WithColumn("ApplicationName").AsString(50).NotNullable()
                .WithColumn("Message").AsString(1000).Nullable()
                .WithColumn("DuplicateCount").AsInt32().NotNullable().WithDefaultValue(1));
        }
        public override void Down()
        {
            this.Delete.Table("Location");
            Execute.Sql("DROP TABLE TABLE_TEMP_FOREING_KEY");
        }

    }
}