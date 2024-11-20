import { Injectable } from '@angular/core';
import env from '@ts/env';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    getData() {
        return this.http.get("assets/test.json").map(res => res);
    }
    testGoogleAppScript(method: string, gateway: number, ...body) {
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
                    .map((res: any) => (!res.err) ? res.data : res.err_msg)
                    .catch(error => Observable.throw(error));
        }
    }

}

