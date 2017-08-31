import { Component } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  state = '';
  error: any;
  email: string;
  password: string;

  constructor(public af: AngularFireAuth,private router: Router) {
    this.af.authState.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }



  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/dashboard']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }



}
