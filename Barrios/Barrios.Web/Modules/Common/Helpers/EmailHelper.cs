using System.Web.Hosting;
using System.IO;
using System.Net.Mail;
using System.Net;
using System;
using System.Collections.Generic;
using Serenity;
using Barrios.Modules.Common.Utils;
using System.Data;
using Barrios.Administration.Entities;
using Barrios.Default.Endpoints;
using Barrios.Default.Entities;
using Barrios.Modules.Default.Reservas;

namespace Barrios.Common
{
    public class EmailHelper
    {
        public static ReservasRow GetReservaRowForBody(BookingTakeRequest request, UserRow user, DateTime date,string resourceName)
        {
            return new ReservasRow
            {
                IdRecursoNombre = resourceName,
                Hora = request.turnStart.MinutesToString(),
                Turno = request.turnName,
                IdTipo=request.turnType,
                Observaciones = request.comment,
                Fecha = date,
                IdVecinoUsername = user.DisplayName,
                IdVecinoUnidad = user.Unit
            };
        }
        public static string GetRenderMails(string emailsResource,UserRow user,UserRow user2=null)
        {
            string emails = "";
            if (emailsResource.IsEmptyOrNull())
                emails = CurrentNeigborhood.Get().Mail;
            else
                emails = SplitAndCheckMail(emailsResource);
            
            emails = emails + UserMails(user);
            emails = emails + UserMails(user2);

            return emails;
        }
        private static string UserMails(UserRow user)
        {
            string mails = "";
            if (user != null)
            {
                mails = "," + user.Email;
                if (user.Email_Others.IsEmptyOrNull())
                    mails = mails + "," + SplitAndCheckMail(user.Email_Others);
            }
            return mails;
        }
        private static string SplitAndCheckMail(string emails)
        {
            string mails = "";
            if (emails != null) 
                foreach(string mail in emails.Split('\n'))
                    if (mail.Contains("@"))
                        mails = mails + "," + mail;
            return mails;
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
                {
                    if (!string.IsNullOrEmpty(mail))
                        message.To.Add(new MailAddress(mail.Trim(), ""));
                }
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
            if (CurrentNeigborhood.Local)
            {
                client.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;

                if (client.DeliveryMethod == SmtpDeliveryMethod.SpecifiedPickupDirectory &&
                    string.IsNullOrEmpty(client.PickupDirectoryLocation))
                {
                    var pickupPath = HostingEnvironment.MapPath("~/App_Data");
                    pickupPath = Path.Combine(pickupPath, "Mail");
                    Directory.CreateDirectory(pickupPath);
                    client.PickupDirectoryLocation = pickupPath;
                }
            }
            try
            {
                client.Send(message);
            }
            catch (Exception ex)
            {
                ex.Source = "HOST: " + client.Host + " Credentials: " + from + " pass: " + CurrentNeigborhood.Get().PasswordMail;
                throw ex;
            }
        }
    }
}