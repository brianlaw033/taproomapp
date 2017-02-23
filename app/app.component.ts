import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class='container'>
    <keg-list
      [kegList]="masterKegList"
      (selectSubmit)="editDetails($event)"
      class='col-xs-12'
      ></keg-list>
    <edit-keg
      [editingKeg]="selectedKeg"
      (editSubmit) = "doneEditing()"
      class='col-xs-12'
    ></edit-keg>
    <new-keg
      (newSubmit)='addingKeg($event)'
      class='col-xs-12'
    ></new-keg>
    </div>
  `
})

export class AppComponent{
  public masterKegList: Keg[] = [
    new Keg('Asahi','Suntory', 40, 11, 5),
    new Keg('Corona', 'Cerveceria', 40, 10, 6),
    ];
  selectedKeg: Keg = null;
  editDetails(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  doneEditing(){
    this.selectedKeg = null;
  }
  addingKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }
}
