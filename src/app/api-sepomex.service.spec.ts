import { TestBed } from '@angular/core/testing';

import { ApiSepomexService } from './api-sepomex.service';

describe('ApiSepomexService', () => {
  let service: ApiSepomexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSepomexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
