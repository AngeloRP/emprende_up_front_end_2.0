import { Component, OnInit } from '@angular/core';
import { NavigationOptionsListClass } from './navigation-options-list.class';

@Component({
  selector: 'app-navigation-options-list',
  templateUrl: './navigation-options-list.component.html',
  styleUrls: ['./navigation-options-list.component.css']
})
export class NavigationOptionsListComponent extends NavigationOptionsListClass implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
