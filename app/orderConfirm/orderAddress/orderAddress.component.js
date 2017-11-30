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
var MyHttp_service_1 = require('../../utility/service/MyHttp.service');
var router_1 = require('@angular/router');
var OrderAddressComponent = (function () {
    function OrderAddressComponent(http, router) {
        this.http = http;
        this.router = router;
        this.userName = "";
        this.userAddr = "";
        this.uesrPhone = "";
        this.userYoubian = "";
        this.province = "";
        this.city = "";
        this.country = "";
    }
    OrderAddressComponent.prototype.ngOnInit = function () { };
    OrderAddressComponent.prototype.addAddr = function () {
        this.http.sendRequest("http://localhost/project-angular/data/user/add_address.php" +
            "?name=" + this.userName + "&province=" + this.province + "&city=" + this.city + "&country="
            + this.country + "&addr=" + this.userAddr + "&phone=" + this.uesrPhone + "&fixedphone=" +
            this.uesrPhone + "&postcode=" + this.userYoubian)
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 200) {
                alert("添加成功");
            }
            else {
                alert("添加失败");
            }
        });
    };
    OrderAddressComponent = __decorate([
        core_1.Component({
            selector: 'orderAddress',
            templateUrl: './orderAddress.component.html',
            styleUrls: ['assets/css/order_confirm.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router])
    ], OrderAddressComponent);
    return OrderAddressComponent;
}());
exports.OrderAddressComponent = OrderAddressComponent;
//# sourceMappingURL=orderAddress.component.js.map