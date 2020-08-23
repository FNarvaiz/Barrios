using Barrios.Administration.Entities;
using Barrios.Default.Endpoints;
using Barrios.Default.Entities;
using Barrios.Modules.Common.Utils;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Barrios.Modules.ImportFiles
{
    public static class ImportMethods
    {
        public static UserRow GetHoldUser(List<UserRow> list, int?  idVecino)
        {
            foreach (var aux in list)
            {
                if (aux.AppHoldId == idVecino)
                    return aux;
            }
            throw new Exception("No se encontro el usuario con el id viejo de: " + idVecino);
        }
        public static ReservasRecursosRow GetResource(List<ReservasRecursosRow> list, Int16 idResource)
        {
            foreach (var aux in list)
                if (aux.AppHoldId == idResource)
                    return aux;
            return null;
        }
        public static ReservasRecursosRow GetLoadResource(ReservasRecursosRow obj)
        {
            return new ReservasRecursosController().Retrieve(Utils.GetConnection(), new RetrieveRequest() { EntityId = obj.Id }).Entity;
        }
        public static ReservasTurnosEspecialesRow GetBookingTurn(ReservasRecursosRow resource,ReservasRow obj)
        {
            if (resource.SpecialTurnList==null)
                resource = GetLoadResource(resource);
            foreach(var aux in resource.SpecialTurnList)
            {
                if (aux.Inicio == obj.Inicio)
                    return aux;
            }
            throw new Exception("No se encontro el turno con el inicio: " + obj.Inicio+ " duracion: " + obj.Duracion + " dia: " + obj.Fecha.Value.DayOfWeek.ToString());
        }
      
        public static ReservasTiposRow GetBookingType(ReservasRecursosRow resource, ReservasRow obj)
        {
            if (resource.TypeList == null)
                resource = GetLoadResource(resource);
            foreach (var aux in resource.TypeList)
            {
                if (aux.Duracion==obj.Duracion)
                    return aux;
            }
            throw new Exception("No se encontro el tipo de reserva con el inicio: " + obj.Inicio + " duracion: " + obj.Duracion + " dia: " + obj.Fecha.Value.DayOfWeek.ToString());
        }
    }
}