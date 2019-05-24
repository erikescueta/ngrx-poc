import { Action } from '@ngrx/store';
import { Article, ArticleResult} from '../models/articles';
import { ArticlesActionTypes, ArticlesActions } from '../actions/articles.actions';

export interface ArticlesState {
  loading: boolean;
  searchTerm: number;
  searchResult: ArticleResult;
  addedArticle: Article;
  articleList: any;
}

export const articlesInitialState: ArticlesState = {
  loading: false,
  searchTerm: -1,
  searchResult: {
    userId: -1,
    id: -1,
    title: '',
    body: ''
  },
  addedArticle: {
    userId: -1,
    id: -1,
    title: '',
    body: ''
  },
  articleList: []
};

export function articlesReducer(state = articlesInitialState, action: ArticlesActions): ArticlesState {
  switch (action.type) {
    case ArticlesActionTypes.SearchArticles: {
        return {
            ...state,
            loading: true,
            searchTerm: action.id
        };
    }
    case ArticlesActionTypes.SearchArticlesDone: {
        return {
            ...state,
            loading: false,
            searchResult: action.payload
        };
    }
    case ArticlesActionTypes.FetchArticles: {
        return {
            ...state,
            loading: true
        };
    }
    case ArticlesActionTypes.FetchArticlesDone: {
        return {
            ...state,
            loading: false,
            articleList: action.payload
        };
    }
    case ArticlesActionTypes.AddArticle: {
        return {
            ...state,
            articleList: [...state.articleList, action.payload]
        };
    }
    case ArticlesActionTypes.RemoveArticle: {
        return {
            ...state,
            articleList: state.articleList.filter(article => article.id !== action.id)
        };
    }
    case ArticlesActionTypes.UpdateArticle: {
        return {
            ...state,
            addedArticle: action.payload
        };
    }
    default:
      return state;
  }
}
