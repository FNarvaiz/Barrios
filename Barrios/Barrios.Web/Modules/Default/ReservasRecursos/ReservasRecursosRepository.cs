
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
    using Barrios.Default.Entities;

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
            string query = "SELECT TOP (1000) RR.[NOMBRE] " +
                  " ,[APERTURA] " +
                  " ,[CIERRE] " +
                  " ,[RESOLUCION] " +
                  " ,RR.[ID] " +
                  " ,[TIPO] " +
                   " ,[DESCRIPTION] " +
                  " FROM [RESERVAS_RECURSOS] RR " +
                  " INNER JOIN [Recursos-Barrios] RB " +
                  " ON RB.RecursoId= RR.ID " +
                  " LEFT JOIN SUBBARRIOS_RECURSOS SBR " +
                  " ON SBR.recursoId= RR.ID " +
                  " LEFT JOIN Users U " +
                  " ON SBR.subbarrioId= U.subBarrioId " +
                  " where (SBR.recursoId is null OR U.UserId=" + Authorization.UserId + ") AND RB.BarrioId=" + CurrentNeigborhood.Get().Id + " " +
                  " ORDER BY RESOLUCION desc ,NOMBRE asc ";
            return connection.Query<MyRow>(query).ToList<MyRow>();
        }
        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                if (IsUpdate)
                    new SqlDelete(SubbarriosRecursosRow.Fields.TableName)
                        .Where(SubbarriosRecursosRow.Fields.RecursoId == Row.Id.Value)
                        .Execute(Connection, ExpectedRows.Ignore);
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                new SqlDelete(SubbarriosRecursosRow.Fields.TableName)
                   .Where(SubbarriosRecursosRow.Fields.RecursoId == Row.Id.Value)
                   .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(ReservasRow.Fields.TableName)
                  .Where(ReservasRow.Fields.IdRecurso == Row.Id.Value)
                  .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(ReservasTiposRow.Fields.TableName)
                  .Where(ReservasTiposRow.Fields.IdRecurso == Row.Id.Value)
                  .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(RecursosBarriosRow.Fields.TableName)
                  .Where(RecursosBarriosRow.Fields.RecursoId == Row.Id.Value)
                  .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(ReservasTurnosEspecialesRow.Fields.TableName)
                  .Where(ReservasTurnosEspecialesRow.Fields.IdRecurso == Row.Id.Value)
                  .Execute(Connection, ExpectedRows.Ignore);

            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}