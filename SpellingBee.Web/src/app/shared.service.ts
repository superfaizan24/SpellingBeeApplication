import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SharedService {
private apiUrl = "http://localhost/api/";

  constructor(private http: HttpClient) { }


  registerUser(firstname: string, lastname: string, email:string, password:string) {
     return this.http.post<any[]>(this.apiUrl+'user/RegisterUser', {FirstName: firstname,
          LastName: lastname, Email: email, Password: password}, { withCredentials: true }).pipe();
  }

  loginUser(email:string, password:string) {
    return this.http.post<any[]>(this.apiUrl+'user/LoginUser', {email, password}, { withCredentials: true }).pipe();
  }

  deleteAccount(email:string, password:string, DeleteAccountYN:boolean) {
    return this.http.post<any[]>(this.apiUrl+'user/DeleteAccount', {email, password, DeleteAccountYN}, { withCredentials: true }).pipe();
  }

  selectDifficulty(userPreference: any): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}preference/SelectDifficulty`, userPreference, { withCredentials: true });
  }

  updatePhoneNumber(email:string, password:string, phoneNumber:string) {
    return this.http.post<any[]>(this.apiUrl+'user/UpdatePhoneNumber', {email, password, phoneNumber}, { withCredentials: true }).pipe();
  }

  enableNotifications(userPreference:any) {
    return this.http.post<any[]>(this.apiUrl+'preference/EnableNotifications', {userPreference}, { withCredentials: true }).pipe();
  }

  updateReminderFrequency(userPreference: any) {
    return this.http.post<any[]>(this.apiUrl+'preference/UpdateReminderFrequency', {userPreference}, { withCredentials: true }).pipe();
  }
  
  setTheme(userPreference: any) {
    return this.http.post<any[]>(this.apiUrl+'preference/SetTheme', {userPreference}, { withCredentials: true }).pipe();
  }
}
