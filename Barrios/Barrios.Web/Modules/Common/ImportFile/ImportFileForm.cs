
namespace Barrios.Common
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.ImportFile")]
    public class ImportFileForm
    {
        [FileUploadEditor,DisplayFormat("Archivo"), Required]
        public String FileName { get; set; }
    }
}