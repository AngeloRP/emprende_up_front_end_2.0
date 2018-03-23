import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-millar',
  templateUrl: './input-millar.component.html',
  styleUrls: ['./input-millar.component.css']
})
export class InputMillarComponent  extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
