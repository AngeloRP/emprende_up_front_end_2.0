import { Component, OnInit } from '@angular/core';
import { UsersTableInactive } from './users-table-inactive.class';
import { UsersTableInactiveService } from './users-table-inactive.service';

@Component({
  selector: 'app-users-table-inactive',
  templateUrl: './users-table-inactive.component.html',
  styleUrls: ['./users-table-inactive.component.css']
})
export class UsersTableInactiveComponent extends UsersTableInactive implements OnInit {

  constructor(private user_service: UsersTableInactiveService) {
    super();
    this.loading = true;
  }

  ngOnInit() {
    this.user_service.listarUsuarios().then(() => {
      this.rows = this.user_service.results;
      this.loading = false;
    });
  }

}
