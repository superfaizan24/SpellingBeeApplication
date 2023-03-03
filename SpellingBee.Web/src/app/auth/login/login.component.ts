import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "src/app/shared.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [SharedService]
})
export class LoginComponent implements OnInit {
  public newUser = false;
  public loginForm: FormGroup;
  public show: boolean = false;
  public errorMessage: any;
  email: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private SharedService: SharedService
  ) {
    this.loginForm = this.fb.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, Validators.required],
    });
  }

  ngOnInit() {}

  onSignIn() {
    this.SharedService.loginUser(this.email, this.password).subscribe((res) => {
      if (res) {
        // Store user data and token in local storage
        localStorage.setItem('user', JSON.stringify(this.email));
        localStorage.setItem("isLoggedIn", "true");

        // Redirect user to home screen
        this.router.navigate(["/src/app/components/dashboard/default"]);
      } else {
        alert("Login was invalid");
      }
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  

  
}
