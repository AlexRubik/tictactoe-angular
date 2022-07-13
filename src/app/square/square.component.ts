import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-square',
  template: `

  <div class="squarediv">

  <button class="square" *ngIf="value == null">{{value}}</button>
  <button class="Xsquare" *ngIf="value == 'X'">{{value}}</button>
    <button class="Osquare" *ngIf="value == 'O'">{{value}}</button>
  </div>
    

  `,
 styleUrls:["./sq.scss"]

})
export class SquareComponent {

 

@Input() value!: 'X' | 'O';

}
