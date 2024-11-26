// Angular
import { Injectable } from '@angular/core';
import { UidStatusService } from '@service/uid-status.service';
import { CanActivate, CanLoad } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

/* 路由權限管理服務 */
export class AuthGuardService implements CanLoad, CanActivate {
    private loginSubject = new BehaviorSubject<boolean>(false);
    login$ = this.loginSubject.asObservable();
    constructor(
        private uidStatus: UidStatusService,
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
        if (this.uidStatus.uid) {
            this.loginSubject.next(true);
            return true;
        }
        /**
      * 登出
      */
        this.loginSubject.next(false);
        this.uidStatus.clear();
        this.router.navigate(['/login']);
        return false;
    }
}
