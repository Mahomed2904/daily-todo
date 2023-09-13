import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageFormatConverterService {

  constructor() { }

  toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
}
