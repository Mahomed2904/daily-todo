import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
      private route: ActivatedRoute,
      private router: Router
    ) {}

    onSubmit(e: Event): void {
      e.preventDefault()
      this.router.navigate(['todo/dashbord']);
    }
}
