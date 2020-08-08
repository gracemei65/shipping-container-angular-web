import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerCreateComponent } from './container-create/container-create.component';
import { ContainerSearchDeleteComponent } from './container-search-delete/container-search-delete.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
   {path:"create",component:ContainerCreateComponent},
   {path:"search",component:ContainerSearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
