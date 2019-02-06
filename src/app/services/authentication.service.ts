import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  login (username: string, password: string) : string {
    if(username == 'admin' && password == 'admin'){
      localStorage.setItem("role", "1");
      return 'dashboard';
    } else if(username == 'coordinator' && password == 'coordinator') {
      localStorage.setItem("role", "2");
      return 'dashboard';
    } else if(username == 'patient' && password == 'patient'){
      localStorage.setItem("role", "3");
      return 'dashboard';
    } else {
      return '';
    }
  }
}
