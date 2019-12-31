import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p class="underline xLarge" [class.bold]="isActive">class buinding</p>
  `,
  styles: [
    `
      .bold { font-weight: bold; }
      .underline { text-decoration: underline; }
      .xLarge { font-size: x-large; }
    `
  ]
})
export class AppComponent {
  isActive = true;
}
