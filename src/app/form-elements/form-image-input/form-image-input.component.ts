import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageFormatConverterService } from 'src/app/services/image-format-converter.service';

@Component({
  selector: 'app-form-image-input',
  templateUrl: './form-image-input.component.html',
  styleUrls: ['./form-image-input.component.css']
})
export class FormImageInputComponent {
  @Input() inputName: string | undefined
  @Input() labelName: string | undefined
  @Input() labelId: string | undefined
  @Input() placehoder: string = ""
  @Input() defaultValue: string | undefined
  @Output() onChangeImage: EventEmitter<string> = new EventEmitter()

  constructor(private converter: ImageFormatConverterService) {}

  imageUrl = ""
  encodedImage: string | undefined
  showLinkModal = ""

  ngOnInit() {
    if(this.defaultValue) {
      this.imageUrl = this.defaultValue
    }
  }
  
  showModalLink() {
    this.showLinkModal = "show"
  }
  closeModalLink() {
    this.showLinkModal = ""
    this.imageUrl = ""
  }
  async uploadImageFromStorage(e: any) {
    if( e.target?.files ) {
      const url = URL.createObjectURL(e.target.files[0])
      this.imageUrl = url
      this.encodedImage = (await this.converter.toBase64(e.target.files[0])) as string
    }
    this.onChangeImage.emit(this.encodedImage)
  }

  selectLink(e: any) {
    this.imageUrl = e.target.value
    this.onChangeImage.emit(this.imageUrl)
  }

  uploadImageFromLink(e: any) {
     e.preventDefault()
     this.showLinkModal = ""
     e.target.link.value = ""
  }
}
