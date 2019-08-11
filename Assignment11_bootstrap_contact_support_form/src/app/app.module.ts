import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { BuginfoComponent } from './buginfo/buginfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalinfoComponent,
    BuginfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
