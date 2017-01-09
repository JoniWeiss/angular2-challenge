import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FurbabyDetailComponent } from './furbaby-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    FurbabyDetailComponent,
    AppComponent 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
