namespace FormUI
{
    partial class LoginScreen
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.EmailField = new System.Windows.Forms.TextBox();
            this.PasswordField = new System.Windows.Forms.TextBox();
            this.Login = new System.Windows.Forms.Button();
            this.LoginResultsBox = new System.Windows.Forms.ListBox();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(317, 111);
            this.label1.Margin = new System.Windows.Forms.Padding(6, 0, 6, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(88, 37);
            this.label1.TabIndex = 0;
            this.label1.Text = "Email:";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(317, 227);
            this.label2.Margin = new System.Windows.Forms.Padding(6, 0, 6, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(134, 37);
            this.label2.TabIndex = 1;
            this.label2.Text = "Password:";
            // 
            // EmailField
            // 
            this.EmailField.Location = new System.Drawing.Point(471, 104);
            this.EmailField.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.EmailField.Name = "EmailField";
            this.EmailField.Size = new System.Drawing.Size(368, 43);
            this.EmailField.TabIndex = 2;
            // 
            // PasswordField
            // 
            this.PasswordField.Location = new System.Drawing.Point(471, 227);
            this.PasswordField.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.PasswordField.Name = "PasswordField";
            this.PasswordField.Size = new System.Drawing.Size(368, 43);
            this.PasswordField.TabIndex = 3;
            // 
            // Login
            // 
            this.Login.Location = new System.Drawing.Point(471, 363);
            this.Login.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.Login.Name = "Login";
            this.Login.Size = new System.Drawing.Size(141, 53);
            this.Login.TabIndex = 4;
            this.Login.Text = "Login";
            this.Login.UseVisualStyleBackColor = true;
            this.Login.Click += new System.EventHandler(this.Login_Click);
            // 
            // LoginResultsBox
            // 
            this.LoginResultsBox.FormattingEnabled = true;
            this.LoginResultsBox.ItemHeight = 37;
            this.LoginResultsBox.Location = new System.Drawing.Point(231, 488);
            this.LoginResultsBox.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.LoginResultsBox.Name = "LoginResultsBox";
            this.LoginResultsBox.Size = new System.Drawing.Size(696, 448);
            this.LoginResultsBox.TabIndex = 5;
            // 
            // LoginScreen
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(15F, 37F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1500, 1041);
            this.Controls.Add(this.LoginResultsBox);
            this.Controls.Add(this.Login);
            this.Controls.Add(this.PasswordField);
            this.Controls.Add(this.EmailField);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Margin = new System.Windows.Forms.Padding(6, 7, 6, 7);
            this.Name = "LoginScreen";
            this.Text = "Login Page";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox EmailField;
        private System.Windows.Forms.TextBox PasswordField;
        private System.Windows.Forms.Button Login;
        private System.Windows.Forms.ListBox LoginResultsBox;
    }
}

