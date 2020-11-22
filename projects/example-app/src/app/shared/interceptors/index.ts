import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request-interceptor';

export const httpInterceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
];
