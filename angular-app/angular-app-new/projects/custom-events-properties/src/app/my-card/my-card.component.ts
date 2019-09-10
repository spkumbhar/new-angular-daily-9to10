import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { cardInfo } from './config.domain';
import { environment } from '../../../../pricing/src/environments/environment';
import { CardEvent } from './my-card.events';


@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {
@Input()
// tslint:disable-next-line: semicolon
config: cardInfo

@Output()
okay: EventEmitter<CardEvent> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  //myComment //Componant who is generating events in source



  onClk(prnt: string){
    const evDt: CardEvent = {
      tmstamp: Date.now(),
      parent: prnt,
      card: this.config

    }

    this.okay.emit(evDt)
  }

}
