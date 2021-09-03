import { TestBed } from '@angular/core/testing';

import { AuthedGuard } from './authed.guard';

describe('AuthedGuard', () => {
  let guard: AuthedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
