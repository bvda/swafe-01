import { TestBed } from '@angular/core/testing';

import { BillionaireService } from './billionaire.service';

describe('BillionaireService', () => {
  let service: BillionaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillionaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
