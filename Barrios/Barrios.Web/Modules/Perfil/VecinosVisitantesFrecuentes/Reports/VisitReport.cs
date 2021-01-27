using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Barrios.Perfil.Entities;
using Barrios.Perfil.Endpoints;
using Barrios.Modules.Common.Utils;
using MVC;
using Serenity;
using Serenity.ComponentModel;
using Serenity.Reporting;
using Serenity.Services;

namespace Barrios.Modules.Perfil.VecinosVisitantesFrecuentes.Reports
{
    [Report("Visit.Report")]
    [ReportDesign(Views.Perfil.VecinosVisitantesFrecuentes.Reports.VisitReport)]
    //[RequiredPermission(Permission.Ncpdp.Rebate_User)]
    public class VisitReport : IReport, ICustomizeHtmlToPdf, ICustomFileName
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
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.UseridUnit.Name);
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.UseridUsername.Name);
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.Nombre.Name);
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.Vehiculo.Name);
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.Tipo.Name);
            request.IncludeColumns.Add(VecinosVisitantesFrecuentesRow.Fields.Dni.Name);
            using (var connection = Utils.GetConnection())
            {
                ListResponse<VecinosVisitantesFrecuentesRow> response = new VecinosVisitantesFrecuentesController().List(connection, request);
                return response;
            }
        }
        public string GetFileName()
        {
            return "ReporteDeVisitantes_" + DateTime.Today.ToString("yyyyMMdd");
        }
        
       
        
    }
  
}
