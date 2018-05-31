import { Directive, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Directive({
  selector: '[appTableRewatcher]'
})
export class TableRewatcherDirective implements AfterContentChecked {

  constructor(private table: DatatableComponent, public ref: ChangeDetectorRef) { }

    private latestWidth: number;

    ngAfterContentChecked() {
      console.log('Entro a Directiva');
        if (this.table) {
            console.log('Entro a Recalcular tablas');
            this.latestWidth = this.table.element.clientWidth;
            this.table.recalculate();
            this.ref.markForCheck();
        }
    }


}
