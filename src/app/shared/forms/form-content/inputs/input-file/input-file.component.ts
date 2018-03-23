import { Component, OnInit } from '@angular/core';
import { InputClassContentPadre } from '../input-content-padre.class';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent  extends InputClassContentPadre implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
