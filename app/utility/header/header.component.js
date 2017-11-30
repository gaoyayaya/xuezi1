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
var MyHttp_service_1 = require('../service/MyHttp.service');
var HeaderComponent = (function () {
    function HeaderComponent(myHttpService) {
        this.myHttpService = myHttpService;
        this.kword = "";
        this.isUserLogin = true;
        this.userName = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkUserLogin();
    };
    //定义一个点击退出时的处理函数
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        //向服务器端发请求，请求user/logout.php
        this.myHttpService
            .sendRequest("http://localhost/project-angular/data/user/logout.php")
            .subscribe(function (data) {
            if (data.code == 200) {
                _this.isUserLogin = false;
                _this.userName = "";
            }
        });
    };
    //判断用户是否登录
    HeaderComponent.prototype.checkUserLogin = function () {
        var _this = this;
        //向服务器端发起请求，请求user/session_data.php,根据
        //返回的uid是否是一个有效的值，来判断是否登录
        this.myHttpService
            .sendRequest("http://localhost/project-angular/data/user/session_data.php")
            .subscribe(function (data) {
            console.log(data);
            //如果data中是由数据的，那么用户已经登录
            if (data.uid) {
                _this.isUserLogin = true;
                _this.userName = data.uname;
            }
            else {
                _this.isUserLogin = false;
                _this.userName = "";
            }
        });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'storeHeader',
            templateUrl: './header.component.html'
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map