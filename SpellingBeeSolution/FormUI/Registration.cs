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
    public partial class RegistrationScreen : Form
    {
        public RegistrationScreen()
        {
            InitializeComponent();
        }


        private void CreateAccountButton_Click_1(object sender, EventArgs e)
        {
            DataAccess db = new DataAccess();

            db.RegisterUser(FirstNameField.Text, LastNameField.Text, EmailField.Text, PasswordField.Text);

            FirstNameField.Text = "";
            LastNameField.Text = "";
            EmailField.Text = "";
            PasswordField.Text = "";
        }
    }
}
