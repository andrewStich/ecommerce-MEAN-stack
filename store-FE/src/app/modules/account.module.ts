import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { LayoutComponent } from '../components/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  declarations: [
    LayoutComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ]
})
export class AccountModule { }
