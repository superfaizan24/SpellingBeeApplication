using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using System.Data.SqlClient;
using DataAccessLibrary;
using System.Runtime.Remoting.Messaging;

namespace DataAccessLibrary
{
    public class DataAccess
    {
        
        public Boolean UserLogin(string email, string password) 
        {
            using (SqlConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                SqlCommand cmd = new SqlCommand("LoginUser", connection);
                cmd.CommandType= CommandType.StoredProcedure;
                cmd.Parameters.Add("@email", SqlDbType.Text).Value = email;
                cmd.Parameters.Add("@password", SqlDbType.Text).Value = password;
                cmd.Parameters.Add("@LoginOutput", SqlDbType.Int).Direction = ParameterDirection.ReturnValue;
                connection.Open();

                cmd.ExecuteNonQuery();
                int output = (int)cmd.Parameters["@loginOutput"].Value;

                if (output == 1)
                {
                    return true;
                }
                else
                    return false;
            }

        }

        public Boolean RegisterUser(string firstname, string lastname, string email, string password)
        {
            using (SqlConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                //connection.Query("dbo.RegisterUser @firstname, @lastname, @email, @password", new {firstname = firstname, lastname=lastname, email=email, password=password});

                SqlCommand cmd = new SqlCommand("RegisterUser", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@firstname", SqlDbType.Text).Value = firstname;
                cmd.Parameters.Add("@lastname", SqlDbType.Text).Value = lastname;
                cmd.Parameters.Add("@email", SqlDbType.Text).Value = email;
                cmd.Parameters.Add("@password", SqlDbType.Text).Value = password;
                cmd.Parameters.Add("@duplicateRegistration", SqlDbType.Int).Direction = ParameterDirection.ReturnValue;
                connection.Open();

                cmd.ExecuteNonQuery();
                int output = (int)cmd.Parameters["@duplicateRegistration"].Value;

                if (output == 1)
                {
                    return false;
                }
                else
                    return true;


            }
        }

        public List<Preference> SelectDifficulty(string email, string password, int difficulty)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                var output = connection.Query<Preference>("dbo.SelectDifficulty @email, @password, @difficulty", new {email = email, password=password, difficulty = difficulty }).ToList();
                return output;


            }
        }
        public List<Preference> DeleteAccount(string email, string password, Boolean deleteAccountYN)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                var output = connection.Query<Preference>("dbo.DeleteAccount @email, @password, @deleteaccount", new { email = email, password = password, deleteaccount = deleteAccountYN }).ToList();
                return output;


            }
        }

        public List<Preference> UpdatePhoneNumber(string email, string password, string phoneNumber)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                var output = connection.Query<Preference>("dbo.UpdatePhoneNumber @email, @password, @phonenumber", new { email = email, password = password, phonenumber = phoneNumber }).ToList();
                return output;


            }
        }

        public List<Preference> EnableNotifications(string email, string password, Boolean enableNotifications)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                var output = connection.Query<Preference>("dbo.enableNotification @email, @password, @enablenotifications", new { email = email, password = password, enablenotifications = enableNotifications }).ToList();
                return output;


            }
        }

        public List<Preference> UpdateReminderFrequency(string email, string password, string reminderFrequency)
        {
            using (IDbConnection connection = new System.Data.SqlClient.SqlConnection(Helper.CnnVal("SpellingBeeDB")))
            {
                var output = connection.Query<Preference>("dbo.SetReminderFrequency @email, @password, @reminderfrequency", new { email = email, password = password, reminderFrequency = reminderFrequency }).ToList();
                return output;


            }
        }


    }
}
