import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  {
     path: "todo",
     component: LayoutComponent,
     children: [
        {
          path: "dashbord",
          title: "Dashbord",
          component: DashbordComponent
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
