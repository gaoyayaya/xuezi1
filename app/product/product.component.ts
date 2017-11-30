import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/MyHttp.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product-list',
    templateUrl: './product.component.html',
    styleUrls: ['assets/css/products.css']
})

export class ProductListComponent implements OnInit {
    kword:string="";
    productList:Array<any>=[];
    nowPage=1;
    pageSize=9;
    constructor(private myHttpService:MyHttpService,
    private myRouter:Router,
    private aAct:ActivatedRoute) { }

    ngOnInit() { 
       this.aAct.params.subscribe((data:any)=>{
          this.kword=data.kw;
       })
       this.myHttpService.sendRequest("http://localhost/project-angular/data/product/list.php?pno="+this.nowPage+"&kw="+this.kword)
           .subscribe((result:any)=>{
               console.log(result);
               console.log(result.data);
               this.productList=result.data;
               this.pageSize=result.data.length;
               console.log(this.pageSize);
               for(var i=0;i<this.pageSize;i++){
                  this.productList[i].count=1;
               }
           })
    }
    modifyCount(isAdd:boolean,index:number){
      if(isAdd){
        //数量增加
        this.productList[index].count++;
      }
      else{
       //数量减少
       if(this.productList[index].count==1){
         return;
       }
       else{
           this.productList[index].count--;
       }
      }
    }
    addToCart(index:number){
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/add.php?lid="+
        this.productList[index].lid+"&buyCount="+this.productList[index].count)
            .subscribe((data)=>{
                console.log(data)
                if(data.code==300)
                   this.myRouter.navigateByUrl('/login');
                else if(data.code==500){
                   alert("添加失败");
                }
                else if(data.code==200){
                   alert("添加成功");
                }
        })
    }
}