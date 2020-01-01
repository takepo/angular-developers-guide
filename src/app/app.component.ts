import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="number" [(ngModel)]="model1"/>
      <input type="number" [(ngModel)]="model2"/>
      <input type="button" value="計算" (click)="calc()"/>
      <p>{{result}}</p>
    </div>
  `,
})
export class AppComponent {
  model1 = 0;
  model2 = 0;
  result: number;

  constructor(private calcService: CalcService) {}

  calc() {
    this.result = this.calcService.add(this.model1, this.model2);
  }
}
