import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Taxonomy } from '../models/taxonomies';

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
    return this.http.get(url).pipe(catchError(error => throwError(error)));
  }

  addTaxonomy(body: Taxonomy): Observable<any> {
    const url = 'http://udccmap002:5000/taxonomies';
    return this.http.post<Taxonomy>(
      url,
      body
    ).pipe(catchError(error => throwError(error)));
  }
}
