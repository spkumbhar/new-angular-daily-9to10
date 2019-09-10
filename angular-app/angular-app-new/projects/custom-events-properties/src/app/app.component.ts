import { Component } from '@angular/core';
import { cardInfo } from './my-card/config.domain';
import { CardEvent } from './my-card/my-card.events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-events-properties';
  obj: cardInfo = {
   imgUrl : '',
   title: 'This is title of the componant',
   navUrl: 'https://github.com/CodeKul',
   info : 'This is info'
    }

  onOkay(evDt: CardEvent) {
    console.log(evDt)
  }
}
