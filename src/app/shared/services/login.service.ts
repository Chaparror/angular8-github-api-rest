import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public loginError = new EventEmitter<any>();

  constructor() {
  }

}
