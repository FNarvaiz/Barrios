
namespace Barrios.Perfil.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Perfil.VecinosEventosConcurrentes")]
    [BasedOnRow(typeof(Entities.VecinosEventosConcurrentesRow), CheckNames = true)]
    public class VecinosEventosConcurrentesForm
    {
        public String Nombre { get; set; }
       
        
    }
}