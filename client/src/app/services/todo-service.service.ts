import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo , TodoComplete} from '../interfaces'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/api/todos/create', todo)
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/api/todos')
  }

  getAllByCategory(cat: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:3000/api/todos/cat/${cat}`)
  }

  getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/api/todos/${id}`)
      .pipe(map((todo: Todo) => {
          return {
            ...todo, id
          }
      }))
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/api/todos/update/${todo.id}`, todo)
  }

  completeTodo(id: string): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/api/todos/update/complete/${id}`, {
      completed: true
    })
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/todos/delete/${id}`)
  }
}
