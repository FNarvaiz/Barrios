using FluentMigrator;
using System;

namespace Barrios.Migrations.OthersDB
{

    [Migration(20190321200000), Tags("All")]
    public class TestDB_20190321_200000_TestUser2 : AutoReversingMigration
    {
        public override void Up()
        {
            
            this.Create.Table("TestUser2").WithColumn("Date").AsDateTime().NotNullable();

        }
    }
}