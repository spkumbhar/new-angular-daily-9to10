import { Component, OnInit } from '@angular/core';
import { ProgressWidth } from './progress.width';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-comp-com',
  templateUrl: './comp-com.component.html',
  styleUrls: ['./comp-com.component.css']
})
export class CompComComponent implements OnInit {
  pbarwidth: number
  sty:string
  evDt: ProgressWidth
  constructor() { }

  ngOnInit() {
  }
 onIncrement(evDt: ProgressWidth){
  this.evDt = evDt
 // this.pbarwidth = evDt.width
  console.log('Hello',this.evDt.width)

}
}
