import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../../utility/service/MyHttp.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'orderConfirmOne',
    templateUrl: './orderConfirmOne.component.html',
    styleUrls:['assets/css/order_confirm.css']
})

export class OrderConfirmOneComponent implements OnInit {
    productList:Array<any>=[];
    priceSum:number=0;
    lid:any='';
    count:number=0;
    constructor(private http:MyHttpService,
    private router:Router,
    private ac:ActivatedRoute) { }

    ngOnInit() { 
      //加载购物车
       this.http.sendRequest("http://localhost/project-angular/data/cart/list_checked.php")
       .subscribe((data:any)=>{
           console.log(data);
           this.productList=data.data;
           for(var p of data.data){
              this.priceSum+=p.count*p.price;
           }
       })
       //直接购买
         this.ac.params.subscribe((data:any)=>{
             console.log(data);
          this.lid=data.lid;
          this.count=data.coun;
          this.http.sendRequest("http://localhost/project-angular/data/product/detail_buy.php?id="+
          this.lid)
        .subscribe((data:any)=>{
           console.log(data.data);
           data.data[0].count=this.count;
           this.productList=data.data;
           for(var p of data.data){
              this.priceSum+=p.count*p.price;
            }
        })
     })
    // //获取地址
    //    this.http.sendRequest("http://localhost/project-angular/data/user/list_addr.php")
    //    .subscribe((data:any)=>{
    //       console.log(data);
    //    })
    }
    addAddress(){
        this.router.navigateByUrl('/orderConfirm/orderadd');
    }
}