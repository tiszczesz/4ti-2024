import { Component } from '@angular/core';

@Component({
  selector: 'app-cw3',
  standalone: true,
  imports: [],
  templateUrl: './cw3.component.html',
  styleUrl: './cw3.component.css'
})
export class Cw3Component {
  time!:string;
  
  constructor() {
   this.getTime();    
  }
  getTime(){
    this.time = new Date().toLocaleTimeString();
    setInterval(()=>{
      this.time = new Date().toLocaleTimeString();
    },1000)
  }
}
