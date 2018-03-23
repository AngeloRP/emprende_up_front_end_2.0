import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-hidden',
  templateUrl: './input-hidden.component.html',
  styleUrls: ['./input-hidden.component.css']
})
export class InputHiddenComponent  extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
