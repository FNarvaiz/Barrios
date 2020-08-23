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
       
        private void RenderButtonUnique(ReservasRow aux, int resourceId, DateTime d,bool needComment)
        {
            renderButton("btn-success ", aux.Hora, aux.Turno, "Booking.SendBookinRequest('" + d.ToString("yyyyMMdd") +
                            "'," + resourceId + ",'','" + aux.Turno + "'," + aux.Duracion + "," + aux.Inicio + "," + aux.IdTurnosEspeciales + ","+ needComment.ToString().ToLower() + ")");

        }
        public void renderHeader(List<DateTime> days)
        {
            builder.Append("<tr id='headerTable'>" +
                "<th>Fecha</th>" +
                "<th>Turno</th>" +
                "</tr>");
            ;
        }
        public void renderRows(int resourceId, bool needComment)
        {
            bool firstRow = true;

            DateTime fecha = DateTime.Today;
            DateTime d = DateTime.Today.AddDays(-30);
            int contador = 0;
            foreach (var aux in list)
            {
                if (d != aux.Fecha && !firstRow)
                {
                    builder.Append("</th>");
                    builder.Append("</tr>");
                    firstRow = false;
                    contador++;
                }
                if (d != aux.Fecha)
                {
                    d = aux.Fecha.Value;
                    builder.Append(writeDateLabel(aux.Fecha.Value));
                   
                }
                if (aux.Estado == "No disponible")
                {
                    if (aux.IdVecino != null)
                    {
                        if(CurrentNeigborhood.Get().VerUserEnReservas.Value)
                            builder.Append("<div class='btn-danger not-Available'> " + aux.Turno + " U: " + aux.IdVecinoUnidad + "</div>");
                        else
                            builder.Append("<div class='btn-danger not-Available'> " + aux.Turno +"</div>");
                    }
                }
                else
                    RenderButtonUnique(aux, resourceId, d, needComment);
            }
           
            if (!firstRow)
            {
                builder.Append("</th>");
                builder.Append("</tr>");
            }
        }
        public string writeDateLabel(DateTime date)
        {
            return "<tr>" +
                    "<th>" + date.ToString("dd/MM") + "</th>" +
                    "<th>";
        }
        public void EndTBody()
        {
            builder.Append("</tbody>");
        }

    }
}