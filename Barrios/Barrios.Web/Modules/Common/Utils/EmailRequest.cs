using Serenity.Services;
using System;

namespace Barrios.Modules.Common.Utils
{
   
   public class EmailRequest:ServiceRequest
    {

        public string ID { get; set; }
        public string Mails { get; set; }
        public string Message { get; set; }
        public string Subject { get; set; }
        public bool IsHTML { get; set; }
    }
}
