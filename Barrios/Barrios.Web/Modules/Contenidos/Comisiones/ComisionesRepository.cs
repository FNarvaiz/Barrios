
namespace Barrios.Contenidos.Repositories
{
    using Barrios.Contenidos.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.ComisionesRow;

    public class ComisionesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }
        
        public List<MyRow> ListView(IDbConnection connection, int? idNeigborhood)
        {
            string query = "SELECT TOP (1000) C.[ID],C.[NOMBRE] as Commission,C.[MAILS], I.NOMBRE as Member " +
                "FROM [COMISIONES] C " +
                "LEFT JOIN [COMISIONES_INTEGRANTES] I " +
                "ON C.ID= I.ID_COMISION " +
                "WHERE C.HABILITADA=1 AND C.barrioId=" + idNeigborhood + " " +
                "ORDER BY C.NOMBRE";
            DataTable DT= Utils.GetRequestString(query);
            List<MyRow> list = new List<MyRow>();
            MyRow last=null;
            Int16 idLast=-1;
            Int16 idCurrent;
            foreach(DataRow aux in DT.Rows)
            {
                idCurrent = Convert.ToInt16(aux["ID"]);
                if (idLast != idCurrent)
                {
                    last = new MyRow() { Id = idCurrent, Nombre = aux["Commission"].ToString(), Mails = aux["MAILS"].ToString() };
                    idLast = idCurrent;
                    last.MembersList = new List<Entities.ComisionesIntegrantesRow>();
                    list.Add(last);
                }
                if (!aux["Member"].ToString().IsEmptyOrNull())
                    last.MembersList.Add(new Entities.ComisionesIntegrantesRow() { Nombre = aux["Member"].ToString() });
            }
            return list;
        }
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                new SqlDelete(ComisionesIntegrantesRow.Fields.TableName)
                   .Where(ComisionesIntegrantesRow.Fields.IdComision == Row.Id.Value)
                   .Execute(Connection, ExpectedRows.Ignore);

            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}