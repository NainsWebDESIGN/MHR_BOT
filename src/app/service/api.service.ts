import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UidStatusService } from '@service/uid-status.service';
import { AuthGuardService } from '@service/auth-guard.service';
import { PopupService } from '@service/popup.service';
import { Observable } from 'rxjs/Observable';
import { GateWay } from '@ts/enum';
import env from '@ts/env';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private uidStatus: UidStatusService, private login: AuthGuardService, private popup: PopupService) { }
    getData() {
        return this.http.get("assets/test.json").map(res => res);
    }
    postApi(gateway: GateWay, body, type: string = "rock") {
        let url = env.url + `/macros/s/${env.webAPI}/exec?gateway=${gateway}&type=${type}`;

        const headers = new HttpHeaders({ 'Content-Type': 'text/plain;charset=utf-8' });
        return this.http.post(url, JSON.stringify(body), { headers })
            .map((res: any) => {
                // console.log(res);
                if (res.err_msg == "logout") {
                    this.logout();
                    return;
                }
                return (!res.err) ? res.data : res.err_msg;
            })
            .catch(error => Observable.throw(error));
    }

    logout() {
        this.postApi(GateWay.LOGOUT, { uuid: this.uidStatus.uid }).subscribe(() => {
            this.uidStatus.clear();
            this.login.logout();
            this.popup.open("驗證碼過期，請重新登入");
        });
    }

}

