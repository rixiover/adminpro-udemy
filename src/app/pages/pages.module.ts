import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';


@NgModule({
    declarations:[
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:[
        HomeComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        CommonModule
    ]
})

export class PagesModule {}