
namespace Barrios.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[RESERVAS]")]
    [DisplayName("Reservas"), InstanceName("Reservas")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ReservasRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Id Recurso"), Column("ID_RECURSO"), NotNull, ForeignKey("[dbo].[RESERVAS_RECURSOS]", "ID"), LeftJoin("jIdRecurso"), TextualField("IdRecursoNombre")]
        public Int16? IdRecurso
        {
            get { return Fields.IdRecurso[this]; }
            set { Fields.IdRecurso[this] = value; }
        }

        [DisplayName("Id Resultado"), Column("ID_RESULTADO")]
        public Int16? IdResultado
        {
            get { return Fields.IdResultado[this]; }
            set { Fields.IdResultado[this] = value; }
        }

        [DisplayName("Fecha"), Column("FECHA"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Inicio"), Column("INICIO"), NotNull]
        public Int16? Inicio
        {
            get { return Fields.Inicio[this]; }
            set { Fields.Inicio[this] = value; }
        }

        [DisplayName("Duracion"), Column("DURACION"), NotNull]
        public Int16? Duracion
        {
            get { return Fields.Duracion[this]; }
            set { Fields.Duracion[this] = value; }
        }

        [DisplayName("Observaciones"), Column("OBSERVACIONES"), Size(200), QuickSearch]
        public String Observaciones
        {
            get { return Fields.Observaciones[this]; }
            set { Fields.Observaciones[this] = value; }
        }

        [DisplayName("Id Vecino 2"), Column("ID_VECINO_2")]
        public Int32? IdVecino2
        {
            get { return Fields.IdVecino2[this]; }
            set { Fields.IdVecino2[this] = value; }
        }

        [DisplayName("Id Tipo"), Column("ID_TIPO")]
        public Int32? IdTipo
        {
            get { return Fields.IdTipo[this]; }
            set { Fields.IdTipo[this] = value; }
        }

        [DisplayName("Fecha Fin"), Column("FECHA_FIN")]
        public DateTime? FechaFin
        {
            get { return Fields.FechaFin[this]; }
            set { Fields.FechaFin[this] = value; }
        }

        [DisplayName("Id Vecino"), Column("ID_VECINO"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jIdVecino"), TextualField("IdVecinoUsername")]
        public Int32? IdVecino
        {
            get { return Fields.IdVecino[this]; }
            set { Fields.IdVecino[this] = value; }
        }

        [DisplayName("Date Insert")]
        public DateTime? DateInsert
        {
            get { return Fields.DateInsert[this]; }
            set { Fields.DateInsert[this] = value; }
        }

        [DisplayName("User Insert")]
        public Int32? UserInsert
        {
            get { return Fields.UserInsert[this]; }
            set { Fields.UserInsert[this] = value; }
        }

        [DisplayName("Id Recurso Nombre"), Expression("jIdRecurso.[NOMBRE]")]
        public String IdRecursoNombre
        {
            get { return Fields.IdRecursoNombre[this]; }
            set { Fields.IdRecursoNombre[this] = value; }
        }

        [DisplayName("Id Recurso Apertura"), Expression("jIdRecurso.[APERTURA]")]
        public Int16? IdRecursoApertura
        {
            get { return Fields.IdRecursoApertura[this]; }
            set { Fields.IdRecursoApertura[this] = value; }
        }

        [DisplayName("Id Recurso Cierre"), Expression("jIdRecurso.[CIERRE]")]
        public Int16? IdRecursoCierre
        {
            get { return Fields.IdRecursoCierre[this]; }
            set { Fields.IdRecursoCierre[this] = value; }
        }

        [DisplayName("Id Recurso Resolucion"), Expression("jIdRecurso.[RESOLUCION]")]
        public Int16? IdRecursoResolucion
        {
            get { return Fields.IdRecursoResolucion[this]; }
            set { Fields.IdRecursoResolucion[this] = value; }
        }

        [DisplayName("Id Vecino Username"), Expression("jIdVecino.[Username]")]
        public String IdVecinoUsername
        {
            get { return Fields.IdVecinoUsername[this]; }
            set { Fields.IdVecinoUsername[this] = value; }
        }

        [DisplayName("Id Vecino Display Name"), Expression("jIdVecino.[DisplayName]")]
        public String IdVecinoDisplayName
        {
            get { return Fields.IdVecinoDisplayName[this]; }
            set { Fields.IdVecinoDisplayName[this] = value; }
        }

        [DisplayName("Id Vecino Email"), Expression("jIdVecino.[Email]")]
        public String IdVecinoEmail
        {
            get { return Fields.IdVecinoEmail[this]; }
            set { Fields.IdVecinoEmail[this] = value; }
        }

        [DisplayName("Id Vecino Source"), Expression("jIdVecino.[Source]")]
        public String IdVecinoSource
        {
            get { return Fields.IdVecinoSource[this]; }
            set { Fields.IdVecinoSource[this] = value; }
        }

        [DisplayName("Id Vecino Password Hash"), Expression("jIdVecino.[PasswordHash]")]
        public String IdVecinoPasswordHash
        {
            get { return Fields.IdVecinoPasswordHash[this]; }
            set { Fields.IdVecinoPasswordHash[this] = value; }
        }

        [DisplayName("Id Vecino Password Salt"), Expression("jIdVecino.[PasswordSalt]")]
        public String IdVecinoPasswordSalt
        {
            get { return Fields.IdVecinoPasswordSalt[this]; }
            set { Fields.IdVecinoPasswordSalt[this] = value; }
        }

        [DisplayName("Id Vecino Last Directory Update"), Expression("jIdVecino.[LastDirectoryUpdate]")]
        public DateTime? IdVecinoLastDirectoryUpdate
        {
            get { return Fields.IdVecinoLastDirectoryUpdate[this]; }
            set { Fields.IdVecinoLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("Id Vecino User Image"), Expression("jIdVecino.[UserImage]")]
        public String IdVecinoUserImage
        {
            get { return Fields.IdVecinoUserImage[this]; }
            set { Fields.IdVecinoUserImage[this] = value; }
        }

        [DisplayName("Id Vecino Insert Date"), Expression("jIdVecino.[InsertDate]")]
        public DateTime? IdVecinoInsertDate
        {
            get { return Fields.IdVecinoInsertDate[this]; }
            set { Fields.IdVecinoInsertDate[this] = value; }
        }

        [DisplayName("Id Vecino Insert User Id"), Expression("jIdVecino.[InsertUserId]")]
        public Int32? IdVecinoInsertUserId
        {
            get { return Fields.IdVecinoInsertUserId[this]; }
            set { Fields.IdVecinoInsertUserId[this] = value; }
        }

        [DisplayName("Id Vecino Update Date"), Expression("jIdVecino.[UpdateDate]")]
        public DateTime? IdVecinoUpdateDate
        {
            get { return Fields.IdVecinoUpdateDate[this]; }
            set { Fields.IdVecinoUpdateDate[this] = value; }
        }

        [DisplayName("Id Vecino Update User Id"), Expression("jIdVecino.[UpdateUserId]")]
        public Int32? IdVecinoUpdateUserId
        {
            get { return Fields.IdVecinoUpdateUserId[this]; }
            set { Fields.IdVecinoUpdateUserId[this] = value; }
        }

        [DisplayName("Id Vecino Is Active"), Expression("jIdVecino.[IsActive]")]
        public Int16? IdVecinoIsActive
        {
            get { return Fields.IdVecinoIsActive[this]; }
            set { Fields.IdVecinoIsActive[this] = value; }
        }

        [DisplayName("Id Vecino Phones"), Expression("jIdVecino.[Phones]")]
        public String IdVecinoPhones
        {
            get { return Fields.IdVecinoPhones[this]; }
            set { Fields.IdVecinoPhones[this] = value; }
        }

        [DisplayName("Id Vecino Note"), Expression("jIdVecino.[Note]")]
        public String IdVecinoNote
        {
            get { return Fields.IdVecinoNote[this]; }
            set { Fields.IdVecinoNote[this] = value; }
        }

        [DisplayName("Id Vecino Latest Access"), Expression("jIdVecino.[Latest_Access]")]
        public DateTime? IdVecinoLatestAccess
        {
            get { return Fields.IdVecinoLatestAccess[this]; }
            set { Fields.IdVecinoLatestAccess[this] = value; }
        }

        [DisplayName("Id Vecino Unidad"), Expression("jIdVecino.[Unidad]")]
        public String IdVecinoUnidad
        {
            get { return Fields.IdVecinoUnidad[this]; }
            set { Fields.IdVecinoUnidad[this] = value; }
        }
        [DisplayName("Turno"), NotMapped]
        public String Turno
        {
            get { return Fields.Turno[this]; }
            set { Fields.Turno[this] = value; }
        }
        [DisplayName("Estado"), NotMapped]
        public String Estado
        {
            get { return Fields.Estado[this]; }
            set { Fields.Estado[this] = value; }
        }
        [DisplayName("Tipo"), NotMapped]
        public String Tipo
        {
            get { return Fields.Tipo[this]; }
            set { Fields.Tipo[this] = value; }
        }
        [DisplayName("Tipo Reserva Hecha"), NotMapped]
        public String TipoReservaHecha
        {
            get { return Fields.TipoReservaHecha[this]; }
            set { Fields.TipoReservaHecha[this] = value; }
        }
        [DisplayName("Vecino Unidad Extra"), NotMapped]
        public String IdVecinoUnidadExtra
        {
            get { return Fields.IdVecinoUnidadExtra[this]; }
            set { Fields.IdVecinoUnidadExtra[this] = value; }
        }
        
          [DisplayName("Estado_Turno"), NotMapped]
        public String Estado_Turno
        {
            get { return Fields.Estado_Turno[this]; }
            set { Fields.Estado_Turno[this] = value; }
        }
        [DisplayName("Finalizado"), NotMapped]
        public Boolean? Finalizado
        {
            get { return Fields.Finalizado[this]; }
            set { Fields.Finalizado[this] = value; }
        }
        [DisplayName("Reservable"), NotMapped]
        public Boolean? Reservable
        {
            get { return Fields.Reservable[this]; }
            set { Fields.Reservable[this] = value; }
        }
        [DisplayName("Valido"), NotMapped]
        public Boolean? Valido
        {
            get { return Fields.Valido[this]; }
            set { Fields.Valido[this] = value; }
        }
        [DisplayName("Required Vecino"), NotMapped]
        public Boolean? Required_Vecino
        {
            get { return Fields.Required_Vecino[this]; }
            set { Fields.Required_Vecino[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Observaciones; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ReservasRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int16Field IdRecurso;
            public Int16Field IdResultado;
            public DateTimeField Fecha;
            public Int16Field Inicio;
            public Int16Field Duracion;
            public StringField Observaciones;
            public Int32Field IdVecino2;
            public Int32Field IdTipo;
            public DateTimeField FechaFin;
            public Int32Field IdVecino;
            public DateTimeField DateInsert;
            public Int32Field UserInsert;
            
            public StringField Turno;
            public StringField Estado;
            public BooleanField Finalizado;
            public BooleanField Reservable;
            public StringField Tipo;
            public StringField TipoReservaHecha;
            public StringField Estado_Turno;
            public BooleanField Valido;
            public BooleanField Required_Vecino;
            public StringField IdVecinoUnidadExtra;

            public StringField IdRecursoNombre;
            public Int16Field IdRecursoApertura;
            public Int16Field IdRecursoCierre;
            public Int16Field IdRecursoResolucion;

            public StringField IdVecinoUsername;
            public StringField IdVecinoDisplayName;
            public StringField IdVecinoEmail;
            public StringField IdVecinoSource;
            public StringField IdVecinoPasswordHash;
            public StringField IdVecinoPasswordSalt;
            public DateTimeField IdVecinoLastDirectoryUpdate;
            public StringField IdVecinoUserImage;
            public DateTimeField IdVecinoInsertDate;
            public Int32Field IdVecinoInsertUserId;
            public DateTimeField IdVecinoUpdateDate;
            public Int32Field IdVecinoUpdateUserId;
            public Int16Field IdVecinoIsActive;
            public StringField IdVecinoPhones;
            public StringField IdVecinoNote;
            public DateTimeField IdVecinoLatestAccess;
            public StringField IdVecinoUnidad;
        }
    }
}
