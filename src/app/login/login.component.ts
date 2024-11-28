import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@service/api.service';
import { UidStatusService } from '@service/uid-status.service';
import { GateWay } from '@ts/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  submit: string = "Submit";
  username: string = "";
  password: string = "";
  constructor(private api: ApiService, private router: Router, private uidStatus: UidStatusService) { }
  ngOnInit() {
  }
  Login() {
    this.submit = "Loading...";
    this.api.postApi(GateWay.LOGIN, { username: this.username, password: this.password })
      .subscribe(res => {
        if (res['uuid']) {
          this.uidStatus.uid = res['uuid'];
          this.router.navigate([`/sheet/rock`]);
        }
        this.submit = "Submit";
      });
  }
}
