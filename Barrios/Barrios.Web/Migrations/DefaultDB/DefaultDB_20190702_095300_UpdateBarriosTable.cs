using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190702095300), Tags("Default")]
    public class DefaultDB_20190702_095300_UpdateBarriosTable : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Barrios").AddColumn("LargeDisplayName").AsString(150).Nullable()
                .AddColumn("ShortDisplayName").AsString(150).Nullable()
                .AddColumn("Mail").AsString(50).NotNullable().WithDefaultValue("mail@site.com");
                
        }
    }
}