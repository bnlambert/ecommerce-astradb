import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  url = `${environment.mainApi}/api/verification`;
  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, data, { headers: this.reqHeader });
  }

  me(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/me`, data, { headers: this.reqHeader });
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, data, { headers: this.reqHeader });
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login?admin=gateman`, data, { headers: this.reqHeader });
  }

  resetPassword(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/login?admin=gateman`, data, { headers: this.reqHeader });
  }
}
