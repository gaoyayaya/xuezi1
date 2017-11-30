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
var router_2 = require('@angular/router');
var OrderConfirmOneComponent = (function () {
    function OrderConfirmOneComponent(http, router, ac) {
        this.http = http;
        this.router = router;
        this.ac = ac;
        this.productList = [];
        this.priceSum = 0;
        this.lid = '';
        this.count = 0;
    }
    OrderConfirmOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //加载购物车
        this.http.sendRequest("http://localhost/project-angular/data/cart/list_checked.php")
            .subscribe(function (data) {
            console.log(data);
            _this.productList = data.data;
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var p = _a[_i];
                _this.priceSum += p.count * p.price;
            }
        });
        //直接购买
        this.ac.params.subscribe(function (data) {
            console.log(data);
            _this.lid = data.lid;
            _this.count = data.coun;
            _this.http.sendRequest("http://localhost/project-angular/data/product/detail_buy.php?id=" +
                _this.lid)
                .subscribe(function (data) {
                console.log(data.data);
                data.data[0].count = _this.count;
                _this.productList = data.data;
                for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                    var p = _a[_i];
                    _this.priceSum += p.count * p.price;
                }
            });
        });
        // //获取地址
        //    this.http.sendRequest("http://localhost/project-angular/data/user/list_addr.php")
        //    .subscribe((data:any)=>{
        //       console.log(data);
        //    })
    };
    OrderConfirmOneComponent.prototype.addAddress = function () {
        this.router.navigateByUrl('/orderConfirm/orderadd');
    };
    OrderConfirmOneComponent = __decorate([
        core_1.Component({
            selector: 'orderConfirmOne',
            templateUrl: './orderConfirmOne.component.html',
            styleUrls: ['assets/css/order_confirm.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router, router_2.ActivatedRoute])
    ], OrderConfirmOneComponent);
    return OrderConfirmOneComponent;
}());
exports.OrderConfirmOneComponent = OrderConfirmOneComponent;
//# sourceMappingURL=orderConfirmOne.component.js.map