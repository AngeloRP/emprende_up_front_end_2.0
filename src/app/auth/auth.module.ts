import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SmartadminModule } from '../shared/smartadmin.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    SmartadminModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class AuthModule { }
