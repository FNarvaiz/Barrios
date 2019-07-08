using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190703142000), Tags("Default")]
    public class DefaultDB_20190703_142000_UpdateUserAndBarriosTable : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("Barrios")
                .AddColumn("PasswordMail").AsString(50).NotNullable().WithDefaultValue("");

            this.Alter.Table("Users")
                .AddColumn("Unit").AsString(50).NotNullable().WithDefaultValue("")
                .AddColumn("LastSession").AsDateTime().Nullable();

        }
    }
}