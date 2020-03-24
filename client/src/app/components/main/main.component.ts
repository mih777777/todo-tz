import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from '../../interfaces'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  arrayId = []
  todos: Todo[] = []
  catName: string = 'all'

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    
    this.catName == 'all' ? this.fetchAllTodos() : this.fetchTodosByCategory(this.catName)
  }

  onChange(id: string) {
    this.todoService.completeTodo(id).subscribe(todo => {
      const res = this.todos.find(t => t.id === todo.id)
      res.completed = true
      this.catName == 'all' ? this.fetchAllTodos() : this.fetchTodosByCategory(this.catName)
      
    })
  }
  
  changeIsChecked(id: string) {
    let res = this.arrayId.indexOf(id)
    
    if(res == -1){
      this.arrayId.push(id)
    } else {
      this.arrayId.splice(res, 1)
    }

  }

  deleteMany(){
    let arr = this.arrayId

    for(let i = 0; i < arr.length; i++){
      this.todoService.delete(arr[i])
      .subscribe(() => {})
      this.fetchAllTodos()
    }
    
  }

  inpSelect(event){
    this.catName = event.target.value
    this.catName == 'all' ? this.fetchAllTodos() : this.fetchTodosByCategory(this.catName)
  }

  fetchTodosByCategory(catName: string) {
    
    this.todoService.getAllByCategory(catName)
      .subscribe(result => {
        this.todos = result
      })
  }

  fetchAllTodos(){
    this.todoService.getAll()
      .subscribe(result => {
        this.todos = result
      })
  }

  removeTodo(id: string): void{
    this.todoService.delete(id)
      .subscribe(() => {
        this.fetchAllTodos()
      }) 
    
  }


}
