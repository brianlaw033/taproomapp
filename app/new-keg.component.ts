import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
  <div claas='container-fluid col-xs-12'>
      <h3>Add New Keg</h3>
    <div>
      <label>Enter Beer Name:</label>
      <input #newName>
      <label>Enter Beer Brand:</label>
      <input #newBrand>
      <label>Enter Beer Price:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent>
      <button (click)="
        addNew(newName.value, newBrand.value, 40, newPrice.value, newAlcoholContent.value);
        newName.value ='';
        newBrand.value='';
        newPrice.value='';
        newAlcoholContent.value='';
      ">Add</button>
    </div>
    </div>
  `
})

export class NewKegComponent {
  @Output() newSubmit = new EventEmitter();
  addNew(name: string, brand: string, pintCount: number, price: number, alcoholContent: number){
    var addKeg: Keg = new Keg(name, brand, pintCount, price, alcoholContent);
    this.newSubmit.emit(addKeg);
  }
}
