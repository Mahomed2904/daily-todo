import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormTextInputComponent } from '../form-elements/form-text-input/form-text-input.component';
import { LayoutComponent } from './layout/layout.component';
import { LucideAngularModule, Moon } from 'lucide-angular';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    FormTextInputComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LucideAngularModule.pick({Moon})
  ]
})
export class UsersModule { }
