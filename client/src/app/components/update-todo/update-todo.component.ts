import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {

  todo: Todo
  form: FormGroup

  submitted = false
  uSub: Subscription

  selectedValue = null

  constructor(
    private todoService: TodoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.todoService.getById(params['id'])
      })
    ).subscribe((todo: Todo) => {
  
        this.todo = todo
        this.form = new FormGroup({

          title: new FormControl(todo.title),
          category: new FormControl(todo.category),
          description: new FormControl(todo.description),
          completed: new FormControl(todo.completed)

        })
    })
  }


  submit() {

    this.submitted = true

    this.uSub = this.todoService.update({
      ...this.todo,
      title: this.form.value.title,
      category: this.form.value.category,
      description: this.form.value.description,
      completed: this.form.value.completed
      
    }).subscribe(() => {
      this.todo = this.form.value
      this.submitted = false
      this.form.reset()
      this.router.navigate(['/'])
    })
  }

}
