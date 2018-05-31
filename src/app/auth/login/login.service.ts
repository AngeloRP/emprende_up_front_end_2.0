import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../shared/utils/notification.service';
import * as  conexion_back from 'assets/api/back/url.json';
import { config_server } from '../../core/api/config';
import { LoginInterfaceRequest, LoginInterfaceResponse } from './login.interface';
import { ApiService } from '../../core/api/api.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService extends ApiService {
  results: LoginInterfaceResponse;
  constructor(public http: HttpClient, public notificationService: NotificationService, private router: Router) {
    super(http, 'loginUsuario', [], notificationService);
  }

  login(body: LoginInterfaceRequest): Promise<void> {
    console.log('Request Login:' + JSON.stringify(body));
    return this.postData(body, true).then(() => {
      console.log('Results:' + JSON.stringify(this.results));
      if (this.results !== null) {
        window.localStorage.setItem('user-id', this.results.user_id + '');
        window.localStorage.setItem('category', this.results.category + '');
        this.router.navigate(['/']);
      }
    }).catch(
      error => {
        console.log('Error:' + error);
      }
    );
  }
}
