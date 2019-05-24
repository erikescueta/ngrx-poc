import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Form, FormControl } from '@angular/forms';
import { Article, ArticleResult } from '../../../models/articles';
import { Taxonomy, TaxonomySearchResult } from '../../../models/taxonomies';
import { Store } from '@ngrx/store';
import { State, selectArticleList, selectTaxonomyList, searchTaxonomyList } from '../../../reducers';
import { FetchArticles } from '../../../actions/articles.actions';
import { FetchTaxonomies, SearchTaxonomies } from 'src/app/actions/taxonomies.actions';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})
export class ReduxComponent implements OnInit, OnDestroy {

  public articles: Array<Article>;
  public taxonomies: Array<Taxonomy>;
  public taxonomiesSearchResults: TaxonomySearchResult;
  public loading: Observable<boolean>;

  constructor(
    private store: Store<State>
  ) {

    // this.store.select(selectArticleList).subscribe(
    //   response => {this.articles = response;},
    //   err => {console.log(err);},
    //   () => {console.log('Completed');}
    // );

    this.store.select(selectTaxonomyList).subscribe(
      response => { this.taxonomies = response; },
      err => { console.log(err); },
      () => { console.log('Completed'); }
    );

    this.store.select(searchTaxonomyList).subscribe(
      response => { this.taxonomiesSearchResults = response; },
      err =>  { console.log(err); },
      () => { console.log('Completed'); }
    );

   }

  ngOnInit() {
    // this.store.dispatch(new FetchArticles());
    this.store.dispatch(new FetchTaxonomies());
  }

  ngOnDestroy() {

  }

  triggerSearch(searchTerms) {
    this.store.dispatch(new SearchTaxonomies(searchTerms));
  }

}
