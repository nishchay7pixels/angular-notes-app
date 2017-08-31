import {MyTask} from "./model/tasks";
import {InjectionToken, NgModule} from "@angular/core";
import {APP_DI_DATA} from "./constants/mocktask";

export let APP_DATA = new InjectionToken<MockData>('app.data');

export class MockData {
  mockTasks : MyTask[];
  id : number;

}

@NgModule({
  providers: [{
    provide: APP_DATA,
    useValue:APP_DI_DATA
  }]
})
export class AppDataModule{}
