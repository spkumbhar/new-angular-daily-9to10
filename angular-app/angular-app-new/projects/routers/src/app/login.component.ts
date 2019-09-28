import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  pass: string;
  constructor(
    private router: Router,
    private acRt: ActivatedRoute
    ) { }

  ngOnInit() {

  }

  onClick(userName: string , pass: string) {
    this.router.navigate(['dash', '123'],
    {
      queryParams:
      {
        usrName: userName,
        password: pass
      }
    }
    );
  }
}
