import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url = `${environment.mainApi}/api/profile`;
  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  updatePersonalInfo(data: any): Observable<any> {
    return this.http.post<any>(`${this.url}/personal-info`, data, { headers: this.reqHeader });
  }

}
