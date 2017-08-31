import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { routes } from './app.routes';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AuthGuard} from './auth-gaurd.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddNewNoteComponent} from './todo/add-new-note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppDataModule} from './app.data';
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule
} from '@angular/material';
import {MyTaskService} from './services/my-tasks.service';
import {EditNoteComponent} from './edit-tasks/edit-note.component';

export const firebaseConfig = {
  apiKey: "$$$$$$$",
  authDomain: "$$$$$$$",
  databaseURL: "$$$$$$$",
  projectId: "$$$$$$$",
  storageBucket: "$$$$$$$",
  messagingSenderId: "$$$$$$$$$$$$"
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    DashboardComponent,
    AddNewNoteComponent,
    EditNoteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    MdCardModule,
    AppDataModule,


    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuard, MyTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
