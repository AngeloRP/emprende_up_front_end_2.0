import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import { NotificationService } from '../../utils/notification.service';
import { Http } from '@angular/http';


@Injectable()
export class NavigationService extends ApiService {
  constructor(public http: Http, public notificationService: NotificationService) {
    super(
      http,
      'obtenerStartUpConMesActivado/' +
      window.localStorage.getItem('start-up-id'),
      [],
      notificationService
    );
  }

  llenarMesesParaIncubado(): Promise<any> {
    return this.getData(true);
  }
}
