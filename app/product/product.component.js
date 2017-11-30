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
var router_2 = require('@angular/router');
var ProductListComponent = (function () {
    function ProductListComponent(myHttpService, myRouter, aAct) {
        this.myHttpService = myHttpService;
        this.myRouter = myRouter;
        this.aAct = aAct;
        this.kword = "";
        this.productList = [];
        this.nowPage = 1;
        this.pageSize = 9;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aAct.params.subscribe(function (data) {
            _this.kword = data.kw;
        });
        this.myHttpService.sendRequest("http://localhost/project-angular/data/product/list.php?pno=" + this.nowPage + "&kw=" + this.kword)
            .subscribe(function (result) {
            console.log(result);
            console.log(result.data);
            _this.productList = result.data;
            _this.pageSize = result.data.length;
            console.log(_this.pageSize);
            for (var i = 0; i < _this.pageSize; i++) {
                _this.productList[i].count = 1;
            }
        });
    };
    ProductListComponent.prototype.modifyCount = function (isAdd, index) {
        if (isAdd) {
            //数量增加
            this.productList[index].count++;
        }
        else {
            //数量减少
            if (this.productList[index].count == 1) {
                return;
            }
            else {
                this.productList[index].count--;
            }
        }
    };
    ProductListComponent.prototype.addToCart = function (index) {
        var _this = this;
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/add.php?lid=" +
            this.productList[index].lid + "&buyCount=" + this.productList[index].count)
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 300)
                _this.myRouter.navigateByUrl('/login');
            else if (data.code == 500) {
                alert("添加失败");
            }
            else if (data.code == 200) {
                alert("添加成功");
            }
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: './product.component.html',
            styleUrls: ['assets/css/products.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService, router_1.Router, router_2.ActivatedRoute])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.component.js.map