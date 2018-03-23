import { Component, OnInit, Input } from '@angular/core';
import { IconoInterface } from './icono.interface';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent implements OnInit {
  @Input() imagen: IconoInterface;
  constructor() { }

  ngOnInit() {
  }

}
