import { HomeComponent } from './home/home.component';
import { ClockAppComponent } from './clock-app/clock-app.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clock-app', component: ClockAppComponent },
];
