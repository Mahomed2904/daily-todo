import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(e: Event): void {
    e.preventDefault()
    this.router.navigate(['/ap/confirm-recovery']);
  }
}
