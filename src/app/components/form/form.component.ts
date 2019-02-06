import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public menuService: MenuService) {
    this.menuService.setMenuDisplay(true);
   }
   form=  {name:'',address:'',branch:'',gender:'',dob:''};

  ngOnInit() {
    
  }

  registerFunction($event){    
    localStorage.setItem('formValue',JSON.stringify(this.form));
  }

}
