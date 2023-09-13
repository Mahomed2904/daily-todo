import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-text-area',
  templateUrl: './form-text-area.component.html',
  styleUrls: ['./form-text-area.component.css']
})
export class FormTextAreaComponent {
  @Input() inputName: string | undefined
  @Input() labelName: string | undefined
  @Input() inputType: 'text' | 'number' | "password" | undefined
  @Input() placehoder: string = ""
}
