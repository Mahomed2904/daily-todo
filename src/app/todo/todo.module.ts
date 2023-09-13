import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LayoutComponent } from './layout/layout.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LucideAngularModule, Moon, Search, X, Upload } from 'lucide-angular';
import { FormElementsModule } from '../form-elements/form-elements.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


@NgModule({
  declarations: [
    DashbordComponent,
    LayoutComponent,
    ListTodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormElementsModule,
    LucideAngularModule.pick({Moon, Search, X, Upload})
  ]
})
export class TodoModule { }
