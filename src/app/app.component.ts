import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>UpperCasePipe {{lowercaseData}} -> {{lowercaseData | uppercase}}</p>
    <p>DataPipe {{dateData}} -> {{dateData | date: 'yyyy年MM月dd日'}}</p>
  `
})
export class AppComponent {
  lowercaseData = 'angular';
  dateData = Date.now();
}
