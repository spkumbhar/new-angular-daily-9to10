import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppUnlessDirective } from './app-unless.directive';
import { SizerDirective } from './sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppUnlessDirective,
    SizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
