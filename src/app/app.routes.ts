import { Routes } from '@angular/router';
import { BookedComponent } from './booked/booked.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  
    {
        path:'booked',
        component:BookedComponent,
    },
    {
        path:'home',
        component:HomeComponent
    }
];
