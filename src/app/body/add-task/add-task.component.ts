import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  inputTask:string = ""
  @Output() sendTask = new EventEmitter()

  onClickAddTask(){
    if(this.inputTask!=""){
      this.sendTask.emit(this.inputTask)
      this.inputTask=""
    }
  }

  ngOnInit() {
  }

}
