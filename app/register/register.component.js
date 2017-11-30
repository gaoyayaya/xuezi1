"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyHttp_service_1 = require('../utility/service/MyHttp.service');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.userName = "";
        this.nameSpan = "";
        this.userPwd = "";
        this.pwdTwo = "";
        this.userEmail = "";
        this.emailSpan = "";
        this.userPhone = "";
        this.phoneSpan = "";
        this.queName = false;
        this.quePwd = false;
        this.quePwds = false;
        this.queEmail = false;
        this.quePhone = false;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.checkName = function () {
        var _this = this;
        if ((this.userName.length > 12 || this.userName.length < 3))
            this.nameSpan = "用户名在3-12位之间";
        else {
            this.http.sendRequest("http://localhost/project-angular/data/user/check_uname.php?uname=" + this.userName)
                .subscribe(function (data) {
                if (data.code == 200) {
                    _this.nameSpan = "用户名可以使用";
                    _this.queName = true;
                }
                if (data.code == 201)
                    _this.nameSpan = "用户名已被占用";
            });
        }
    };
    RegisterComponent.prototype.checkPwd = function () {
        if (this.userPwd.length >= 3 && this.userPwd.length <= 12) {
            this.quePwd = true;
            return true;
        }
    };
    RegisterComponent.prototype.pwdAgin = function () {
        if (this.userPwd == this.pwdTwo) {
            this.quePwds = true;
            return true;
        }
    };
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        var reg = /^[0-9a-zA-Z]{1,10}@.{1,10}$/;
        if (!reg.test(this.userEmail))
            this.emailSpan = "邮箱格式不正确";
        else {
            this.http.sendRequest("http://localhost/project-angular/data/user/check_email.php?email=" + this.userEmail)
                .subscribe(function (data) {
                console.log(data);
                if (data.code == 200) {
                    _this.emailSpan = "邮箱可以使用";
                    _this.queEmail = true;
                }
                if (data.code == 201)
                    _this.emailSpan = "邮箱已被注册";
            });
        }
    };
    RegisterComponent.prototype.checkPhone = function () {
        var _this = this;
        var reg = /^\d{11}$/;
        if (!reg.test(this.userPhone))
            this.phoneSpan = "手机号码格式不对";
        else {
            this.http.sendRequest("http://localhost/project-angular/data/user/check_phone.php?phone=" + this.userPhone)
                .subscribe(function (data) {
                if (data.code == 200) {
                    _this.phoneSpan = "该号码可以使用";
                    _this.quePhone = true;
                }
                if (data.code == 201)
                    _this.phoneSpan = "该号码已被注册";
            });
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.queEmail && this.queName && this.quePhone && this.quePwd && this.quePwds) {
            this.http.sendRequest("http://localhost/project-angular/data/user/register.php" +
                "?uname=" + this.userName + "&upwd=" + this.userPwd + "&email=" + this.userEmail +
                "&phone=" + this.userPhone)
                .subscribe(function (data) {
                if (data.code == 200) {
                    alert("注册成功");
                    _this.router.navigateByUrl('/login');
                }
                if (data.code == 500)
                    alert("注册失败");
            });
        }
        else {
            console.log("哪里不对gggggg");
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'storeRegister',
            templateUrl: './register.component.html',
            styleUrls: ['assets/css/login.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map