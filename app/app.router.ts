import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {IndexComponent} from './index/index.component'
import {NotFoundComponent} from './utility/notFound/notFound.component'
import {LoginComponent} from './login/login.component'
import {UserCenterComponent} from './userCenter/userCenter.component'
import {RegisterComponent} from './register/register.component'
import {DetailComponent } from './detail/detail.component'
import {ProductListComponent} from './product/product.component';
import {CartComponent} from './cart/cart.component';
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component';
import {OrderConfirmOneComponent} from './orderConfirm/orderConfirmOne/orderConfirmOne.component';
import {OrderConfirmTwoComponent} from './orderConfirm/orderConfirmTwo/orderConfirmTwo.component';
import {OrderConfirmThreeComponent} from './orderConfirm/orderConfirmThree/orderConfirmThree.component';
import {OrderAddressComponent} from './orderConfirm/orderAddress/orderAddress.component'

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'userCenter',component:UserCenterComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'detail',component:DetailComponent},
  { path: 'list',component:ProductListComponent},
  { path: 'cart',component:CartComponent},
  { path: 'orderConfirm',component:OrderConfirmComponent,
    children:[
      {path:'',component:OrderConfirmOneComponent},
      {path:'orderconfirmone',component:OrderConfirmOneComponent},
      {path:'orderconfirmtwo',component:OrderConfirmTwoComponent},
      {path:'orderconfirmthree',component:OrderConfirmThreeComponent},
      {path:'orderadd',component:OrderAddressComponent},
      {path:'**',component:OrderConfirmOneComponent},
    ]},
  { path: '**',   component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

