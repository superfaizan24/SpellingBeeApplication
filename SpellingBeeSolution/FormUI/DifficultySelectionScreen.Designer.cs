using System.Windows.Forms;

namespace FormUI
{
    partial class DifficultySelectionScreen
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
            this.DifficultySelectionBox = new System.Windows.Forms.ComboBox();
            this.button1 = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.EmailField = new System.Windows.Forms.TextBox();
            this.PasswordField = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(309, 19);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(199, 37);
            this.label1.TabIndex = 0;
            this.label1.Text = "Select Difficulty";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(194, 239);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(128, 37);
            this.label2.TabIndex = 1;
            this.label2.Text = "Difficulty:";
            // 
            // DifficultySelectionBox
            // 
            this.DifficultySelectionBox.FormattingEnabled = true;
            this.DifficultySelectionBox.Items.AddRange(new object[] {
            "1",
            "2",
            "3"});
            this.DifficultySelectionBox.Location = new System.Drawing.Point(368, 239);
            this.DifficultySelectionBox.Name = "DifficultySelectionBox";
            this.DifficultySelectionBox.Size = new System.Drawing.Size(280, 45);
            this.DifficultySelectionBox.TabIndex = 2;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(368, 336);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(169, 52);
            this.button1.TabIndex = 3;
            this.button1.Text = "Confirm";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(194, 170);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(134, 37);
            this.label3.TabIndex = 4;
            this.label3.Text = "Password:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(194, 103);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(88, 37);
            this.label4.TabIndex = 5;
            this.label4.Text = "Email:";
            // 
            // EmailField
            // 
            this.EmailField.Location = new System.Drawing.Point(368, 100);
            this.EmailField.Name = "EmailField";
            this.EmailField.Size = new System.Drawing.Size(280, 43);
            this.EmailField.TabIndex = 6;
            // 
            // PasswordField
            // 
            this.PasswordField.Location = new System.Drawing.Point(368, 170);
            this.PasswordField.Name = "PasswordField";
            this.PasswordField.Size = new System.Drawing.Size(280, 43);
            this.PasswordField.TabIndex = 7;
            // 
            // DifficultySelectionScreen
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(15F, 37F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.PasswordField);
            this.Controls.Add(this.EmailField);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.DifficultySelectionBox);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "DifficultySelectionScreen";
            this.Text = "SelectDifficulty";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Label label1;
        private Label label2;
        private ComboBox DifficultySelectionBox;
        private Button button1;
        private Label label3;
        private Label label4;
        private TextBox EmailField;
        private TextBox PasswordField;
    }
}