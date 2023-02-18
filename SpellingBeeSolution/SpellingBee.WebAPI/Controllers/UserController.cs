using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccessLibrary;


namespace SpellingBeeApi.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {


        [HttpGet]
        [Route("GetUserName")]
        public string GetUserName()
        {
            return "Sample message";
        }

        //[Route("registeruser")]
        
        [Route("RegisterUser")]
        [HttpPost]
        public string RegisterUser([FromBody] User model)
        {
           DataAccess db = new DataAccess();
           Boolean registrationOutput = db.RegisterUser(model.FirstName, model.LastName, model.Email,model.Password);

            if (registrationOutput)
                return "Account created successfully!!";

            else
            {
                return "This account already exists";
            }
            
        }

        // PUT: api/User/5
        //[Route("updatephonenumber")]
        [HttpPut]
        public string UpdatePhoneNumber(string email, string password, string phoneNumber)
        {
            try
            {
                DataAccess db = new DataAccess();
                db.UpdatePhoneNumber(email, password, phoneNumber);

                return "Phone number updated successfully!!";
            }
            catch (Exception ex)
            {
                return $"Failed to update phone number {ex.Message}";
            }


        }

        // DELETE: api/User/5
        [HttpDelete]
        public string DeleteAccount(string email, string password)
        {
            try
            {
                DataAccess db = new DataAccess();
                db.DeleteAccount(email, password, true);

                return "Account deleted successfully!!";
            }
            catch (Exception ex)
            {
                return $"Failed to delete {ex.Message}";
            }


        }
    }
}