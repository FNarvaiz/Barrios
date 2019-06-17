
namespace Barrios.Contenidos.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Contenidos"), TableName("[dbo].[PROVEEDORES_VALORACIONES]")]
    [DisplayName("Proveedores Valoraciones"), InstanceName("Proveedores Valoraciones")]
    [ReadPermission("User:Proveedores")]
    [ModifyPermission("User:Proveedores")]
    public sealed class ProveedoresValoracionesRow : Row, IIdRow
    {

        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Proveedor"), Column("ID_PROVEEDOR"), NotNull, ForeignKey("[dbo].[PROVEEDORES]", "ID"), LeftJoin("jIdProveedor"), TextualField("IdProveedorNombre")]
        public Int32? IdProveedor
        {
            get { return Fields.IdProveedor[this]; }
            set { Fields.IdProveedor[this] = value; }
        }

        [DisplayName("Fecha"), Column("FECHA"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Valoracion"), Column("VALORACION"), NotNull]
        public Int16? Valoracion
        {
            get { return Fields.Valoracion[this]; }
            set { Fields.Valoracion[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
        }



        [DisplayName("Id Proveedor Nombre"), Expression("jIdProveedor.[NOMBRE]")]
        public String IdProveedorNombre
        {
            get { return Fields.IdProveedorNombre[this]; }
            set { Fields.IdProveedorNombre[this] = value; }
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

        public static readonly RowFields Fields = new RowFields().Init();

        public ProveedoresValoracionesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field IdProveedor;

            public DateTimeField Fecha;

            public Int16Field Valoracion;

            public Int32Field Userid;



            public StringField IdProveedorNombre;

        
            public StringField UseridUsername;


		}
    }
}
