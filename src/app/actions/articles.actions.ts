import { Action } from '@ngrx/store';
import { Article, ArticleResult } from '../models/articles';

export enum ArticlesActionTypes {
  LoadingArticles = '[Articles] Loading Articles',
  SearchArticles = '[Articles] Search Articles',
  SearchArticlesDone = '[Articles] Search Articles Done',
  FetchArticles = '[Articles] Fetch Articles',
  FetchArticlesDone = '[Articles] Fetch Articles Done',
  AddArticle = '[Articles] Add Article',
  AddArticleDone = '[Articles] Add Article Done',
  RemoveArticle = '[Articles] Remove Article',
  UpdateArticle = '[Articles] Update Article',
  UpdateArticleDone = '[Articles] Update Article Done'
}

export class LoadingArticles implements Action {
  readonly type = ArticlesActionTypes.LoadingArticles;
  constructor()  {}
}
export class SearchArticles implements Action {
  readonly type = ArticlesActionTypes.SearchArticles;
  constructor(public id: number)  {}
}
export class SearchArticlesDone implements Action {
  readonly type = ArticlesActionTypes.SearchArticlesDone;
  constructor(public payload: ArticleResult)  {}
}
export class FetchArticles implements Action {
  readonly type = ArticlesActionTypes.FetchArticles;
  constructor()  {}
}
export class FetchArticlesDone implements Action {
  readonly type = ArticlesActionTypes.FetchArticlesDone;
  constructor(public payload: any)  { }
}
export class AddArticle implements Action {
  readonly type = ArticlesActionTypes.AddArticle;
  constructor(public payload: Article) { }
}
export class AddArticleDone implements Action {
  readonly type = ArticlesActionTypes.AddArticleDone;
  constructor(public payload: any) { }
}
export class RemoveArticle implements Action {
  readonly type = ArticlesActionTypes.RemoveArticle;
  constructor(public id: number) { }
}
export class UpdateArticle implements Action {
  readonly type = ArticlesActionTypes.UpdateArticle;
  constructor(public payload: Article) { }
}
export class UpdateArticleDone implements Action {
  readonly type = ArticlesActionTypes.UpdateArticleDone;
  constructor(public payload: Article) { }
}

export type ArticlesActions = LoadingArticles | SearchArticles | SearchArticlesDone | FetchArticles | FetchArticlesDone | AddArticle | AddArticleDone | RemoveArticle | UpdateArticle | UpdateArticleDone;
