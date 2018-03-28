import { Component, OnInit } from '@angular/core';
import { Form } from './form.clase';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent extends Form implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
