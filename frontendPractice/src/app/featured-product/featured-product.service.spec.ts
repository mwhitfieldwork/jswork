import { TestBed } from '@angular/core/testing';

import { FeaturedProductService } from './featured-product.service';

describe('FeaturedProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturedProductService = TestBed.get(FeaturedProductService);
    expect(service).toBeTruthy();
  });
});
