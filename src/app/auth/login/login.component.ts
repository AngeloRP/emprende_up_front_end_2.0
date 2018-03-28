import { Component, OnInit, AfterContentChecked, ViewEncapsulation } from '@angular/core';
import { Form } from '../../shared/forms/form/form.clase';
import { TypeInput } from '../../shared/forms/form-content/inputs/enum-type-input';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent extends Form implements OnInit, AfterContentChecked {
  altura = '';
  constructor(private login_srv: LoginService) {
    super();
    this.form = {
      clase: '',
      id: 'login',
      fieldsets: [
        {
          clase: '',
          id: 'loginField',
          legend: '',
          hasLegend: false,
          inputs: [
            {
              id: 'input_email',
              clase: '',
              imagen: { clase: '' },
              type: TypeInput.email,
              data: {
                isRequired: true,
                hasPlaceholder: true,
                id: 'email',
                value: '',
                class: 'col-xs-12',
                alt: '',
                isSeteable: true,
                placeholder: ''
              },
              options: {
                title: 'Escriba un correo válido'
              },
              label: {
                hasLabel: true,
                texto: 'Correo Electrónico'
              }
            },
            {
              id: 'input_password',
              clase: '',
              imagen: { clase: '' },
              type: TypeInput.password,
              data: {
                isRequired: true,
                hasPlaceholder: true,
                id: 'password',
                value: '',
                class: 'col-xs-12',
                alt: '',
                isSeteable: true,
                placeholder: ''
              },
              options: {
                title: 'Escriba una contraseña'
              },
              label: {
                hasLabel: true,
                texto: 'Contraseña'
              }
            }
          ]
        }
      ]
    };
  }

  ngAfterContentChecked() {
    setTimeout(() => {
      this.altura = window.innerHeight + 'px';
    }, 0);
  }

  ngOnInit() {
  }

  requestBack() {
    this.login_srv.login(this.requestJson).then(() => {
      if (this.login_srv.results !== null) {
        window.localStorage.setItem('user-id', this.login_srv.results.user_id + '');
        window.localStorage.setItem('category', this.login_srv.results.category + '');
      }
      this.loading = false;
      console.log('Termino de Loguearse');
    });
  }

}
