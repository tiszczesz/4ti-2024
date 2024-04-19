import { Component } from '@angular/core';
import { Colors } from '../../Data/colors';
@Component({
  selector: 'app-cw1',
  standalone: true,
  imports: [],
  templateUrl: './cw1.component.html',
  styleUrl: './cw1.component.css'
})
export class Cw1Component {
  colors!:string[]
  color!:string;
  setColor($event: any){
    this.color = $event.target.value
  }

  constructor() {
    this.colors = Colors;
  }
}
