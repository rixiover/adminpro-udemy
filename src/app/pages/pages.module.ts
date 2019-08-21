import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports:[
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}