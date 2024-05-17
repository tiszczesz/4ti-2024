import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
handleClick($event: MouseEvent) {
   console.log($event.target);
   
}
  title = 'cw3';
  info1 = "Moja pierwsza informacja"
  myColor = "green";
  isOpen = true;
  change(){
    setInterval(() => {
      this.isOpen = !this.isOpen;
    }, 2000);
  }
  constructor(){
    this.change();
  }
}
