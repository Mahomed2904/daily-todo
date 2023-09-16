import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  showConfirmationMessage = false
  hasPasswordValid = true

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(e: Event): void {
    e.preventDefault()
    this.startShowingConfirmationMessage()
  }

  startShowingConfirmationMessage() {
    this.showConfirmationMessage = true
  }
  closeConfirmationModal() {
    if(this.hasPasswordValid) {
      this.router.navigate(["/ap/signin"])
    }
    this.showConfirmationMessage = false
  }
}
