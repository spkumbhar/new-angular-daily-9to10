import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { CountryInfo } from './countryInfo.config';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  cnInfo: CountryInfo;

  constructor(
    private Serv: ServicesService
  ) {

   }


  ngOnInit() {
    this.Serv.em.subscribe((conInfo: CountryInfo) => {
      this.cnInfo = conInfo;
     });
  }


}
