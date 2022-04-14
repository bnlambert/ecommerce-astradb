import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export class CrudService {
  baseUrl = environment.mainApi;
  url = '';
  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(private http: HttpClient, path: string) {
      this.url = `${this.baseUrl}${path}`;
  }

  save(data: any): Observable<any> {
    return this.http.post<any>(this.url, data, { headers: this.reqHeader });
  }

  update(data: any, slug: any): Observable<any> {
    console.log({data})
    return this.http.put<any>(`${this.url}/${slug}`, data, { headers: this.reqHeader });
  }

  getAll(params: any = {}): Observable<any> {
    console.log(params)
    let query = '';
    const keys = Object.keys(params);

    if(keys.length > 0) {
        keys.forEach(el => {
            query = (query === '') ? `?${el}=${params[el]}`: `${query}&${el}=${params[el]}`;
        });
    }
    
    return this.http.get<any>(`${this.url}${query}`, { headers: this.reqHeader });
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`, { headers: this.reqHeader });
  }


}
