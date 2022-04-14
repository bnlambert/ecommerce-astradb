import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CookieService } from '../services/cookie.service';
import { Store, select } from '@ngrx/store';
import { setIsLoggedIn, setRedirectUrl } from '../../app.actions';
import { AppState } from '../../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  app$: Observable<AppState>;
  redirectUrl: string = '/';
  isLoggedIn: boolean = false;


  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private store: Store<{ app: AppState }>
  ) {
    this.app$ = store.pipe(select('app'));
    this.app$.subscribe(data => {
      console.log(data);
      this.isLoggedIn = data.isLoggedIn;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    if (!this.isLoggedIn) {
      this.router.navigate(['/auth']);
    }

    return this.isLoggedIn;
  }

}
