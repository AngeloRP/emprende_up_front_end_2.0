import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout/layout.service';

declare var $: any;

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss']
})
export class LoginInfoComponent implements OnInit {
  startUpId: any = null;
  user: any;

  constructor(
    private layoutService: LayoutService) {
  }

  ngOnInit() {
    /*this.userService.getLoginInfo().subscribe(user => {
      this.user = user
    })*/
    this.fillDatos();
  }

  private fillDatos() {
    this.user = window.localStorage.getItem('userInformation');
    if (
      window.localStorage.getItem('start-up') != null &&
      window.localStorage.getItem('start-up-id') !== undefined &&
      window.localStorage.getItem('start-up') !== 'undefined') {
      this.startUpId = window.localStorage.getItem('start-up');
    }
  }

  private removeDatos() {
    this.user = '';
    this.startUpId = '';
  }


  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }

}
