import { Component, OnInit } from '@angular/core';
import { Button } from '../button.clase';

@Component({
  selector: 'app-button-cancelar',
  templateUrl: './button-cancelar.component.html',
  styleUrls: ['./button-cancelar.component.css']
})
export class ButtonCancelarComponent extends Button implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
