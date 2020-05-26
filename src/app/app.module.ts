import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BisiComponent } from './bisi/bisi.component';
import { InstrutorsComponent } from './instrutors/instrutors.component';

@NgModule({
  declarations: [
    AppComponent,
    BisiComponent,
    InstrutorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
