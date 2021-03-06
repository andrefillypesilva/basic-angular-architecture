import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Environment
import { environment } from '../../../environments/environment';

// Interfaces
import { IHttpResponseObject } from '../../models/interfaces/i-http-response-object';

// Models
import { User } from '../../models/classes/user';

// Services
import { LocalStorageService } from './local-storage.service';

const urlServer = `${environment.api}/`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) { }

  login(_user: User): Observable<IHttpResponseObject<User>> {
    return this._http.post<IHttpResponseObject<User>>(`${urlServer}authenticate`, _user);
  }

  getUser(_user: User): Observable<User> {
    return this._http.get<IHttpResponseObject<User>>(urlServer)
    .pipe(
      map((response: IHttpResponseObject<User>) => response.object)
    );
  }

  logout(_redirectRoute: string = '/'): void {
    this._localStorageService.removeUserLocal();
    this._router.navigate([_redirectRoute]);
  }

  save(_user: User): Observable<IHttpResponseObject<User>> {
    this._localStorageService.saveUserLocal(_user);
    return this.create(_user);
  }

  private create(_user: User): Observable<IHttpResponseObject<User>> {
    return this._http.post<IHttpResponseObject<User>>(urlServer, _user)
      .pipe(
        take(1)
      );
  }
}
