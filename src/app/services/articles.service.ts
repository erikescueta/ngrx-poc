import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  searchArticles(id: number): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;
    return this.http.get(url).pipe(catchError(error => throwError(error)));
  }


  fetchArticles(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url).pipe(catchError(error => throwError(error)));;
  }
}
