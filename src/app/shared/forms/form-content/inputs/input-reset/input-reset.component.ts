import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-reset',
  templateUrl: './input-reset.component.html',
  styleUrls: ['./input-reset.component.css']
})
export class InputResetComponent  extends InputClassContentPadre  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
