import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class='col-xs-3' *ngFor="let currentKeg of kegList">
      <h3>{{ currentKeg.name }}</h3>
      <p>Brand: {{ currentKeg.brand }}</p>
      <p>No. of Pint Left: {{ currentKeg.pintCount }}</p>
      <p>Price: <span [style.color]="pStyle(currentKeg)">$ {{ currentKeg.price }}</span></p>
      <p>Alcohol Content: <span [style.color]="acStyle(currentKeg)">{{ currentKeg.alcoholContent }}%</span></p>
      <div *ngIf='currentKeg.pintCount <= 10'>
        <h3>NOT ENOUGH PINT LEFT!!!!</h3>
      </div>
      <button (click)="edit(currentKeg)">Edit</button>
      <button (click)='sell(currentKeg)'>Sell 1 Pint</button>
    </div>
  `
})

export class KegListComponent {
  @Input() kegList: Keg[];
  @Output() selectSubmit = new EventEmitter();
  edit(selectKeg: Keg) {
    this.selectSubmit.emit(selectKeg);
  }
  sell(currentKeg){
    currentKeg.pintCount = currentKeg.pintCount-1
  }
  pStyle(currentKeg){
    if(currentKeg.price >= 10) {
      return "red";
    } else {
      return "";
    }
  }
  acStyle(currentKeg){
    if(currentKeg.alcoholContent >= 10) {
      return "red";
    } else {
      return "";
    }
  }
}
