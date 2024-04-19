import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Cw1Component } from './cw1/cw1.component';
import { Cw2Component } from './cw2/cw2.component';
import { Cw3Component } from './cw3/cw3.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'cw1',component:Cw1Component},
    {path:'cw2',component:Cw2Component},
    {path:'cw3',component:Cw3Component}
];
