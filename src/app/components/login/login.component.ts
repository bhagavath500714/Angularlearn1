import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AppComponent } from 'src/app/app.component';
import * as Constants from '../../common/constant';
import { MenuService } from 'src/app/services/menu.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public authenticationService: AuthenticationService, public appComponent: AppComponent, public snackBar: MatSnackBar, public menuService: MenuService) {
    this.menuService.setMenuDisplay(false);
   }
   userLandingPage: any;
   person:any = {};
   isValidUser:boolean = false;
   role: any;
   admin: any;
   coordinator: any;
   patient: any;
   blnDisplayMenu: any;
   hide = true;

  ngOnInit() {
  }

  public login() {
    this.menuService.setMenuDisplay(false);
    this.userLandingPage = this.authenticationService.login(this.person.username, this.person.password);
    if(null !=this.userLandingPage && '' !=this.userLandingPage){
      this.menuService.setMenuConfig(localStorage.getItem('role'));
      this.router.navigate([this.userLandingPage]);
    } else {
      this.isValidUser = true;
      setTimeout(()=>{  
        this.isValidUser = false;
   }, 3000); 
   
   this.snackBar.open('Invalid User', 'Error', {
    duration: 2000
  });
      console.log("Invalid User");
    }
  }

}
