import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../service/MyHttp.service'

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html'
    
})

export class HeaderComponent implements OnInit {
    kword="";
    isUserLogin:boolean = true;
    userName:string = "";
    constructor(private myHttpService:MyHttpService) { }


    ngOnInit() { 
        this.checkUserLogin();
    }

    //定义一个点击退出时的处理函数
    logout(){
        //向服务器端发请求，请求user/logout.php
        this.myHttpService
        .sendRequest("http://localhost/project-angular/data/user/logout.php")
        .subscribe((data:any)=>{
            if(data.code == 200){
                    this.isUserLogin = false;
                    this.userName = "";
            }
        })   
    }
    //判断用户是否登录
    checkUserLogin(){
        //向服务器端发起请求，请求user/session_data.php,根据
        //返回的uid是否是一个有效的值，来判断是否登录
        this.myHttpService
        .sendRequest("http://localhost/project-angular/data/user/session_data.php")
        .subscribe((data:any)=>{
                console.log(data);
                //如果data中是由数据的，那么用户已经登录
                if(data.uid){
                    this.isUserLogin = true;  
                    this.userName = data.uname; 
                }
                else{
                    this.isUserLogin = false;  
                    this.userName = ""; 
                }
        })
    }

}