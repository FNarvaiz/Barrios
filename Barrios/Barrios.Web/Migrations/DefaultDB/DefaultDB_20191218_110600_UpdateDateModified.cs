using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20191218110600), Tags("Default")]
    public class DefaultDB_20191218_110600_UpdateDateModified : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Reservas").AlterColumn("DateUpdate").AsDateTime().Nullable();
        }
    }
}