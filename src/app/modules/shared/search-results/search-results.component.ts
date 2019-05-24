import { Component, OnInit, Input } from '@angular/core';
import { TaxonomySearchResult } from './../../../models/taxonomies';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() searchType: string;
  @Input() searchResults: TaxonomySearchResult;

  constructor() { }

  ngOnInit() {
  }
}
