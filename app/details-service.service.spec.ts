import { TestBed } from '@angular/core/testing';

import { DetailsService } from './details-service.service';

describe('DetailsServiceService', () => {
  let service: DetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
