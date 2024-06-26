import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TimerComponent } from './timer/timer.component';
import { SwietaComponent } from './swieta/swieta.component';
import { Products } from '../data/products';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent,TimerComponent,
    SwietaComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    this.run();
  }
  title = 'cw11';
  isShow = false;
  run(){
    setInterval(()=>{
      this.isShow=!this.isShow
    },3000)
  }
}
