
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[ENCUESTAS_VALORACIONES]")]
    [DisplayName("Valoraciones"), InstanceName("Valoración")]
    [ReadPermission("User:Encuestas")]
    [ModifyPermission("User:Encuestas")]
    public sealed class EncuestasValoracionesRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Encuesta"), Column("ID_ENCUESTA"), NotNull, ForeignKey("[dbo].[ENCUESTAS]", "ID"), LeftJoin("jIdEncuesta"), TextualField("IdEncuestaNombre")]
        public Int32? IdEncuesta
        {
            get { return Fields.IdEncuesta[this]; }
            set { Fields.IdEncuesta[this] = value; }
        }

        [DisplayName("Fecha"), Column("FECHA"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Valoracion"), Column("VALORACION"),LookupEditor("SurveysAndProviders.PointsLookup"), NotNull]
        public Int16? Valoracion
        {
            get { return Fields.Valoracion[this]; }
            set { Fields.Valoracion[this] = value; }
        }

        [DisplayName("Comentario"), Column("COMENTARIO"),TextAreaEditor(), Size(140)]
        public String Comentario
        {
            get { return Fields.Comentario[this]; }
            set { Fields.Comentario[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }



        [DisplayName("Id Encuesta Nombre"), Expression("jIdEncuesta.[NOMBRE]")]
        public String IdEncuestaNombre
        {
            get { return Fields.IdEncuestaNombre[this]; }
            set { Fields.IdEncuestaNombre[this] = value; }
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
            get { return Fields.IdEncuestaNombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EncuestasValoracionesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field IdEncuesta;

            public DateTimeField Fecha;

            public Int16Field Valoracion;

            public StringField Comentario;

            public Int32Field Userid;



            public StringField IdEncuestaNombre;

        

            public StringField UseridUsername;


		}
    }
}
