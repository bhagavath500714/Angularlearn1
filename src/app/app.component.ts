import { Component, ViewChild, AfterViewChecked, OnInit, AfterContentChecked } from '@angular/core';
import * as Constants from '../app/common/constant';
import { Router } from '@angular/router';
import { MatSidenavModule, MatIcon, MatIconModule, MatIconRegistry, MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  blnDisplayMenu: boolean;
  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public menuService: MenuService){}
  title = 'app';
  role: any;
  admin:any;
  coordinator:any;
  patient: any;
  menuList: any;

  ngOnInit(){
    this.role = localStorage.getItem('role');
    this.menuService.setMenuConfig(this.role);
    if(this.role == null || this.role == undefined || this.role == ''){
      this.router.navigate(['login']);
    }
  }
}
