import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { CountryInfo } from './countryInfo.config';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']

})
export class CountryListComponent implements OnInit {
  num: number = 0 ;
  cInfo: CountryInfo;
  constructor(
   private Serv: ServicesService
  ) { }

  ngOnInit() {
  }
  myfun() {
    this.num = this.Serv.inc();
   // this.Serv.em.emit(`${this.num}`);

  }
  onClk(cName: string) {

    if (cName === 'India') {
      this.cInfo = this.Serv.cIndiaInfo;

    } else if (cName === 'USA'){
      this.cInfo = this.Serv.cUsaInfo;
    } else {
      this.cInfo = this.Serv.cJapanInfo;
    }
    this.Serv.em.emit(this.cInfo)

  }
}
