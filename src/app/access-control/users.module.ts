import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { LucideAngularModule, Moon } from 'lucide-angular';
import { FormElementsModule } from '../form-elements/form-elements.module';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormElementsModule,
    LucideAngularModule.pick({Moon})
  ]
})
export class UsersModule { }
