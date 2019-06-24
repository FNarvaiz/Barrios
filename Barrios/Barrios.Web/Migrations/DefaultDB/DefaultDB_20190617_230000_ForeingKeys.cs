using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190617230000), Tags("Default")]
    public class DefaultDB_20190617_230000_ForeingKeys : Migration
    {
        public override void Up()
        {
            Execute.Sql("ALTER TABLE [dbo].[AVISOS] ADD  DEFAULT (dateadd(month,(1),getdate())) FOR [CADUCIDAD]");
            Execute.Sql("ALTER TABLE [dbo].[AVISOS] ADD  CONSTRAINT [AVISOS_VIGENTE_DF]  DEFAULT ((1)) FOR [VIGENTE]");
            Execute.Sql("ALTER TABLE [dbo].[AVISOS] ADD  CONSTRAINT [DF_Avisos_UserInsert]  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[AVISOS] ADD  CONSTRAINT [DF_Avisos_DateInsert]  DEFAULT ('2019-03-23T00:00:00') FOR [DateInsert]");
            Execute.Sql("ALTER TABLE [dbo].[CATEGORIAS] ADD  CONSTRAINT [CATEGORIAS_AVISOS_VIGENTE_DF]  DEFAULT ((1)) FOR [VIGENTE]");
            Execute.Sql("ALTER TABLE [dbo].[CATEGORIAS] ADD  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[CATEGORIAS] ADD  CONSTRAINT [DF_Categorias_Type]  DEFAULT ((1)) FOR [Type]");
            Execute.Sql("ALTER TABLE [dbo].[COMISIONES] ADD  CONSTRAINT [COMISIONES_HABILITADA_DF]  DEFAULT ((1)) FOR [HABILITADA]");
            Execute.Sql("ALTER TABLE [dbo].[COMISIONES] ADD  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[COMISIONES_INTEGRANTES] ADD  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[CONTENIDOS] ADD  CONSTRAINT [CONTENIDOS_REC_FECHA_DF]  DEFAULT (getdate()) FOR [REC_FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[CONTENIDOS] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[DEBUG] ADD  CONSTRAINT [DEBUG_DATE_DF]  DEFAULT (getdate()) FOR [DATE]");
            Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS] ADD  CONSTRAINT [PROPUESTAS_FECHA_ALTA_DF]  DEFAULT (getdate()) FOR [FECHA_ALTA]");
            Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS] ADD  CONSTRAINT [PROPUESTAS_VIGENTE_DF]  DEFAULT ((1)) FOR [VIGENTE]");
            Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS] ADD  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS_VALORACIONES] ADD  CONSTRAINT [PROPUESTAS_VALORACIONES_REC_FECHA_DF]  DEFAULT (getdate()) FOR [FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[INFORMES] ADD  CONSTRAINT [INFORMES_VISIBLE_DF]  DEFAULT ((1)) FOR [VISIBLE]");
            Execute.Sql("ALTER TABLE [dbo].[INFORMES] ADD  CONSTRAINT [INFORMES_FORMATO_DF]  DEFAULT ('html') FOR [FORMATO]");
            Execute.Sql("ALTER TABLE [dbo].[INFORMES] ADD  CONSTRAINT [INFORMES_PARA_DESCARGA_DF]  DEFAULT ((0)) FOR [PARA_DESCARGA]");
            Execute.Sql("ALTER TABLE [dbo].[LINEA_TIEMPO] ADD  CONSTRAINT [LINEA_TIEMPO_APROBADO_DF]  DEFAULT ((0)) FOR [APROBADO]");
            Execute.Sql("ALTER TABLE [dbo].[LINEA_TIEMPO] ADD  DEFAULT ((1)) FOR [id_categoria]");
            Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES] ADD  CONSTRAINT [PROVEEDOR_FECHA_ALTA_DF]  DEFAULT (getdate()) FOR [FECHA_ALTA]");
            Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES] ADD  CONSTRAINT [PROVEEDOR_VIGENTE_DF]  DEFAULT ((1)) FOR [VIGENTE]");
            Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES] ADD  DEFAULT ((1)) FOR [UserInsert]");
            Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES_VALORACIONES] ADD  CONSTRAINT [PROVEEDORES_VALORACIONES_REC_FECHA_DF]  DEFAULT (getdate()) FOR [FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES_VALORACIONES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[RESERVAS] ADD  DEFAULT ((1)) FOR [ID_VECINO]");
            Execute.Sql("ALTER TABLE [dbo].[RESERVAS_RECURSOS] ADD  CONSTRAINT [RESERVAS_RECURSOS_RESOLUCION_DF]  DEFAULT ((0)) FOR [RESOLUCION]");
            Execute.Sql("ALTER TABLE [dbo].[RESERVAS_TIPOS] ADD  CONSTRAINT [RESERVAS_TIPOS_VIGENTE_DF]  DEFAULT ((1)) FOR [VIGENTE]");
            Execute.Sql("ALTER TABLE [dbo].[RESERVAS_TURNOS_ESPECIALES] ADD  CONSTRAINT [RESERVAS_TURNOS_DURACION_DF]  DEFAULT ((0)) FOR [DURACION]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_ACTIVIDADES] ADD  CONSTRAINT [DF_USUARIOS_ACTIVIDADES_FECHA]  DEFAULT (getdate()) FOR [FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_ACTIVIDADES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_INFORMES] ADD  CONSTRAINT [dbo.USUARIOS_INFORMES_REC_FECHA_DF]  DEFAULT (getdate()) FOR [REC_FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_INFORMES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_SESIONES] ADD  CONSTRAINT [USUARIO_FECHA_SESION]  DEFAULT (getdate()) FOR [FECHA_LOGIN]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_SESIONES] ADD  CONSTRAINT [USUARIO_ID_SESION]  DEFAULT (newid()) FOR [ID_SESION]");
            Execute.Sql("ALTER TABLE [dbo].[USUARIOS_SESIONES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS] ADD  CONSTRAINT [VECINOS_REC_FECHA_DF]  DEFAULT (getdate()) FOR [REC_FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS] ADD  CONSTRAINT [VECINOS_HABILITADO_DF]  DEFAULT ((1)) FOR [HABILITADO]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS] ADD  CONSTRAINT [VECINOS_PERMISO_SERVICIOS_DF]  DEFAULT ((1)) FOR [PERMISO_SERVICIOS]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_ACTIVIDADES] ADD  CONSTRAINT [VECINOS_ACTIVIDADES_FECHA_DF]  DEFAULT (getdate()) FOR [FECHA]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_ACTIVIDADES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_EVENTOS] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_EVENTOS_CONCURRENTES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_MASCOTAS] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[VECINOS_VISITANTES_FRECUENTES] ADD  DEFAULT ((1)) FOR [Userid]");
            Execute.Sql("ALTER TABLE [dbo].[AVISOS]  WITH CHECK ADD  CONSTRAINT [AVISOS_ID_CATEGORIA_FK] FOREIGN KEY([ID_CATEGORIA]) " +
            " REFERENCES[dbo].[CATEGORIAS]([ID]) " +
            " ON UPDATE CASCADE ");
             Execute.Sql("ALTER TABLE [dbo].[AVISOS] CHECK CONSTRAINT [AVISOS_ID_CATEGORIA_FK]");
                        Execute.Sql("ALTER TABLE [dbo].[AVISOS]  WITH CHECK ADD  CONSTRAINT [FK_UserAvisos_UserInsert] FOREIGN KEY([UserInsert]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[AVISOS] CHECK CONSTRAINT [FK_UserAvisos_UserInsert]");
                        Execute.Sql("ALTER TABLE [dbo].[AVISOS]  WITH CHECK ADD  CONSTRAINT [FK_UserAvisos_UserUpdate] FOREIGN KEY([UserUpdate]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[AVISOS] CHECK CONSTRAINT [FK_UserAvisos_UserUpdate]");
                        Execute.Sql("ALTER TABLE [dbo].[CATEGORIAS]  WITH CHECK ADD FOREIGN KEY([UserInsert]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[CATEGORIAS]  WITH CHECK ADD FOREIGN KEY([UserUpdate]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES]  WITH CHECK ADD FOREIGN KEY([barrioId]) "+
                        " REFERENCES[dbo].[BARRIOS]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES]  WITH CHECK ADD FOREIGN KEY([UserInsert]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES]  WITH CHECK ADD FOREIGN KEY([UserUpdate]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES_INTEGRANTES]  WITH CHECK ADD  CONSTRAINT [COMISIONES_INTEGRANTES_COMISION_FK] FOREIGN KEY([ID_COMISION]) "+
                     "   REFERENCES[dbo].[COMISIONES]([ID]) " +
            " ON UPDATE CASCADE");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES_INTEGRANTES] CHECK CONSTRAINT [COMISIONES_INTEGRANTES_COMISION_FK]");
                        Execute.Sql("ALTER TABLE [dbo].[COMISIONES_INTEGRANTES]  WITH CHECK ADD FOREIGN KEY([UserInsert])"+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[COMISIONES_INTEGRANTES]  WITH CHECK ADD FOREIGN KEY([UserUpdate])"+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[CONTENIDOS]  WITH CHECK ADD FOREIGN KEY([Userid]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
                        Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS]  WITH CHECK ADD FOREIGN KEY([UserInsert]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS]  WITH CHECK ADD FOREIGN KEY([UserUpdate])"+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS_VALORACIONES]  WITH CHECK ADD  CONSTRAINT [ENCUESTAS_VALORACIONES_PROPUESTA_FK] FOREIGN KEY([ID_ENCUESTA])"+
                        " REFERENCES[dbo].[ENCUESTAS]([ID]) " +
            " ON UPDATE CASCADE "+
            " ON DELETE CASCADE ");
             Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS_VALORACIONES] CHECK CONSTRAINT [ENCUESTAS_VALORACIONES_PROPUESTA_FK]");
                        Execute.Sql("ALTER TABLE [dbo].[ENCUESTAS_VALORACIONES]  WITH CHECK ADD FOREIGN KEY([Userid]) "+
                        "REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[LINEA_TIEMPO]  WITH CHECK ADD FOREIGN KEY([Userid]) "+
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES]  WITH CHECK ADD FOREIGN KEY([UserInsert]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES]  WITH CHECK ADD FOREIGN KEY([UserUpdate]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES_VALORACIONES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES_VALORACIONES]  WITH CHECK ADD  CONSTRAINT [PROVEEDORES_VALORACIONES_PROVEEDOR_FK] FOREIGN KEY([ID_PROVEEDOR]) " +
                        " REFERENCES[dbo].[PROVEEDORES]([ID]) " +
            " ON UPDATE CASCADE " +
            " ON DELETE CASCADE");
             Execute.Sql("ALTER TABLE [dbo].[PROVEEDORES_VALORACIONES] CHECK CONSTRAINT [PROVEEDORES_VALORACIONES_PROVEEDOR_FK]");
                        Execute.Sql("ALTER TABLE [dbo].[Recursos-Barrios]  WITH CHECK ADD FOREIGN KEY([BarrioId]) " +
                        " REFERENCES[dbo].[BARRIOS]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[Recursos-Barrios]  WITH CHECK ADD FOREIGN KEY([RecursoId]) " +
                        " REFERENCES[dbo].[RESERVAS_RECURSOS]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[RESERVAS]  WITH CHECK ADD FOREIGN KEY([ID_VECINO]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[RESERVAS]  WITH CHECK ADD  CONSTRAINT [RESERVAS_RECURSO_FK] FOREIGN KEY([ID_RECURSO]) " +
                        " REFERENCES[dbo].[RESERVAS_RECURSOS]([ID]) " +
            " ON UPDATE CASCADE");
             Execute.Sql("ALTER TABLE [dbo].[RESERVAS] CHECK CONSTRAINT [RESERVAS_RECURSO_FK]");
                       
                        Execute.Sql("ALTER TABLE [dbo].[Users-Barrios]  WITH CHECK ADD FOREIGN KEY([BarrioId]) " +
                       "  REFERENCES[dbo].[BARRIOS]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[Users-Barrios]  WITH CHECK ADD FOREIGN KEY([BarrioId]) " +
                       " REFERENCES[dbo].[BARRIOS]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[Users-Barrios]  WITH CHECK ADD FOREIGN KEY([UserId]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
            
             Execute.Sql("ALTER TABLE [dbo].[USUARIOS_INFORMES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                      "   REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[USUARIOS_INFORMES]  WITH CHECK ADD  CONSTRAINT [USUARIOS_INFORMES_INFORME_FK] FOREIGN KEY([ID_INFORME]) " +
                       "  REFERENCES[dbo].[INFORMES]([ID])");
             Execute.Sql("ALTER TABLE [dbo].[USUARIOS_INFORMES] CHECK CONSTRAINT [USUARIOS_INFORMES_INFORME_FK]");
             Execute.Sql("ALTER TABLE [dbo].[USUARIOS_SESIONES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                       "  REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[VECINOS_ACTIVIDADES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                       "  REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[VECINOS_EVENTOS]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                        " REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[VECINOS_EVENTOS_CONCURRENTES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                       "  REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[VECINOS_MASCOTAS]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                       "  REFERENCES[dbo].[Users]([UserId])");
             Execute.Sql("ALTER TABLE [dbo].[VECINOS_VISITANTES_FRECUENTES]  WITH CHECK ADD FOREIGN KEY([Userid]) " +
                        " REFERENCES[dbo].[Users]([UserId])");


           /* Alter.Table("Avisos")
                .AddColumn("UserInsert").AsInt32().NotNullable().WithDefaultValue(1)
                    .ForeignKey("FK_UserAvisos_UserInsert", "Users", "UserId")
                .AddColumn("UserUpdate").AsInt32().Nullable()
                    .ForeignKey("FK_UserAvisos_UserUpdate", "Users", "UserId")
                .AddColumn("DateUpdate").AsDateTime().Nullable()
                .AddColumn("DateInsert").AsDateTime().NotNullable().WithDefaultValue(DateTime.Today)
                .AddColumn("Imagen").AsString(100).Nullable();
            Delete.Column("ARCHIVO_CONTENTTYPE").Column("ARCHIVO_BINARYDATA").FromTable("AVISOS");*/
        }
        public override void Down()
        {
            /* Delete.ForeignKey("FK_UserAvisos_UserInsert").OnTable("Avisos");
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