import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-register-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  providers: [SharedService]
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;

  @Input() log:any;
  firstname: string;
  lastname: string;
  email: string;
  password: string;

  constructor(private SharedService: SharedService) { }

  // onSubmit() {
  //   this.SharedService.registerUser(this.firstName, this.lastName, this.email, this.password)
  //     .subscribe(response => console.log(response));
  // }

  onSubmit(){
    this.SharedService.registerUser(this.firstname, this.lastname,  this.email, this.password).subscribe(res=>{
      alert(res.toString());
    });
  }

  

  ngOnInit() {
  } 



  showPassword() {
    this.show = !this.show;
  }

}
