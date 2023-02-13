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
    public partial class DifficultySelectionScreen : Form
    {
        public DifficultySelectionScreen()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            DataAccess db = new DataAccess();
            db.SelectDifficulty(EmailField.Text, PasswordField.Text, int.Parse(DifficultySelectionBox.Text));
            Environment.Exit(0);

        }
    }
}
