import { Injectable } from '@angular/core';
import { UserInactiveInterface } from '../user-inactive/user-inactive.interface';
import { Http } from '@angular/http';
import { NotificationService } from 'app/shared/utils/notification.service';
import { ApiService } from '../../../../core/api/api.service';

@Injectable()
export class UsersTableInactiveService extends ApiService {
  results: UserInactiveInterface[];
  constructor(public http: Http, public notificationService: NotificationService) {
    super(http, 'listarUsuarioInactivos', [], notificationService);
  }

  listarUsuarios(): Promise<void> {
    return this.getData(true).then(() => {
      console.log('Results:' + JSON.stringify(this.results));
    }
    );
  }

}
