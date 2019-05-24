import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaxonomiesEffects } from './taxonomies.effects';

describe('TaxonomiesEffects', () => {
  let actions$: Observable<any>;
  let effects: TaxonomiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaxonomiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TaxonomiesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
