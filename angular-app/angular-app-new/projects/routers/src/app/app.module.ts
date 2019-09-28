import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { DashComponent } from './dash.component';
import { ChatComponent } from './chat.component';
import { ProfileComponent } from './dash/profile.component';
import { FriendlistComponent } from './dash/friendlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ChatComponent,
    ProfileComponent,
    FriendlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
