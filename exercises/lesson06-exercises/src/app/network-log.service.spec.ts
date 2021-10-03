import { TestBed } from '@angular/core/testing';

import { NetworkLogService } from './network-log.service';

describe('NetworkLogService', () => {
  let service: NetworkLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
