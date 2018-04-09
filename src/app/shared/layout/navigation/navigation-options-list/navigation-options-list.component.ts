import { Component, OnInit } from '@angular/core';
import { NavigationOptionsListClass } from './navigation-options-list.class';
import { NavigationService } from '../navigation.service';
import { SidebarElement } from 'app/shared/layout/navigation/sidebar-element.interface';
import { SidebarElementClass } from '../sidebar-element';

@Component({
  selector: 'app-navigation-options-list',
  templateUrl: './navigation-options-list.component.html',
  styleUrls: ['./navigation-options-list.component.css']
})
export class NavigationOptionsListComponent extends NavigationOptionsListClass implements OnInit {
  registroInicialCompletado = false;
  isLoading = true;
  sidebar_elements: SidebarElement[];
  private sidebar_administrador: SidebarElement[] = [
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

  private sidebar_comite: SidebarElement[] = [
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
  constructor(private navigation_service: NavigationService) {
    super();
  }

  ngOnInit() {
    this.fillSidebar();
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

      await this.navigation_service.llenarMesesParaIncubado().then(
        meses => {
          if (meses.data) {
            console.log('Meses:' + JSON.stringify(meses.data));
            if (meses.data.success) {
              if (meses.data.rpta.length > 0) {
                sidebarEvaluaciones.addChildsEvaluaciones(meses.data.rpta);
                sidebarIndicadores.addChildsIndicadores(meses.data.rpta);
              }
              // console.log('Evaluaciones llenadas');
            }
          }
        }

      ).catch(
        reject => {

        }
      );
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
}
