import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  HostListener,
  AfterViewChecked
} from '@angular/core';
import { TableContent } from './table-content.class';
import { isNumber, isNull } from 'util';
// import { ColumnComponent } from '../column/column.component';
import { ColumnsComponent } from '../columns/columns.component';
import {
  TableColumn,
  ColumnMode,
  DatatableComponent
} from '@swimlane/ngx-datatable';

declare var $: any;

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableContentComponent extends TableContent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  // @ViewChild('action') action: TemplateRef<any>;
  @ViewChild(ColumnsComponent)
  private columnsChild: ColumnsComponent;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  bandera = 0;
  constructor() {
    super();
    this.loading = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // this.fixBugColumnResize();
    if (this.loading === false) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.table.columnMode = ColumnMode.force;
      }, 0);
    }
  }

  ngAfterViewInit() {
    if (this.columnsChild !== undefined) {
      console.log('Tiene Columnas');
      if (this.columnsChild.loading === false) {
        console.log('Sus columnas ya esta cargadas');
        if (this.columnsChild.columnsComponent !== undefined) {
          console.log('Tiene los tipos de columnas cargadas');
          setTimeout(() => {
            if (this.loading === true) {

              for (let index = 0; index < this.columns.length; index++) {
                this.fillButtonsColumn(index);
              }
              this.temp = this.rows;
              if (this.bandera === 0) {
                this.fixedTable(this.columns.length, this.temp.length);
                this.bandera++
              }
              this.loading = false;
            }
          }, 0);
        }
      }
    }
  }

  private conseguirMax(columna: number, rows: number): number {
    /*let maxWidth =
      $('.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-row-center ' +
        '.datatable-header-cell:nth-child(' + columna + ')').width();*/
    let maxWidth = this.columns[columna - 1].widthText;
    for (let row = 1; row <= rows; row++) { // 1 1+ n 1+
      const widthBody =
        $('.datatable-body datatable-selection datatable-scroller datatable-row-wrapper:nth-child(' + row + ')' +
          ' datatable-body-row .datatable-row-center .datatable-body-cell:nth-child(' + columna + ')').outerWidth();
      console.log('Anxcho máximo actual:' + maxWidth + ' < ' + 'Ancho de Row ' + row + ':' + widthBody + ' ?');
      if (maxWidth < widthBody) {
        maxWidth = widthBody;
      }
    }
    return maxWidth;
  }

  private fillWidthColumn(columna: number, rows: number, width: number): void {
    for (let row = 1; row <= rows; row++) {
      $('.datatable-body datatable-selection datatable-scroller datatable-row-wrapper:nth-child(' + row + ')' +
        ' datatable-body-row .datatable-row-center .datatable-body-cell:nth-child(' + columna + ')').width(width);
    }
    $('.ngx-datatable.fixed-header .datatable-header .datatable-header-inner ' +
      '.datatable-row-center .datatable-header-cell:nth-child(' + columna + ')').width(width);
    this.table.columns[columna - 1].width = width;
    // this.table.columns[columna - 1].canAutoResize = true;
  }

  private fixedTableColumn(columna: number, rows: number) {
    const maxWidth = this.conseguirMax(columna, rows);
    console.log('Ancho máximo de la columna:' + maxWidth);
    this.fillWidthColumn(columna, rows, maxWidth);
  }

  private fixedTable(columnas: number, rowsPagina: number) {

    console.log('Cantidad de Columnas:' + columnas);
    console.log('Cantidad de Rows:' + rowsPagina);
    console.log('Ancho de Body Tabla:' + $('datatable-body').width());
    const maximos = new Array<number>();
    for (let columna = 1; columna <= columnas; columna++) {
      console.log('Columna: ' + columna);
      maximos.push(this.conseguirMax(columna, rowsPagina));
      // this.fixedTableColumn(columna, rowsPagina);
      console.log('********************************');
    }
    this.table.columnMode = ColumnMode.force;
    for (let columna = 1; columna <= columnas; columna++) {
      console.log('Columna: ' + columna);
      this.fillWidthColumn(columna, rowsPagina, maximos[columna - 1]);
      // this.fixedTableColumn(columna, rowsPagina);
      console.log('********************************');
    }
  }

  /**
   *
   * @param index
   */
  private fillButtonsColumn(index: number) {
    if (this.columnsChild.columnsComponent[index] !== undefined) {
      console.log('Index:' + index + '-Cantidad:' + this.columnsChild.columnsComponent.length);
      console.log('view Init:' + this.columnsChild.columnsComponent[index]);
      this.columns[index].cellTemplate = this.columnsChild.columnsComponent[index].template;
    }
  }

  ngAfterViewChecked() {
    if (this.loading === false && this.bandera === 1) {
      /*if (this.table && this.table.recalculate ) {
        this.table.recalculate();
        // this.changeDetectorRef.detectChanges();
      }*/
      this.bandera++;

      console.log('**************************************************');
    }
  }

  ngOnInit() {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searValue && !changes.searValue.isFirstChange()) {
      // exteranl API call or more preprocessing...
      // console.log('sadadadadad');
      setTimeout(() => {
        // this.updateFilter();
        this.updateTable();
      }, 0);
    }
  }

  private updateTable() {
    // console.log('Event:' + event);
    // console.log('Event JSON:' + JSON.stringify(event));
    // event.preventDefault();
    // console.log('Filter Event:' + event);
    // console.log('Filter Event JSON:' + JSON.stringify(event));
    const val = this.searValue.toLowerCase();
    console.log('Escrito en filter:' + val);
    console.log('Columnas de busqueda:' + this.searColumns);
    console.log('Temp:' + JSON.stringify(this.temp));
    // filter our data
    const temp = this.temp.filter(d => {
      // console.log('Nueva Tabla:' + d);
      console.log('Nueva Tabla:' + JSON.stringify(d));
      return (
        !val ||
        this.searColumns.some((field: any) => {
          console.log('Field:' + field);
          console.log('Value:' + d[field]);
          if (d[field] === undefined || d[field] === 'undefined') {
            return false;
          } else {
            if (isNumber(d[field])) {
              return (d[field] + '').toLowerCase().indexOf(val) !== -1;
            } else {
              return d[field].toLowerCase().indexOf(val) !== -1;
            }
          }
        })
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }

}
