using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200217160800), Tags("Default")]
    public class DefaultDB_20200217_160800_UpdatePets : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Column("Foto").OnTable("[VECINOS_MASCOTAS]").AsString().Nullable();
        }
    }
}