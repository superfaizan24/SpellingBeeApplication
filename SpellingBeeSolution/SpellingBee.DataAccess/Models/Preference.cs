using DataAccessLibrary;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DataAccessLibrary
{
    public class Preference 
    {
        public int PreferenceId { get; set; }
        public Boolean DarkTheme { get; set; }
        public Boolean Notifications { get; set; }
        public string Reminder { get; set; }
        public string Volume { get; set; }
        public int Difficulty { get; set; }



    }
}