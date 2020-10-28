import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePageComponent } from '../components/save-page/save-page.component';
import { UserLayoutComponent } from '../components/user-layout/user-layout.component';
import { UsersListComponent } from '../components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'add', component: SavePageComponent },
      { path: 'edit/:id', component: SavePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
