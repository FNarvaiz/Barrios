
namespace Barrios.Contenidos.Repositories
{
    using Barrios.Modules.Common.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.ProveedoresRow;

    public class ProveedoresRepository
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
                string query = "Select  P.ID_CATEGORIA,C.NOMBRE AS CategoryName,P.ID,P.NOMBRE,P.EMAIL,P.TELEFONOS,P.DOMICILIO,AVG(V.valoracion) as Rating ," +
                    "SUM(case when V.Userid = " + userID + " then V.valoracion else 0 end) as Liked," +
                    "COUNT(V.ID) as RatingCount " +
                    "from PROVEEDORES P " +
                    "INNER JOIN CATEGORIAS C ON C.ID= P.ID_CATEGORIA " +
                    "LEFT JOIN [PROVEEDORES_VALORACIONES] V ON P.ID= V.ID_PROVEEDOR " +
                    "where P.VIGENTE=1 "+
                    "group by P.ID,P.NOMBRE,P.EMAIL,P.TELEFONOS,P.DOMICILIO,P.ID_CATEGORIA,C.NOMBRE  ";
                // DataTable DT= Utils.GetRequestString(connection, );
               list= connection.Query<MyRow>(query).ToList();
            }
            return list;
        }
       

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}