import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'create', component: CreateTodoComponent },
  { path: 'update/:id', component: UpdateTodoComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
