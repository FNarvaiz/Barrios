using FluentMigrator;
using FluentMigrator.Infrastructure;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20201011014800), Tags("Default")]
    public class DefaultDB_20201011_014800_CreateReservasRecurrentes : Migration
    {
        public override void Up()
        {
            Create.Table("RESERVAS_RECURRENTES").WithColumn("id").AsInt32().PrimaryKey().Identity()
                .WithColumn("Dias").AsString(8).NotNullable()
                .WithColumn("Observaciones").AsString(150).NotNullable()
                .WithColumn("ResourceId").AsInt16().ForeignKey("[RESERVAS_RECURSOS]", "id").NotNullable()
                .WithColumn("CreateUserId").AsInt32().ForeignKey("Users", "UserId").NotNullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable()
                .WithColumn("UpdatetionUserId").AsInt32().ForeignKey("Users", "UserId").NotNullable()
                .WithColumn("UpdateDate").AsDateTime().NotNullable()
                .WithColumn("Inicio").AsInt16().NotNullable()
                .WithColumn("Duracion").AsInt16().NotNullable();

        }
        public override void Down()
        {
            Delete.Table("RESERVAS_RECURRENTES");
        }
    }
}