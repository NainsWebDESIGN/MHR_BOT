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
  }
  Login() {
    this.api.getGAS(GateWay.LOGIN, { username: this.username, password: this.password })
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
