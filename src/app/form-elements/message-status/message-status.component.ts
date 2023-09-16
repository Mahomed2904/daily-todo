import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.css']
})
export class MessageStatusComponent {
  @Input() mainMessage = ""
  @Input() description = ""
  @Input() success = true
  @Output() onCloseMessage = new EventEmitter<string>()
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onClose(): void {
    this.onCloseMessage.emit()
  }
}
