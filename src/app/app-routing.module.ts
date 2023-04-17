import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Vista/dashboard/dashboard.component';
import { EditarComponent } from './Vista/editar/editar.component';
import { LoginComponent } from './Vista/login/login.component';
import { NuevoComponent } from './Vista/nuevo/nuevo.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Login', pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Nuevo',
    component: NuevoComponent
  },
  {
    path: 'Editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent ]