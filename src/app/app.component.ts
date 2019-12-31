import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="clickButton($event)">ボタン</button>
  `,
})
export class AppComponent {
  clickButton($event) {
    console.log($event);
  }
}
