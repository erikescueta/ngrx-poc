import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ArticlesState, articlesInitialState, articlesReducer } from './articles.reducer';
import { TaxonomiesState, taxonomiesInitialState, taxonomiesReducer } from './taxonomies.reducer';

export interface State {
  articles: ArticlesState;
  taxonomies: TaxonomiesState;
}

export const reducers: ActionReducerMap<State> = {
  articles: articlesReducer,
  taxonomies: taxonomiesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectArticleListState = (state: State) => state.articles;
export const selectArticleList = createSelector(selectArticleListState, (state: ArticlesState) => state.articleList);

export const selectTaxonomiesListState = (state: State) => state.taxonomies;

export const selectTaxonomyList = createSelector(selectTaxonomiesListState, (state: TaxonomiesState) => state.taxonomiesList);
export const searchTaxonomyList = createSelector(selectTaxonomiesListState, (state: TaxonomiesState) => state.searchResult);
