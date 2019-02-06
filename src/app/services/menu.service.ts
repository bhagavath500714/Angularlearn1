import { Injectable } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import * as Constants from '../../app/common/constant';

@Injectable()

export class MenuService {
  public blnDisplayMenu: boolean = false;
  public menuConfig = [];

  public adminConfig = [
    { value: 'Dashboard', icon: 'dashboard', link: 'dashboard' },
    { value: 'form', icon: 'list', link: 'form' },
    { value: 'table', icon: 'settings', link: 'table' }
  ];

  public coordinatorConfig = [    
    { value: 'form', icon: 'list', link: 'form' },
    { value: 'Dashboard', icon: 'dashboard', link: 'dashboard' }
  ];

  public patientConfig = [    
    { value: 'Dashboard', icon: 'dashboard', link: 'dashboard' }
  ];

  public setMenuConfig(role) {
    if(role !== null && role !== undefined) {
      this.menuConfig = this.adminConfig;
      if(role == Constants.COORDINATOR_ROLE) {
        this.menuConfig = this.coordinatorConfig;
      } else if (role == Constants.PATIENT_ROLE) {
        this.menuConfig = this.patientConfig;
      }
    }
  }

 public getMenuConfig(){
   return this.menuConfig;
 }

 public setMenuDisplay(isShow: boolean) {
   this.blnDisplayMenu = isShow
 }

 public getMenuDisplay() {
   return this.blnDisplayMenu;
 }
}
