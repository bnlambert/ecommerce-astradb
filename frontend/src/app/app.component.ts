import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { CookieService } from './auth/services/cookie.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { setIsLoggedIn, setRedirectUrl, setUser } from './app.actions';
import { AppState } from './app.reducer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  app$: Observable<AppState>;
  redirectUrl: string = '/';
  isLoggedIn: boolean = false;
  title = 'Store Hus';
  public showOverlay = true;
  user: any;

  constructor(
    private router: Router,
    private location:Location,
    private authService: AuthService,
    private cookieService: CookieService,
    private store: Store<{ app: AppState }>
  ) {
    this.app$ = this.store.pipe(select('app'));
    let url = this.location.path();
    this.app$.subscribe({
      next: res =>  {
        this.user = res.user
      }
    });

    if (!url.includes('/auth')) {
      if (!this.user.firstName) {
        this.checkAuth();
      } 
      
      this.store.dispatch(setRedirectUrl({redirectUrl: url}))
      
    }
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
  }

  checkAuth() {
    const token = this.cookieService.get('token');
     
    this.authService.me({token})
          .subscribe({
            next: res => {
              console.log({res})
              
              this.store.dispatch(setUser({ user: res }))
              this.store.dispatch(setIsLoggedIn({ isLoggedIn: true }))
            },
            error: err => {
              console.log(err);
            }
          });

   
    this.app$.subscribe(data => {
      
      
    });
    
  }

}
