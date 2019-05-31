import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TaxonomiesState, taxonomiesInitialState, taxonomiesReducer } from './taxonomies.reducer';

export interface State {
  taxonomies: TaxonomiesState;
}

export const reducers: ActionReducerMap<State> = {
  taxonomies: taxonomiesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// export const selectArticleListState = (state: State) => state.articles;
// export const selectArticleList = createSelector(selectArticleListState, (state: ArticlesState) => state.articleList);

export const selectTaxonomiesListState = (state: State) => state.taxonomies;

export const fetchTaxonomyList = createSelector(selectTaxonomiesListState, (state: TaxonomiesState) => state.taxonomiesList);

export const searchTaxonomyList = createSelector(selectTaxonomiesListState, (state: TaxonomiesState) => state.searchResult);

export const loadingTaxonomyList = createSelector(selectTaxonomiesListState, (state: TaxonomiesState) => state.loading);
