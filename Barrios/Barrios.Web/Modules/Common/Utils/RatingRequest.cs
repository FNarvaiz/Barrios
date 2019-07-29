using Serenity.Services;
using System;

namespace Barrios.Modules.Common.Utils
{
   
   public class RatingRequest : ServiceRequest
   {
        public int ID { get; set; }
        public short Rating { get; set; }
        public string Note { get; set; }
    }
}
