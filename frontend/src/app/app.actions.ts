import { createAction, props } from '@ngrx/store';


export interface User {
  userUuid: null | string;
  firstName: null | string;
  lastName: string;
  gender: string;
  country: string;
  phone: string;
  occupation: string;
  dob: Date;
}


export const setIsLoggedIn = createAction(
  '[App] SetIsLogin',
  props<{ isLoggedIn: boolean }>()
);

export const setRedirectUrl = createAction(
  '[App] SetRedirectUrl',
  props<{ redirectUrl: string }> ()
);

export const setUser = createAction(
  '[App] SetUser',
  props<{ user: User }> ()
);
