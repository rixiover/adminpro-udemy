import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { path: '', 
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo:'/home', pathMatch:'full' },
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
