import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.router'
import {FormsModule} from '@angular/forms'
import {HttpModule,JsonpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import {HeaderComponent} from './utility/header/header.component'
import {IndexComponent} from './index/index.component'
import {NotFoundComponent} from './utility/notFound/notFound.component'
import {LoginComponent} from './login/login.component'
import {FooterComponent} from './utility/footer/footer.component'
import {UserCenterComponent} from './userCenter/userCenter.component'
import {RegisterComponent} from './register/register.component'
import {MyHttpService} from './utility/service/MyHttp.service'
import {Carousel} from './utility/carsousel/carousel.component'
import {Slide} from  './utility/carsousel/slide.component'
import {DetailComponent } from './detail/detail.component'
import {ProductListComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component'
import {OrderConfirmOneComponent} from './orderConfirm/orderConfirmOne/orderConfirmOne.component'
import {OrderConfirmTwoComponent} from './orderConfirm/orderConfirmTwo/orderConfirmTwo.component'
import {OrderConfirmThreeComponent} from './orderConfirm/orderConfirmThree/orderConfirmThree.component'
import {OrderAddressComponent} from './orderConfirm/orderAddress/orderAddress.component'

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,FormsModule,HttpModule,JsonpModule],
  declarations: [ AppComponent ,HeaderComponent,IndexComponent,NotFoundComponent,
  LoginComponent,FooterComponent,UserCenterComponent,RegisterComponent,Carousel,
  Slide,DetailComponent,ProductListComponent,CartComponent,
  OrderConfirmComponent,OrderConfirmOneComponent,OrderConfirmTwoComponent,
  OrderConfirmThreeComponent,OrderAddressComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ MyHttpService ]
})
export class AppModule { }
 