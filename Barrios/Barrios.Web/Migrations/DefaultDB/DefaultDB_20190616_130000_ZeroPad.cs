using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190616130000), Tags("Default")]
    public class DefaultDB_20190616_130000_ZeroPad : Migration
    {
        public override void Up()
        {
            
            Execute.Sql("CREATE FUNCTION [dbo].[ZERO_PAD] ( " +
                  " @value VARCHAR(100), " +
                  " @length SMALLINT " +
                ") " +
                " RETURNS VARCHAR(100) " +
                "AS " +
                " BEGIN " +
                  " RETURN(REPLICATE('0', @length - LEN(@value)) + @value) " +
                " END  ");

            Execute.Sql(" CREATE FUNCTION [dbo].[FECHA_FIN_TURNO] ( " +
                  " @fecha DATETIME, " +
                  " @inicio SMALLINT, " +
                  " @duracion SMALLINT " +
                " ) " +
                " RETURNS DATETIME " +
                " AS " +
                " BEGIN " +
                  " RETURN(DATEADD(MINUTE, @inicio + @duracion, @fecha)) " +
                " END");





        }
        public override void Down()
        {
            
            Execute.Sql("DROP FUNCTION[dbo].[ZERO_PAD]");

            Execute.Sql("DROP FUNCTION[dbo].[FECHA_FIN_TURNO]");
        }

    }
}