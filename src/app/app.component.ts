import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button [disabled]="isDisabled">ボタン</button>
  <img [src]="imagePath" />
  `,
})
export class AppComponent {
  isDisabled = true;
  imagePath = 'https://angular.io/assets/images/logos/angular/angular.svg';
}
