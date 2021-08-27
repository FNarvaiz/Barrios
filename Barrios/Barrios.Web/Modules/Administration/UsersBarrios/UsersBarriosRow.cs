
namespace Barrios.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Users-Barrios]")]
    [DisplayName("Users Barrios"), InstanceName("Users Barrios")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class UsersBarriosRow : Row, IIdRow
    {
        [DisplayName("User"),  ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }
        [DisplayName("SubBarrio id"), ForeignKey("[dbo].[SUBBARRIOS]", "id"), LeftJoin("jSubBarrio"), TextualField("Nombre"), LookupEditor("Settings.Subbarrios")]
        public Int32? SubBarrioId
        {
            get { return Fields.SubBarrioId[this]; }
            set { Fields.SubBarrioId[this] = value; }
        }
        [DisplayName("Barrio"), NotNull, ForeignKey("[dbo].[BARRIOS]", "ID"), LeftJoin("jBarrio"), TextualField("BarrioNombre")]
        public Int32? BarrioId
        {
            get { return Fields.BarrioId[this]; }
            set { Fields.BarrioId[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }
        [DisplayName("Sub-Barrio"), Expression("jSubBarrio.[Nombre]")]
        public String SubBarrioNombre
        {
            get { return Fields.SubBarrioNombre[this]; }
            set { Fields.SubBarrioNombre[this] = value; }
        }
        [DisplayName("Barrio Nombre"), Expression("jBarrio.[Nombre]")]
        public String BarrioNombre
        {
            get { return Fields.BarrioNombre[this]; }
            set { Fields.BarrioNombre[this] = value; }
        }
        [DisplayName("Unidad")]
        public String Units
        {
            get { return Fields.Units[this]; }
            set { Fields.Units[this] = value; }
        }
        [DisplayName("Notas")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }
        [DisplayName("Fecha limite de alquiler")]
        public DateTime? LimitDate
        {
            get { return Fields.LimitDate[this]; }
            set { Fields.LimitDate[this] = value; }
        }
        [DisplayName("Propiertario")]
        public Boolean? Owner
        {
            get { return Fields.Owner[this]; }
            set { Fields.Owner[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.UserId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UsersBarriosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UserId;
            public Int32Field SubBarrioId;
            public Int32Field BarrioId;
            public StringField Units;
            public StringField Note;
            public DateTimeField LimitDate;
            public BooleanField Owner;
            public StringField UserUsername;
            public StringField SubBarrioNombre;

            public StringField BarrioNombre;
        }
    }
}
