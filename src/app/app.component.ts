import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>1 + 1 = {{1 + 1}}</p>
  <p>{{a}} * {{b}} = {{a * b}}</p>
  <p>{{c}} + {{d}} = {{[c,d].join(' ')}}</p>
  <p>eが{{e}}であれば、{{c}} => {{(e)? c:d}}</p>
  `,
})
export class AppComponent {
  a = 2;
  b = 3;
  c = 'Hello';
  d = 'Angular!';
  e = true;
}
