import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { SmartadminFormsModule } from '../shared/forms/smartadmin-forms.module';
import { UtilsModule } from '../shared/utils/utils.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoadingsModule } from '../shared/loadings/loadings.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
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
