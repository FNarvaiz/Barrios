using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Barrios.Modules.Default.Entities
{
    interface RenderBooking
    {
        void InitTBody();
        void renderHeader(List<DateTime> days);
        void renderRows(int resourceId,bool needComment);
        void EndTBody();
        string getHTML();


    }
}
