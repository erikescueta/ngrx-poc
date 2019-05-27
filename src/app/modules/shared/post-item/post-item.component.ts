import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() createType = '';

  constructor() { }

  ngOnInit() {
  }

  openCreateForm() {
    console.log('open!');
  }
}
