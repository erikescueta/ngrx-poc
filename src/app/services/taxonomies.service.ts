import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TaxonomiesService {

  constructor(
    private http: HttpClient
  ) { }

  searchTaxonomies(id: number): Observable<any> {
    const url = 'http://udccmap002:5000/taxonomies/' + id;
    return this.http.get(url).pipe(catchError(error => throwError(error)));
  }


  fetchTaxonomies(): Observable<any> {
    const url = 'http://udccmap002:5000/taxonomies';
    return this.http.get(url).pipe(catchError(error => throwError(error)));;
  }
}
