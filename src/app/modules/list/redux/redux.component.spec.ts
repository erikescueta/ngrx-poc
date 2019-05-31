import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReduxComponent } from './redux.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { SearchInputComponent } from '../../shared/search-input/search-input.component';
import { SearchResultsComponent } from '../../shared/search-results/search-results.component';
import { PostItemComponent } from '../../shared/post-item/post-item.component';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

describe('ReduxComponent', () => {
  let component: ReduxComponent;
  let fixture: ComponentFixture<ReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReduxComponent,
        LoaderComponent,
        SearchInputComponent,
        SearchResultsComponent,
        PostItemComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        BrowserAnimationsModule
      ],
      providers: [
        Store
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
