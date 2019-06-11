import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribeComponent } from './subscribe.component';
import { LoaderComponent } from './../../shared/loader/loader.component';
import { SearchInputComponent } from './../../shared/search-input/search-input.component';
import { SearchResultsComponent } from './../../shared/search-results/search-results.component';
import { PostItemComponent } from './../../shared/post-item/post-item.component';
import { FormsModule } from '@angular/forms';
import { TaxonomiesService } from './../../../services/taxonomies.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SubscribeComponent', () => {

  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        TaxonomiesService,
        HttpClient,
        HttpHandler
      ],
      declarations: [
        SubscribeComponent,
        LoaderComponent,
        SearchInputComponent,
        SearchResultsComponent,
        PostItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
