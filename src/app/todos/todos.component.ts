import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import {Todo} from '../shared/todo.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[]=[] 
  // showValidationErros:boolean
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this.todos=this.dataservice.getAllTodos()
  }
onFormSubmit(form:NgForm){
 
  // console.log("FORM Submitted") afiseaza in consola mesaje => ne ajuta la debug
  // console.log(form)
  if(form.invalid){
    return alert("form is invalit")
  }
  this.dataservice.addTodo(new Todo(form.value.text))
 // this.showValidationErrors=false va functiona cand rezolv eroarea cu validation erros
   form.reset()
}
}
