import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
import { TableModule } from './table/table.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingsModule } from './loadings/loadings.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule, RouterModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule, FormsModule, HttpClientModule, RouterModule,
    ModalModule,
    ButtonsModule,
    LoadingsModule,
    AlertModule,
    TabsModule,
    TooltipModule,
    BsDropdownModule,
    ProgressbarModule,

    PopoverModule,
    UtilsModule,
    SmartProgressbarModule,
    SmartadminWidgetsModule,
    SmartadminFormsModule,
    TableModule
  ]
})
export class SmartadminModule {}
