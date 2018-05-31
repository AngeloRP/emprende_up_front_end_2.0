import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { config_server } from './config';
import { map, filter } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { WebAddress } from './web-address';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EndpointService {
    public webAddress: WebAddress;
    constructor(public http: HttpClient, url: string, headers: HttpHeaders) {
        this.webAddress = new WebAddress(url, headers);
    }

    protected get(): Observable<any> {
        /*return this.http.get(this.webAddress.getUrl(), { headers: this.webAddress.getHeaders() })
          .toPromise()
          .then(
          response => {
           // console.log(response);
            this.results = response;
            response.json();ks
          })
          .catch(this.handleError);
          /** */
        return this.http.get(this.webAddress.getUrl(), { headers: this.webAddress.getHeaders() });
    }

    protected post(body: any): Observable<any> {
       // console.log('Post body:' + JSON.stringify(body));

        return this.http.post(
            this.webAddress.getUrl(),
            JSON.stringify(body),
            {
                headers: this.webAddress.getHeaders()
            },
        ).catch(config_server.handleError);
    }

    protected patch(body: any): Observable<any> {
        return this.http.patch(
            this.webAddress.getUrl(),
            JSON.stringify(body),
            {
                headers: this.webAddress.getHeaders()
            }
        ).map(config_server.extraData)
            .catch(config_server.handleError);
    }

    protected put(body: any): Observable<any> {
        return this.http.put(
            this.webAddress.getUrl(),
            JSON.stringify(body),
            {
                headers: this.webAddress.getHeaders()
            }
        ).map(config_server.extraData)
            .catch(config_server.handleError);
    }

}
