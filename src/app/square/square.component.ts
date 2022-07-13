import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-square',
  template: `

  <div class="squarediv">

  <div class="square" *ngIf="value == null">{{value}}</div>
  <div class="Xsquare" *ngIf="value == 'X'">{{value}}</div>
    <div class="Osquare" *ngIf="value == 'O'">{{value}}</div>
  </div>
    

  `,
 styleUrls:["./sq.scss"]

})
export class SquareComponent {

 

@Input() value!: 'X' | 'O';

}
