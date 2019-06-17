using System;

namespace Barrios.Modules.Common.Utils
{
   
   public interface IActivityClass
    {
        
        DateTime? DateInsert { get; set; }
        Int32? UserInsert { get; set; }
        DateTime? DateUpdate { get; set; }
        Int32? UserUpdate { get; set; }
    }
}
