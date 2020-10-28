import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { SavePageComponent } from '../components/save-page/save-page.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { UsersListComponent } from '../components/users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [
    LayoutComponent,
    UsersListComponent,
    SavePageComponent
  ],
})
export class UsersModule { }
