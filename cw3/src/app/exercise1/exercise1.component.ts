import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [],
  template: `<h1>ala ma kota</h1>
    @for(elem of names;track elem){
      <div>{{elem}}</div>
    }
  `,
  // styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  names!:string[];
  constructor(){
    this.names = ['ala', 'ma', 'kota','hhhhh'];
  }
}
