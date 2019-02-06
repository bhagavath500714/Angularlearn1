import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '../app/material.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { AuthenticationService } from './services/authentication.service';
import { MenuService } from './services/menu.service';
import { TableComponent } from './components/table/table.component';
import { DynamicService } from './services/dynamic.service';



const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  }
]

export const routing = RouterModule.forRoot(appRoutes,  { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    FormComponent,
    TableComponent    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    MenuService,
    DynamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
