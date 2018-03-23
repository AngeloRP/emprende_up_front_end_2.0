import { Component, OnInit } from '@angular/core';
import { InputClassContent } from '../input-content.class';
import { TypeInput } from '../enum-type-input';
@Component({
  selector: 'app-input-content',
  templateUrl: './input-content.component.html',
  styleUrls: ['./input-content.component.css']
})

export class InputContentComponent extends InputClassContent implements OnInit {
  public enum = TypeInput;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
