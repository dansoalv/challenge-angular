import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BisiComponent } from './bisi/bisi.component';
import { InstructorsComponent } from './instructors/instructors.component';
import {APP_ROUTES} from './app.routes';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegisterComponent } from './cart/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    BisiComponent,
    InstructorsComponent,
    CartComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
