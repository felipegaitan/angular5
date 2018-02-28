import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppUsernameComponent } from './app-username/app-username.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppUsernameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
