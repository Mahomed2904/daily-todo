import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../todo/layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { DashbordComponent } from '../todo/dashbord/dashbord.component';

const routes: Routes = [
   {
     title: "User",
     path: "user",
     component: LayoutComponent,
     children: [
      {
        path: "",
        component: DashbordComponent,
        children: [
          {
            path: "profile",
            title: "Profile",
            component: ProfileComponent
          }
        ]
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
