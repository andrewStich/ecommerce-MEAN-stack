import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { SavePageComponent } from '../components/save-page/save-page.component';
import { AccountLayoutComponent } from '../components/account-layout/account-layout.component';

const routes: Routes = [
  {
    path: '', component: AccountLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: SavePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
