import { TestBed } from '@angular/core/testing';

import { FaultyService } from './faulty.service';

describe('FaultyService', () => {
  let service: FaultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
