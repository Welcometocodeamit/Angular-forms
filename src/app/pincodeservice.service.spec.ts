import { TestBed } from '@angular/core/testing';

import { PincodeserviceService } from './pincodeservice.service';

describe('PincodeserviceService', () => {
  let service: PincodeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PincodeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
