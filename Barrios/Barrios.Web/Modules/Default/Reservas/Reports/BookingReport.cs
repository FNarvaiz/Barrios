using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Barrios.Default.Entities;
using Barrios.Default.Repositories;
using Barrios.Modules.Common.Utils;
using MVC;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Reporting;
using Serenity.Services;

namespace Barrios.Modules.Default.Reservas.Reports
{
    [Report("Booking.Report")]
    [ReportDesign(Views.Default.Reservas.Reports.BookingReport)]
    //[RequiredPermission(Permission.Ncpdp.Rebate_User)]
    public class BookingReport : IReport, ICustomizeHtmlToPdf, ICustomFileName
    {
        public ListRequest request { get; set; }
        
        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
            options.Landscape = true;
            options.MarginBottom = "0.25cm";
            options.MarginTop = "0.75cm";
            options.MarginRight = "0.25cm";
            options.MarginLeft = "0.25cm";
            options.UsePrintMediaType = true;
            options.SmartShrinking = true;
            options.PrintBackground = true;
            options.PageSize = "A4";
            //options.Zoom = "0.01";
        }
        public object GetData()
        {
            
            using (var connection = Utils.GetConnection())
                return new ReservasRepository().List(connection, request);
        }
        public string GetFileName()
        {
            return "ReporteDeReservas_" + DateTime.Today.ToString("yyyyMMdd");
        }
        
       
        
    }
  
}
