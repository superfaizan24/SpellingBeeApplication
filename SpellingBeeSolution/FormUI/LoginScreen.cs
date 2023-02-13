using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using DataAccessLibrary;


namespace FormUI
{
    public partial class LoginScreen : Form
    {
       
        public LoginScreen()
        {
            InitializeComponent();
        }
        private void UpdateBinding()
        {
            
            LoginResultsBox.DisplayMember= "FullInformation";
        }
        private void Login_Click(object sender, EventArgs e)
        {
            DataAccess db = new DataAccess();
            db.UserLogin(EmailField.Text, PasswordField.Text);

            UpdateBinding();
        }
    }
}
