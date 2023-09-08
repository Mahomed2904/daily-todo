import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LayoutComponent } from './layout/layout.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LucideAngularModule, Moon, Search } from 'lucide-angular';


@NgModule({
  declarations: [
    DashbordComponent,
    LayoutComponent,
    ListTodoComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    LucideAngularModule.pick({Moon, Search})
  ]
})
export class TodoModule { }
