import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CrudService } from 'src/app/libs/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {
  
  // url = `${environment.mainApi}/api/blog/categories`;
  // reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor(http: HttpClient) { 
    const path = '/products';
    super(http, path);
  }

}
