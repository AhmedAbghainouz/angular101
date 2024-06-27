import { HomeComponent } from './home/home.component';
import { ClockAppComponent } from './clock-app/clock-app.component';

import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clock-app', component: ClockAppComponent },
    { path: 'directives' , component:DirectivesComponent },
];
