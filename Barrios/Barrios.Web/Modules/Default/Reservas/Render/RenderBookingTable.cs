using Barrios.Default.Entities;
using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace Barrios.Modules.Default.Entities
{
    public class RenderBookingTable: RenderBooking
    {
        string buttonRedClass = " btn-danger";
        string buttonBlueClass = "btn-info";
        string buttonGrayClass = "btn-default";
        string buttonGreenClass = "btn-success";
        int idUser = Convert.ToInt32(Serenity.Authorization.UserDefinition.Id);
        bool first = true;
        bool printButton = true;
        bool firstTurn = true;
        DateTime fecha = DateTime.Now.AddDays(-20);
        DateTime datePast = DateTime.Now.AddDays(-20);
        int turnAnterior = -2;
        bool vacanteEscrita = false;
        DateTime pastDay = DateTime.Now.AddDays(-10);
        List<ReservasRow> list ;
        int count = 0;
        string[] dateNames = new string[7] { "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" };

        StringBuilder builder;

        public string getHTML() {
            return builder.ToString();
        }
        public RenderBookingTable(List<ReservasRow> list)
        {
            builder = new StringBuilder();
            this.list = list;
        }
        public void renderButton(string classStyle,string text,string onClick="",string id="")
        {
            builder.Append("<button type = 'button' class='btn " + classStyle + " btn-booking' ");
            if (onClick != "") 
                builder.Append(" onClick=\"" + onClick + "\" ");
            if (id != "")
                builder.Append(" id='" + id + "' ");
            builder.Append(">" + text + "</button>");
        }
        public void renderPanel(string classStyle, string text)
        {
            builder.Append("<section class='" + classStyle + " panelNoDisponible' >"+ text+" </section>");
        }
        public void InitTBody()
        {
            builder.Append("<tbody>");
        }
        public void renderHeader(List<DateTime> days)
        {
            int count = 0;
            builder.Append("<tr id='headerTable'><th class='column0'></th>");
            foreach (var aux in days)
            {
                count++;
                builder.Append("<th class='header-cell column" + count + "'>");
                if (count != 1)
                    renderButton("btn-slide-left btn-info", "<", "Booking.moveDisplay('column" + count + "','column" + (count - 1) + "')");
                builder.Append(dateNames[(int)aux.DayOfWeek] +" "+aux.Day);
                if (count < days.Count)
                    renderButton("btn-slide-right btn-info", ">", "Booking.moveDisplay('column" + count + "','column" + (count + 1) + "')");
                builder.Append(" </th>");
            }

            builder.Append("</tr>");
        }
        public void renderRows(int resourceId)
        {
            foreach (var aux in list)
            {
                var date = aux.Fecha.Value;
                if (turnAnterior != aux.Inicio)
                {
                    if (!first)
                    {
                        builder.Append("</tr>");

                    }
                    count = 0;
                    builder.Append("<tr><td class='column" + count + "'>" + aux.Turno + "</td>");
                    fecha = aux.Fecha.Value;
                    pastDay = aux.Fecha.Value;
                    vacanteEscrita = false;
                    first = false;
                    printButton = true;
                    firstTurn = true;
                    turnAnterior = aux.Inicio.Value;
                }
                if (pastDay != date && !firstTurn)
                {
                    builder.Append("</td>");
                    firstTurn = true;
                }
                /* while (days[indexDay] != date)
                 {
                     builder.Append("<td></td>");
                     indexDay++;
                     firstTurn = true;
                 }*/
                if (firstTurn)
                {
                    count++;
                    builder.Append("<td class='column" + count + "'>");
                    firstTurn = false;
                }
                if (aux.Finalizado.Value)
                {
                    if (pastDay != date)
                        pastDay = date;
                }
                else
                {
                    if (aux.Reservable.Value)
                    {
                        if (1 == 1)// Condicionales segun el barrio
                        {
                            if (aux.Estado == "Disponible" && aux.Valido.Value)
                            {
                                renderButton(buttonGreenClass, aux.Tipo ,"Booking.bookingsTake(this," + resourceId + ", '" + date.ToString("yyyyMMdd") + "'," +
                                    aux.Inicio + "," + aux.IdTipo + "," + aux.Required_Vecino.ToString().ToLower() + ")");
                            }
                        }
                        else
                        {
                            builder.Append("<button title = 'Bloqueado' type = 'button' class='btn btn-default btn-flat'><i class='fa fa-align-center'>No disponible</i></button>");
                        }
                    }
                    else if (aux.Estado == "Vacante")
                    {
                        if (!vacanteEscrita)
                        {
                            renderButton(buttonGrayClass, "Vacante" );
                            vacanteEscrita = true;
                        }
                    }
                    else if (aux.IdVecino == idUser)
                    {
                        if (printButton)
                        {
                            printButton = false;
                            if (!aux.IdVecinoUnidadExtra.IsEmptyOrNull())
                                renderPanel(buttonGrayClass, aux.TipoReservaHecha + " <br>con lote " + aux.IdVecinoUnidadExtra );
                            else
                                renderPanel(buttonGrayClass, aux.TipoReservaHecha + " <br>(reserva propia)");

                        }
                    }
                    else if (aux.IdVecino2 == idUser)
                    {
                        if (turnAnterior != aux.Inicio && datePast != fecha)
                            renderPanel(buttonGrayClass, aux.TipoReservaHecha + " con lote " + aux.IdVecinoUnidad );
                    }
                    else
                    {
                        if (printButton)
                        {
                            printButton = false;
                            if (!aux.IdVecinoUnidadExtra.IsEmptyOrNull())
                                renderPanel(buttonRedClass, aux.TipoReservaHecha + "<br>" + aux.IdVecinoUnidad + " y " + aux.IdVecinoUnidadExtra );
                            else
                                renderPanel(buttonRedClass, aux.TipoReservaHecha + "<br>" + aux.IdVecinoUnidad );
                        }
                    }
                }
                pastDay = date;
                turnAnterior = aux.Inicio.Value;
            }
            builder.Append("</td></tr>");
        }
        public void EndTBody()
        {
            builder.Append("</tbody>");
        }

    }
}