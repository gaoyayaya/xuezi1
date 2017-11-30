import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/MyHttp.service';
import{Router} from '@angular/router';

@Component({
    selector: 'storeRegister',
    templateUrl: './register.component.html',
    styleUrls:['assets/css/login.css']
})

export class RegisterComponent implements OnInit {
    userName:string="";
    nameSpan:string="";
    userPwd:string="";
    pwdTwo:string="";
    userEmail:string="";
    emailSpan:string="";
    userPhone:string="";
    phoneSpan:string="";
    queName:boolean=false;
    quePwd:boolean=false;
    quePwds:boolean=false;
    queEmail:boolean=false;
    quePhone:boolean=false;   
    constructor(private http:MyHttpService,
        private router:Router) { }

    ngOnInit() { }
    checkName(){
        if((this.userName.length>12 || this.userName.length<3))
          this.nameSpan="用户名在3-12位之间";
        else{
            this.http.sendRequest("http://localhost/project-angular/data/user/check_uname.php?uname="+this.userName)
            .subscribe((data:any)=>{
               if(data.code==200){
                  this.nameSpan="用户名可以使用";
                  this.queName=true;
                  }
               if(data.code==201)
                  this.nameSpan="用户名已被占用";
            })
    }
    }
    checkPwd(){
        if(this.userPwd.length>=3 && this.userPwd.length<=12){
          this.quePwd=true;
          return true;
          }
    }
    pwdAgin(){
        if(this.userPwd==this.pwdTwo){
            this.quePwds=true;
            return true;
        }
    }
    checkEmail(){
        var reg=/^[0-9a-zA-Z]{1,10}@.{1,10}$/;
        if(!reg.test(this.userEmail))
           this.emailSpan="邮箱格式不正确";
        else{
            this.http.sendRequest("http://localhost/project-angular/data/user/check_email.php?email="+this.userEmail)
            .subscribe((data:any)=>{
               console.log(data);
               if(data.code==200){
                  this.emailSpan="邮箱可以使用";
                  this.queEmail=true;
                  }
                if(data.code==201)
                  this.emailSpan="邮箱已被注册"; 
            })
    }
    }
    checkPhone(){
        var reg=/^\d{11}$/
        if(!reg.test(this.userPhone))
          this.phoneSpan="手机号码格式不对";
        else{
            this.http.sendRequest("http://localhost/project-angular/data/user/check_phone.php?phone="+this.userPhone)
            .subscribe((data:any)=>{
               if(data.code==200){
                  this.phoneSpan="该号码可以使用";
                  this.quePhone=true;
                  }
                if(data.code==201)
                  this.phoneSpan="该号码已被注册"; 
            })
    }
    }
    register(){
        if(this.queEmail && this.queName && this.quePhone &&this.quePwd &&this.quePwds)
        {this.http.sendRequest("http://localhost/project-angular/data/user/register.php"+
            "?uname="+this.userName+"&upwd="+this.userPwd+"&email="+this.userEmail+
            "&phone="+this.userPhone)
            .subscribe((data:any)=>{
                if(data.code==200){
                    alert("注册成功");
                    this.router.navigateByUrl('/login');
                }
                if(data.code==500)
                    alert("注册失败");
        })
      }
      else{
          console.log("哪里不对gggggg");
      }
    }
}