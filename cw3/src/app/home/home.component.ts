import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  changeColor($event: MouseEvent) {


    if (document.body.style.backgroundColor !== "white") {
      document.body.style.backgroundColor = "white"
    } else {
      document.body.style.backgroundColor = "yellow"
    }
  }
  handleClick($event: MouseEvent) {
    console.log($event.target);

  }

  title = 'home';
  info1 = "Moja pierwsza informacja"
  myColor = "green";
  isOpen = true;
  change() {
    setInterval(() => {
      this.isOpen = !this.isOpen;
    }, 2000);
  }
  constructor() {
    document.body.style.backgroundColor = "white";
    this.change();
  }
}
