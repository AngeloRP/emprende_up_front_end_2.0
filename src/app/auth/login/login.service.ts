import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationService } from '../../shared/utils/notification.service';
import * as  conexion_back from 'assets/api/back/url.json';
import { config_server } from '../../core/api/config';
import { LoginInterfaceRequest, LoginInterfaceResponse } from './login.interface';
import { ApiService } from '../../core/api/api.service';

@Injectable()
export class LoginService extends ApiService {
  results: LoginInterfaceResponse;
  constructor(public http: Http, public notificationService: NotificationService) {
    super(http, 'loginUsuario', [], notificationService);
  }

  login(body: LoginInterfaceRequest): Promise<void> {
    console.log('Request Login:' + JSON.stringify(body));
    return this.postData(body, true);
  }
}
