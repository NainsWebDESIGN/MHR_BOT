import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    private tokenKey = 'NainsToken';

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

    login(credentials: { username: string; password: string }) {
        return this.http.post<any>('your/api/login', credentials).subscribe(response => {
            localStorage.setItem(this.tokenKey, response.token); // 将token存储在本地
        });
    }

    logout() {
        localStorage.removeItem(this.tokenKey); // 移除token
    }

    isLoggedIn() {
        const token = localStorage.getItem(this.tokenKey);
        return token && !this.jwtHelper.isTokenExpired(token); // 检查token是否过期
    }
}
