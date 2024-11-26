import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';
import { GateWay } from '@ts/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title;
  username: string = "";
  password: string = "";
  constructor(private api: ApiService) { }
  ngOnInit() {
    // this.api.getGAS("get", GateWay.GET)
    //   .subscribe(res => {
    //     this.title = res.map(item => {
    //       return {
    //         skill1: item[0],
    //         skill2: item[2],
    //         point1: item[1],
    //         point2: item[3],
    //         hole: item[4]
    //       };
    //     })
    //     console.log(this.title);
    //   });
  }
  Login() {
    this.api.getGAS("post", GateWay.LOGIN, "login", { username: this.username, password: this.password })
      .subscribe(res => console.log(res));
  }
}
