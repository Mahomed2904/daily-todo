import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recovery-status',
  templateUrl: './recovery-status.component.html',
  styleUrls: ['./recovery-status.component.css']
})
export class RecoveryStatusComponent {
    currentNumber = 1
    elements: HTMLElement[] = []


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
      this.router.navigate(['/ap/set-new-password']);
    }
}
