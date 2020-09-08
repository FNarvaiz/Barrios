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
        [Required]
        public String Username { get; set; }
        [Required]
        public String DisplayName { get; set; }
        [Required]
        public String Units { get; set; }
        
        public short subBarrioId { get; set; }
        [EmailEditor,Required]
        public String Email { get; set; }
        public String UserImage { get; set; }
        public String Phone { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        public String Email_Others { get; set; }
        public DateTime TenantLimitDate { get; set; }

        public bool Owner { get; set; }
        public bool IsActive { get; set; }
        public string Note { get; set; }
        [OneWay]
        public string Source { get; set; }
        [Hidden,CheckLookupEditor("Administration.Barrios", ShowSelectAll = true, CheckedOnTop = true)
          , DisplayName("Barrios")]
        public List<Int32> ClientIdList { get; set; }
        
    }
}