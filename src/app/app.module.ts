import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { UnderlineDirective } from './underline.directive';
import { CalcService } from './calc.service';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UnderlineDirective,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
