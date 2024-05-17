import { Component } from '@angular/core';

@Component({
  selector: 'app-cw2',
  standalone: true,
  imports: [],
  templateUrl: './cw2.component.html',
  styleUrl: './cw2.component.css'
})
export class Cw2Component {
  handleInput($event: Event) {
    this.text2 = ($event.target as HTMLTextAreaElement)?.value
  }
  text: String = "";
  text2="";
  handelChange($event: Event) {
    this.text = ($event.target as HTMLTextAreaElement)?.value
  }

}
