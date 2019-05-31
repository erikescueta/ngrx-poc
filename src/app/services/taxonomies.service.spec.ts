import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TaxonomiesService } from './taxonomies.service';

describe('TaxonomiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      TaxonomiesService
    ]
  }));

  it('should be created', () => {
    const service: TaxonomiesService = TestBed.get(TaxonomiesService);
    expect(service).toBeTruthy();
  });
});
