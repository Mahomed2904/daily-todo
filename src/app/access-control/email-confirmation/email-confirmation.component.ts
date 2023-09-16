import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {
  currentNumber = 1
  showConfirmationMessage = false
  emailHasConfirmed = true


    advanceNumber() {
      this.currentNumber += 1;
    }
    backNumber() {
      this.currentNumber -= 1;
    }

    onKeyUp(e: any) {
      if(e.target.value.length === 0) {
        this.backNumber()
        this.focusCorrectInut("")
      } else if(e.target.value.length == 1) {
          this.advanceNumber()
          this.focusCorrectInut("")
      } else {
        e.target.value = e.target.value[0]
        this.advanceNumber()
        this.focusCorrectInut(e.target.value[1])
      }
    }

    focusCorrectInut(v: string) {
      const elements = document.querySelectorAll(".number");
      const element = (elements[this.currentNumber - 1] as HTMLInputElement)
      element.focus()
      element.value = v
    }

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
      if(this.emailHasConfirmed) {
        this.router.navigate(["/todo/dashbord"])
      }
      this.showConfirmationMessage = false
    }
}

