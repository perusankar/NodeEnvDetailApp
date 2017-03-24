import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import {EnvListComponent}     from './envs/env-list.component';
import {EnvDetailComponent}     from './envs/env-detail.component';

import {LoginComponent}     from './login/login.component';
import {RegisterComponent}     from './login/register.component';
import {LogoutComponent}     from './login/logout.component';

import {EnvService}     from './envs/env.service';

import {UserService}     from './login/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EnvListComponent,
    EnvDetailComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  providers: [ EnvService , UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
