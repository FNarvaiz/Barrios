using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190617231500), Tags("Default")]
    public class DefaultDB_20190617_231500_Views : Migration
    {
        public override void Up()
        {
            Execute.Sql("CREATE VIEW [dbo].[HOY] (  FECHA) AS " +
                " SELECT CAST(GETDATE() AS DATE)");
            Execute.Sql("CREATE VIEW [dbo].[VISITANTES_DEL_DIA] ( " +
              " ID, LOTE, FAMILIA, NOMBRE, DNI, VEHICULO, EVENTO, FECHA, LUGAR) "+
            " AS " +
              " SELECT 1, V.UNIDAD, V.NOMBRE, C.NOMBRE, C.DNI, C.VEHICULO, 'Visita frecuente',  " +
                " (SELECT FECHA FROM HOY), '' " +
              " FROM VECINOS V " +
              " JOIN VECINOS_VISITANTES_FRECUENTES C " +
                " ON V.ID = C.userid " +
              " UNION ALL " +
              " SELECT 1, V.UNIDAD, V.NOMBRE, C.NOMBRE, NULL, NULL, E.NOMBRE, E.FECHA, E.LUGAR " +
              " FROM VECINOS V " +
              " JOIN VECINOS_EVENTOS E " +
                " ON V.ID = E.userid " +
              " JOIN VECINOS_EVENTOS_CONCURRENTES C " +
                " ON E.userid = C.userid AND E.ID = C.ID_EVENTO ");
            
            

        }
        public override void Down()
        {

            Execute.Sql("DROP VIEW[dbo].[HOY]");
            Execute.Sql("DROP VIEW[dbo].[VISITANTES_DEL_DIA]");

            

        }

    }
}                                                                     