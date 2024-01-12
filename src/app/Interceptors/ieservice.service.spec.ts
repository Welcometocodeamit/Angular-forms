import { TestBed } from '@angular/core/testing';

import { IeserviceService } from './ieservice.service';

describe('IeserviceService', () => {
  let service: IeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
