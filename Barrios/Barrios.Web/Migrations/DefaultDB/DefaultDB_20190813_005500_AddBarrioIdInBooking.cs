using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190813005500), Tags("Default")]
    public class DefaultDB_20190813_005500_AddBarrioIdInBooking : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("RESERVAS").AddColumn("BarrioId").AsInt32().NotNullable().WithDefaultValue(1)
                .ForeignKey("Barrios","ID");
        }
       

    }
}