import { TestBed } from '@angular/core/testing';

import { AccessLogService } from './network-log.service';

describe('AccessLogService', () => {
  let service: AccessLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
