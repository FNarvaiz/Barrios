
namespace Barrios.Default.Repositories
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Linq;
    using System.Data;
    using MyRow = Entities.ReservasRecursosRow;
    using System.Collections.Generic;

    public class ReservasRecursosRepository
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
        public List<MyRow> ListOfAllowedResources(IDbConnection connection)
        {
            return connection.Query<MyRow>("SELECT TOP (1000) RR.[NOMBRE] " +
                  " ,[APERTURA] " +
                  " ,[CIERRE] " +
                  " ,[RESOLUCION] " +
                  " , RR.[ID] " +
                  " ,[TIPO] " +
                  "  FROM [RESERVAS_RECURSOS] RR " +
                  " INNER JOIN [Recursos-Barrios] RB " +
                  " ON RB.RecursoId= RR.ID " +
                  " LEFT JOIN SUBBARRIOS_RECURSOS SBR " +
                  " ON SBR.recursoId= RR.ID " +
                  " LEFT JOIN Users U " +
                  " ON SBR.subbarrioId= U.subBarrioId " +
                  " where (U.UserId is null OR U.UserId="+Authorization.UserId+") AND RB.BarrioId="+CurrentNeigborhood.Get().Id+" " +
                  " ORDER BY RESOLUCION desc ,NOMBRE asc ").ToList<MyRow>();
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}