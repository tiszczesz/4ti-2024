import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  constructor(){
    this.time = this.getTime();
    this.runTimer();
  }
  time:string;
  runTimer(){
    setInterval(()=>{
      this.time = this.getTime()
    },1000)
  }
  getTime(){
    return new Date().toLocaleTimeString();
  }
}
