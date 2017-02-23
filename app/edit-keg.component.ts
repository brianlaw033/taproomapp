import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf='editingKeg'>
      <h3>Beer Editor</h3>
      <div>
        <label>Enter the Name:</label>
        <input [(ngModel)]="editingKeg.name">
        <label>Enter the Brand:</label>
        <input [(ngModel)]="editingKeg.brand">
        <label>Enter the No. of Pints Left:</label>
        <input [(ngModel)]="editingKeg.pintCount">
        <label>Enter the Price:</label>
        <input [(ngModel)]="editingKeg.price">
      </div>
    <div>
        <label>Enter the Alcohol Content:</label>
        <input [(ngModel)]="editingKeg.alcoholContent">
        <button (click)="submitEditedKeg()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent{
  @Input() editingKeg: Keg;
  @Output() editSubmit = new EventEmitter();
  submitEditedKeg(){
    this.editSubmit.emit();
  }
}
