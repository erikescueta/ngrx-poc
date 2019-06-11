import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Form, FormControl } from '@angular/forms';
import { Taxonomy, TaxonomySearchResult } from '../../../models/taxonomies';
import { ReduxAnimation } from './../../../animations/redux.animations';
import { TaxonomiesService } from './../../../services/taxonomies.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
  animations: [ ReduxAnimation ]
})
export class SubscribeComponent implements OnInit, OnDestroy {

  public taxonomies: Observable<Taxonomy[]>;
  public taxonomiesSearchResults: Observable<TaxonomySearchResult>;
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
        },
        error => {
          // console.log(error)
        },
        () => {
          // console.log('Completed')
        }
      ),
      this.taxonomiesService.searchTaxonomies(this.taxonomiesSearchId).subscribe(
        response => {
          this.taxonomiesSearchResults = response;
        },
        error => {
          // console.log(error)
        },
        () => {
          // console.log('Completed')
        }
      )
    );
  }

  removeSubscriptions(): void {
    if (this.subscriptions) {
      this.subscriptions.map(subscription =>
        subscription.unsubscribe()
      );
    }
  }

}
