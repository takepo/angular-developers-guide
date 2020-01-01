import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <ul>
      <li *ngFor="let profile of profileds">
        <app-child [person]="profile" (selected)="showAlert($event)"></app-child>
      </li>
    </ul>
  `
})
export class ParentComponent implements OnInit {

  profileds = [
    { id: 1, name: 'Brad Green' },
    { id: 2, name: 'Igor Minar' },
    { id: 3, name: 'Julrd Kremer' },
    { id: 4, name: 'Rob Wormald' },
    { id: 5, name: 'Stephen Fluin' },
  ];

  constructor() { }

  ngOnInit() {
  }

  showAlert(person: any) {
    alert(person.name);
  }

}
