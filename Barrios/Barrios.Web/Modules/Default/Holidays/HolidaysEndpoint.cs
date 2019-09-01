
namespace Barrios.Default.Endpoints
{
    using Barrios.Modules.Common.Utils;
    using Barrios.Modules.Default.Holidays;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.HolidaysRepository;
    using MyRow = Entities.HolidaysRow;

    [RoutePrefix("Services/Default/Holidays"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class HolidaysController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        [HttpPost]
        public string UpdateFromAPI(IDbConnection connection, IdRequest request)
        {
            int year = DateTime.Today.Year;
            int count= Convert.ToInt32(Utils.GetRequestString("Select count(*) from Holidays where YEAR(Day) = " + year).Rows[0][0]);
            if (count == 0)
            {
                List<HolidayAPIObj> list = new NoLaboralesAPI().GetHolidays(year);
                foreach (HolidayAPIObj aux in list)
                {
                    Enum.TryParse(aux.tipo, out Entities.TypeHolidays ApiType);
                    using (var UOW = Utils.GetUnitOfWork()) {
                        Create(UOW, new SaveRequest<MyRow>()
                        {
                            Entity = new MyRow()
                            {
                                Day = new DateTime(year,aux.mes, aux.dia),
                                Reason=aux.motivo,
                                ApiId= aux.id,
                                Type= ApiType
                            }
                        });
                        UOW.Commit();
                    }
                }
            }
            return "Actualizado"; 
        }
    }
}
