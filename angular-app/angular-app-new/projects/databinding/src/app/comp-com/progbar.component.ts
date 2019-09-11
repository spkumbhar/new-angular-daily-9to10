import { Component, OnInit, Input } from '@angular/core';
import { ProgressWidth } from './progress.width';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-progbar',
  templateUrl: './progbar.component.html',
  styleUrls: ['./progbar.component.css']
})
export class ProgbarComponent implements OnInit {

@Input()
evDt:ProgressWidth;

  constructor() { }

  ngOnInit() {

        }

  }



