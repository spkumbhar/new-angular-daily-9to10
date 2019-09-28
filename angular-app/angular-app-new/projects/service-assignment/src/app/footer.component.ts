import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dt: number;
  constructor(
    private Serv: ServicesService

  ) { }

  ngOnInit() {
    this.Serv.em.subscribe((dtstr: number) => this.dt = dtstr)
  }


}
