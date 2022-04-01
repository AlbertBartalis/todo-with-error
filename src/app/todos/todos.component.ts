import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {Todo} from '../shared/todo.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[]=[] 

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.todos=this.dataservice.getAllTodos()
  }
onFormSubmit(){
  console.log("FORM Submitted")
}
}
