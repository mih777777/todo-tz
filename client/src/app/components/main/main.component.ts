import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from '../../interfaces'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todos: Todo[] = []

  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.fetchAllTodos()
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
