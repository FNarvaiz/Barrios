using FluentMigrator;
using FluentMigrator.Infrastructure;
using System;

namespace Barrios.Migrations.DefaultDB
{
    [Migration(20190617223100), Tags("Default")]
    public class DefaultDB_20190617_223100_Tables : Migration
    {
        public override void Up()
        {
            Execute.Sql(" CREATE TABLE [dbo].[VECINOS]( " +
                " [REC_ID_USUARIO] [int] NOT NULL, " +
                " [REC_FECHA] [datetime] NOT NULL, " +
                " [ID] [smallint] IDENTITY(1,1) NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +

                " [UNIDAD][nvarchar](100) NOT NULL, " +
                " [EMAIL] [nvarchar](100) NOT NULL, " +
                " [CLAVE] [nvarchar](50) NOT NULL, " +
                " [HABILITADO][bit] NOT NULL, " +
                " [TELEFONOS] [nvarchar](100) NULL, " +
                " [NOTAS] [ntext] NULL, " +
                " [PERMISO_SERVICIOS] [bit] NOT NULL, " +
                " [ULTIMO_ACCESO] [datetime] NULL, " +
                " [CLAVE_TELEFONICA] [smallint] NULL, " +
             " CONSTRAINT [VECINOS_PK] PRIMARY KEY CLUSTERED  " +
            " ( " +

                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [VECINOS_UNIDAD_UK] UNIQUE NONCLUSTERED  " +
            " ( " +

                " [UNIDAD] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [VECINOS_USUARIO_UK] UNIQUE NONCLUSTERED  " +
            " (" +
                " [EMAIL] ASC, " +
                " [CLAVE] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[VECINOS_VISITANTES_FRECUENTES]( " +
               " [ID] [int] IDENTITY(1,1) NOT NULL, " +
               " [NOMBRE] [nvarchar](100) NOT NULL, " +
               " [DNI][nvarchar](100) NOT NULL, " +
               " [VEHICULO] [nvarchar](100) NULL, " +
               " [TIPO][nvarchar](100) NULL, " +
               " [Userid] [int] NOT NULL, " +
            " CONSTRAINT [VECINOS_VISITANTES_FRECUENTES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
              "  [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY] " +
            " ) ON[PRIMARY]");


            Execute.Sql(" CREATE TABLE [dbo].[VECINOS_EVENTOS]( " +
               " [ID] [int] IDENTITY(1,1) NOT NULL, " +
               " [NOMBRE] [nvarchar](100) NOT NULL, " +
               " [FECHA] [datetime] NOT NULL, " +

               " [LUGAR][nvarchar](100) NOT NULL," +
               " [Userid] [int] NOT NULL " +
                " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[VECINOS_EVENTOS_CONCURRENTES]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [ID_EVENTO] [int] NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [Userid] [int] NOT NULL, " +
                " CONSTRAINT [VECINOS_EVENTOS_CONCURRENTES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                "  [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]"); 


            Execute.Sql(" CREATE TABLE [dbo].[AVISOS]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [ID_CATEGORIA] [smallint] NOT NULL, " +
                " [CADUCIDAD] [date] NOT NULL, " +
                " [VIGENTE] [bit] NOT NULL, " +
                " [DESCRIPCION] [ntext] NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
                " [DateInsert] [datetime] NOT NULL, " +
                " [Imagen] [nvarchar](100) NULL, " +
             " CONSTRAINT [AVISOS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [AVISOS_NOMBRE_UK] UNIQUE NONCLUSTERED  " +
            " (" +
                " [NOMBRE] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");


            Execute.Sql(" CREATE TABLE [dbo].[BARRIOS]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [Nombre] [varchar](50) NOT NULL, " +
                " [LOGO][varchar](50) NULL, " +
                " [URL][varchar](50) NOT NULL, " +
                " [TELEFONOs] [varchar](100) NOT NULL, " +
                " [DIRECCION] [varchar](2000) NOT NULL, " +
                " [IsActive] [bit] NOT NULL, " +
            " PRIMARY KEY CLUSTERED  " +
            " ( " +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
           " ) ON[PRIMARY]");





            Execute.Sql(" CREATE TABLE [dbo].[COMISIONES]( " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [HABILITADA][bit] NOT NULL, " +
                " [SIGLA][nvarchar](100) NOT NULL, " +
                " [COLOR][nvarchar](100) NOT NULL, " +
                " [MAILS][varchar](200) NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [DateInsert] [datetime] NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
                " [barrioId][int] NULL, " +
             " CONSTRAINT [COMISIONES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[COMISIONES_INTEGRANTES]( " +
                " [ID_COMISION][smallint] NOT NULL, " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [DateInsert] [datetime] NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
             " CONSTRAINT [TIPOS_DATOS_LINEA_TIEMPO_PK_COMISIONES_INTEGRANTES] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID_COMISION] ASC, " +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");


            Execute.Sql(" CREATE TABLE [dbo].[CONTENIDOS]( " +
                " [REC_ID_USUARIO] [int] NOT NULL, " +
                " [REC_FECHA] [datetime] NOT NULL, " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [HTML][nvarchar](max) NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [CONTENIDOS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
               "  [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
           " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[DEBUG]( " +
                " [ID] [smallint] IDENTITY(1,1) NOT NULL, " +
                " [DATE] [datetime] NOT NULL, " +
                " [DATA][nvarchar](4000) NULL " +
            " ) ON[PRIMARY]");



            Execute.Sql(" CREATE TABLE [dbo].[ENCUESTAS]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [ID_CATEGORIA] [smallint] NOT NULL, " +
                " [FECHA_ALTA] [datetime] NOT NULL, " +
                " [FECHA_BAJA] [datetime] NULL, " +
                " [VIGENTE] [bit] NOT NULL, " +
                " [DESCRIPCION] [ntext] NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [DateInsert] [datetime] NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
             " CONSTRAINT [ENCUESTAS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [ENCUESTAS_NOMBRE_UK] UNIQUE NONCLUSTERED  " +
            " (" +
                " [NOMBRE] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[ENCUESTAS_VALORACIONES]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [ID_ENCUESTA] [int] NOT NULL, " +
                " [FECHA] [datetime] NOT NULL, " +
                " [VALORACION][smallint] NOT NULL, " +
                " [COMENTARIO] [nvarchar](140) NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [ENCUESTAS_VALORACIONES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");
            

            Execute.Sql(" CREATE TABLE [dbo].[INFORMES]( " +
               " [ID][smallint] NOT NULL, " +
               " [NOMBRE] [nvarchar](100) NOT NULL, " +
               " [VISIBLE] [bit] NOT NULL, " +
               " [RENDERING_FUNCTION] [varchar](50) NULL, " +
               " [ID_PERFIL_REQUERIDO] [smallint] NULL, " +
               " [FORMATO][nvarchar](50) NOT NULL, " +
               " [PARA_DESCARGA] [bit] NOT NULL, " +
            " CONSTRAINT [INFORMES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
               " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            
            Execute.Sql(" CREATE TABLE [dbo].[LINEA_TIEMPO]( " +
               " [ID] [int] IDENTITY(1,1) NOT NULL, " +
               " [NOMBRE] [nvarchar](100) NULL, " +
               " [ARCHIVO_FILENAME] [nvarchar](100) NULL, " +
               " [ARCHIVO_FILESIZE] [int] NULL, " +
               " [ARCHIVO_CONTENTTYPE] [varchar](200) NULL, " +
               " [ARCHIVO_BINARYDATA] [image] NULL, " +
              "  [APROBADO][bit] NOT NULL, " +
               " [MES] [smallint] NOT NULL, " +
               " [ANIO][smallint] NOT NULL, " +
               " [PERIODO]  AS (([dbo].[ZERO_PAD]([MES],(2))+'/')+CONVERT([nvarchar](4),[ANIO],(0))), " +
               " [PERIODO_FECHA]  AS (CONVERT([datetime],(CONVERT([nvarchar](4),[ANIO],(0))+[dbo].[ZERO_PAD]([MES],(2)))+'01',(0))), " +
               " [CONTENIDO_TEXTO] [nvarchar](max) NULL, " +
               " [Userid] [int] NOT NULL, " +
               " [id_categoria] [smallint] NOT NULL, " +
            " CONSTRAINT [LINEA_TIEMPO_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
              "  [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");


            Execute.Sql(" CREATE TABLE [dbo].[NOMBRES_VALORACIONES]( " +
                " [MIN] [decimal](5, 2) NULL, " +
                " [MAX] [decimal](5, 2) NULL, " +
                " [NOMBRE] [nvarchar](10) NULL " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[PROVEEDORES]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [ID_CATEGORIA] [smallint] NOT NULL, " +
                " [FECHA_ALTA] [datetime] NOT NULL, " +
                " [FECHA_BAJA] [datetime] NULL, " +
                " [VIGENTE] [bit] NOT NULL, " +
                " [DOMICILIO][nvarchar](100) NULL, " +
                " [TELEFONOS] [nvarchar](100) NULL, " +
                " [EMAIL] [nvarchar](100) NULL, " +
                " [NOTAS] [ntext] NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [DateInsert] [datetime] NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
             " CONSTRAINT [PROVEEDORES_PK] PRIMARY KEY CLUSTERED  " +
             " (" +
              "    [ID] ASC " +
             " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [PROVEEDORES_NOMBRE_UK] UNIQUE NONCLUSTERED  " +
             " (" +
                " [NOMBRE] ASC " +
             " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[PROVEEDORES_VALORACIONES]( " +
               " [ID] [int] IDENTITY(1,1) NOT NULL, " +
               " [ID_PROVEEDOR] [int] NOT NULL, " +
               " [FECHA] [datetime] NOT NULL, " +
               " [VALORACION][smallint] NOT NULL, " +
               " [Userid] [int] NOT NULL, " +
            " CONSTRAINT [PROVEEDORES_VALORACIONES_PK] PRIMARY KEY CLUSTERED  " +
            " ( " +
               " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");


            Execute.Sql(" CREATE TABLE [dbo].[Recursos-Barrios]( " +
               " [RecursoId] [smallint] NOT NULL, " +
               " [BarrioId][int] NOT NULL " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE[dbo].[CATEGORIAS]" +
                " (" +
               " [ID][smallint] NOT NULL, " +
               " [NOMBRE] [nvarchar] (100) NOT NULL, " +
                " [VIGENTE] [bit] NOT NULL, " +
                " [UserInsert] [int] NOT NULL, " +
                " [DateInsert] [datetime] NULL, " +
                " [UserUpdate] [int] NULL, " +
                " [DateUpdate] [datetime] NULL, " +
                " [Type] [int] NOT NULL, " +
                " [Mostrar] [bit] NULL, " +
             " CONSTRAINT[CATEGORIAS_AVISOS_PK] PRIMARY KEY CLUSTERED" +
            " (" +
               " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY]" +
            " ) ON[PRIMARY] ");

            Execute.Sql(" CREATE TABLE [dbo].[RESERVAS]( " +
               " [ID] [int] IDENTITY(1,1) NOT NULL, " +
               " [ID_RECURSO] [smallint] NOT NULL, " +
               " [ID_RESULTADO] [smallint] NULL, " +
               " [FECHA] [datetime] NOT NULL, " +
               " [INICIO][smallint] NOT NULL, " +
               " [DURACION][smallint] NOT NULL, " +
               " [OBSERVACIONES] [nvarchar](200) NULL, " +
               " [ID_VECINO_2] [int] NULL, " +
               " [ID_TIPO][int] NULL, " +
               " [FECHA_FIN]  AS ([dbo].[FECHA_FIN_TURNO]([FECHA],[INICIO],[DURACION])), " +
               " [ID_VECINO] [int] NOT NULL, " +
               " [DateInsert] [datetime] NULL, " +
               " [UserInsert] [int] NULL, " +
            " CONSTRAINT [RESERVAS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
               " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
            " CONSTRAINT [RESERVAS_FECHA_RECURSO_TURNO_UK] UNIQUE NONCLUSTERED  " +
            " (" +
               " [ID_RECURSO] ASC, " +
               " [FECHA] ASC, " +
               " [INICIO] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");



            Execute.Sql(" CREATE TABLE [dbo].[RESERVAS_RECURSOS]( " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](30) NULL, " +
                " [APERTURA] [smallint] NULL, " +
                " [CIERRE] [smallint] NULL, " +
                " [RESOLUCION] [smallint] NULL, " +
             " CONSTRAINT [RESERVAS_RECURSOS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
           " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[RESERVAS_RESULTADOS]( " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](30) NULL, " +
             " CONSTRAINT [RESERVAS_RESULTADOS_PK] PRIMARY KEY CLUSTERED  " +
            " ( " +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[RESERVAS_TIPOS]( " +
                " [ID_RECURSO] [smallint] NOT NULL, " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](30) NOT NULL, " +
                " [DURACION][smallint] NOT NULL, " +
                " [VIGENTE] [bit] NOT NULL, " +
                " [REQUIERE_VECINO_2] [bit] NULL, " +
             " CONSTRAINT [RESERVAS_TIPOS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID_RECURSO] ASC, " +
              "   [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[RESERVAS_TURNOS_ESPECIALES]( " +
                " [ID_RECURSO] [smallint] NOT NULL, " +
                " [ID][smallint] NOT NULL, " +
                " [INICIO][smallint] NULL, " +
                " [DURACION][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NULL, " +
                " [DIAS][varchar](8) NULL, " +
             " CONSTRAINT [RESERVAS_TURNOS_ESPECIALES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID_RECURSO] ASC, " +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[Users-Barrios]( " +
                " [UserId] [int] NOT NULL, " +
                " [BarrioId][int] NOT NULL " +
            " ) ON[PRIMARY]");


            Execute.Sql(" CREATE TABLE [dbo].[USUARIOS_ACTIVIDADES]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [FECHA] [datetime] NOT NULL, " +
                " [RECURSO] [nvarchar](100) NOT NULL, " +
                " [PARAMETROS] [nvarchar](100) NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [PK_USUARIOS_ACTIVIDADES] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[USUARIOS_INFORMES]( " +
                " [REC_ID_USUARIO] [int] NOT NULL, " +
                " [REC_FECHA] [datetime] NOT NULL, " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [ID_INFORME] [smallint] NOT NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [USUARIOS_INFORMES_PK] PRIMARY KEY CLUSTERED  " +
            " ( " +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[USUARIOS_NIVELES_PERMISOS]( " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](30) NOT NULL, " +
             " CONSTRAINT [USUARIOS_NIVELES_PERMISOS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
               "  [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [USUARIOS_NIVELES_PERMISOS_UK] UNIQUE NONCLUSTERED  " +
            " (" +
                " [NOMBRE] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[USUARIOS_PERFILES]( " +
                " [ID][smallint] NOT NULL, " +
                " [NOMBRE] [nvarchar](30) NOT NULL, " +
             " CONSTRAINT [NIVELES_PERFILES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY], " +
             " CONSTRAINT [NIVELES_PERFILES_UK] UNIQUE NONCLUSTERED  " +
            " (" +
                " [NOMBRE] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[USUARIOS_SESIONES]( " +
                " [FECHA_LOGIN] [datetime] NOT NULL, " +
                " [ID_SESION] [uniqueidentifier] NOT NULL, " +
                " [Userid] [int] NOT NULL " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[VECINOS_ACTIVIDADES]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [FECHA] [datetime] NOT NULL, " +
                " [ACTIVIDAD][nvarchar](100) NOT NULL, " +
                " [ACTIVIDAD_DETALLES] [nvarchar](100) NULL, " +
                " [IP][nvarchar](30) NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [VECINOS_ACTIVIDADES_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON[PRIMARY]");

            Execute.Sql(" CREATE TABLE [dbo].[VECINOS_MASCOTAS]( " +
                " [ID] [int] IDENTITY(1,1) NOT NULL, " +
                " [NOMBRE] [nvarchar](100) NOT NULL, " +
                " [ID_TIPO][smallint] NOT NULL, " +
                " [RAZA][nvarchar](100) NOT NULL, " +
                " [FOTO_CONTENTTYPE] [nvarchar](50) NULL, " +
                " [FOTO_BINARYDATA] [image] NULL, " +
                " [Userid] [int] NOT NULL, " +
             " CONSTRAINT [VECINOS_MASCOTAS_PK] PRIMARY KEY CLUSTERED  " +
            " (" +
                " [ID] ASC " +
            " )WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON[PRIMARY] " +
            " ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY] ");
            
        }
        public override void Down()
        {

            Execute.Sql("DROP TABLE[dbo].[VECINOS]");
            Execute.Sql("DROP TABLE[dbo].[VECINOS_VISITANTES_FRECUENTES]");
            Execute.Sql("DROP TABLE[dbo].[VECINOS_EVENTOS]");
            Execute.Sql("DROP TABLE[dbo].[VECINOS_EVENTOS_CONCURRENTES]");
            Execute.Sql("DROP TABLE[dbo].[AVISOS]");
            Execute.Sql("DROP TABLE[dbo].[BARRIOS]");
            Execute.Sql("DROP TABLE[dbo].[COMISIONES]");
            Execute.Sql("DROP TABLE[dbo].[COMISIONES_INTEGRANTES]");
            Execute.Sql("DROP TABLE[dbo].[CONTENIDOS]");
            Execute.Sql("DROP TABLE[dbo].[DEBUG]");
            Execute.Sql("DROP TABLE[dbo].[ENCUESTAS]");
            Execute.Sql("DROP TABLE[dbo].[ENCUESTAS_VALORACIONES]");
            Execute.Sql("DROP TABLE[dbo].[INFORMES]");
            Execute.Sql("DROP TABLE[dbo].[LINEA_TIEMPO]");
            Execute.Sql("DROP TABLE[dbo].[NOMBRES_VALORACIONES]");
            Execute.Sql("DROP TABLE[dbo].[PROVEEDORES]");
            Execute.Sql("DROP TABLE[dbo].[PROVEEDORES_VALORACIONES]");
            Execute.Sql("DROP TABLE[dbo].[Recursos-Barrios]");
            Execute.Sql("DROP TABLE[dbo].[RESERVAS]");
            Execute.Sql("DROP TABLE[dbo].[RESERVAS_RECURSOS]");
            Execute.Sql("DROP TABLE[dbo].[RESERVAS_RESULTADOS]");
            Execute.Sql("DROP TABLE[dbo].[RESERVAS_TIPOS]");
            Execute.Sql("DROP TABLE[dbo].[RESERVAS_TURNOS_ESPECIALES]");
            Execute.Sql("DROP TABLE[dbo].[USUARIOS_ACTIVIDADES]");
            Execute.Sql("DROP TABLE[dbo].[USUARIOS_INFORMES]");
            Execute.Sql("DROP TABLE[dbo].[USUARIOS_NIVELES_PERMISOS]");
            Execute.Sql("DROP TABLE[dbo].[USUARIOS_PERFILES]");
            Execute.Sql("DROP TABLE[dbo].[USUARIOS_SESIONES]");
            Execute.Sql("DROP TABLE[dbo].[VECINOS_ACTIVIDADES]");
            Execute.Sql("DROP TABLE[dbo].[VECINOS_MASCOTAS]");
            Execute.Sql("DROP TABLE[dbo].[CATEGORIAS]");
        }

    }
}