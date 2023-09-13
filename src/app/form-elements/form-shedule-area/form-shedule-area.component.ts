import { Component } from '@angular/core';

interface Element {
  id: number, value: string
}

@Component({
  selector: 'app-form-shedule-area',
  templateUrl: './form-shedule-area.component.html',
  styleUrls: ['./form-shedule-area.component.css']
})
export class FormSheduleAreaComponent {
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

    const currentDate = new Date()
    this.defaultDay = {
      id: currentDate.getDate(),
      value: currentDate.getDate().toString()
    }
    this.defaultMonth = {
      id: currentDate.getMonth(),
      value: this.months[currentDate.getMonth()].value
    }
    this.defaultYear = {
      id: currentDate.getFullYear(),
      value: currentDate.getFullYear().toString()
    }

    this.defaultMinute = {
      id: currentDate.getMinutes(),
      value: currentDate.getMinutes().toString()
    }
    this.defaultHour = {
      id: currentDate.getHours(),
      value: currentDate.getHours().toString()
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
