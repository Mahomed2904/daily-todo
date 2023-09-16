import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { TodoModule } from '../todo/todo.module';

import { LucideAngularModule, Moon, Search, X, Upload, Pencil } from 'lucide-angular';
import { InputTextUpdateComponent } from './input-text-update/input-text-update.component';
import { ImageModalComponent } from './image-modal/image-modal.component';


@NgModule({
  declarations: [
    ProfileComponent,
    InputTextUpdateComponent,
    ImageModalComponent
  ],
  imports: [
    CommonModule,
    TodoModule,
    UserRoutingModule,
    LucideAngularModule.pick({X, Pencil})
  ]
})
export class UserModule { }
