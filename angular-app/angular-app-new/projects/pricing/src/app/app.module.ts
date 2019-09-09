import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { InfoComponent } from './app-body/info.component';
import { PricingInfoComponent } from './app-body/pricing-info.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './footer/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AppBodyComponent,
    InfoComponent,
    PricingInfoComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
