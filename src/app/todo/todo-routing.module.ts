import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Title } from '@angular/platform-browser';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  {
     path: "todo",
     component: LayoutComponent,
     children: [
        {
          path: "dashbord",
          title: "Dashbord",
          component: DashbordComponent
        },
        {
          path: "todo-list",
          title: "Todo List",
          component: ListTodoComponent
        },
        {
          path: "add-todo",
          title: "Add Todo",
          component: AddTodoComponent
        }
     ]
  }
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Daily Todo | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})

export class TodoRoutingModule { }
