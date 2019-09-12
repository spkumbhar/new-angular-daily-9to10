import { Component, OnInit, Input } from '@angular/core';
import { FlagInfo } from '../flag-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  country: FlagInfo
  constructor() { }

  ngOnInit() {
  }

}
