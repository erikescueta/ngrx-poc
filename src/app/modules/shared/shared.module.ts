import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoaderComponent } from './loader/loader.component';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    SearchResultsComponent,
    LoaderComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent,
    SearchResultsComponent,
    LoaderComponent,
    PostItemComponent
  ]
})
export class SharedModule { }
