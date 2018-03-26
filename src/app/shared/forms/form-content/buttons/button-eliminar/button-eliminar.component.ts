import { Component, OnInit} from '@angular/core';
import { Button } from '../button.clase';

@Component({
  selector: 'app-button-eliminar',
  templateUrl: './button-eliminar.component.html',
  styleUrls: ['./button-eliminar.component.css']
})
export class ButtonEliminarComponent extends Button implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
