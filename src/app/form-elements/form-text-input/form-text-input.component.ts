import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-text-input',
  templateUrl: './form-text-input.component.html',
  styleUrls: ['./form-text-input.component.css']
})
export class FormTextInputComponent {
  @Input() inputName: string | undefined
  @Input() labelName: string | undefined
  @Input() inputType: 'text' | 'number' | "password" | undefined
  @Input() placehoder: string = ""
}
