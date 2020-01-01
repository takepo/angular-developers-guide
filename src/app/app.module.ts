import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleComponent } from './simple/simple.component';
import { UnderlineDirective } from './underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UnderlineDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
