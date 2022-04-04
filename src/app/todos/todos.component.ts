import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { DataService } from '../shared/data.service';
import {Todo} from '../shared/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import tippy from 'tippy.js';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit,AfterViewInit {

  todos:Todo[]=[] 
  @Output() todoClicked: EventEmitter<void> =new EventEmitter()
  @Output() editClicked: EventEmitter<void> =new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> =new EventEmitter()
  showValidationErros:boolean =false
  constructor(private dataservice: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos=this.dataservice.getAllTodos()
  }
onFormSubmit(form:NgForm){
 
  // console.log("FORM Submitted") afiseaza in consola mesaje => ne ajuta la debug
  console.log(form)
  if(form.invalid){
    return this.showValidationErros=true
  }
  this.dataservice.addTodo(new Todo(form.value.text))
  this.showValidationErros=false 
   form.reset()
   return this.showValidationErros=false
}
ngAfterViewInit():void {
 // tippy()
}
onTodoClicked(todo:Todo){
 // this.todoClicked.emit()
  todo.completed=!todo.completed
}
toggleCompleted(todo:Todo){
  todo.completed=!todo.completed
}
EditTodo(todo:Todo){
this.dataservice.updateTodo
const index=this.todos.indexOf(todo)
let dialogRef = this.dialog.open(EditTodoDialogComponent, {

  width: '600px',
  data:todo
});
dialogRef.afterClosed().subscribe((result)=>{
   if(result){
     this.dataservice.updateTodo(index,result)
   }
})
}
onDeleteClicked(todo:Todo){
  const index=this.todos.indexOf(todo)
  this.dataservice.deleteTodo(index)

}
// 2:35:32
}
