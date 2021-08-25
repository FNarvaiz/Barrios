using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20210317224500), Tags("Default")]
    public class DefaultDB_20210317_224500_LimitBookingForHour : Migration
    {
        public override void Up()
        {
            Alter.Table("RESERVAS_RECURSOS").AddColumn("LimitHour").AsInt32().NotNullable().WithDefaultValue(24);
            Execute.Sql("UPDATE [RESERVAS_RECURSOS] SET limithour=hasta*24 where hasta is not null");
        }
        public override void Down()
        {
            Delete.Column("LimitHour").FromTable("RESERVAS_RECURSOS");
        }
     }
}