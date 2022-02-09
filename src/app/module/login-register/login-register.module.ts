import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { RegisterLoginComponent } from './register-login/register-login.component';


@NgModule({
  declarations: [
    RegisterLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRegisterRoutingModule
  ]
})
export class LoginRegisterModule { }
