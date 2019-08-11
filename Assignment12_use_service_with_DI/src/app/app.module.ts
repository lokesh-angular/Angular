import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArithmaticService } from './arithmatic.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
