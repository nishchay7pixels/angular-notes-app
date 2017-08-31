import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MyTaskService} from '../services/my-tasks.service';
import { OnInit } from '@angular/core';
import {MyTask} from '../model/tasks';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'new-note-form',
  templateUrl: 'add-new-note.component.html',
  providers: [MyTaskService]
})


export class AddNewNoteComponent implements OnInit{

  msgVal: MyTask = new MyTask(0, '', '', '');

  task: MyTask = new MyTask(0, '', '', '');

  tasks: FirebaseListObservable<any[]>;
  taskForm: FormGroup;
  constructor(private afAuth : AngularFireAuth, private fb: FormBuilder, private myTaskService: MyTaskService, public af: AngularFireDatabase){
    this.createForm();
    this.tasks = af.list('/tasks', {
      query: {
        limitToLast: 50
      }
    });

  }
  ngOnInit(): void{

  }
  createForm(): void{
    this.taskForm = this.fb.group({
      title : [this.task.title, Validators.required],
      subject: [this.task.subject],
      description : [this.task.description],
    })
  };

  newTask(): void {
    const tsk: MyTask = new MyTask(Date.now(), this.taskForm.getRawValue().title, this.taskForm.getRawValue().subject, this.taskForm.getRawValue().description);
   // this.myTaskService.newTask(tsk);

    this.tasks.push({message: tsk, uid : this.afAuth.auth.currentUser.uid});

    this.taskForm.reset();
  }




}


