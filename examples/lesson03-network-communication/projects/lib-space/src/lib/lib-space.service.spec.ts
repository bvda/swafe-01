import { TestBed } from '@angular/core/testing';

import { LibSpaceService } from './lib-space.service';

describe('LibSpaceService', () => {
  let service: LibSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
