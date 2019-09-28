import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
 // providers :[MyService]

})
export class MyComponent implements OnInit {
 cnt: number = 0
  constructor(
    private ms: MyService
  ) { }

  ngOnInit() {
  }
onOK() {

this.cnt = this.ms.num++


}
}
