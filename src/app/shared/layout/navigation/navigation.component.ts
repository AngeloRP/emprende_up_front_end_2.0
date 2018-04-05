import { Component, OnInit, Input } from '@angular/core';
// import { LoginInfoComponent } from '../../user/login-info/login-info.component';
// import { SidebarElement } from './sidebar-element.interface';
import { Router } from '@angular/router';
// import { AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
// import { ApiService } from '../../../core/api/api.service';
import { Http } from '@angular/http';
// import { SidebarElementClass } from 'app/shared/layout/navigation/sidebar-element';

declare var $: any;
@Component({
  selector: 'app-sa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: []
})
export class NavigationComponent implements OnInit {
  // registroInicialCompletado = false;
  // isLoading = true;

  constructor(
    public http: Http,
    private router: Router
    // private evaluacionesService: ApiService,
    // private indicadoresService: ApiService
  ) {

  }

  ngOnInit() {
  }

  /* navigate(sidebarElement: SidebarElement) {
   // console.log('Id:' + sidebarElement.id);
    $('a').css('color', 'white');
    $('#' + sidebarElement.id).css('color', '#FFD600');
   // console.log('En camino hacia ' + JSON.stringify(sidebarElement.link));

    this.router.navigateByUrl(sidebarElement.link.commands[0], { skipLocationChange: false });
  }*/
}
