import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken,
  HttpContext
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { switchMap } from 'rxjs/operators';

const AUTH = new HttpContextToken<boolean>(() => false)

export function auth() {
  return new HttpContext().set(AUTH, true)
}

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.context.get(AUTH)) {
      return this.authService.login().pipe(
        switchMap(token => {
          const req = request.clone({ 
            setHeaders: { 
              Authorization: `Bearer ${token.token}`
            }
          })
          return next.handle(req)
        })
      )
    }
    return next.handle(request)
  }
}
