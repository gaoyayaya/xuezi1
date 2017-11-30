import { Component, OnInit } from '@angular/core';
import {MyHttpService} 
from '../utility/service/MyHttp.service'
import {Router} from '@angular/router'

@Component({
    selector: 'storeLogin',
    templateUrl: './login.component.html',
    styleUrls:['assets/css/login.css']
})

export class LoginComponent implements OnInit {
    uName:string= "";
    uPwd:string="";

    constructor(private myHttpService:MyHttpService,
    private myRouter:Router) { }

    ngOnInit() { }

    userLogin(){
        this.myHttpService.sendRequest(
"http://localhost/project-angular/data/user/login.php?uname="
        +this.uName+"&upwd="+this.uPwd)
        .subscribe((data:any)=>{
            console.log(data);
            if(data.code == 200){
                //通过js跳转index
                this.myRouter.navigateByUrl('/index');
            }
        })
    }

}