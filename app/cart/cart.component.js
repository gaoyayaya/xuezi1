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
var CartComponent = (function () {
    function CartComponent(myHttpService, router) {
        this.myHttpService = myHttpService;
        this.router = router;
        this.isAllCheck = false;
        this.cartList = [];
        this.productCount = 0;
        this.sumPrice = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/list.php")
            .subscribe(function (data) {
            if (data.code == 300) {
                _this.router.navigateByUrl('/login');
            }
            console.log(data.data);
            _this.cartList = data.data;
            for (var _i = 0, _a = _this.cartList; _i < _a.length; _i++) {
                var p = _a[_i];
                p['isDelete'] = false;
                p['isCheck'] = false;
                _this.changeChecke(p.iid, false);
            }
            console.log(_this.cartList);
        });
    };
    //修改数量
    CartComponent.prototype.modifyCount = function (isAdd, index) {
        if (isAdd) {
            //数量增加
            this.cartList[index].count++;
        }
        else {
            //数量减少
            if (this.cartList[index].count == 1) {
                return;
            }
            else {
                this.cartList[index].count--;
            }
        }
        //修改数据库
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/update_count.php" +
            "?iid=" + this.cartList[index].iid + "&count=" + this.cartList[index].count)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    //每个选择框的点击
    CartComponent.prototype.changeCheck = function (index) {
        this.cartList[index].isCheck = !this.cartList[index].isCheck;
        if (this.cartList[index].isCheck == true) {
            this.productCount++;
            this.sumPrice += this.cartList[index].count * this.cartList[index].price;
        }
        else {
            this.productCount--;
            this.sumPrice -= this.cartList[index].count * this.cartList[index].price;
        }
        this.changeChecke(this.cartList[index].iid, this.cartList[index].isCheck);
        for (var _i = 0, _a = this.cartList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.isCheck == false) {
                this.isAllCheck = false;
                return;
            }
            this.isAllCheck = true;
        }
    };
    //全选按钮
    CartComponent.prototype.changeAllCheck = function () {
        this.isAllCheck = !this.isAllCheck;
        this.sumPrice = 0;
        if (this.isAllCheck) {
            for (var _i = 0, _a = this.cartList; _i < _a.length; _i++) {
                var p = _a[_i];
                p.isCheck = true;
                this.sumPrice += p.price * p.count;
                this.changeChecke(p.iid, true);
            }
            this.productCount = this.cartList.length;
        }
        else {
            for (var _b = 0, _c = this.cartList; _b < _c.length; _b++) {
                var p = _c[_b];
                p.isCheck = false;
                this.changeChecke(p.iid, false);
            }
            this.productCount = 0;
        }
    };
    CartComponent.prototype.deletePro = function (index) {
        var _this = this;
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/del.php?iid=" + this.cartList[index].iid)
            .subscribe(function (data) {
            if (data.code == 200)
                _this.cartList[index].isDelete = true;
        });
    };
    //修改选中商品
    CartComponent.prototype.changeChecke = function (id, check) {
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/update_checked.php"
            + "?iid=" + id + "&checked=" + check)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: './cart.component.html',
            styleUrls: ['assets/css/cart.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map