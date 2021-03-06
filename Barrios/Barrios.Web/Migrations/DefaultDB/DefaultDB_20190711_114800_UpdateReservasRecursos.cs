﻿using FluentMigrator;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190711114800), Tags("Default")]
    public class DefaultDB_20190711_114800_UpdateReservasRecursos : Migration
    {
        public override void Up()
        {
            // RESERVAS RECURSOS
            Execute.Sql("ALTER TABLE [RESERVAS] DROP CONSTRAINT RESERVAS_RECURSO_FK");
            Execute.Sql("ALTER TABLE [RECURSOS-BARRIOS] DROP CONSTRAINT [FK__Recursos-__Recur__278EDA44]");
            
            Execute.Sql("ALTER TABLE[RESERVAS_RECURSOS] DROP CONSTRAINT RESERVAS_RECURSOS_RESOLUCION_DF");
            Execute.Sql("ALTER TABLE[RESERVAS_RECURSOS] DROP CONSTRAINT RESERVAS_RECURSOS_PK");
            Execute.Sql("TRUNCATE TABLE[RESERVAS_RECURSOS]");
            Execute.Sql("ALTER TABLE[RESERVAS_RECURSOS] DROP COLUMN ID");
            Execute.Sql("ALTER TABLE[RESERVAS_RECURSOS] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql("ALTER TABLE[RESERVAS_RECURSOS] ADD PRIMARY KEY(ID)");
            Execute.Sql("ALTER TABLE [dbo].[RESERVAS]  WITH CHECK ADD  CONSTRAINT [RESERVAS_RECURSO_FK] FOREIGN KEY([ID_RECURSO]) " +
                        " REFERENCES[dbo].[RESERVAS_RECURSOS]([ID]) " +
            " ON UPDATE CASCADE");
            Execute.Sql("ALTER TABLE [dbo].[RECURSOS-BARRIOS]  WITH CHECK ADD  CONSTRAINT [RESERVAS_RECURSO_FK2] FOREIGN KEY([RECURSOID]) " +
                       " REFERENCES[dbo].[RESERVAS_RECURSOS]([ID]) " +
           " ON UPDATE CASCADE");
            // RESERVAS TIPOS
            Execute.Sql(" ALTER TABLE[RESERVAS_TIPOS] DROP CONSTRAINT RESERVAS_TIPOS_VIGENTE_DF");
            Execute.Sql(" ALTER TABLE[RESERVAS_TIPOS] DROP CONSTRAINT RESERVAS_TIPOS_PK");
            Execute.Sql("TRUNCATE TABLE[RESERVAS_TIPOS]");
            Execute.Sql("ALTER TABLE[RESERVAS_TIPOS] DROP COLUMN ID");
            Execute.Sql(" ALTER TABLE[RESERVAS_TIPOS] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql("ALTER TABLE[RESERVAS_TIPOS] ADD PRIMARY KEY(ID)");
            // RESERVAS TURNOS ESPECIALES
            Execute.Sql(" ALTER TABLE[RESERVAS_TURNOS_ESPECIALES] DROP CONSTRAINT RESERVAS_TURNOS_DURACION_DF");
            Execute.Sql(" ALTER TABLE[RESERVAS_TURNOS_ESPECIALES] DROP CONSTRAINT RESERVAS_TURNOS_ESPECIALES_PK");
            Execute.Sql(" TRUNCATE TABLE[RESERVAS_TURNOS_ESPECIALES]");
            Execute.Sql(" ALTER TABLE[RESERVAS_TURNOS_ESPECIALES] DROP COLUMN ID");
            Execute.Sql(" ALTER TABLE[RESERVAS_TURNOS_ESPECIALES] add ID smallint IDENTITY(1,1) NOT NULL");
            Execute.Sql(" ALTER TABLE[RESERVAS_TURNOS_ESPECIALES] ADD PRIMARY KEY(ID)");

        }
        public override void Down()
        {
        }
    }
}