
namespace Barrios.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserColumns
    {
        [EditLink, AlignRight, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(70)]
        public String Unit { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }

        public String Phone { get; set; }
        [Width(250)]
        public String Email { get; set; }


        [Width(100)]
        public String Source { get; set; }
        [DisplayName("Registrado")]
        public DateTime InsertDate { get; set; }
        public short HavePermisions { get; set; }
        public bool IsActive { get; set; }
        [Hidden]
        public int AppHoldId;
    }
}
