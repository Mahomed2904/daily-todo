import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LucideAngularModule, Moon } from 'lucide-angular';
import { FormElementsModule } from '../form-elements/form-elements.module';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { RecoveryStatusComponent } from './recovery-status/recovery-status.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    RecoveryPasswordComponent,
    RecoveryStatusComponent,
    NewPasswordComponent,
    EmailConfirmationComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormElementsModule,
    LucideAngularModule.pick({Moon})
  ]
})
export class UsersModule { }
