import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { HttpErrorResponse } from '@angular/common/http';

import { RealFakeApiService } from './real-fake-api.service';
import { LoginResponse } from './auth.service';

describe('RealFakeApiService', () => {
  let service: RealFakeApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RealFakeApiService);
  });

  
  afterEach(() => {
    httpTestingController.verify();
  });
  
  describe('#constructor', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })

  describe('#login', () => {
    it('should POST to backend', () => {
      service.login().subscribe();
      const req = httpTestingController.expectOne(service.rootUrl);
      expect(req.request.method).toEqual('POST')
    });

    it('should return LoginResponse on success', () => {
      const testData: LoginResponse = { 
        access_token: '', 
        refresh_token: ''
      }

      service.login('username', 'password').subscribe(
        response => expect(response).toEqual(testData)
      )

      const req = httpTestingController.expectOne(service.rootUrl);
      req.flush(testData)
    });

    it('should return ErrorEvent', () => {
      const error_message = 'simulated network error';

      service.login().subscribe(
        _ => fail,
        (error: HttpErrorResponse) => {
          expect(error.error.message).toEqual(error_message)
        }
      )
      
      const req = httpTestingController.expectOne(service.rootUrl)

      const mockError = new ErrorEvent('Network error', {
        message: error_message
      })
      req.error(mockError)
    })
  });
});

