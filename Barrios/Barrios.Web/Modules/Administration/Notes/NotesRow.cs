
namespace Barrios.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[NOTES]")]
    [DisplayName("Notes"), InstanceName("Notes")]
    [ReadPermission("User:Reservas")]
    [ModifyPermission("User:Reservas")]
    public sealed class NotesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Nota"), Size(1000), NotNull, QuickSearch]
        public String Message
        {
            get { return Fields.Message[this]; }
            set { Fields.Message[this] = value; }
        }

        [DisplayName("Dirigida a"), LookupEditor("Reservas.UsersLookup"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jDestinationUser"), TextualField("DestinationUserUsername")]
        public Int32? DestinationUserId
        {
            get { return Fields.DestinationUserId[this]; }
            set { Fields.DestinationUserId[this] = value; }
        }

        [DisplayName("Creado por"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jCreateUser"), TextualField("CreateUserUsername")]
        public Int32? CreateUserId
        {
            get { return Fields.CreateUserId[this]; }
            set { Fields.CreateUserId[this] = value; }
        }

        [DisplayName("Creado el"), NotNull]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
        }

        [DisplayName("Actualizado por"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUpdatetionUser"), TextualField("UpdatetionUserUsername")]
        public Int32? UpdatetionUserId
        {
            get { return Fields.UpdatetionUserId[this]; }
            set { Fields.UpdatetionUserId[this] = value; }
        }

        [DisplayName("Actualizado el"), NotNull]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Show User"), NotNull]
        public Boolean? ShowUser
        {
            get { return Fields.ShowUser[this]; }
            set { Fields.ShowUser[this] = value; }
        }

        [DisplayName("Destination User Username"), Expression("jDestinationUser.[Username]")]
        public String DestinationUserUsername
        {
            get { return Fields.DestinationUserUsername[this]; }
            set { Fields.DestinationUserUsername[this] = value; }
        }

        [DisplayName("Create User Username"), Expression("jCreateUser.[Username]")]
        public String CreateUserUsername
        {
            get { return Fields.CreateUserUsername[this]; }
            set { Fields.CreateUserUsername[this] = value; }
        }

        [DisplayName("Updatetion User Username"), Expression("jUpdatetionUser.[Username]")]
        public String UpdatetionUserUsername
        {
            get { return Fields.UpdatetionUserUsername[this]; }
            set { Fields.UpdatetionUserUsername[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Message; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NotesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Message;
            public Int32Field DestinationUserId;
            public Int32Field CreateUserId;
            public DateTimeField CreateDate;
            public Int32Field UpdatetionUserId;
            public DateTimeField UpdateDate;
            public BooleanField ShowUser;

            public StringField DestinationUserUsername;

            public StringField CreateUserUsername;

            public StringField UpdatetionUserUsername;
        }
    }
}
