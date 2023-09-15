import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent {
    constructor(private router: Router, private location: Location) {}

    defaultValue = {
      day: 10,
      month: 2,
      year: 2024,
      hour: 12,
      minute: 40
    }

    backPage() {
      this.location.back()
    }
}
