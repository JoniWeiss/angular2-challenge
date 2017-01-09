import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { FurbabyDetailComponent } from './furbaby-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FurbabyDetailComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
