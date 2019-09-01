using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.IO;
using Barrios.Modules.Default.Holidays;
using Newtonsoft.Json;
namespace Barrios.Modules.Default.Holidays
{
    public class NoLaboralesAPI
    {
        private string GetApi (int year)
        {
            HttpWebRequest request = WebRequest.Create($"https://nolaborables.com.ar/api/v2/feriados/{year}") as HttpWebRequest;
            request.Method = "GET";
            request.ContentType = "application/json; charset=utf-8";//"application/x-www-form-urlencoded"; 
            request.PreAuthenticate = false;
            string resp = "";
            HttpWebResponse response = request.GetResponse() as HttpWebResponse;
            if (response.StatusCode == HttpStatusCode.OK)
            {
                using (Stream responseStream = response.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(responseStream);
                    resp = reader.ReadToEnd();
                }
            }
            else
            {
                throw new Exception($"La API no respondio. Codigo de error: {response.StatusCode} " +
                    $"Mensaje: {response.StatusDescription} " );
            }
            return resp;
        }
        public List<HolidayAPIObj> GetHolidays(int year)
        {
            string json = GetApi(year);
            return JsonConvert.DeserializeObject<List<HolidayAPIObj>>(json);
             
        }

    }
}