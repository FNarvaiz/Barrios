

namespace Barrios.Administration.Repositories
{
    using Barrios.Administration.Entities;
    using Barrios.Modules.Common.Utils;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.RoleRow;

    public class RoleRepository
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

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }


        private MyRow GetNeigborhoodRole(string roleName)
        {
            RoleRow obj = null;
            using (var connection2 = Utils.GetConnection())
                obj = connection2.Query<RoleRow>("SELECT * from Roles WHERE RoleName='" + roleName + "'").SingleOrDefault();
            return obj;
        }

        internal MyRow GetOrCreateNeigborhoodRole()
        {
            string roleName = "Vecinos de " + CurrentNeigborhood.Get().Nombre;
            RoleRow obj = GetNeigborhoodRole(roleName);
            if (obj == null)
            {
                using(var uow= Utils.GetUnitOfWork())
                {
                    SaveRequest<MyRow> request = new SaveRequest<MyRow>() { Entity = new MyRow() { RoleName = roleName } };
                    Create(uow, request);
                    uow.Commit();
                    obj = request.Entity;
                }
            }
            return obj;
        }
    }
}