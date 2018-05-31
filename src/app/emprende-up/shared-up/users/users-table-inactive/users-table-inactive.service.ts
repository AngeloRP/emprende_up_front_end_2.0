import { Injectable } from '@angular/core';
import { UserInactiveInterface } from '../user-inactive/user-inactive.interface';
import { NotificationService } from 'app/shared/utils/notification.service';
import { ApiService } from '../../../../core/api/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersTableInactiveService extends ApiService {
  results: UserInactiveInterface[];
  constructor(public http: HttpClient, public notificationService: NotificationService) {
    super(http, 'listarUsuarioInactivos', [], notificationService);
  }

  listarUsuarios(): Promise<void> {
    return this.getData(true).then(() => {
      console.log('Results:' + JSON.stringify(this.results));
    }
    );
  }

}
