import { Component } from '@angular/core';

@Component({
  selector: 'app-swieta',
  standalone: true,
  imports: [],
  templateUrl: './swieta.component.html',
  styleUrl: './swieta.component.css'
})
export class SwietaComponent {
    capacity!:number;
    colors!:string[];
    constructor(){
      this.capacity = 8888;
      this.colors = ["asddas ","bcvbcvbcb","sdfsfdsfs"];
    }
}
