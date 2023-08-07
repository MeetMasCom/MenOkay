import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsSystem {
  API_LOCAL: string = '';
  API_SERVER: string = '';
  API_IMAGES: string = '';
  API_IMAGES_LOCAL: string = '';

  constructor() {
    //this.API_SERVER = 'http://localhost:8000/api';

    //this.API_IMAGES = 'http://localhost:8000/';

    this.API_SERVER = 'https://menokay.com/api';
    //this.API_SERVER = 'http://localhost:8000/api';

    this.API_IMAGES = 'http://menokay.com/';
    //this.API_IMAGES = 'http://localhost:8000';
  }
}
