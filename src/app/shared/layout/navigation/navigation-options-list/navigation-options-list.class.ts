import { SidebarElement } from '../sidebar-element.interface';
import { Input } from '@angular/core';
export class NavigationOptionsListClass {
    @Input() sidebar_elements: SidebarElement[];
}
