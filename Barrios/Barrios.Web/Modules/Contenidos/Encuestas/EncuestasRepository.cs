
namespace Barrios.Contenidos.Repositories
{
    using Barrios.Contenidos.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.EncuestasRow;

    public class EncuestasRepository
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
        public List<MyRow> ListRatings(IDbConnection connection, Int16? idNeigborhood, string userID)
        {
            List<MyRow> list;
            using (connection)
            {
                string query = "Select  P.ID_CATEGORIA,C.NOMBRE AS CategoryName,P.ID,P.NOMBRE,CONVERT(varchar(500),P.Descripcion) AS DESCRIPCION,AVG(V.valoracion) as Rating ," +
                    "SUM(case when V.Userid = " + userID + " then V.valoracion else 0 end) as Liked," +
                    "SUM(case when V.Userid = 1 then V.ID else 0 end) as ValoracionId," +
                    "COUNT(V.ID) as RatingCount " +
                    "from ENCUESTAS P " +
                    "INNER JOIN CATEGORIAS C ON C.ID= P.ID_CATEGORIA " +
                    "LEFT JOIN [ENCUESTAS_VALORACIONES] V ON P.ID= V.ID_ENCUESTA " +
                    "where P.VIGENTE=1 AND  P.BarrioId=" + idNeigborhood + " " +
                    "group by P.ID,P.NOMBRE,P.ID_CATEGORIA,C.NOMBRE,CONVERT(varchar(500),P.Descripcion)  ";
                list = connection.Query<MyRow>(query).ToList();
            }
            return list;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                new SqlDelete(EncuestasValoracionesRow.Fields.TableName)
                   .Where(EncuestasValoracionesRow.Fields.IdEncuesta == Row.Id.Value)
                   .Execute(Connection, ExpectedRows.Ignore);

            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}