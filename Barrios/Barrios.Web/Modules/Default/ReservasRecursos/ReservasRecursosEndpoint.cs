
namespace Barrios.Default.Endpoints
{
    using Barrios.Modules.Common.ImportFile;
    using Barrios.Modules.Common.Utils;
    using Barrios.Modules.ImportFiles;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Web.Mvc;
    using MyRepository = Repositories.ReservasRecursosRepository;
    using MyRow = Entities.ReservasRecursosRow;

    [RoutePrefix("Services/Default/ReservasRecursos"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ReservasRecursosController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (request.Entity.ClientIdList==null)
                request.Entity.ClientIdList = new System.Collections.Generic.List<int>();
            request.Entity.ClientIdList.Add(CurrentNeigborhood.Get().Id.Value);
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            if (new Repositories.ReservasRepository().HasBookings(request.EntityId))
                throw new ValidationError("El recurso tiene reservas realizadas. No se puede eliminar.");
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }
        [HttpPost]
        public string ImportFile(IDbConnection connection, ImportFileRequest request)
        {
            Int16 errors = 0;
            Int16 success = 0;
            List<MyRow> resources = new List<MyRow>();

            using (StreamReader sr = new StreamReader(UploadHelper.DbFilePath(request.FileName)))
            {

                string line;
                Random random = new Random();
                while (sr.Peek() >= 0)
                {
                    
                    line = sr.ReadLine();

                    
                        string[] lineSplit = line.Split(',');

                        MyRow resource = ImportMethods.GetResource(resources, Convert.ToInt16(lineSplit[0]));
                        if (resource == null)
                        {
                            resource = new MyRow()
                            {
                                AppHoldId = Convert.ToInt16(lineSplit[0]),
                                Nombre = lineSplit[1],
                                Apertura = Convert.ToInt16(lineSplit[2]),
                                Cierre = Convert.ToInt16(lineSplit[3]),
                                Resolucion = Convert.ToInt16(lineSplit[4]),
                                Tipo = Convert.ToInt16(lineSplit[5]),
                                Hasta=6,
                                Desde=1
                            };
                            resources.Add(resource);
                        }

                        if (resource.Resolucion == 0) {
                            if (resource.SpecialTurnList == null)
                                resource.SpecialTurnList = new List<Entities.ReservasTurnosEspecialesRow>();
                            resource.SpecialTurnList.Add(new Entities.ReservasTurnosEspecialesRow()
                            {
                                Nombre = lineSplit[10],
                                Duracion = Convert.ToInt16(lineSplit[11]),
                                Inicio = Convert.ToInt16(lineSplit[12]),
                                Dias =lineSplit[13],
                                
                            });
                        }
                        else
                        {
                            if (resource.TypeList == null)
                                resource.TypeList = new List<Entities.ReservasTiposRow>();
                            resource.TypeList.Add(new Entities.ReservasTiposRow()
                            {
                                Nombre= lineSplit[6],
                                Duracion= Convert.ToInt16(lineSplit[7]),
                                Vigente= lineSplit[8].Trim()=="True" || lineSplit[9].Trim() == "1" ? true:false,
                                RequiereVecino2= lineSplit[9].Trim() == "1" || lineSplit[9].Trim() == "True" ? true :false
                            });
                        }


                        
                   
                    // user
                }
                
            }
            foreach (var aux in resources) {
                try
                {
                    using (var connection2 = Utils.GetConnection())
                    {
                        using (var UOW = new UnitOfWork(connection2))
                        {
                            Create(UOW, new SaveRequest<MyRow>() { Entity = aux });
                            UOW.Commit();
                            success++;


                        }
                    }
                }
                catch (Exception e)
                {
                    errors++;
                    Log.Error("Error al cargar esta linea:" + aux.Nombre, e, typeof(ReservasRecursosController));
                }
            }
            return "Se cargaron correctamente " + success + ". Y hubo una candidad de " + errors + " con errores que no se cargaron";
        }
        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            Utils.AddNeigborhoodFilter(request);
            return new MyRepository().List(connection, request);
        }
        public List<MyRow> ListOfAllowedResources(IDbConnection connection)
        {
            return new MyRepository().ListOfAllowedResources(connection);
        }
        
    }
}
