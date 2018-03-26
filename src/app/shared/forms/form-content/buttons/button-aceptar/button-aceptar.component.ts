import { Component, OnInit } from '@angular/core';
import { Button } from '../button.clase';

@Component({
  selector: 'app-button-aceptar',
  templateUrl: './button-aceptar.component.html',
  styleUrls: ['./button-aceptar.component.css']
})
export class ButtonAceptarComponent extends Button implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  aceptar(){
    
  }

}
