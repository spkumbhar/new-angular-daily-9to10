import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding ' ;
  alertTxt = 'Please Enter Your details';
  clkBtn($ev: any) {
    console.log($ev)
  }
}
