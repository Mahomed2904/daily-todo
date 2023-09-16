import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text-update',
  templateUrl: './input-text-update.component.html',
  styleUrls: ['./input-text-update.component.css']
})
export class InputTextUpdateComponent {
  @Input() inputName: string | undefined
  @Input() labelName: string | undefined
  @Input() inputType: 'text' | 'number' | "password" | undefined
  @Input() placehoder: string = ""
  @Input() defaultValue: string = ""
  @Output() onValueChange: EventEmitter<string> = new EventEmitter()
  @Output() onCancel: EventEmitter<void> = new EventEmitter()
  @Output() onSave: EventEmitter<string> = new EventEmitter()

  currentValue = ""
  labelColor = ""

  ngOnInit() {
    if(this.labelName == 'Name') {
      this.labelColor = "white"
    }
  }

  onChange(e: any) {
    this.currentValue = e.target.value
    this.onValueChange.emit(e.target.value)
  }
  save(e: any) {
    this.onSave.emit(this.currentValue)
  }
}
