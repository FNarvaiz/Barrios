using Barrios.Default.Entities;
using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace Barrios.Modules.Default.Entities
{
    public class RenderListToTable : RenderBooking
    {
        List<ReservasRow> list;
        StringBuilder builder;

        public string getHTML() {
            return builder.ToString();
        }
        public RenderListToTable(List<ReservasRow> list)
        {
            builder = new StringBuilder();
            this.list = list;
        }
       
        public void InitTBody()
        {
            builder.Append("<tbody>");
        }
        public void renderButton(string classStyle,string tooltip, string text, string onClick = "", string id = "")
        {
            builder.Append("<button type = 'button' title='"+tooltip +"' class='btn " + classStyle + " btn-booking' ");
            if (onClick != "")
                builder.Append(" onClick=\"" + onClick + "\" ");
            if (id != "")
                builder.Append(" id='" + id + "' ");
            builder.Append(">" + text + "</button>");
        }
        private void RenderButtonUnique(ReservasRow aux, int resourceId, DateTime d)
        {
            renderButton("btn-success ", aux.Hora, aux.Turno, "Booking.SendBookinRequest('" + d.ToString("yyyyMMdd") +
                            "'," + resourceId + ",'','" + aux.Turno + "'," + aux.Duracion + "," + aux.Inicio + "," + aux.IdTurnosEspeciales + ")");

        }
        public void renderHeader(List<DateTime> days)
        {
            builder.Append("<tr id='headerTable'>" +
                "<th>Fecha</th>" +
                "<th>Turno</th>" +
                "</tr>");
            ;
        }
        public void renderRows(int resourceId)
        {
            bool disponible = true;
            bool firstRow = true;

            DateTime fecha = DateTime.Today;
            DateTime d = DateTime.Today.AddDays(-30);
            int contador = 0;
            foreach (var aux in list)
            {
                if (d != aux.Fecha && disponible && !firstRow)
                {
                    builder.Append("</th>");
                    builder.Append("</tr>");
                    contador++;
                }

                if (aux.Estado == "No disponible")
                {

                    if (d != aux.Fecha)
                    {
                        disponible = false;
                        d = aux.Fecha.Value;
                        builder.Append("<tr>" +
                        "<th>" + aux.Fecha.Value.ToString("dd/mm") + "</th>");
                        builder.Append("<th>No disponible</th>");
                        builder.Append("</tr>");
                        firstRow = false;
                    }
                }
                else if (d != aux.Fecha)
                {
                    if (aux.Dias.Contains(((int)aux.Fecha.Value.DayOfWeek).ToString()))
                    {
                        d = aux.Fecha.Value;
                        disponible = true;
                        builder.Append("<tr>" +
                       "<th>" + aux.Fecha.Value.ToString("dd/MM") + "</th>" +
                       "<th>");
                        RenderButtonUnique(aux, resourceId, d);
                        firstRow = false;
                    }
                }
                else if (disponible)
                {
                    if (aux.Dias.Contains(((int)aux.Fecha.Value.DayOfWeek).ToString()))
                    {
                        RenderButtonUnique(aux, resourceId, d);
                        firstRow = false;
                    }
                }
            }
            if (disponible)
                builder.Append("</td></tr>");
        }
      
        public void EndTBody()
        {
            builder.Append("</tbody>");
        }

    }
}