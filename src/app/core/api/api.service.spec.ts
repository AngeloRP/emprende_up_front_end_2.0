import { TestBed, inject } from '@angular/core/testing';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let httpApiService: ApiService;
  let httpClienteSpy: {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, Http]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
