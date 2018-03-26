import { JsonpModule, Jsonp, BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EndpointService } from './endpoint.service';

describe('EndpointService', () => {
  let service: EndpointService;
  let backend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        JsonpModule
      ],
      providers: [
        EndpointService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options)
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
    backend = TestBed.get(MockBackend);
  });

  it('should be created', inject([EndpointService], (service: EndpointService) => {
    expect(service).toBeTruthy();
  }));
});
