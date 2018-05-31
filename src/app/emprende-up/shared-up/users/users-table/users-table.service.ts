import { Injectable } from '@angular/core';
import { ApiService } from '../../../../core/api/api.service';
import { NotificationService } from '../../../../shared/utils/notification.service';
// import { UsersTableInterface } from './users-table.interface';
import { UserInterface } from '../user/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersTableService extends ApiService {
  results: UserInterface[];
  constructor(public http: HttpClient, public notificationService: NotificationService) {
    super(http, 'listarUsuarioActivos', [], notificationService);
  }

  listarUsuarios(): Promise<void> {
    return this.getData(true).then(() => {
      console.log('Results:' + JSON.stringify(this.results));
    }
    );
  }

}
