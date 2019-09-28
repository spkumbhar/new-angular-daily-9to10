import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ChatComponent } from './chat.component';
import { DashComponent } from './dash.component';
import { DashGuard } from './dash.guard';
import { ProfileComponent } from './dash/profile.component';
import { FriendlistComponent } from './dash/friendlist.component';

const dashRoutes: Routes =[
  {path: 'profile', component: ProfileComponent },
  {path: 'friends', component: FriendlistComponent}
];
const routes: Routes = [
{path: '', component : LoginComponent },
{path: 'chat' , component: ChatComponent},
{path: 'chat/:usr', component: ChatComponent},
{path: 'dash', component: DashComponent},
{path: 'dash/:usr', component: DashComponent, children: dashRoutes},
{path: '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
