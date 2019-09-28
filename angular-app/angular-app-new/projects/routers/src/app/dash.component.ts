import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
userName: string;
password: string;
  constructor(
    private router: Router,
    private acRt: ActivatedRoute
    ) { }

  ngOnInit() {

    this.acRt.queryParams.subscribe(prms => {
      this.userName = prms.usrName;
      this.password = prms.password;
    } );

  }

  onChat(usr: string){
    this.router.navigate(['chat', usr])
  }
}
