

namespace Barrios.Modules.Common.Utils
{
    using Newtonsoft.Json;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Text;
    static public class Utils
    {
        public static DataTable GetRequestString(IDbConnection connection, string cmdText)
        {
            using (IDbCommand cmd = connection.CreateCommand())
            {
                cmd.CommandType = CommandType.Text;
                cmd.CommandText = cmdText;
                cmd.CommandTimeout = 0;
                connection.EnsureOpen();
                using (var reader = cmd.ExecuteReader())
                {
                    var DT = new DataTable();
                    DT.Load(reader);
                    connection.Close();
                    return DT;
                }
            }
        }
        static public IEnumerable<TSource> DistinctBy<TSource, TKey>
            (this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            HashSet<TKey> seenKeys = new HashSet<TKey>();
            foreach (TSource element in source)
            {
                if (seenKeys.Add(keySelector(element)))
                {
                    yield return element;
                }
            }
        }
        /*static public int NextId(IDbConnection connection, string tableName)
        {
            DataTable DT = CommonMethods.GetRequestString(connection, "Select max(id) FROM "+tableName);
            if (DT.Rows[0][0] is DBNull)
                return 1;
            else
                return Convert.ToInt32(DT.Rows[0][0])+1;
        }*/
        static public void RegisterUserActivity(IActivityClass obj, bool IsNew)
        {
            if (IsNew)
            {
                obj.DateInsert = DateTime.Now;
                obj.UserInsert =Convert.ToInt32(Serenity.Authorization.UserDefinition.Id);
            }
            obj.DateUpdate = DateTime.Now;
            obj.UserUpdate = Convert.ToInt32(Serenity.Authorization.UserDefinition.Id);
        }
        /*static public List<GenericComboBoxRow> SelectColumnForLookup(string columnID, string columnDescription,string table)
        {
            IDbConnection connection = new SqlConnection(CommonMethods.getClientConnectionString("EIS"));
            DataTable DT = CommonMethods.GetRequestString(connection, "Select " + columnID + "," + columnDescription + " FROM " + table);
            List<GenericComboBoxRow> list = new List<GenericComboBoxRow>();
            foreach (System.Data.DataRow x in DT.Rows)
                list.Add(new GenericComboBoxRow((int?)x[0], x[1].ToString()));
            return list;
        }
        static public List<GenericComboBoxRow> SelectColumnForLookup(string columnID, string columnDescription, string where, string table)
        {
            IDbConnection connection = new SqlConnection(CommonMethods.getClientConnectionString("EIS"));
            DataTable DT = CommonMethods.GetRequestString(connection, "Select " + columnID + "," + columnDescription + " FROM " + table + " WHERE " + where);
            List<GenericComboBoxRow> list = new List<GenericComboBoxRow>();
            foreach (System.Data.DataRow x in DT.Rows)
                list.Add(new GenericComboBoxRow((int?)x[0], x[1].ToString()));
            return list;
        }
        static public List<GenericComboBoxRow> Status(string StatusGroup,string whereOthers = "")
        {
            IDbConnection connection =  new SqlConnection(CommonMethods.getClientConnectionString("EIS"));
            DataTable DT = CommonMethods.GetRequestString(connection, "Select id, status FROM STATUS WHERE  StatusGroup='" + StatusGroup+"' "+whereOthers);
            List<GenericComboBoxRow> list = new List<GenericComboBoxRow>();
            foreach (System.Data.DataRow x in DT.Rows)
                list.Add(new GenericComboBoxRow((int?)x[0], x[1].ToString()));
            return list;
        }
        static public List<FieldsNamesRow> FieldNames(string tableName)
        {
            IDbConnection connection =  new SqlConnection(CommonMethods.getClientConnectionString("EIS"));
            DataTable DT = CommonMethods.GetRequestString(connection, "select S.FieldName,S.Description from SystemInfoData S where (S.Selected=1 or S.FieldName='ColumnHeaderHeight' ) and S.TableName='" + tableName + "'");
            List<FieldsNamesRow> list = new List<FieldsNamesRow>();

            foreach (System.Data.DataRow x in DT.Rows)
                list.Add(new FieldsNamesRow((int?)x[0], x[1].ToString(), x[2].ToString()));
            return list;

        }*/
        static public string Criterios(string Json, string alias)
        {
            string Lines = "";
            int count = 0;

            if (Json != null)
            {
                JsonTextReader reader = new JsonTextReader(new StringReader(Json));
                while (reader.Read())
                {
                    if (reader.Value != null)
                    {
                        if (reader.Value.ToString().Contains("and"))
                        {
                            Lines = Lines + " " + reader.Value + " ";
                            count = 0;
                        }
                        else
                        {
                            if (count == 0)
                                Lines = Lines + " " + alias + "." + reader.Value + " ";
                            else if (count == 1)
                                Lines = Lines + " " + reader.Value + " ";
                            else
                            {
                                if (IsDate(reader.Value.ToString()) || !IsInteger(reader.Value.ToString()))
                                    Lines = Lines + " '" + reader.Value + "' ";
                                else
                                    Lines = Lines + " " + reader.Value + " ";
                            }
                            count++;
                        }
                    }
                }
            }
            return Lines;
        }
        static public Dictionary<string,string> Criterios(string Json)
        {
            Dictionary<string, string> list = new Dictionary<string, string>();
            string Key = "";
            int count = 0;

            if (Json != null)
            {
                JsonTextReader reader = new JsonTextReader(new StringReader(Json));
                while (reader.Read())
                {
                    if (reader.Value != null)
                    {
                        if (reader.Value.ToString().Contains("and"))
                            count = 0;
                        else
                        {
                            if (count == 0)
                                Key= reader.Value.ToString();
                            else if (count == 2)
                            {
                                float result;
                                if(IsInteger(reader.Value.ToString()))
                                    list[Key] = " " + reader.Value + " ";
                                else if (float.TryParse(reader.Value.ToString(), out result) && (reader.Value.ToString().Contains(".") || reader.Value.ToString().Contains(",")))
                                    list[Key] = " ROUND("+reader.Value.ToString().Replace(',','.')+",5) ";
                                else
                                    list[Key] = " '" + reader.Value + "' ";
                            }
                            count++;
                        }
                    }
                }
            }
            return list;
        }
        static public bool IsInteger(string text)
        {
            int myInt;
            return int.TryParse(text, out myInt);
        }
        static public bool IsDecimal(string text)
        {
            decimal obj;
            return Decimal.TryParse(text, out obj);
        }
        static  public bool IsDate(string text)
        {
            DateTime obj;
            return DateTime.TryParse(text, out obj);
        }
        

        #region shortcut query sql
        static public string OrderAndPagination(string defaultColumn, ListRequest request,string tableName="")
        {
            var sqlBuilder = new StringBuilder();
            if (request.Sort == null || request.Sort[0].Field == "View Details" || request.Sort[0].Field == "DeleteRow")
                sqlBuilder.AppendLine(" ORDER BY "+defaultColumn+" ");
            else
            {
                if (tableName != "" && request.Sort[0].Field=="Id")
                    sqlBuilder.AppendLine(" ORDER BY " + tableName + "." + request.Sort[0].Field);
                else
                    sqlBuilder.AppendLine(" ORDER BY " + request.Sort[0].Field);


                if (request.Sort[0].Descending)
                    sqlBuilder.AppendLine(" desc ");
            }
            sqlBuilder.Append(" OFFSET " + request.Skip + " ROWS FETCH NEXT " + request.Take + " ROWS only");
            return sqlBuilder.ToString();
        }
        /*static private int CalculateTotal<T>(string tableName,string conditions, ListResponse<T>  listResponse)
        {
            if(listResponse.Entities.Count< listResponse.Take)
                return listResponse.Entities.Count + listResponse.Skip;
            else
            {
                using (SqlConnection connection = new SqlConnection(CommonMethods.getClientConnectionString("EIS")))
                {
                    DataTable DT = CommonMethods.GetRequestString(connection, "select Count(id) from ["+ tableName + "] " + conditions);
                    return Convert.ToInt32(DT.Rows[0][0]);
                }
            }
        }
        public static ListResponse<T> SetResponseTakeAndSkip<T>(ListRequest request, string tableNameCount,string conditions, List<T> Entities = null, ListResponse<T> listResponse = null)
        {
            if (listResponse == null)
            {
                listResponse = new ListResponse<T>();
                listResponse.Entities = Entities;
            }
            listResponse.Take = request.Take;
            listResponse.Skip = request.Skip;
            listResponse.TotalCount = CalculateTotal(tableNameCount, conditions, listResponse);
            return listResponse;
        }

        #endregion


        #region Methods for classes with daughters lists
        public static void ActivateActivity<T>(int ActivateStatusID, List<T> list,string mailUser)
        {
            foreach (var aux in list)
                if (((MCTApplication.Ncpdp.Entities.IActivatedClass)aux).StatusId == ActivateStatusID && ((MCTApplication.Ncpdp.Entities.IActivatedClass)aux).ActivationDate == null)
                {
                    ((MCTApplication.Ncpdp.Entities.IActivatedClass)aux).ActivationUserId = mailUser;
                    ((MCTApplication.Ncpdp.Entities.IActivatedClass)aux).ActivationDate = DateTime.Now;
                }
        }*/
        /*public static List<SaveRequest<T>> AddRequest<T>(IUnitOfWork uow, List<T> list, Action<T> AddFatherRelationship)
        {
            List<SaveRequest<T>> requests = new List<SaveRequest<T>>();
            if (list.Count > 0)
            {
                int nextID = Utils.NextId(uow.Connection, ((IEntity)list[0]).Table);
                SaveRequest<T> req;

                for (int x = 0; x < list.Count; x++)
                {
                    if (((MCTApplication.Ncpdp.Entities.ISonClass)list[x]).Id == null)
                    {
                        req = new SaveRequest<T>();
                        ((MCTApplication.Ncpdp.Entities.ISonClass)list[x]).Id = nextID;
                        AddFatherRelationship(list[x]);
                        req.Entity = list[x];
                        req.EntityId = nextID;
                        nextID++;
                        requests.Add(req);
                        list.Remove(list[x]);
                        x--;
                    }
                }
            }
            return requests;
        }*/
        /*public static void RegisterChildrenActivity<T>( List<T> list)
        {
            for (int x = 0; x < list.Count; x++)
                if (((MCTApplication.Ncpdp.Entities.ISonClass)list[x]).Id == null)
                    Utils.RegisterUserActivity((MCTApplication.Ncpdp.Entities.IActivityClass)list[x], true);
                else
                    if(((MCTApplication.Ncpdp.Entities.ISonClass)list[x]).Modified!=null && ((MCTApplication.Ncpdp.Entities.ISonClass)list[x]).Modified.Value)
                        Utils.RegisterUserActivity((MCTApplication.Ncpdp.Entities.IActivityClass)list[x], false);
        }*/
       /* public static bool Exist<T>(T obj, List<T> list)
        {
            foreach (T aux2 in list)
                if (((Entities.ISonClass)obj).Id == ((Entities.ISonClass)aux2).Id)
                    return true;
            return false;
        }
        public static List<DeleteRequest> DeleteItems<T>(List<T> list, List<T> BeforeList)
        {
            List<DeleteRequest> listRequest = new List<DeleteRequest>();
            foreach (T aux in BeforeList)
            {
                if (!Exist(aux, list))
                {
                    DeleteRequest oDelete = new DeleteRequest();
                    oDelete.EntityId = ((Entities.ISonClass)aux).Id;
                    listRequest.Add(oDelete);
                }
            }
            return listRequest;
        }
        public static bool UpdateRequest<T>(IUnitOfWork uow, List<T> list, Func<IUnitOfWork, SaveRequest<T>, SaveResponse> UpdateRepository)
        {
            for (int x = 0; x < list.Count; x++)
            {
                if (((Entities.ISonClass)list[x]).Modified!=null && ((Entities.ISonClass)list[x]).Modified.Value)
                {
                    SaveRequest<T> req = new SaveRequest<T>();
                    req.Entity = list[x];
                    req.EntityId = ((Entities.ISonClass)list[x]).Id;
                    UpdateRepository(uow, req);
                }
            }
            return true;
        }*/
        #endregion
    }
    public class IdRequest : ServiceRequest
    {
        public Int32 Id { get; set; }
    }
    
    
}
