import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BisiComponent } from './bisi/bisi.component';
import { InstructorsComponent } from './instructors/instructors.component';
import {APP_ROUTES} from './app.routes';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BisiComponent,
    InstructorsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
