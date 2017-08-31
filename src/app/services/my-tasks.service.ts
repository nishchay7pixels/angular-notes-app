import {Inject, Injectable} from '@angular/core';

import {MyTask} from "../model/tasks";
import {APP_DATA, MockData} from "../app.data";
import {until} from "selenium-webdriver";
import elementIsDisabled = until.elementIsDisabled;
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

//New imports


//Imports till herre



let taskPromise = Promise.resolve(this.myTasks);

@Injectable()
export class MyTaskService{

  name: any;
  myTasks: FirebaseListObservable<MyTask[]>;

  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.myTasks= af.list('/tasks', {
      query: {
        limitToLast: 50
      }
    });

  }

  getTasks(): Promise<FirebaseListObservable<MyTask[]>>{
    return Promise.resolve(this.myTasks);

  }

  deleteTask(index: number): void{
    this.myTasks.remove(index.toString());
  }


}

