import { Component, OnInit } from '@angular/core';
import { Form } from '../../shared/forms/form/form.clase';
import { LoginInterfaceRequest } from '../login/login.interface';
import { LoginService } from '../login/login.service';
import { TypeInput } from '../../shared/forms/form-content/inputs/enum-type-input';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends Form implements OnInit {
  requestJson: LoginInterfaceRequest;
  constructor(private login_srv: LoginService) {
    super();
    this.constructorFormulario(
      'login',
      '',
      [
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
    );
  }

  ngOnInit() {
    console.log('Fieldsets:' + this.fieldsets);
  }

  requestBack() {
    this.login_srv.login(this.requestJson).then(() => {
      this.loading = false;
      console.log('Termino de Loguearse');
    });
  }

}
