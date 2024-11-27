import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@service/api.service';
import { AuthGuardService } from '@service/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  loginStatus: boolean = false;
  headerBtn: string = "rock";
  constructor(private router: Router, private login: AuthGuardService, public api: ApiService) { }

  ngOnInit() {
    this.login.login$.subscribe(status => this.loginStatus = status);
  }
  chengeHeader(page: string) {
    this.headerBtn = page;
    this.router.navigate([`/sheet/${page}`]);
  }
}
