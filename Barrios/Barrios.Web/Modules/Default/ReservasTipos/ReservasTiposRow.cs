
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS_TIPOS]")]
    [DisplayName("Reservas Tipos"), InstanceName("Reservas Tipos")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReservasTiposRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Recurso"), Column("ID_RECURSO")]
        public Int16? IdRecurso
        {
            get { return Fields.IdRecurso[this]; }
            set { Fields.IdRecurso[this] = value; }
        }

        [DisplayName("Id"), Column("ID")]
        public Int16? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(30), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Duracion"), Column("DURACION"), NotNull]
        public Int16? Duracion
        {
            get { return Fields.Duracion[this]; }
            set { Fields.Duracion[this] = value; }
        }

        [DisplayName("Vigente"), Column("VIGENTE"), NotNull]
        public Boolean? Vigente
        {
            get { return Fields.Vigente[this]; }
            set { Fields.Vigente[this] = value; }
        }

        [DisplayName("Requiere Vecino 2"), Column("REQUIERE_VECINO_2")]
        public Boolean? RequiereVecino2
        {
            get { return Fields.RequiereVecino2[this]; }
            set { Fields.RequiereVecino2[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdRecurso; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReservasTiposRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int16Field IdRecurso;
            public Int16Field Id;
            public StringField Nombre;
            public Int16Field Duracion;
            public BooleanField Vigente;
            public BooleanField RequiereVecino2;
        }
    }
}
