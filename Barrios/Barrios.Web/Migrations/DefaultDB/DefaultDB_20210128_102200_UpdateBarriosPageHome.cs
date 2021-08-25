using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20210128102200), Tags("Default")]
    public class DefaultDB_20210128_102200_UpdateBarriosPageHome : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("[Barrios]").AddColumn("PageHome").AsString(200).WithDefaultValue("Dashboard/Reservas").NotNullable();
        }
    }
}