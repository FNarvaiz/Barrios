
namespace Barrios.Contenidos.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Contenidos.News")]
    [BasedOnRow(typeof(Entities.NewsRow), CheckNames = true)]
    public class NewsForm
    {
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public String Imagen { get; set; }
        public Boolean Vigente { get; set; }

    }
}