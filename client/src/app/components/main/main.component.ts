import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from '../../interfaces'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  loading: boolean = true
  
  arrayId = []
  //isChecked: boolean = false

  todos: Todo[] = []

  constructor(private todoService: TodoServiceService) { }
  
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


  ngOnInit(): void {
    this.fetchAllTodos()
  }

  fetchAllTodos(){
    this.todoService.getAll()
      .subscribe(result => {
        this.todos = result
        //console.log(this.todos)
      })
  }

  removeTodo(id: string): void{
    this.todoService.delete(id)
      .subscribe(() => {
        this.fetchAllTodos()
      }) 
    
  }


}
