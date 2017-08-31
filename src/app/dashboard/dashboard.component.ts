import {Component} from '@angular/core';
import {MyTask} from '../model/tasks';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: []
})

export class DashboardComponent {

  name: any;
  myTasks: FirebaseListObservable<MyTask[]>;
  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth, private router: Router){

    let userID = this.afAuth.auth.currentUser.uid;
    console.log(userID);
    this.myTasks = af.list('/tasks', {

      query: {
        limitToLast: 50,
        orderByChild: 'uid',
        startAt: userID,
        endAt: userID


      }
    });
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }


  edit(task: any): void {
    this.router.navigate(['/edit-note-form', task.message.id]);
}

  removeTask(key: string): void {
    this.myTasks.remove(key);
  }


  logout() {
    this.afAuth.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
}
