
using System.Collections.Generic;
using Newtonsoft.Json;
using Serenity.Data;
using Serenity.Services;

namespace Barrios.Modules.Common.ImportFile
{
    public class ImportFileRequest : ServiceRequest
    {
        public string FileName{ get; set; }
    }
}
