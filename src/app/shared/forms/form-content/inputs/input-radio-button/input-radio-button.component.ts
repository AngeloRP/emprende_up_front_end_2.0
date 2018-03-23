import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-radio-button',
  templateUrl: './input-radio-button.component.html',
  styleUrls: ['./input-radio-button.component.css']
})
export class InputRadioButtonComponent  extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
