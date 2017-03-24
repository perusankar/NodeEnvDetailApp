import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnvListComponent}     from './envs/env-list.component';
import {EnvDetailComponent}     from './envs/env-detail.component';

import {LoginComponent}     from './login/login.component';
import {RegisterComponent}     from './login/register.component';
import {LogoutComponent}     from './login/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: EnvListComponent },
  { path: 'envdetail/:_id', component: EnvDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}