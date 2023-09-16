import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TodoModule } from '../todo/todo.module';

import { LucideAngularModule, Moon, Search, X, Upload, Pencil } from 'lucide-angular';
import { InputTextUpdateComponent } from './input-text-update/input-text-update.component';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormElementsModule } from '../form-elements/form-elements.module';


@NgModule({
  declarations: [
    ProfileComponent,
    InputTextUpdateComponent,
    ImageModalComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    FormElementsModule,
    UserRoutingModule,
    LucideAngularModule.pick({X, Pencil})
  ]
})
export class UserModule { }
