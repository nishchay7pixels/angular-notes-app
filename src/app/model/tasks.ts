/**
 * Created by user on 7/2/2017.
 */

export class MyTask{
  id:number;
  title:string;
  subject:string;
  description:string;

  constructor(id:number,title:string,subject:string,description:string){
    this.id=id;
    this.title=title;
    this.subject=subject;
    this.description=description;
  }
}
