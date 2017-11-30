import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
    constructor(private http: Http) { }

    sendRequest(url:string){
        //a-http-get
        return this.http.get(url,{withCredentials:true})
            .map((response: Response) => response.json());
    }
    // 如何解决跨域----采用session所导致的问题
    // 两个步骤：
    // 1 、在前端请求时，加上属性{withCredentials:true}
    // 2、在后台PHP文件中加上
    //    header('Access-Control-Allow-withCredentials:true');
    //    header('Access-Control-Allow-Origin:http://localhost:3000');
    
}