import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(e: Event): void {
    e.preventDefault()
    this.router.navigate(['/ap/email-confirmation-code']);
  }
}
