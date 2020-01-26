import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  @Input() todoArr


  removeThis(i:number){
    let removed = this.todoArr.splice(i,1);
  }

  getBackgroundColor(i:number){
    if(this.todoArr[i].checked==true){
      return 'rgb(187, 189, 190)'
    }else{
      return 'rgb(207, 228, 252)'
    }
  }
  getDecoration(i:number){
    if(this.todoArr[i].checked==true){
      return 'line-through'
    }else{
      return 'none'
    }
  }

  ngOnInit() {
  }

}
