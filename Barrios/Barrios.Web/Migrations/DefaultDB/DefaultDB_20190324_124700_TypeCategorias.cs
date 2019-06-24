using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190324124700), Tags("Default")]
    public class DefaultDB_20190324_124700_TypeCategorias : Migration
    { 
        public override void Up()
        {
            /*  Execute.Sql("update categorias set type=0, dateInsert= NOW()  ");
            //Update.Table("Categorias").Set(" Type = 1 ").AllRows();
            Alter.Column("Type").OnTable("Categorias").AsInt32().NotNullable().WithDefaultValue(1);
            */
        }
        public override void Down()
        {
            //Alter.Column("Type").OnTable("Categorias").AsInt32();

        }

    }
}