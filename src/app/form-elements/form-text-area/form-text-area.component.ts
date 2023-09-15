import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() defaultValue: string = ""
  @Output() onValueChange: EventEmitter<string> = new EventEmitter()


  onChange(e: any) {
    this.onValueChange.emit(e.target.value)
  }
}
