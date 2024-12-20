// Angular
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()

/* 路由權限管理服務 */
export class AuthGuardService implements CanLoad, CanActivate {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) { }

    canLoad() {
        // console.log('canLoad');
        return this.checkLogin();
    }

    canActivate() {
        // console.log('canActivate');
        // console.log(this.router.url);
        return this.checkLogin();
    }

    private checkLogin() {
        // if (this.uidStatus.uid) {
        //     return true;
        // }
        /**
      * 登出
      */
        // this.uidStatus.clear();
        // this.router.navigate(['/login']);
        return false;
    }
}
