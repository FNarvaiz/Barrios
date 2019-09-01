
namespace Barrios.Perfil.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Perfil"), TableName("[dbo].[VECINOS_ACTIVIDADES]")]
    [DisplayName("Actividades"), InstanceName("Actividad")]
    [ReadPermission("Administration:Perfil")]
    [ModifyPermission("Administration:Perfil")]
    public sealed class VecinosActividadesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Fecha"), Column("FECHA"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Actividad"), Column("ACTIVIDAD"), Size(100), NotNull, QuickSearch]
        public String Actividad
        {
            get { return Fields.Actividad[this]; }
            set { Fields.Actividad[this] = value; }
        }

        [DisplayName("Actividad Detalles"), Column("ACTIVIDAD_DETALLES"), Size(100)]
        public String ActividadDetalles
        {
            get { return Fields.ActividadDetalles[this]; }
            set { Fields.ActividadDetalles[this] = value; }
        }

        [DisplayName("Ip"), Column("IP"), Size(30)]
        public String Ip
        {
            get { return Fields.Ip[this]; }
            set { Fields.Ip[this] = value; }
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
            get { return Fields.Actividad; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VecinosActividadesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField Fecha;
            public StringField Actividad;
            public StringField ActividadDetalles;
            public StringField Ip;
            public Int32Field Userid;
            
        }
    }
}
