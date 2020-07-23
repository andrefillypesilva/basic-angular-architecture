import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Services
import { LocalStorageService } from './../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _localStorageService: LocalStorageService
  ) { }

  canActivate(): boolean {
    if (this._localStorageService.getUserTokenLocal()) {
      return true;
    }

    this._router.navigate(['/account/login']);
    return false;
  }

}
