import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class ApiService {
    googleUrl: string = "/macros/s/AKfycbwfxFbU0A-0Rfq9dEJkowEBge7CuQ5ZlmnRhJxl-HB2jhhzAbntwvgWZCSyOdA0Iisd/exec";
    constructor(private http: HttpClient) { }
    getData() {
        return this.http.get("assets/test.json").map(res => res);
    }
    testGoogleAppScript(method: string) {
        switch (method) {
            case "get":
                return this.http.get(this.googleUrl).map((res: any) => (!res.err) ? res.data : res.err_msg);
            case "post":
                const body = new FormData().append("test", "Nains");
                // const body = { test: "Nains" };
                // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
                const options = {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'text/plain;charset=utf-8',
                        'Access-Control-Allow-Origin': '*',
                        'followAllRedirects': 'true'
                    })
                }
                return this.http.post(this.googleUrl, JSON.stringify(body), options)
                    .map(res => console.log(res))
                    .map((res: any) => (!res.err) ? res.data : res.err_msg)
        }
    }

}

