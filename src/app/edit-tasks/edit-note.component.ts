import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MyTaskService} from '../services/my-tasks.service';
import { OnInit } from '@angular/core';
import {MyTask} from '../model/tasks';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'edit-note-form',
  templateUrl: 'edit-note.component.html',
  providers: [MyTaskService]
})


export class EditNoteComponent implements OnInit{

  msgVal: MyTask = new MyTask(0, '', '', '');
  task: any = new MyTask(0, '', '', '');
  name: any;
  id: number;

  tasks: FirebaseListObservable<any>;
  taskForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private myTaskService: MyTaskService, public afAuth: AngularFireAuth, public af: AngularFireDatabase, private route: ActivatedRoute){
    this.createForm();
    const userID = this.afAuth.auth.currentUser.uid;

    this.tasks = af.list('/tasks', {
      preserveSnapshot: true,
      query: {
        limitToLast: 1,
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
    console.log(this.tasks);
    this.tasks.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if (snapshot.id === this.id){
          this.task.id = snapshot.id;
          this.task.title = snapshot.title;
          this.task.subject = snapshot.subject;
          this.task.description = snapshot.description;
        }
      })
    })
    }

  ngOnInit(): void{
      this.route.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
      });

  }

  createForm(): void{
    this.taskForm = this.fb.group({
      title : [this.task.title],
      subject: [this.task.subject],
      description : [this.task.description],
    })
  };

  editTask(): void {
    //
    // const tsk: MyTask = new MyTask(Date.now(), this.taskForm.getRawValue().title, this.taskForm.getRawValue().subject, this.taskForm.getRawValue().description);
    // this.tasks.push({message: tsk});

  }



}


