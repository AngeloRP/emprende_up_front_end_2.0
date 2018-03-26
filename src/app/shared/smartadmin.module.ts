import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {
  ModalModule, ButtonsModule, TooltipModule, BsDropdownModule, ProgressbarModule, AlertModule, TabsModule,
  AccordionModule, CarouselModule
} from 'ngx-bootstrap'

import {PopoverModule} from 'ngx-popover';

import {SmartadminLayoutModule} from './layout'

import {UserModule} from './user/user.module';

import {SmartadminWidgetsModule} from './widgets/smartadmin-widgets.module';

import {UtilsModule} from './utils/utils.module';
import {SmartProgressbarModule} from './ui/smart-progressbar/smart-progressbar.module';
import { SmartadminFormsModule } from './forms/smartadmin-forms.module';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, RouterModule
  ],
  declarations: [
  LoadingComponent
  ],
  exports: [
    LoadingComponent,
    CommonModule, FormsModule, HttpModule, RouterModule,
    ModalModule,
    ButtonsModule,
    PopoverModule,
    SmartadminLayoutModule,
    UtilsModule,
    SmartProgressbarModule,
    SmartadminWidgetsModule,
    SmartadminFormsModule
  ]
})
export class SmartadminModule {}
