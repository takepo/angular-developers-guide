import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-simple></app-simple>
      <div appUnderline>appUnderline</div>
    </div>
  `,
})
export class AppComponent {
}
