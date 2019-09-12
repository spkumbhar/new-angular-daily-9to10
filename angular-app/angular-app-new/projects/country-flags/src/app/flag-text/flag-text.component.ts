import { Component, OnInit, Input } from '@angular/core';
import { FlagInfo } from '../flag-info';

@Component({
  selector: 'app-flag-text',
  templateUrl: './flag-text.component.html',
  styleUrls: ['./flag-text.component.css']
})
export class FlagTextComponent implements OnInit {

 @Input()
 country: FlagInfo

  constructor() { }

  ngOnInit() {
  }

}
