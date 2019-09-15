import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    { path: '', 
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', redirectTo:'/home', pathMatch:'full' },
    ] }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );