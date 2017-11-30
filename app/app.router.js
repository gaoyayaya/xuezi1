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
var index_component_1 = require('./index/index.component');
var notFound_component_1 = require('./utility/notFound/notFound.component');
var login_component_1 = require('./login/login.component');
var userCenter_component_1 = require('./userCenter/userCenter.component');
var register_component_1 = require('./register/register.component');
var detail_component_1 = require('./detail/detail.component');
var product_component_1 = require('./product/product.component');
var cart_component_1 = require('./cart/cart.component');
var orderConfirm_component_1 = require('./orderConfirm/orderConfirm.component');
var orderConfirmOne_component_1 = require('./orderConfirm/orderConfirmOne/orderConfirmOne.component');
var orderConfirmTwo_component_1 = require('./orderConfirm/orderConfirmTwo/orderConfirmTwo.component');
var orderConfirmThree_component_1 = require('./orderConfirm/orderConfirmThree/orderConfirmThree.component');
var orderAddress_component_1 = require('./orderConfirm/orderAddress/orderAddress.component');
var routes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'userCenter', component: userCenter_component_1.UserCenterComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'detail', component: detail_component_1.DetailComponent },
    { path: 'list', component: product_component_1.ProductListComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'orderConfirm', component: orderConfirm_component_1.OrderConfirmComponent,
        children: [
            { path: '', component: orderConfirmOne_component_1.OrderConfirmOneComponent },
            { path: 'orderconfirmone', component: orderConfirmOne_component_1.OrderConfirmOneComponent },
            { path: 'orderconfirmtwo', component: orderConfirmTwo_component_1.OrderConfirmTwoComponent },
            { path: 'orderconfirmthree', component: orderConfirmThree_component_1.OrderConfirmThreeComponent },
            { path: 'orderadd', component: orderAddress_component_1.OrderAddressComponent },
            { path: '**', component: orderConfirmOne_component_1.OrderConfirmOneComponent },
        ] },
    { path: '**', component: notFound_component_1.NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.router.js.map