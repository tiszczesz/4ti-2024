import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Cw2Component } from './cw2/cw2.component';
import { HomeComponent } from './home/home.component';
import { Cw3Component } from './cw3/cw3.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { NwdComponent } from './nwd/nwd.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'cw2',component:Cw2Component},
    {path:'cw3',component:Cw3Component},
    {path:'cw4',component:Exercise1Component},
    {path:'nwd',component:NwdComponent},
];
