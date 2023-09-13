import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTextInputComponent } from './form-text-input/form-text-input.component';
import { FormTextAreaComponent } from './form-text-area/form-text-area.component';
import { FormSheduleAreaComponent } from './form-shedule-area/form-shedule-area.component';
import { FormImageInputComponent } from './form-image-input/form-image-input.component';
import { LucideAngularModule, Upload, Link, ChevronDown, ChevronUp, Check } from 'lucide-angular';
import { ImageFormatConverterService } from '../services/image-format-converter.service';
import { FormSelectInputComponent } from './form-select-input/form-select-input.component';
import { FormDuringInputComponent } from './form-during-input/form-during-input.component';



@NgModule({
  declarations: [
    FormTextInputComponent,
    FormTextAreaComponent,
    FormSheduleAreaComponent,
    FormImageInputComponent,
    FormSelectInputComponent,
    FormDuringInputComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({Upload, Link, ChevronDown, ChevronUp, Check}),
  ],
  exports: [
    FormTextAreaComponent,
    FormTextInputComponent,
    FormSheduleAreaComponent,
    FormImageInputComponent,
    FormDuringInputComponent
  ],
  providers: [
    ImageFormatConverterService
  ]
})
export class FormElementsModule { }
