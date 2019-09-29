import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  private fg: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

   const emlVlds = Validators.compose([
    Validators.required, Validators.email
   ]
    )

   this.fg = this.fb.group({
    usNm: this.fb.control('', Validators.required),
    pass: this.fb.control('', Validators.required),
    eml: this.fb.control('', emlVlds)

  })
  }

  onSub() {
    console.log(this.fg.controls)
  }

}
