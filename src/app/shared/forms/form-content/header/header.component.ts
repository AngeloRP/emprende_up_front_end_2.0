import { Component, OnInit } from '@angular/core';
import { HeaderForm } from './header.clase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends HeaderForm implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
