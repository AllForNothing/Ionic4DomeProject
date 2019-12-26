import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

/**
 * @Description:
 * @author 孙世军
 * @Date 2019-12-18
 */
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly _isNative: boolean = false;
    constructor(private angularHttp: HttpClient,
                private nativeHttp: HTTP) {
        this._isNative = !!(window as any).cordova;
        // 这里可以加一些nativeHttp 的全局设置
        this.nativeHttp.setDataSerializer('json');
    }

    // 使用 promise
    post(url: string, param?: any, headers?: HttpHeaders): Promise<any> {
        // 判断是原生环境还是浏览器环境
        if (this._isNative) {
            return this.nativeHttp.post(url, param, headers);
        }
        return this.angularHttp.post(url, param, {headers}).toPromise();
    }
    // 使用Observable
    postObservable(url: string, param?: any, headers?: HttpHeaders): Observable<any> {
        if (this._isNative) {// 判断是原生环境还是浏览器环境
            this.nativeHttp.post(url, param, headers).then(
                response => {
                    return of(response);
                }, error => {
                    return throwError(error);
                }
            );
        }
        return this.angularHttp.post(url, param, {headers});
    }
    // todo 加上其他方法 比如 get delete 等等
}
