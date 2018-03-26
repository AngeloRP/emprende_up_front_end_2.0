import { Component, OnInit } from '@angular/core';
import { Fieldset } from './fieldset.clase';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent extends Fieldset implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
