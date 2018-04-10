import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsersTableService } from './users-table.service';
import { UsersTable } from './users-table.class';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersTableComponent extends UsersTable implements OnInit {

  constructor(private user_service: UsersTableService) {
    super();
    this.loading = true;
  }

  ngOnInit() {
    this.user_service.listarUsuarios().then(() => {
      this.rows = this.user_service.results;
      this.loading = false;
    });
  }

  capturarResultado(event){
    console.log('Resultado Escrito en el filtro:' + event);
    this.searValue = event;
  }

}
