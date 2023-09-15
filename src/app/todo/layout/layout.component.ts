import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListTodoComponent } from '../list-todo/list-todo.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  current = 1

  constructor(private router: Router) {
    if(router.url.split(";")[0] == "/todo/dashbord") {
      this.current = 1
    } else {
      this.current = 2
    }
  }

  changeCurrentTo(c: number) {
    this.current = c
  }

  onActivate(component: Component) {
    if(component instanceof ListTodoComponent) {
      this.current = 2
    }
  }
}
