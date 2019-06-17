
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[LINEA_TIEMPO]")]
    [DisplayName("Linea Tiempo"), InstanceName("Linea Tiempo")]
    [ReadPermission("User:LineaDeTiempo")]
    [ModifyPermission("User:LineaDeTiempo")]
    public sealed class LineaTiempoRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(100), QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Archivo Filename"), Column("ARCHIVO_FILENAME"), Size(100)]
        public String ArchivoFilename
        {
            get { return Fields.ArchivoFilename[this]; }
            set { Fields.ArchivoFilename[this] = value; }
        }

        [DisplayName("Archivo Filesize"), Column("ARCHIVO_FILESIZE")]
        public Int32? ArchivoFilesize
        {
            get { return Fields.ArchivoFilesize[this]; }
            set { Fields.ArchivoFilesize[this] = value; }
        }

        [DisplayName("Archivo Contenttype"), Column("ARCHIVO_CONTENTTYPE"), Size(200)]
        public String ArchivoContenttype
        {
            get { return Fields.ArchivoContenttype[this]; }
            set { Fields.ArchivoContenttype[this] = value; }
        }

        [DisplayName("Archivo Binarydata"), Column("ARCHIVO_BINARYDATA"), Size(2147483647)]
        public Stream ArchivoBinarydata
        {
            get { return Fields.ArchivoBinarydata[this]; }
            set { Fields.ArchivoBinarydata[this] = value; }
        }

        [DisplayName("Aprobado"), Column("APROBADO"), NotNull]
        public Boolean? Aprobado
        {
            get { return Fields.Aprobado[this]; }
            set { Fields.Aprobado[this] = value; }
        }

        [DisplayName("Mes"), Column("MES"), NotNull]
        public Int16? Mes
        {
            get { return Fields.Mes[this]; }
            set { Fields.Mes[this] = value; }
        }

        [DisplayName("Anio"), Column("ANIO"), NotNull]
        public Int16? Anio
        {
            get { return Fields.Anio[this]; }
            set { Fields.Anio[this] = value; }
        }

        [DisplayName("Periodo"), Column("PERIODO"), Size(105)]
        public String Periodo
        {
            get { return Fields.Periodo[this]; }
            set { Fields.Periodo[this] = value; }
        }

        [DisplayName("Periodo Fecha"), Column("PERIODO_FECHA")]
        public DateTime? PeriodoFecha
        {
            get { return Fields.PeriodoFecha[this]; }
            set { Fields.PeriodoFecha[this] = value; }
        }

        [DisplayName("Contenido Texto"), Column("CONTENIDO_TEXTO")]
        public String ContenidoTexto
        {
            get { return Fields.ContenidoTexto[this]; }
            set { Fields.ContenidoTexto[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Id Categoria"), Column("id_categoria"), NotNull]
        public Int16? IdCategoria
        {
            get { return Fields.IdCategoria[this]; }
            set { Fields.IdCategoria[this] = value; }
        }



        [DisplayName("Userid Username"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LineaTiempoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Nombre;

            public StringField ArchivoFilename;

            public Int32Field ArchivoFilesize;

            public StringField ArchivoContenttype;

            public StreamField ArchivoBinarydata;

            public BooleanField Aprobado;

            public Int16Field Mes;

            public Int16Field Anio;

            public StringField Periodo;

            public DateTimeField PeriodoFecha;

            public StringField ContenidoTexto;

            public Int32Field Userid;

            public Int16Field IdCategoria;



            public StringField UseridUsername;

		}
    }
}
