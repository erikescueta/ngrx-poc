import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';
import { TaxonomiesEffects } from './taxonomies.effects';
import { TaxonomiesService} from './../services/taxonomies.service';
import { FetchTaxonomies, FetchTaxonomiesDone } from './../actions/taxonomies.actions';

describe('TaxonomiesEffects', () => {
  let taxonomiesEffects: TaxonomiesEffects;
  let taxonomiesActions: Observable<any>;
  let taxonomiesService: jasmine.SpyObj<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TaxonomiesEffects,
        provideMockActions(() => taxonomiesActions),
        {
          provide: TaxonomiesService,
          useValue: {
            fetchTaxonomies: jasmine.createSpy()
          }
        }
      ]
    });

    // taxonomiesActions = TestBed.get(Actions);
    taxonomiesEffects = TestBed.get(TaxonomiesEffects);
    taxonomiesService = TestBed.get(TaxonomiesService);
  });

  describe('fetchTaxonomies', () => {
    it('should return a FetchTaxonomiesDone action, with the payload, on success', () => {

      const payload = ['Taxonomy 1', 'Taxonomy 2', 'Taxonomy 3'];
      const fetchAction = new FetchTaxonomies();
      const fetchDoneAction = new FetchTaxonomiesDone(payload);

      taxonomiesActions = hot('-a', { a: fetchAction });
      const response = cold('-a|', { a: payload });

      taxonomiesService = TestBed.get(TaxonomiesService);
      taxonomiesService.fetchTaxonomies.and.returnValue(response);

      const expected = cold('--b', { b: fetchDoneAction });

      taxonomiesEffects = TestBed.get(TaxonomiesEffects);
      expect(taxonomiesEffects.fetchTaxonomies$).toBeObservable(expected);
    });
  });
});
