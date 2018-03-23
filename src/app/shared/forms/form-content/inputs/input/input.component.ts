import { Component, OnInit } from '@angular/core';
import { InputClass } from '../input.class';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends InputClass implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
