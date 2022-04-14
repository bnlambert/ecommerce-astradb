import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `${environment.mainApi}/auth`;
  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


  // store the URL so we can redirect after logging in
  redirectUrl: string = '/';

  constructor(private http: HttpClient) { }

  signin(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/signin`, data, { headers: this.reqHeader });
  }

  me(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/me`, data, { headers: this.reqHeader });
  }

  signup(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/signup`, data, { headers: this.reqHeader });
  }
 
  /*
  activate(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/activate`, data, { headers: this.reqHeader });
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/forgot-password`, data, { headers: this.reqHeader });
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/reset-password`, data, { headers: this.reqHeader });
  }
  */
}
