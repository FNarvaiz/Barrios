using FluentMigrator;
using FluentMigrator.Infrastructure;
using System.Text;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20200222004800), Tags("Default")]
    public class DefaultDB_20200222_004800_UpdateHistory : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Column("Mostrar").OnTable("[LINEA_TIEMPO]").AsBoolean().Nullable().WithDefaultValue(true);
        }
    }
}