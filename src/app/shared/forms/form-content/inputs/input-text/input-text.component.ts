import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';




@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends InputClassContentPadre implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
