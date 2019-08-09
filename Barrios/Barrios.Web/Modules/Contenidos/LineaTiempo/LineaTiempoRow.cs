
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
        [FileUploadEditor(FilenameFormat = "TimeLineFiles/~", CopyToHistory = true)]
        public String ArchivoFilename
        {
            get { return Fields.ArchivoFilename[this]; }
            set { Fields.ArchivoFilename[this] = value; }
        }
        
        [DisplayName("Aprobado"), Column("APROBADO"), NotNull]
        public Boolean? Aprobado
        {
            get { return Fields.Aprobado[this]; }
            set { Fields.Aprobado[this] = value; }
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

        [DisplayName("Id Categoria"), ForeignKey("[dbo].[CATEGORIAS]", "ID"), LeftJoin("jCategory"), LookupEditor("Category.TimeLineCategoryLookup"), Column("id_categoria"), NotNull]
        public Int16? IdCategoria
        {
            get { return Fields.IdCategoria[this]; }
            set { Fields.IdCategoria[this] = value; }
        }
        [DisplayName("Categoria"), Expression("jCategory.[Nombre]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }


        [DisplayName("Userid Username"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }
        [DisplayName("Barrio"), ForeignKey("[dbo].[Barrios]", "ID")]
        public Int16? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
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

            public BooleanField Aprobado;

            public DateTimeField PeriodoFecha;

            public StringField ContenidoTexto;

            public Int32Field Userid;

            public Int16Field IdCategoria;


            public Int16Field BarrioId;

            public StringField CategoryName;

            public StringField UseridUsername;

		}
        public String ClassForExtension()
        {
            var array = ArchivoFilename.Split('.');
            switch (array[array.Length - 1])
            {
                case "pdf":
                    return "fa-file-pdf-o";
                case "doc":
                    return "fa-file-word-o";
                case "docx":
                    return "fa-file-word-o";
                case "jpg":
                    return "fa-file-image-o";
                case "png":
                    return "fa-file-image-o";
                case "zip":
                    return "fa-file-zip-o";
                case "rar":
                    return "fa-file-zip-o";
            }
            return "fa-file";
        }

    }
}
