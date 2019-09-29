import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSub(frm: NgForm) {
    console.log(frm);
  }
  }
