using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200822013000), Tags("Default")]
    public class DefaultDB_20200822_013000_AddDaysInReservasTipos : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("[RESERVAS_RECURSOS]").AddColumn("DIAS").AsString(8).WithDefaultValue("01234567").NotNullable();
        }
    }
}