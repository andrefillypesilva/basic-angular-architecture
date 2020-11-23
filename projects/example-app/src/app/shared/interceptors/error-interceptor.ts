import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly toastService: ToastrService) {}

    public intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          this.toastService.error(`An error ocurred in API integration. For more details: ${error.message}`);
          return throwError(`An error ocurred in API integration. For more details: ${error.message}`);
        })
      );
    }
  }
