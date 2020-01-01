import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="text" [(ngModel)]="model">
      <p>{{model}}</p>
    </div>
  `,
})
export class AppComponent {
  model = 'two way binding!';
}
