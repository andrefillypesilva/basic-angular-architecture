import { Injectable } from '@angular/core';

// Models
import { User } from '../../models/classes/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserLocal(): User {
    return JSON.parse(JSON.stringify(localStorage.getItem('user')));
  }

  getUserTokenLocal(): string {
    if(localStorage.getItem('token')) {
      return JSON.parse(JSON.stringify(localStorage.getItem('token')));
    }
    return '';
  }

  saveUserLocal(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(user.token));
  }

  removeUserLocal(): void {
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
  }
}
