
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServices: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted', req)
    // const copiedReq = req.clone({headers: req.headers.append('','')});
    const copiedReq = req.clone({params: req.params.append('auth', this.authServices.getToken())});

    return next.handle(copiedReq);
  }
}
