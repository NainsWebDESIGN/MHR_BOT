// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

/* 路由權限管理服務 */
export class UidStatusService {
    constructor(private router: Router) { }
    private uuid: string;
    set uid(value: string) {
        localStorage.setItem('uid', value);
        this.uuid = value;
    }
    get uid() {
        return this.uuid;
    }
    clear() {
        this.uid = null;
        localStorage.removeItem('uid');
        this.router.navigate(['/login']);
    }
}