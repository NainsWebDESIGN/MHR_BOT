// Angular
import { Injectable } from '@angular/core';

@Injectable()

/* 路由權限管理服務 */
export class UidStatusService {
    private uuid: string;
    set uid(value: string) {
        localStorage.setItem('uid', value);
        this.uuid = value;
    }
    get uid() {
        return this.uuid;
    }
    clear() {
        localStorage.removeItem('uid');
        this.uid = null;
    }
}