import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isNumber, isNull } from 'util';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() idFilter: string;
  @Output() resultado: EventEmitter<string>;
  filter: string;
  constructor() {
    this.filter = '';
    this.resultado = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  updateFilter(event) {
    console.log('Filter: ' + this.filter);
    const val = event.target.value.toLowerCase();
    this.resultado.emit(this.filter);
  }

}
