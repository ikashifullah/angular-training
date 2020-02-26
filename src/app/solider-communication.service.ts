import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoliderCommunicationService {

  constructor() { }

  wireless;

  establishCommunication() {
    this.wireless = new Observable((observer) => {
      observer.next('Alpha');
      observer.next('Bravo');
      observer.next('Charlie');
      observer.complete();
    });
  }

  notify() {
    const notifications = this.wireless.subscribe({
      next(value) {
        console.log(value);
      },
      error(msg) {
        console.log('error is :' + msg);
      }
    });
  }
}
