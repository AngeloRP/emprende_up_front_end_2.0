import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-phone',
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.css']
})
export class InputPhoneComponent  extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
