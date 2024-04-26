import { Component } from '@angular/core';
import Films from '../../Data/Films.json';
import { Film } from '../../Data/MyTypes';

@Component({
  selector: 'app-cw2',
  standalone: true,
  imports: [],
  templateUrl: './cw2.component.html',
  styleUrl: './cw2.component.css'
})
export class Cw2Component {
  filmsList!:Film[]
  constructor() {
    this.filmsList = Films
    console.log(this.filmsList);
    
  }
}
