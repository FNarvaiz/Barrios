using Barrios.Administration.Entities;
using Barrios.Administration.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Barrios.Modules.Barrios.Default
{
    [LookupScript("Reservas.UsersLookup")]
    public class UsersLookup : RowLookupScript<UserRow>
    {
        public UsersLookup()
        {
            IdField = UserRow.Fields.UserId.PropertyName;
            TextField = UserRow.Fields.DisplayName.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);
            query.Where(new Criteria(UserRow.Fields.BarrioId) == CurrentNeigborhood.Get().Id.ToString());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}