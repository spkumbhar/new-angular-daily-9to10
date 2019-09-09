import { Component, OnInit, Input } from '@angular/core';
import { cardInfo } from './config.domain';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
@Input()
config: cardInfo

  constructor() { }

  ngOnInit() {
  }

}
