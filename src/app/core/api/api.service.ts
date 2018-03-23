import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config_server } from './config';
import { EndpointService } from './endpoint.service';
import { NotificationService } from 'app/shared/utils/notification.service';
import * as  conexion_back from 'assets/api/back/url.json'

@Injectable()
export class ApiService extends EndpointService {

  constructor(public http: Http, public notificationService?: NotificationService) {
    super(http, conexion_back.url, config_server.headers);
    this.webAddress.addHeader({
      name: 'USER-ID',
      value: window.localStorage.getItem('user-id')
    });
  }

  public fillApiService(
    url: string = null,
    headers: { name: string, value: any }[] = null,
    headersLocalStorage: string[] = null,
    headersHttp: Headers = null) {
    if (url != null && url !== undefined) {
      this.webAddress.addUrl(url);
    }
    if (headers != null && headers !== undefined) {
      for (const header of headers) {
        this.webAddress.addHeader(header);
      }
    }
    if (headersLocalStorage != null && headersLocalStorage !== undefined) {
      for (const header of headersLocalStorage) {
        let name = header;
        if (header === 'start-up-id-table') { name = 'start-up-id'; }
        this.webAddress.addHeader({
          name: name.toUpperCase(),
          value: window.localStorage.getItem(header)
        });
      }
    }
    if (headersHttp != null && headersHttp !== undefined) {
      this.webAddress.headers = headersHttp;
    }
    // console.log('Headers Keys:' + this.webAddress.getHeaderKeys());
    // console.log('Headers Actuales:' + this.webAddress.getHeaderValues());
  }

}
