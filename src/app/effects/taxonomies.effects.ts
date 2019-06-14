import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { 
  TaxonomiesActionTypes,
  FetchTaxonomiesDone,
  SearchTaxonomiesDone,
  AddTaxonomyDone
} from '../actions/taxonomies.actions';
import { TaxonomiesService } from '../services/taxonomies.service';

@Injectable()
export class TaxonomiesEffects {

  constructor(
    private actions$: Actions,
    private taxonomiesService: TaxonomiesService
  ) {}

  @Effect()
  fetchTaxonomies$: Observable<any> = this.actions$.pipe(
    ofType(TaxonomiesActionTypes.FetchTaxonomies),
    mergeMap(() =>
      this.taxonomiesService.fetchTaxonomies().pipe(
        map(data => new FetchTaxonomiesDone(data)),
        catchError((error) => throwError(error))
      )
    )
  );

  @Effect()
  searchTaxonomies$: Observable<any> = this.actions$.pipe (
    ofType(TaxonomiesActionTypes.SearchTaxonomies),
    mergeMap(action =>
      this.taxonomiesService.searchTaxonomies(action['taxonomyId']).pipe(
        map(data => new SearchTaxonomiesDone(data)),
        catchError((error) => throwError(error))
      )
    )
  );

  @Effect()
  addTaxonomies$: Observable<any> = this.actions$.pipe (
    ofType(TaxonomiesActionTypes.AddTaxonomy),
    mergeMap(action =>
      this.taxonomiesService.addTaxonomy(action['payload']).pipe(
        map(data => new AddTaxonomyDone(data)),
        catchError((error) => throwError(error))
      )
    )
  );

}
