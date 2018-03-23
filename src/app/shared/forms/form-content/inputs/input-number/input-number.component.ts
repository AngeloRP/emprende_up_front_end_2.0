import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';
/**
 * 
 * 
 * @export
 * @class InputNumberComponent
 * @extends {InputClassContentPadre}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent  extends InputClassContentPadre implements OnInit {
/**
 * Creates an instance of InputNumberComponent.
 * @memberof InputNumberComponent
 */
constructor() {
    super();
  }
/**
 * 
 * 
 * @memberof InputNumberComponent
 */
ngOnInit() {
  }

}
