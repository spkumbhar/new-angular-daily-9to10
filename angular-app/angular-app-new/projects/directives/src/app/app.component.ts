import { Component } from '@angular/core';
import { CountryInfo } from './country.config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isVisible: boolean = true;
  country: Array<CountryInfo> = [
    {nm: 'India', capital: 'New Delhi'},
    {nm: 'United states of America', capital: 'Washignton'},
    {nm: 'United Kingdom',capital:'London'},
    {nm:'Japan',capital:'Tokyo'}

  ]

  //Case  for ngSwitch example
  conName = 'Japan'
}


