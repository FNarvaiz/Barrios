﻿
namespace Barrios.Perfil.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Perfil"), TableName("[dbo].[VECINOS_EVENTOS]")]
    [DisplayName("Vecinos Eventos"), InstanceName("Vecinos Eventos")]
    [ReadPermission("Administration:Perfil")]
    [ModifyPermission("Administration:Perfil")]
    [LeftJoin("jTurns", "[dbo].[VECINOS_EVENTOS_CONCURRENTES]", "jTurns.[ID_Recurso] = t0.[ID] ")]
    public sealed class VecinosEventosRow : Row, IIdRow, INameRow
    {
        [DisplayName("Tipos de reserva"), MasterDetailRelation("IdEvento", IncludeColumns = "*"), NotMapped]
        public List<VecinosEventosConcurrentesRow> ConcurrentesList
        {
            get => Fields.ConcurrentesList[this];
            set => Fields.ConcurrentesList[this] = value;
        }
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

        [DisplayName("Fecha"), Column("FECHA"), NotNull]
        public DateTime? Fecha
        {
            get { return Fields.Fecha[this]; }
            set { Fields.Fecha[this] = value; }
        }

        [DisplayName("Lugar"), Column("LUGAR"), Size(100), NotNull]
        public String Lugar
        {
            get { return Fields.Lugar[this]; }
            set { Fields.Lugar[this] = value; }
        }

        [DisplayName("Userid"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUserid"), TextualField("UseridUsername")]
        public Int32? Userid
        {
            get { return Fields.Userid[this]; }
            set { Fields.Userid[this] = value; }
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
            get { return Fields.Nombre; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VecinosEventosRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Nombre;
            public DateTimeField Fecha;
            public StringField Lugar;
            public Int32Field Userid;

            public StringField UseridUsername;
            public ListField<VecinosEventosConcurrentesRow> ConcurrentesList;

        }
    }
}
