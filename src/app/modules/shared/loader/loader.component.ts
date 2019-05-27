import { Component, OnInit, Input } from '@angular/core';
import { LoaderAnimation } from './../../../animations/loader.animation';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [LoaderAnimation]
})
export class LoaderComponent implements OnInit {
  @Input() loading = false;

  constructor() { }

  ngOnInit() {
  }

}
