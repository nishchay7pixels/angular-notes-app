import { Component, OnInit } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]
})
export class LoginComponent implements OnInit {
  error: any;
  user: Observable<firebase.User>;
  constructor(public af: AngularFireAuth, private router: Router) {
    this.user = this.af.authState;
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigate(['/dashboard']);
      }).catch(
      (err) => {
        this.error = err;
      })
  }
  ngOnInit() {
  }

}
