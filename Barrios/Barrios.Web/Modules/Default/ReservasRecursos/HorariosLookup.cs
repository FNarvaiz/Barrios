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
    [LookupScript("ReservasRecursos.HorariosLookup")]
    public class HorariosLookup : RowLookupScript<GenericComboBoxRow>
    {
        public HorariosLookup()
        {
            IdField = GenericComboBoxRow.Fields.Id.PropertyName;
            TextField = GenericComboBoxRow.Fields.Name.PropertyName;
        }
        public List<GenericComboBoxRow> Items()
        {
            List< GenericComboBoxRow> list=  new List<GenericComboBoxRow>();
            TimeSpan obj = new TimeSpan(0, 0, 0);
            TimeSpan intervaloMinutos = new TimeSpan(0, 30, 0);
           // list.Add(new GenericComboBoxRow(null,"Vacio"));
            addHorario(list,obj);
            while (obj.TotalMinutes <= 1680)
            {
                obj=obj.Add(intervaloMinutos);
                addHorario(list, obj);
            }
            return list;
        }
        private void addHorario(List<GenericComboBoxRow> list, TimeSpan obj)
        {
            list.Add(new GenericComboBoxRow(Convert.ToInt32(obj.TotalMinutes), obj.ToString(@"hh\:mm")));
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