import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nwd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nwd.component.html',
  styleUrl: './nwd.component.css'
})
export class NwdComponent {
  a!: number;
  b!: number;
  constructor() {
    this.a = 0;
    this.b = 0;
  }
  nwd(a:number,b:number):number{
    if(b===0) return a;
    return this.nwd(b,a%b);
  }
}
