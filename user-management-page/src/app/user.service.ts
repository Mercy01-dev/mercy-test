import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  myValue: any = [];

  storeValues(
    name: AbstractControl,
    contact: AbstractControl,
    email: AbstractControl,
    password: AbstractControl
  ) {
    const data = {
      Name: name.value,
      contact: contact.value,
      email: email.value,
      password: password.value,
    };
    this.myValue = data;
    console.log(this.myValue);
  }
}

// export class EmployeeService{
//   private apiServerUrl='';

//   constructor(private http:HttpClient){}

//   public getEmployees():Observable<any> {
//     return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
