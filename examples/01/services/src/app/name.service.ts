import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  name: BehaviorSubject<string>;

  constructor() { 
    this.name = new BehaviorSubject('fancypant');
  }

  set user(user: string) {
    this.name.next(user)
  }

}
