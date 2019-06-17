using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190322230000), Tags("Default")]
    public class DefaultDB_20190322_230000_UserRec : Migration
    {
        public override void Up()
        {
            Alter.Table("Avisos")
                .AddColumn("UserInsert").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_UserAvisos_UserInsert", "Users", "UserId")
                .AddColumn("UserUpdate").AsInt32().Nullable()
                    .ForeignKey("FK_UserAvisos_UserUpdate", "Users", "UserId")
                .AddColumn("DateUpdate").AsDateTime().Nullable()
                .AddColumn("DateInsert").AsDateTime().NotNullable().WithDefaultValue(DateTime.Today)
                .AddColumn("Imagen").AsString(100).Nullable();
            Delete.Column("ARCHIVO_CONTENTTYPE").Column("ARCHIVO_BINARYDATA").FromTable("AVISOS");
        }
        public override void Down()
        {
            Delete.ForeignKey("FK_UserAvisos_UserInsert").OnTable("Avisos");
            Delete.ForeignKey("FK_UserAvisos_UserUpdate").OnTable("Avisos");
            Delete.Column("UserInsert")
                .Column("UserUpdate")
                .Column("DateUpdate")
                .Column("DateInsert")
                .Column("Imagen")
                    .FromTable("Avisos");
            Alter.Table("Avisos")
                .AddColumn("ARCHIVO_CONTENTTYPE").AsString(50)
                .AddColumn("ARCHIVO_BINARYDATA").AsBinary();

            /*
            Delete.Column("UserUpdate").FromTable("Avisos");
            Delete.Column("DateUpdate").FromTable("Avisos");
            Delete.Column("DateInsert").FromTable("Avisos");
            */
        }

    }
}