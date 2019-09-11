import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { CompComComponent } from './comp-com/comp-com.component';
import { ProgbarComponent } from './comp-com/progbar.component';
import { BtnsComponent } from './comp-com/btns.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    CompComComponent,
    ProgbarComponent,
    BtnsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
