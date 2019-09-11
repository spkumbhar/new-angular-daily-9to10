import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProgressWidth } from './progress.width';

@Component({
  selector: 'app-btns',
  template: `
    <input type="button" value="Increment" class="btn btn-info" (click)="onIncrementBar()">
    <input type ="button" value="Decrement" class="btn btn-info" (click)="onDecrementBar()">
  `,
  styles: []
})
export class BtnsComponent implements OnInit {

  width:number= 0

  @Output()
  increment: EventEmitter<ProgressWidth> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  onIncrementBar() {

    const evDt: ProgressWidth = {
      width: this.width++

    }
    this.increment.emit(evDt)
    /*
    this.pbarwidth++;
    console.log(this.pbarwidth)
*/
  }
  onDecrementBar(){
    const evDt: ProgressWidth = {
      width: this.width--
    }

    this.increment.emit(evDt)

      }


}
