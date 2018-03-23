import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-submit',
  templateUrl: './input-submit.component.html',
  styleUrls: ['./input-submit.component.css']
})
export class InputSubmitComponent extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
