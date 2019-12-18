using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20191204115800), Tags("Default")]
    public class DefaultDB_20191204_115800_UpdateConfirmBooking : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Reservas").AddColumn("Confirmada").AsBoolean().WithDefaultValue(1)
                .AddColumn("DateUpdate").AsDate().Nullable()
                .AddColumn("UserUpdate").AsInt32().Nullable();
        }
    }
}