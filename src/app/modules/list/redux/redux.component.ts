import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Form, FormControl } from '@angular/forms';
import { Taxonomy, TaxonomySearchResult } from '../../../models/taxonomies';
import { Store } from '@ngrx/store';
import {
  State,
  fetchTaxonomyList,
  searchTaxonomyList,
  loadingTaxonomyList
 } from '../../../reducers';
import { FetchTaxonomies, SearchTaxonomies } from 'src/app/actions/taxonomies.actions';
import { ReduxAnimation } from '../../../animations/redux.animation';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss'],
  animations: [ ReduxAnimation ]
})
export class ReduxComponent implements OnInit, OnDestroy {

  public taxonomies: Array<Taxonomy>;
  public taxonomiesSearchResults: TaxonomySearchResult;
  public loading = true;
  private storeSubscriptions: Subscription[] = [];

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.addStoreSubscriptions();
    this.store.dispatch(new FetchTaxonomies());
  }

  ngOnDestroy() {
    this.removeStoreSubscriptions();
  }

  addStoreSubscriptions(): void {
    this.storeSubscriptions.push(
      this.store.select(fetchTaxonomyList).subscribe(
        response => { this.taxonomies = response || ''; },
        err =>  { console.log(err); },
        () => { console.log('Completed'); }
      ),
      this.store.select(searchTaxonomyList).subscribe(
        response => { this.taxonomiesSearchResults = response || null; },
        err =>  { console.log(err); },
        () => { console.log('Completed'); }
      ),
      this.store.select(loadingTaxonomyList).subscribe(
        response => { this.loading = response || false; },
        err =>  { console.log(err); },
        () => { console.log('Completed'); }
      )
    );
  }

  removeStoreSubscriptions(): void {
    if (this.storeSubscriptions) {
      this.storeSubscriptions.map(subscription =>
        subscription.unsubscribe()
      );
    }
  }

  triggerSearch(searchTerms) {
    if (searchTerms !== null) {
      this.store.dispatch(new SearchTaxonomies(searchTerms));
    } else {
      this.taxonomiesSearchResults = null;
    }
  }

  submit($event) {
    $event.preventDefault ();
  }

}
