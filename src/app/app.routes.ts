import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import {AuthGuard} from './auth-gaurd.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddNewNoteComponent} from './todo/add-new-note.component';
import {EditNoteComponent} from "./edit-tasks/edit-note.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'new-task', component: AddNewNoteComponent, canActivate: [AuthGuard] },
  { path: 'edit-note-form/:id', component: EditNoteComponent, canActivate: [AuthGuard] },


]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
