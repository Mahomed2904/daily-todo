import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  @Input() imageUrl = ""
  @Output() onSaveImage = new EventEmitter<string>()
  @Output() onCancelImage = new EventEmitter<string>()

  
}
