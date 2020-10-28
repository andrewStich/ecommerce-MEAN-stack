import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { RegistrationPageComponent } from '../components/registration-page/registration-page.component';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountLayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ]
})
export class AccountModule { }
