import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../interfaces'

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

  // update(id: string): Observable<Todo> {
  //   return this.http.put<Todo>('')
  // }

  // delete(id: string): Observable<void> {
  //   return this.http.delete<void>('')
  // }
}
