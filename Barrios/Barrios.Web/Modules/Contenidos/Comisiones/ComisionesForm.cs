
namespace Barrios.Contenidos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Barrios.Contenidos.Entities;

    [FormScript("Contenidos.Comisiones")]
    [BasedOnRow(typeof(Entities.ComisionesRow), CheckNames = true)]
    public class ComisionesForm
    {
        public String Nombre { get; set; }
        public String Mails { get; set; }
        
        [ ComisionesIntegrantesGrid]
        public List<ComisionesIntegrantesRow> MembersList { get; set; }
        public Boolean Habilitada { get; set; }
    }
}