import { Component } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AngularFireAuth]
})
export class SignupComponent {
  state = '';
  error: any;
  email:string;
  password:string;
  constructor(public af: AngularFireAuth, private router: Router) {}

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then((success) => {
        console.log(success);
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
          console.log(err);
          this.error = err;

      })

    }
  }



}
