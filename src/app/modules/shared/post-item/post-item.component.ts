import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Taxonomy } from 'src/app/models/taxonomies';
import { AddTaxonomy } from 'src/app/actions/taxonomies.actions';
import {
  State,
  addTaxonomy
} from '../../../reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnDestroy {
  @Input() createType = '';
  @ViewChild('newpostedTaxonomyModal') private modalContent;

  public modalReference: any;
  public postedTaxonomy: Taxonomy;
  private storeSubscriptions: Subscription[] = [];

  public payloadData = {
    businessStream: 'CIE',
    created: new Date('2016-01-15T12:50:50'),
    lastModified: new Date('2018-12-06T12:22:45'),
    taxonomyId: '1--m-jrc197fz-djniz8',
    taxonomyName: 'A Level Maths 2020 Topics',
    taxonomyType: 'Topic',
    taxonomyStatus: null,
    descriptorValues: [
      'AO1 - Knowledge with understanding',
      'AO2 - Handling information and problem solving',
      'AO3 - Experimental skills and investigations'
    ],
    leaf: true
  };

  constructor(
    private store: Store<State>,
    private ngModalService: NgbModal
  ) { }

  ngOnInit() {
    this.addStoreSubscriptions();
  }

  ngOnDestroy() {
    this.removeStoreSubscriptions();
  }

  addStoreSubscriptions(): void {
    this.storeSubscriptions.push(
      this.store.select(addTaxonomy).subscribe(
        response => {this.postedTaxonomy = response;},
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

  postNow(): void {
    this.store.dispatch(new AddTaxonomy(this.payloadData));
    this.modalReference = this.ngModalService.open(this.modalContent);
  }
}
