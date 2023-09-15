import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Element {
  id: number, value: string
}

interface ScheduleType {
  day: number,
  month: number,
  year: number,
  hour: number,
  minute: number
}

@Component({
  selector: 'app-form-shedule-area',
  templateUrl: './form-shedule-area.component.html',
  styleUrls: ['./form-shedule-area.component.css']
})
export class FormSheduleAreaComponent {
  @Input() defaultValue: ScheduleType | undefined
  @Output() onValueChange: EventEmitter<ScheduleType> = new EventEmitter()


  onChangeDay(value: number) {
      this.defaultValue!!.day = value
      this.onValueChange.emit(this.defaultValue)
  }
  onChangeMonth(value: number) {
    this.defaultValue!!.month = value
      this.onValueChange.emit(this.defaultValue)
  }
  onChangeYear(value: number) {
    this.defaultValue!!.year = value
      this.onValueChange.emit(this.defaultValue)
  }
  onChangeHour(value: number) {
    this.defaultValue!!.hour = value
      this.onValueChange.emit(this.defaultValue)
  }
  onChangeMinute(value: number) {
    this.defaultValue!!.minute = value
      this.onValueChange.emit(this.defaultValue)
  }
  
  months:  Element[] = [{id: 1, value: "January"}, {id: 2, value:  "February"}, {id: 3, value: "March"}, {id: 4, value: "April"}, {id: 5, value: "May"}, 
           {id: 6, value:  "June"}, {id: 7, value: "July"}, {id: 8, value: "August"}, {id: 9, value: "September"}, {id: 10, value: "October"}, 
           {id: 11, value: "November"}, {id: 12, value: "December"}]

  years: Element[] = []
  days: Element[]  = []
  hours: Element[]  = []
  minutes: Element[]  = []

  defaultDay: Element | undefined
  defaultMinute: Element | undefined
  defaultHour: Element | undefined
  defaultMonth: Element | undefined
  defaultYear: Element | undefined

  ngOnInit() {
    this.days = this.range(1, 32)
    this.years = this.range(1920, 2100)
    this.minutes = this.range(0, 50)
    this.hours = this.range(0, 24)

    if(!this.defaultValue) {
      const currentDate = new Date()
      this.defaultValue = {
        day: currentDate.getDate(),
        month: currentDate.getMonth(),
        year: currentDate.getFullYear(),
        hour: currentDate.getHours(),
        minute: currentDate.getMinutes()
      }
    }

    this.setDefaultValue()
  }

  setDefaultValue() {
    if(this.defaultValue) {
      this.defaultDay = {
        id: this.defaultValue.day,
        value:  this.defaultValue.day.toString()
      }
      this.defaultMonth = {
        id: this.defaultValue.month,
        value: this.months[this.defaultValue.month - 1].value
      }
      this.defaultYear = {
        id: this.defaultValue.year,
        value: this.defaultValue.year.toString()
      }
  
      this.defaultMinute = {
        id: this.defaultValue.minute,
        value: this.defaultValue.minute.toString()
      }
      this.defaultHour = {
        id: this.defaultValue.hour,
        value: this.defaultValue.hour.toString()
      }
    }
  }
  
  range(i: number, e: number) {
    let list: {id: number, value: string}[] = []
    for(let c = i; c < e; c++) {
      list.push({
        id: c,
        value: c < 10 ? `0${c}` : c.toString()
      })
    }
    return list
  }

}
