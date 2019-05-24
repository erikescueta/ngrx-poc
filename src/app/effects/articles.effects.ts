import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ArticlesActionTypes, FetchArticlesDone, SearchArticlesDone } from '../actions/articles.actions';
import { ArticlesService } from '../services/articles.service';

@Injectable()
export class ArticlesEffects {

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) {}

  @Effect()
  fetchArticles$: Observable<any> = this.actions$.pipe(
    ofType(ArticlesActionTypes.FetchArticles),
    mergeMap(() =>
      this.articlesService.fetchArticles().pipe(
        map(data => new FetchArticlesDone(data)),
        catchError((error) => throwError(error))
      )
    )
  );

  @Effect()
  searchArticles$: Observable<any> = this.actions$.pipe (
    ofType(ArticlesActionTypes.SearchArticles),
    mergeMap(action =>
      this.articlesService.searchArticles(action['id']).pipe(
        map(data => new SearchArticlesDone(data)),
        catchError((error) => throwError(error))
      )
    )
  );
}
