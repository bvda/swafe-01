import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AccessLogService } from './access-log.service';

describe('AccessLogService', () => {
  let service: AccessLogService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(AccessLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
