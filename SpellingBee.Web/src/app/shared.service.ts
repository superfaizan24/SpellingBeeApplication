import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
private apiUrl = "http://localhost/api/user/RegisterUser";

  constructor(private http: HttpClient) { }


  registerUser(firstname: string, lastname: string, email:string, password:string) {
    return this.http.post(this.apiUrl, {
      firstname,
      lastname,
      email,
      password
    });
  }
}
