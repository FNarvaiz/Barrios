using FluentMigrator;
using System;

namespace Barrios.Migrations.OthersDB
{

    [Migration(20190326145500), Tags("All","Custom")]
    public class TestDB_20190326_145500_Logs : AutoReversingMigration
    {
        public override void Up()
        {
            
            Create.Table("Logs")
                .WithColumn("Date").AsDateTime().NotNullable()
                .WithColumn("ID").AsInt32().Identity()
                    .PrimaryKey()
                .WithColumn("Description").AsString(200).NotNullable();

        }
    }
}