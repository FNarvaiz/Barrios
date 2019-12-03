namespace Barrios.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String Unit { get; set; }
        
        public short subBarrioId { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        public String Email_Others { get; set; }
        public bool IsActive { get; set; }
        [OneWay]
        public string Source { get; set; }
        [Hidden,CheckLookupEditor("Administration.Barrios", ShowSelectAll = true, CheckedOnTop = true)
          , DisplayName("Barrios")]
        public List<Int32> ClientIdList { get; set; }
        
    }
}