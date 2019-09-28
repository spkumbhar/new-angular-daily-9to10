import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info.component';
import { FooterComponent } from './footer.component';
import { CountryListComponent } from './country-list.component';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InfoComponent,
    FooterComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule
  ],
 providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
