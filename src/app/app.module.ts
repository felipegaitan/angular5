import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUsernameComponent } from './app-username/app-username.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppUsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
