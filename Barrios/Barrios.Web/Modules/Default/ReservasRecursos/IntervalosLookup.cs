using Barrios.Administration.Repositories;
using Barrios.Modules.Common.Utils;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Barrios.Modules.Barrios.Barrio
{
    [LookupScript("ReservasRecursos.IntervalosLookup")]
    public class IntervalosLookup : RowLookupScript<GenericComboBoxRow>
    {
        public IntervalosLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            List< GenericComboBoxRow> list=  new List<GenericComboBoxRow>();
            TimeSpan obj = new TimeSpan(0, 0, 0);
            TimeSpan intervaloMinutos = new TimeSpan(0, 15, 0);
            addHorario(list,obj);
            while (obj.TotalMinutes <= 180)
            {
                obj=obj.Add(intervaloMinutos);
                addHorario(list, obj);
            }
            return list;
        }
        private void addHorario(List<GenericComboBoxRow> list, TimeSpan obj)
        {
            list.Add(new GenericComboBoxRow(Convert.ToInt32(obj.TotalMinutes), obj.ToString(@"hh\:mm")+" Hora"));
        }

        protected override List<GenericComboBoxRow> GetItems()
        {
            return Items();
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}