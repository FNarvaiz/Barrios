using System.Web.Hosting;
using System.IO;
using System.Net.Mail;
using System.Net;
using System;
using System.Collections.Generic;
using Serenity;
using Barrios.Modules.Common.Utils;
using System.Data;

namespace Barrios.Common
{
    public class EmailHelper
    {
        public static string GetRenderMails(string emails,string userMail)
        {
            if (emails.IsEmptyOrNull())
                emails = CurrentNeigborhood.Get().Mail;
            else
                emails = emails.Replace("\n", ",");
            emails = emails + "," + userMail;
            return emails;
        }
        public static void Send(string subject, string body, string addressString, string displayName = "", string from = "group_email@domain.com", List<MailAddress> address =null, string file="")
        {
            
            var message = new MailMessage();
            if (!file.IsNullOrEmpty()) {
                Attachment data = new Attachment(HostingEnvironment.MapPath("~/App_Data") + "/Upload/" + file);
                data.Name = "ArchivoAdjunto";
                message.Attachments.Add(data);
            }
            if (address == null)
                foreach (var mail in addressString.Split(','))
                    message.To.Add(new MailAddress(mail.Trim(), ""));
            else
                foreach (var mail in address)
                    message.Bcc.Add(mail);
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