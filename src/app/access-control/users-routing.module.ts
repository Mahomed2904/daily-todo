import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { RecoveryStatusComponent } from './recovery-status/recovery-status.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

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
      {
        path: "password-recovery",
        title: "Recovery Password",
        component: RecoveryPasswordComponent
      },
      {
        path: "confirm-recovery",
        title: "Recovery confirmation",
        component: RecoveryStatusComponent
      },
      {
        path: "email-confirmation-code",
        title: "Email confirmation",
        component: EmailConfirmationComponent
      },
      {
        path: "set-new-password",
        title: "Setting new password",
        component: NewPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
