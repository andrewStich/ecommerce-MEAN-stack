import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ListCompnent },
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
