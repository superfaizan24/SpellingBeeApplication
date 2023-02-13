using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Web.Http;
using DataAccessLibrary;

namespace SpellingBeeApi.Controllers
{
    public class PreferenceController : ApiController
    {
        // GET: api/Preference
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Preference/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Preference

        [HttpPut]
        public string SelectDifficulty(string email, string password, int difficulty)
        {
            try
            {
                DataAccess db = new DataAccess();
                db.SelectDifficulty(email, password, difficulty);

                if (difficulty > 3 || difficulty < 1)
                    return "Invalid difficulty level";

                return "Difficulty level updated successfully!!";
            }
            catch(Exception ex)
            {
                return "Failed to update difficulty level";
            }


        }

        [HttpPut]
        public string EnableNotifications(string email, string password, Boolean enableNotifications)
        {
            try
            {
                DataAccess db = new DataAccess();
                db.EnableNotifications(email, password, enableNotifications);

                if (enableNotifications)
                    return "Notifiations enabled successfully!!";

                else
                    return "Notifications disabled succesfully";
            }
            catch (Exception ex)
            {
                return "Failed to change notification settings";
            }


        }

        [HttpPut]
        public string UpdateReminderFrequency(string email, string password, string reminderFrequency)
        {
            try
            {
                DataAccess db = new DataAccess();
                db.UpdateReminderFrequency(email, password, reminderFrequency);

                return "Reminder frequency updated successfully!!";
            }
            catch (Exception ex)
            {
                return "Failed to update reminder frequency!!";
            }


        }

        // DELETE: api/Preference/5
        public void Delete(int id)
        {
        }
    }
}
