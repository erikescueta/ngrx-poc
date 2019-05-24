import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() searchType = 'something';
  @Output() searchForResults = new EventEmitter();

  public searchTerms = '';


  constructor() { }

  ngOnInit() {
  }

  sendSearchTerms() {
    if (this.searchTerms) {
      const searchTerm = this.searchTerms;
      this.searchForResults.emit(searchTerm);
    }
  }

}
