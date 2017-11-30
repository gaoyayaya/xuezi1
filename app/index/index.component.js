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
var IndexComponent = (function () {
    function IndexComponent(myHttp) {
        this.myHttp = myHttp;
        //图片之间轮播的间隔时间
        this.NextPhotoInterval = 1000;
        //是否要禁用循环播放
        this.noLoopSlides = false;
        //Photos
        this.slides = [];
        //保存的推荐商品的对象数组
        this.recommendedItems = [];
        //保存新品上架商品的对象数组
        this.newArrivalItems = [];
        //保存热销单品的对象数组
        this.topSaleItems = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //初始化数据
    IndexComponent.prototype.loadData = function () {
        var _this = this;
        this.myHttp
            .sendRequest("http://localhost/project-angular/data/product/index.php")
            .subscribe(function (data) {
            console.log(data);
            //对slides数组进行赋值
            if (data.carouselItems) {
                for (var i = 0; i < data.carouselItems.length; i++) {
                    _this.slides.push({
                        image: data.carouselItems[i].img
                    });
                }
            }
            //保存推荐商品的数据
            _this.recommendedItems = data.recommendedItems;
            _this.newArrivalItems = data.newArrivalItems;
            _this.topSaleItems = data.topSaleItems;
            console.log(_this.recommendedItems);
            console.log(_this.newArrivalItems);
            console.log(_this.topSaleItems);
        });
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'storeIndex',
            templateUrl: './index.component.html',
            styleUrls: ['assets/css/animate.css', 'assets/css/item_cat.css']
        }), 
        __metadata('design:paramtypes', [MyHttp_service_1.MyHttpService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map