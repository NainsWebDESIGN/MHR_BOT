import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UidStatusService } from '@service/uid-status.service';
import { Observable } from 'rxjs/Observable';
import { GateWay } from '@ts/enum';
import env from '@ts/env';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private uidStatus: UidStatusService) { }
    getData() {
        return this.http.get("assets/test.json").map(res => res);
    }
    getGAS(method: string, gateway: GateWay, ...body) {
        // console.log(method, gateway, body);
        let url = env.url + `/macros/s/${env.webAPI}/exec?gateway=${gateway}`;

        switch (method) {
            case "get":
                return this.http.get(url)
                    .map((res: any) => (!res.err) ? res.data : res.err_msg);
            case "post":
                url = url + `&type=${body[0]}`;
                const headers = new HttpHeaders({ 'Content-Type': 'text/plain;charset=utf-8' });
                return this.http.post(url, JSON.stringify(body[1]), { headers })
                    .map((res: any) => {
                        if (res.err_msg == "logout") {
                            this.uidStatus.clear();
                            return;
                        }
                        return (!res.err) ? res.data : res.err_msg;
                    })
                    .catch(error => Observable.throw(error));
        }
    }

}

