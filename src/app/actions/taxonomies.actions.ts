import { Action } from '@ngrx/store';
import { Taxonomy, TaxonomySearchResult } from './../models/taxonomies';

export enum TaxonomiesActionTypes {
  LoadTaxonomies = '[Taxonomies] Load Taxonomies',
  SearchTaxonomies = '[Taxonomies] Search Taxonomies',
  SearchTaxonomiesDone = '[Taxonomies] Search Taxonomies Done',
  FetchTaxonomies = '[Taxonomies] Fetch Taxonomies',
  FetchTaxonomiesDone = '[Taxonomies] Fetch Taxonomies Done',
  AddTaxonomy = '[Taxonomies] Add Taxonomy',
  AddTaxonomyDone = '[Taxonomies] Add Taxonomy Done',
}

export class LoadTaxonomies implements Action {
  readonly type = TaxonomiesActionTypes.LoadTaxonomies;
  constructor()  {}
}

export class SearchTaxonomies implements Action {
  readonly type = TaxonomiesActionTypes.SearchTaxonomies;
  constructor(public taxonomyId: string)  {}
}

export class SearchTaxonomiesDone implements Action {
  readonly type = TaxonomiesActionTypes.SearchTaxonomiesDone;
  constructor(public payload: TaxonomySearchResult)  {}
}

export class FetchTaxonomies implements Action {
  readonly type = TaxonomiesActionTypes.FetchTaxonomies;
  constructor()  {}
}

export class FetchTaxonomiesDone implements Action {
  readonly type = TaxonomiesActionTypes.FetchTaxonomiesDone;
  constructor(public payload: any)  {}
}

export class AddTaxonomy implements Action {
  readonly type = TaxonomiesActionTypes.AddTaxonomy;
  constructor(public payload: Taxonomy)  {}
}

export class AddTaxonomyDone implements Action {
  readonly type = TaxonomiesActionTypes.AddTaxonomyDone;
  constructor(public payload: any)  {}
}

export type TaxonomiesActions = LoadTaxonomies | SearchTaxonomies | SearchTaxonomiesDone | FetchTaxonomies | FetchTaxonomiesDone | AddTaxonomy | AddTaxonomyDone;
