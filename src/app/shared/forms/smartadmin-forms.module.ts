

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SmartadminValidationModule} from './validation/smartadmin-validation.module';
import {SmartadminWizardsModule} from './wizards/smartadmin-wizards.module';
import { FormContentModule } from './form-content/form-content.module';

@NgModule({
  imports: [
    CommonModule,
    FormContentModule
  ],
  declarations: [
  ],
  exports: [
    SmartadminValidationModule,
    SmartadminWizardsModule
  ]

})
export class SmartadminFormsModule {}
