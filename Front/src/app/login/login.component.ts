import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/api.service';
import { GateWay } from '@ts/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(private api: ApiService) { }
  ngOnInit() {
  }
  Login() {
    this.api.getGAS("post", GateWay.LOGIN, "login", { username: this.username, password: this.password })
      .subscribe(res => console.log(res));
  }
}
