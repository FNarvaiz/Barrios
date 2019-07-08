using System.Web.Hosting;
using System.IO;
using System.Net.Mail;
using System.Net;
using System;

namespace Barrios.Common
{
    public class EmailHelper
    {
        public static void Send(string subject, string body, string address, string displayName = "", string from = "group_email@domain.com")
        {
            
            var message = new MailMessage();
            message.To.Add(new MailAddress(address, ""));
            message.Subject = subject;
            message.Body = body;
            message.IsBodyHtml = true;
            message.From = new MailAddress(from, displayName);
            var client = new SmtpClient("mail." + CurrentNeigborhood.Get().Url, 25);
            client.Credentials = new NetworkCredential(from, CurrentNeigborhood.Get().PasswordMail);
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.EnableSsl = false;
            /*if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                string.IsNullOrEmpty(client.PickupDirectoryLocation))
            {
                var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                pickupPath = Path.Combine(pickupPath, "Mail");
                Directory.CreateDirectory(pickupPath);
                client.PickupDirectoryLocation = pickupPath;
            }*/
            try
            {
                client.Send(message);
            }
            catch(Exception ex)
            {
                ex.Source ="HOST: " + client.Host + " Credentials: " + from + " pass: " + CurrentNeigborhood.Get().PasswordMail;
                throw ex;
            }
        }
    }
}