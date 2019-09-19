
namespace Barrios.Perfil.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Perfil"), TableName("[dbo].[VECINOS_VISITANTES_FRECUENTES]")]
    [DisplayName("Visitantes Frecuentes"), InstanceName("Visitante Frecuente")]
    [ReadPermission("User:Perfil")]
    [ModifyPermission("User:Perfil")]
    [LeftJoin("jBarrio", "[dbo].[Users-barrios]", "jBarrio.[UserId] = t0.[UserId] ")]

    public sealed class VecinosVisitantesFrecuentesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nombre"), Column("NOMBRE"), Size(100), NotNull, QuickSearch]
        public String Nombre
        {
            get { return Fields.Nombre[this]; }
            set { Fields.Nombre[this] = value; }
        }

        [DisplayName("Dni"), Column("DNI"), Size(100), NotNull]
        public String Dni
        {
            get { return Fields.Dni[this]; }
            set { Fields.Dni[this] = value; }
        }

        [DisplayName("Vehiculo"), Column("VEHICULO"), Size(100)]
        public String Vehiculo
        {
            get { return Fields.Vehiculo[this]; }
            set { Fields.Vehiculo[this] = value; }
        }

        [DisplayName("Tipo/Relación"), Column("TIPO"), Size(100)]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }

        [DisplayName("Userid"),QuickFilter, LookupEditor("Reservas.UsersLookup"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }

        [DisplayName("Vecino"), Expression("jUserid.[Username]")]
        public String UseridUsername
        {
            get { return Fields.UseridUsername[this]; }
            set { Fields.UseridUsername[this] = value; }
        }
        [DisplayName("Barrio Id"), Expression("jBarrio.BarrioId")]
        public Int32? BarrioId
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

        public VecinosVisitantesFrecuentesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nombre;
            public StringField Dni;
            public StringField Vehiculo;
            public StringField Tipo;
            public Int32Field Userid;
            public Int32Field BarrioId;

            public StringField UseridUsername;
        }
    }
}
