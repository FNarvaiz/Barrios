using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190827225000), Tags("Default")]
    public class DefaultDB_20190827_225000_UpdateTables : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("VECINOS_MASCOTAS").AddColumn("Vacunas").AsString(255).Nullable();
            Alter.Table("RESERVAS_RECURSOS").AddColumn("emails").AsString(200).Nullable();
            Alter.Table("USERS").AddColumn("Email_Others").AsString(200).Nullable();
        }
    }
}