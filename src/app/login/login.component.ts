import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@service/api.service';
import { UidStatusService } from '@service/uid-status.service';
import { PopupService } from '@service/popup.service';
import { GateWay } from '@ts/enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title;
  username: string = "";
  password: string = "";
  constructor(private api: ApiService, private router: Router, private popup: PopupService, private uidStatus: UidStatusService) { }
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
      .subscribe(res => {
        if (res['uuid']) {
          this.uidStatus.uid = res['uuid'];
          this.router.navigate([`/sheet/rock`]);
        } else {
          this.popup.open(res);
        }
      });
  }
}
