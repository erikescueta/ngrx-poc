import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Form, FormControl } from '@angular/forms';
import { Taxonomy, TaxonomySearchResult } from '../../../models/taxonomies';
import { SubscribeAnimation } from '../../../animations/subscribe.animation';
import { TaxonomiesService } from './../../../services/taxonomies.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  animations: [ SubscribeAnimation ]
})
export class SubscribeComponent implements OnInit, OnDestroy {
  @Output() searchResults = new EventEmitter();

  public taxonomies: Array<Taxonomy> = null;
  public taxonomiesSearchResults: TaxonomySearchResult = null;
  public taxonomiesSearchId: number;
  public loading = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private taxonomiesService: TaxonomiesService
  ) { }

  ngOnInit() {
    this.addSubscriptions();
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }

  addSubscriptions(): void {
    this.subscriptions.push(
      this.taxonomiesService.fetchTaxonomies().subscribe(
        response => {
          this.taxonomies = response;
          this.loading = false;
        },
        error => {
          // console.log(error)
        },
        () => {
          // console.log('Completed')
        }
      ),
    );
  }

  removeSubscriptions(): void {
    if (this.subscriptions) {
      this.subscriptions.map(subscription =>
        subscription.unsubscribe()
      );
    }
  }

  triggerSearch(searchTerms) {
    if (searchTerms !== null) {
      this.taxonomiesService.searchTaxonomies(searchTerms).subscribe(
        results => {
          this.taxonomiesSearchResults = results;
          this.searchResults.emit(this.taxonomiesSearchResults);
        }
      );
    } else {
      this.taxonomiesSearchResults = null;
    }
  }

}
