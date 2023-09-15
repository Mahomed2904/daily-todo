import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-select-input',
  templateUrl: './form-select-input.component.html',
  styleUrls: ['./form-select-input.component.css']
})
export class FormSelectInputComponent {
  @Input() inputName: string | undefined
  @Input() labelName: string | undefined
  @Input() select: string | undefined
  @Input() elements:  {id: number, value: string}[] = []
  @Input() defaultSelected: {id: number, value: string} | undefined
  @Output() onSelectChange: EventEmitter<number> = new EventEmitter()

  showDropDown = "hidde"
  extraWidth = "width: fit-content"
  selectedValue = this.elements[0]

  ngOnInit() {
    if(this.defaultSelected) {
      this.selectedValue = this.defaultSelected
    } else {
      this.selectedValue = this.elements[0]
    }
  }

  onChange(id: number, value: string) {
    this.selectedValue = {
      id,
      value
    };
    (document.querySelector(`.${this.labelName}`) as HTMLButtonElement).click()
    this.onSelectChange.emit(this.selectedValue?.id)
  }

  showDropDownMenu(){
    this.showDropDown = "select-dropdown"
  }
}
