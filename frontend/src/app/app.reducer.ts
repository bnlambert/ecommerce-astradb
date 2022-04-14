import { Action, on, createReducer } from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  isLoggedIn: boolean;
  redirectUrl: string;
  user:  AppActions.User;
}

export const initialState: AppState = {
  isLoggedIn: false,
  redirectUrl: '',
  user: {
    ID: 0,
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    phone: '',
    occupation: '',
    dob: new Date(),
  }
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.setIsLoggedIn, (state, {isLoggedIn}) => ({ ...state, isLoggedIn})),
  on(AppActions.setRedirectUrl, (state, { redirectUrl }) => ({ ...state, redirectUrl})),
  on(AppActions.setUser, (state, { user }) => ({ ...state, user}))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
