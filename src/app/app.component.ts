import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p [style.font-size.%]="isActive? 50:300">style buinding</p>
  `,
})
export class AppComponent {
  isActive = true;
}
