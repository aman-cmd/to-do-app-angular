import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-App';
  taskArr = []

  addTask(task:any){
    this.taskArr.push({
      task : task,
      checked : false
    })
  }

}
