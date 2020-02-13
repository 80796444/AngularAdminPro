import { NgModule } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        IncrementadorComponent,
        Graficas1Component,
        GraficoDonaComponent,
        AccountSettingsComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        IncrementadorComponent,
        Graficas1Component,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        ChartsModule,
        PAGES_ROUTES,
        FormsModule
    ]

})
export class PagesModule {}