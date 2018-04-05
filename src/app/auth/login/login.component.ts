import { Component, OnInit, AfterContentChecked, ViewEncapsulation } from '@angular/core';
import { Form } from '../../shared/forms/form/form.clase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterContentChecked {
  altura = '';
  loading: boolean;
  constructor() {
  }

  ngAfterContentChecked() {
    setTimeout(() => {
      this.altura = window.innerHeight + 'px';
    }, 0);
  }

  ngOnInit() {
  }

}
