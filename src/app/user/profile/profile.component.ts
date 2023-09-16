import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { ImageFormatConverterService } from 'src/app/services/image-format-converter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router, private location: Location, private converter: ImageFormatConverterService) {}

  changeEmail = false
  changeContact = false
  changeName = false
  showImageModal = false

  imageUrl = ""

  user: User = {
    email: "mahomedalyissumail@gmail.com",
    name: "Mahomed aly Issumail",
    phoneNumber: "821238877",
    photo: "assets/img/profile_photo.jpg"
  }

  backPage() {
    this.location.back()
  }

  activateChangeContact() {
    this.changeContact = true
  }
  activateChangeEmail() {
    this.changeEmail = true
  }
  activateChangeName() {
    this.changeName = true
  }

  saveContactChanges(value: string) {
    this.user.phoneNumber = value
    this.changeContact = !this.changeContact;
  }
  saveEmailChange(value: string) {
    this.user.email = value
    this.changeEmail = !this.changeEmail;
  }
  saveNameChange(value: string) {
    this.user.email = value
    this.changeName = !this.changeName;
  }

  cancelEmailChange() {
    this.changeEmail = !this.changeEmail
  }
  cancelContactChange() {
    this.changeContact = !this.changeContact
  }
  cancelNameChange() {
    this.changeName = !this.changeName
  }

  async uploadImageFromStorage(e: any) {
    if( e.target?.files ) {
      const url = URL.createObjectURL(e.target.files[0])
      this.imageUrl = url
      // this.encodedImage = (await this.converter.toBase64(e.target.files[0])) as string
      this.showImageModal = true
    }
  }

  saveImage() {
    this.user.photo = this.imageUrl
    this.showImageModal = false
  }

  closeImageModal() {
    this.showImageModal = false
  }
}
