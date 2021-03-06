import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConListComponent } from './con-list/con-list.component';
import {ServicesService} from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    ConListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
