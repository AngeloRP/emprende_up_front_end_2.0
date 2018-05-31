import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SmartadminFormsModule } from '../shared/forms/smartadmin-forms.module';
import { UtilsModule } from '../shared/utils/utils.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingsModule } from '../shared/loadings/loadings.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FieldsetModule } from '../shared/forms/form-content/fieldset/fieldset.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FieldsetModule,
    SmartadminFormsModule,
    RouterModule,
    AuthRoutingModule,
    UtilsModule,
    LoadingsModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
