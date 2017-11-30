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
var LoginComponent = (function () {
    function LoginComponent(myHttpService, myRouter) {
        this.myHttpService = myHttpService;
        this.myRouter = myRouter;
        this.uName = "";
        this.uPwd = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.userLogin = function () {
        var _this = this;
        this.myHttpService.sendRequest("http://localhost/project-angular/data/user/login.php?uname="
            + this.uName + "&upwd=" + this.uPwd)
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 200) {
                //通过js跳转index
                _this.myRouter.navigateByUrl('/index');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'storeLogin',
            templateUrl: './login.component.html',
            styleUrls: ['assets/css/login.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map