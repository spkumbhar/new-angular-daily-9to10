import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ChatComponent } from './chat.component';
import { DashComponent } from './dash.component';


const routes: Routes = [
{path: '', component : LoginComponent },
{path: 'chat' , component: ChatComponent},
{path: 'chat/:usr', component: ChatComponent},
{path: 'dash', component: DashComponent},
{path: 'dash/:usr', component: DashComponent},
{path: '*', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
