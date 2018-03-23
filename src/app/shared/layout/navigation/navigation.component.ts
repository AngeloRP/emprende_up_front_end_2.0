import { Component, OnInit } from '@angular/core';
import { LoginInfoComponent } from '../../user/login-info/login-info.component';
import { SidebarElement } from './sidebar-element.interface';
import { Router } from '@angular/router';
import { AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { ApiService } from '../../../core/api/api.service';
import { Http } from '@angular/http';
import { SidebarElementClass } from 'app/shared/layout/navigation/sidebar-element';

declare var $: any;
@Component({
  selector: 'app-sa-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ApiService]
})
export class NavigationComponent implements OnInit, AfterContentChecked {
  registroInicialCompletado = false;
  isLoading = true;
  sidebar_elements: SidebarElement[];

  sidebar_comite: SidebarElement[] = [
    {
      id: 'home-comite',
      title: 'Inicio',
      imagen: 'fa fa-lg fa-fw fa-home',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/comite/startups'] },
      hasChilds: false,
    },
  ];

  sidebar_administrador: SidebarElement[] = [
    {
      id: 'administrador-dashboard',
      title: 'Reportes',
      imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/reportes/startups'] },
      hasChilds: true,
      childs: [
        {
          id: 'administrador-dashboard-startups',
          title: 'Reporte de Start Ups',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/startups'] },
          hasChilds: false
        }, {
          id: 'administrador-dashboard-empleados',
          title: 'Reporte de Empleados',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/empleados'] },
          hasChilds: false
        },
        {
          id: 'administrador-dashboard-ingresos',
          title: 'Reporte de Ingresos',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/ingresos'] },
          hasChilds: false
        },
        {
          id: 'administrador-dashboard-compras',
          title: 'Reporte de Compras',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/compras'] },
          hasChilds: false
        },
        {
          id: 'administrador-dashboard-fondos',
          title: 'Reporte de Fondos',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/fondos'] },
          hasChilds: false
        },
        {
          id: 'administrador-dashboard-impuestos',
          title: 'Reporte de Impuestos',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/impuestos'] },
          hasChilds: false
        },
        {
          id: 'administrador-dashboard-mentorias',
          title: 'Reporte de Mentorias y Asesorias',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          class: '',
          link: { commands: ['/administrador/reportes/mentorias'] },
          hasChilds: false
        }
      ]
    },
    {
      id: 'administrador-usuarios',
      title: 'Usuarios',
      imagen: 'fa fa-lg fa-fw fa-group',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/usuarios'] },
      hasChilds: false
    },
    {
      id: 'administrador-startups',
      title: 'Incubados',
      imagen: 'fa fa-lg fa-fw fa-group',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/start-ups'] },
      hasChilds: false
    },
    {
      id: 'administrador-asignar-evaluadores',
      title: 'Asignar Evaluadores',
      imagen: 'fa fa-lg fa-fw fa-group',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/asignarEvaluadores'] },
      hasChilds: false
    },
    {
      id: 'administrador-asignar-meses',
      title: 'Asignar Meses de Incubación',
      imagen: 'fa fa-lg fa-fw fa-calendar',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/asignarMeses'] },
      hasChilds: false
    },
    {
      id: 'administrador-activar-formularios',
      title: 'Activar Evaluaciones Mensuales',
      imagen: 'fa fa-lg fa-fw fa-calendar',
      clase_menu: 'menu-item-parent',
      class: '',
      link: { commands: ['/administrador/activarFormularios'] },
      hasChilds: false
    }
  ];
  constructor(
    public http: Http,
    private router: Router,
    private mesesService: ApiService
    // private evaluacionesService: ApiService,
    // private indicadoresService: ApiService
  ) {

  }

  refreshEvaluacionService() {
    this.mesesService = new ApiService(this.http);
    this.mesesService.fillApiService('obtenerStartUpConMesActivado/' + window.localStorage.getItem('start-up-id'),
      null);
    /*
    this.evaluacionesService = new ApiService(this.http);
    this.evaluacionesService.fillApiService('obtenerStartUpConMesActivado/' + window.localStorage.getItem('start-up-id'),
      null);
    this.indicadoresService = new ApiService(this.http);
    this.indicadoresService.fillApiService('obtenerStartUpConMesActivado/' + window.localStorage.getItem('start-up-id'),
      null);*/
  }

  ngOnInit() {
    // Para cambiar cuando sean mas
    window.localStorage.setItem('menuMinified', '-1');
    this.fillSidebar();
  }

  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    // this.fillSidebar();
  }

  async fillSidebar() {
    switch (window.localStorage.getItem('category')) {
      case '1':
        {
         // console.log('Entro a sidebar administrador');
          this.sidebar_elements = this.sidebar_administrador;
          this.registroInicialCompletado = true;
          this.isLoading = false;
        }

        break;
      case '2':
        {
         // console.log('Entro a sidebar comite');
          this.sidebar_elements = this.sidebar_comite;
          this.registroInicialCompletado = true;
          this.isLoading = false;

        }
        break;
      case '3':
        {
          if (window.localStorage.getItem('cambio-fase') !== '1') {
            await this.fillIncubados();
          } else {
            const sidebarIncubados = new Array<SidebarElement>();
            const sidebarHome = new SidebarElementClass(
              {
                id: 'home-incubado',
                title: 'Cambio de Fase',
                imagen: 'fa fa-lg fa-fw fa-home',
                clase_menu: 'menu-item-parent',
                link: { commands: ['/incubado/home/dashboard'] },
                class: '',
                hasChilds: false
              },
            );
            sidebarIncubados.push(sidebarHome.element);
            this.sidebar_elements = sidebarIncubados;
            this.registroInicialCompletado = true;
            this.isLoading = false;
          }

        }

        break;
      default:
        break;
    }
    //

  }

  private async fillIncubados() {
   // console.log('Entro a llenar Incubados');

    if (window.localStorage.getItem('paso') === '6') {
      const sidebarIncubados = new Array<SidebarElement>();

      const sidebarHome = new SidebarElementClass(
        {
          id: 'home-incubado',
          title: 'Dashboard',
          imagen: 'fa fa-lg fa-fw fa-home',
          clase_menu: 'menu-item-parent',
          link: { commands: ['/incubado/home/dashboard'] },
          class: '',
          hasChilds: false
        },
      );
      sidebarIncubados.push(sidebarHome.element);

      const sidebarEvaluaciones = new SidebarElementClass(
        {
          id: 'evaluaciones-incubado',
          title: 'Evaluaciones',
          imagen: 'fa fa-lg fa-fw fa-sitemap',
          clase_menu: 'menu-item-parent',
          link: { commands: ['/incubado/evaluaciones/gráficas'] },
          class: '',
          hasChilds: true,
          childs: []
        }
      );
      this.refreshEvaluacionService();

      const sidebarIndicadores = new SidebarElementClass(
        {
          id: 'app-incubado-indicadores',
          title: 'Indicadores',
          imagen: 'fa fa-lg fa-fw fa-bar-chart-o',
          clase_menu: 'menu-item-parent',
          link: { commands: ['/incubado/indicadores/gráficas'] },
          class: '',
          hasChilds: true,
          childs: []
        }
      );

      await this.mesesService.get().toPromise().then(
        meses => {
          if (meses.data) {
            if (meses.data.success) {
              if (meses.data.rpta.length > 0) {
               // window.localStorage.setItem('tiene_meses', '1');
              }
              sidebarEvaluaciones.addChildsEvaluaciones(meses.data.rpta);
              sidebarIndicadores.addChildsIndicadores(meses.data.rpta);
             // console.log('Evaluaciones llenadas');
            }
          }
        }

      ).catch(
        reject => {

        }
        );
      /*
      await this.evaluacionesService.get().toPromise().then(
        meses => {
          if (meses.data) {
            if (meses.data.success) {
              sidebarEvaluaciones.addChildsEvaluaciones(meses.data.rpta);
             // console.log('Evaluaciones llenadas');
            }
          }
        }

      ).catch(
        reject => {

        }
        );
      //
      await this.indicadoresService.get().toPromise().then(
        meses => {
          if (meses.data) {
            if (meses.data.success) {
              sidebarIndicadores.addChildsIndicadores(meses.data.rpta);
             // console.log('Evaluaciones e indicadores llenados');
            }
          }
        }

      ).catch(
        reject => {

        }
        );
        */

      sidebarIncubados.push(sidebarEvaluaciones.element);
      sidebarIncubados.push(sidebarIndicadores.element);


      // this.sidebar_elements = sidebarIncubados;
      this.sidebar_elements = sidebarIncubados;
     // console.log('Sidebar:' + JSON.stringify(this.sidebar_elements));
      this.registroInicialCompletado = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    } else {
     // console.log('No lleno por falta de registro Inicial');
      this.isLoading = false;
    }
  }

  navigate(sidebarElement: SidebarElement) {
   // console.log('Id:' + sidebarElement.id);
    $('a').css('color', 'white');
    $('#' + sidebarElement.id).css('color', '#FFD600');
   // console.log('En camino hacia ' + JSON.stringify(sidebarElement.link));

    this.router.navigateByUrl(sidebarElement.link.commands[0], { skipLocationChange: false });
  }
}
