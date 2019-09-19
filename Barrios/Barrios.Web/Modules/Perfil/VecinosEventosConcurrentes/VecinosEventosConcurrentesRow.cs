
namespace Barrios.Perfil.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Perfil"), TableName("[dbo].[VECINOS_EVENTOS_CONCURRENTES]")]
    [DisplayName("Concurrentes"), InstanceName("Concurrente")]
    [ReadPermission("User:Perfil")]
    [ModifyPermission("User:Perfil")]
  
    public sealed class VecinosEventosConcurrentesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Evento"), Column("ID_EVENTO"), NotNull]
        public Int32? IdEvento
        {
            get { return Fields.IdEvento[this]; }
            set { Fields.IdEvento[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(100), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
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

        public VecinosEventosConcurrentesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field IdEvento;
            public StringField Nombre;
            public Int32Field Userid;
           
        }
    }
}
