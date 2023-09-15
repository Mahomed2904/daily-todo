import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-during-input',
  templateUrl: './form-during-input.component.html',
  styleUrls: ['./form-during-input.component.css']
})
export class FormDuringInputComponent {
  @Input() defaultValue: string = ""
  @Output() onValueChange: EventEmitter<string> = new EventEmitter()
  
  onChange(e: any) {
    this.onValueChange.emit(e.target.value)
  }
}
