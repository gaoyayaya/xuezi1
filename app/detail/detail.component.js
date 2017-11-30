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
var MyHttp_service_1 = require('../utility/service/MyHttp.service');
var DetailComponent = (function () {
    // 此处的商品介绍
    function DetailComponent(ac, router, http) {
        this.ac = ac;
        this.router = router;
        this.http = http;
        this.id = "";
        this.details = "";
        this.family = "";
        this.img = "";
        this.imgList = [];
        this.detail = null;
        this.count = 1;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ac.params.subscribe(function (data) {
            _this.id = data.id;
            _this.http.sendRequest("http://localhost/project-angular/data/product/details.php?lid=" + _this.id)
                .subscribe(function (data) {
                _this.details = data.details;
                _this.family = data.family;
                _this.img = data.details.picList[0].md;
                _this.imgList = data.details.picList;
                _this.detail = data.details.details;
            });
        });
    };
    //修改数量
    DetailComponent.prototype.modifyCount = function (isAdd) {
        if (isAdd) {
            //数量增加
            this.count++;
        }
        else {
            //数量减少
            if (this.count == 1) {
                return;
            }
            else {
                this.count--;
            }
        }
    };
    DetailComponent.prototype.addToCart = function (index) {
        var _this = this;
        this.http.sendRequest("http://localhost/project-angular/data/cart/add.php?lid=" +
            this.id + "&buyCount=" + this.count)
            .subscribe(function (data) {
            console.log(data);
            if (data.code == 300)
                _this.router.navigateByUrl('/login');
            else if (data.code == 500) {
                alert("添加失败");
            }
            else if (data.code == 200) {
                alert("添加成功");
            }
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'storeDetail',
            templateUrl: './detail.component.html',
            styleUrls: ['assets/css/product_details.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router, MyHttp_service_1.MyHttpService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map