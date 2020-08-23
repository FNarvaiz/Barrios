using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Web;
using System.IO;
namespace Barrios.Modules.Administration.Barrios
{
    public static class ImageUploader
    {
        public static void CreateFolder(string url)
        {
            if (!Directory.Exists(url))
                Directory.CreateDirectory(url);
        }
        public static void CheckNeigborhoodFolders(string url)
        {
            CreateFolder(url.Remove(url.Length-3,2));
            CreateFolder(url+ "android");
            CreateFolder(url + "android\\mipmap-hdpi");
            CreateFolder(url + "android\\mipmap-ldpi");
            CreateFolder(url + "android\\mipmap-mdpi");
            CreateFolder(url + "android\\mipmap-xhdpi");
            CreateFolder(url + "android\\mipmap-xxhdpi");
            CreateFolder(url + "android\\mipmap-xxxhdpi");
            CreateFolder(url + "android\\mipmap-xxxhdpi");
            CreateFolder(url + "ios");
            CreateFolder(url + "ios\\AppIcon.appiconset");
        }
        public static void UpdateLogo(string urlOriginal,string shortDiplayName)
        {
            string urlSave = urlOriginal.Substring(0, urlOriginal.IndexOf("App_Data"));
            urlSave = urlSave + "Content\\" + shortDiplayName  + "\\";
            CheckNeigborhoodFolders(urlSave);
            using (Image image = Image.FromFile(urlOriginal))
            {
                SaveImageRezible(image, urlSave, "favicon.ico", 32, 32, ImageFormat.Icon);
                SaveImageRezible(image, urlSave + "android\\", "playstore-icon.png", 512, 512, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-hdpi\\", "ic_launcher.png", 72, 72, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-ldpi\\", "ic_launcher.png", 36, 36, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-mdpi\\", "ic_launcher.png", 48, 48, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-xhdpi\\", "ic_launcher.png", 96, 96, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-xxhdpi\\", "ic_launcher.png", 144, 144, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "android\\mipmap-xxxhdpi\\", "ic_launcher.png", 192, 192, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\", "iTunesArtwork@1x.png", 512, 512, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\", "iTunesArtwork@2x.png", 1024, 1024, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\", "iTunesArtwork@3x.png", 1536, 1536, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-20x20@1x.png", 20, 20, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-20x20@2x.png", 40, 40, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-20x20@3x.png", 60, 60, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-29x29@1x.png", 29, 29, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-29x29@2x.png", 58, 58, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-29x29@3x.png", 87, 87, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-40x40@1x.png", 40, 40, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-40x40@2x.png", 80, 80, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-40x40@3x.png", 120, 120, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-60x60@2x.png", 120, 120, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-60x60@3x.png", 180, 180, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-76x76@1x.png", 76, 76, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-76x76@2x.png", 152, 152, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "Icon-App-83.5x83.5@2x.png", 167, 167, ImageFormat.Png);
                SaveImageRezible(image, urlSave + "ios\\AppIcon.appiconset\\", "ItunesArtwork@2x.png", 1024, 1024, ImageFormat.Png);
               
            }
        }
        public static void SaveImageRezible(Image image, string urlSave, string nameFile, int maxWidth, int maxHeight, ImageFormat imageFormat)
        {

            using (Image newImage = ScaleImage(image, maxWidth, maxHeight))
            {
                string url = urlSave + nameFile;
                newImage.Save(url, imageFormat);
            }
        }
        public static Image ScaleImage(Image image, int maxWidth, int maxHeight)
        {
            var ratioX = (double)maxWidth / image.Width;
            var ratioY = (double)maxHeight / image.Height;
            var ratio = Math.Min(ratioX, ratioY);

            var newWidth = (int)(image.Width * ratio);
            var newHeight = (int)(image.Height * ratio);

            var newImage = new Bitmap(newWidth, newHeight);

            using (var graphics = Graphics.FromImage(newImage))
                graphics.DrawImage(image, 0, 0, newWidth, newHeight);

            return newImage;
        }
        public static Image ByteToImage(Byte[] array)
        {
            if (array != null && array.Length > 0)
            {
                MemoryStream ms = new MemoryStream(array, 0, array.Length);
                ms.Write(array, 0, array.Length);
                Image returnImage = Image.FromStream(ms, true);
                return returnImage;
            }
            else
                return null;
        }
    }
}