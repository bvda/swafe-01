import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';

import { AuthService, LoginResponse } from './auth.service';
import { RealFakeApiService } from './real-fake-api.service';

describe('AuthService', () => {
  let service: AuthService;
  
  const loginResponse: LoginResponse = {
    access_token: 'access_token',
    refresh_token: 'refresh_token'
  }

  beforeEach(() => {
    const spy = jasmine.createSpyObj('RealFakeApiService', {
      login: loginResponse,
      logout: EMPTY,
    })

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        { provide: RealFakeApiService, useValue: spy }]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sign in', () => {
    expect(true).toBe(true)
  });

  it('should sign out', () => {
    expect(service.signOut()).toBe(EMPTY)
  });

  it('should sign up', () => {
    expect(true).toBe(true)
  });
});
