import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutService } from '../shared/layout/layout.service'
import {SoundService} from '../shared/sound/sound.service';



import { throwIfAlreadyLoaded } from './guards/module-import-guard';
import {TabsModule, ProgressbarModule, TooltipModule, BsDropdownModule, AlertModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  declarations: [],
  providers: [
    LayoutService,
    SoundService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
