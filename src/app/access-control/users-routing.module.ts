import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "ap",
    component: LayoutComponent,
    children: [
      {
        path: "signin",
        title: "Signin",
        component: LoginComponent
      },
      {
        path: "signup",
        title: "Singup",
        component: SignupComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
