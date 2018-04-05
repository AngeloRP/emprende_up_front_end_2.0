import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config_server } from './config';
import { EndpointService } from './endpoint.service';
import { NotificationService } from 'app/shared/utils/notification.service';
import * as  conexion_back from 'assets/api/back/url.json'

@Injectable()
export class ApiService extends EndpointService {
  results: any;
  constructor(public http: Http, public url: string, public headers: { name, value }[], public notificationService: NotificationService) {
    super(http, conexion_back.url, config_server.headers);
    this.webAddress.addUrl(url);
    this.webAddress.addHeaders(headers);
  }

  protected getData(mostrarAlertaSuccess: boolean = false, mostrarAlertaError: boolean = true) {
    const resultado = this.get().toPromise().then(
      resultados => {
        if (resultados.data !== undefined) {
          if (resultados.data.rpta !== undefined) {
            this.results = resultados.data.rpta;
            if (mostrarAlertaSuccess === true && resultados.data.msg !== undefined) {
              this.notificationService.smallBox(
                {
                  title: resultados.data.msg,
                  color: 'blue',
                  iconSmall: `fa fa-thumbs-up bounce animated`,
                  timeout: 1000
                }
              );
            }
          } else {
            this.results = null;
            if (resultados.data.msg !== undefined) {
              this.notificationService.bigBox(
                {
                  title: resultados.data.msg,
                  color: 'red',
                  iconSmall: `fa fa-thumbs-down bounce animated`,
                  timeout: 1000
                }
              );
            }
          }
        } else {
          this.results = null;
          this.notificationService.bigBox(
            {
              title: 'Error de Servidor',
              color: 'red',
              iconSmall: `fa fa-thumbs-down bounce animated`,
              timeout: 1000
            }
          );
        }
      }
    ).catch(
      error => {
        this.results = null;
        this.notificationService.bigBox(
          {
            title: 'Error de Servidor',
            color: 'red',
            iconSmall: `fa fa-thumbs-down bounce animated`,
            timeout: 1000
          }
        );
        console.log('Error:' + JSON.stringify(error));
      }
    );
    return resultado;
  }

  protected postData(body: any, mostrarAlertaSuccess: boolean = false, mostrarAlertaError: boolean = true) {
    const resultado = this.post(body).toPromise().then(
      resultados => {
        if (resultados.data !== undefined) {
          if (resultados.data.rpta !== undefined) {
            this.results = resultados.data.rpta;
            if (mostrarAlertaSuccess === true && resultados.data.msg !== undefined) {
              this.notificationService.smallBox(
                {
                  title: resultados.data.msg,
                  color: 'blue',
                  iconSmall: `fa fa-thumbs-up bounce animated`,
                  timeout: 1000
                }
              );
            }
          } else {
            this.results = null;
            if (mostrarAlertaError === true && resultados.data.msg !== undefined) {
              this.notificationService.bigBox(
                {
                  title: resultados.data.msg,
                  color: 'red',
                  iconSmall: `fa fa-thumbs-down bounce animated`,
                  timeout: 1000
                }
              );
            }
          }
        } else {
          this.results = null;
          this.notificationService.bigBox(
            {
              title: 'Error de Servidor',
              color: 'red',
              iconSmall: `fa fa-thumbs-down bounce animated`,
              timeout: 1000
            }
          );
        }
      }
    ).catch(
      error => {
        this.results = null;
        this.notificationService.bigBox(
          {
            title: 'Error de Servidor',
            color: 'red',
            iconSmall: `fa fa-thumbs-down bounce animated`,
            timeout: 1000
          }
        );
        console.log('Error:' + JSON.stringify(error));
      }
    );
    return resultado;
  }

  protected patchData(body: any, mostrarAlertaSuccess: boolean = false, mostrarAlertaError: boolean = true) {
    const resultado = this.patch(body).toPromise().then(
      resultados => {
        if (resultados.data !== undefined) {
          if (resultados.data.rpta !== undefined) {
            this.results = resultados.data.rpta;
            if (mostrarAlertaSuccess === true && resultados.data.msg !== undefined) {
              this.notificationService.smallBox(
                {
                  title: resultados.data.msg,
                  color: 'blue',
                  iconSmall: `fa fa-thumbs-up bounce animated`,
                  timeout: 1000
                }
              );
            }
          } else {
            this.results = null;
            if (mostrarAlertaError === true && resultados.data.msg !== undefined) {
              this.notificationService.bigBox(
                {
                  title: resultados.data.msg,
                  color: 'red',
                  iconSmall: `fa fa-thumbs-down bounce animated`,
                  timeout: 1000
                }
              );
            }
          }
        } else {
          this.results = null;
          this.notificationService.bigBox(
            {
              title: 'Error de Servidor',
              color: 'red',
              iconSmall: `fa fa-thumbs-down bounce animated`,
              timeout: 1000
            }
          );
        }
      }
    ).catch(
      error => {
        this.results = null;
        this.notificationService.bigBox(
          {
            title: 'Error de Servidor',
            color: 'red',
            iconSmall: `fa fa-thumbs-down bounce animated`,
            timeout: 1000
          }
        );
        console.log('Error:' + JSON.stringify(error));
      }
    );
    return resultado;
  }
}
