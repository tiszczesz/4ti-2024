import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Cw2Component } from './cw2/cw2.component';
import { HomeComponent } from './home/home.component';
import { Cw3Component } from './cw3/cw3.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'cw2',component:Cw2Component},
    {path:'cw3',component:Cw3Component},
];
