
using Serenity.Extensibility;
using System.ComponentModel;

namespace Barrios.Default
{
    [NestedPermissionKeys]
    [DisplayName("Contenidos")]
    public class ContenidosPermissionKeys
    {
        [Description("Encuestas")]
        public const string Encuestas = "Contenidos:Encuestas";

        [Description("Proveedores")]
        public const string Proveedores = "Contenidos:Proveedores";

        [Description("Linea de tiempo")]
        public const string LineaDeTiempo = "Contenidos:LineaDeTiempo";

        [Description("Avisos")]
        public const string Avisos = "Contenidos:Avisos";

        [Description("Comisiones")]
        public const string Comisiones = "Contenidos:Comisiones";

        [Description("Buscar Lote")]
        public const string Location = "User:BuscarLote";

    }
}
