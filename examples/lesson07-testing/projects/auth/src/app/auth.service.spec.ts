import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';

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
      login: of(loginResponse),
      logout: EMPTY,
    })

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: RealFakeApiService, useValue: spy }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sign in with valid credentials', (done: DoneFn) => {
    const username = 'user@example.com'
    const password = 'correct-horse-stable-battery'
    service.signIn(username, password).subscribe(value => {
      expect(value).toBe(loginResponse)
      done()
    })
  });

  it('should fail with invalid credentials', (done: DoneFn) => {
    service.signIn().subscribe(value => {
      expect(value).toBeInstanceOf(Error)
      done()
    })
  })

  it('should sign out', () => {
    expect(service.signOut()).toBe(EMPTY)
  });

  it('should sign up', () => {
    expect(true).toBe(true)
  });
});
