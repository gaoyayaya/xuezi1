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
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var OrderConfirmTwoComponent = (function () {
    function OrderConfirmTwoComponent(ac, router) {
        this.ac = ac;
        this.router = router;
        this.sum = 0;
        this.minute = 14;
        this.second = 59;
    }
    OrderConfirmTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ac.params.subscribe(function (data) {
            _this.sum = data.pay;
        });
        var timer1 = setInterval(function () {
            _this.second--;
            if (_this.second < 0)
                _this.second = 59;
        }, 1000);
        var timer2 = setInterval(function () {
            _this.minute--;
            if (_this.second < 0) {
                clearInterval(timer1);
                clearInterval(timer2);
                _this.router.navigateByUrl('orderConfirm/orderconfirmone');
            }
        }, 60000);
    };
    OrderConfirmTwoComponent = __decorate([
        core_1.Component({
            selector: 'orderConfirmTwo',
            templateUrl: './orderConfirmTwo.component.html',
            styleUrls: ['assets/css/payment.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router])
    ], OrderConfirmTwoComponent);
    return OrderConfirmTwoComponent;
}());
exports.OrderConfirmTwoComponent = OrderConfirmTwoComponent;
//# sourceMappingURL=orderConfirmTwo.component.js.map