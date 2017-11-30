import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/MyHttp.service';
import {Router} from '@angular/router';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    isAllCheck:boolean=false;
    cartList:Array<any>=[];
    productCount:number=0;
    sumPrice:number=0;
    constructor(private myHttpService:MyHttpService,
    private router:Router) { }
    ngOnInit() {
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/list.php")
        .subscribe((data:any)=>{
            if(data.code==300){
                this.router.navigateByUrl('/login');
            }
           console.log(data.data);
           this.cartList=data.data;
           for(var p of this.cartList){
               p['isDelete']=false;
               p['isCheck']=false;
               this.changeChecke(p.iid,false);
           }
           console.log(this.cartList);
        })
        
     }
     //修改数量
    modifyCount(isAdd:boolean,index:number){  
        if(isAdd){
            //数量增加
            this.cartList[index].count++;
        }
        else{
        //数量减少
            if(this.cartList[index].count==1){
                return;
            }
            else{
                this.cartList[index].count--;
            }
        }
        //修改数据库
        this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/update_count.php"+
        "?iid="+this.cartList[index].iid+"&count="+this.cartList[index].count)
        .subscribe((data:any)=>{
           console.log(data);
        })
    }
    //每个选择框的点击
    changeCheck(index:any){
        this.cartList[index].isCheck=!this.cartList[index].isCheck;
        if(this.cartList[index].isCheck==true){
           this.productCount++;
           this.sumPrice+=this.cartList[index].count*this.cartList[index].price;
        }
        else{
           this.productCount--;
           this.sumPrice-=this.cartList[index].count*this.cartList[index].price;
        }
        this.changeChecke(this.cartList[index].iid,this.cartList[index].isCheck);
        for(var p of this.cartList){
           if(p.isCheck==false){
               this.isAllCheck=false;
               return;
           }
           this.isAllCheck=true;
        }
    }
    //全选按钮
    changeAllCheck(){
        this.isAllCheck=!this.isAllCheck;
        this.sumPrice=0;
        if(this.isAllCheck){
            for(var p of this.cartList){
                p.isCheck=true;
                this.sumPrice+=p.price*p.count;
                this.changeChecke(p.iid,true);
            }
            this.productCount=this.cartList.length;
        }
        else{
            for(var p of this.cartList){
                p.isCheck=false;
                this.changeChecke(p.iid,false);
            }
            this.productCount=0;
        }
    }
    deletePro(index:any){
      this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/del.php?iid="+this.cartList[index].iid)
      .subscribe((data:any)=>{
          if(data.code==200)
              this.cartList[index].isDelete=true;
      })
    }
    //修改选中商品
    changeChecke(id:any,check:boolean){
       this.myHttpService.sendRequest("http://localhost/project-angular/data/cart/update_checked.php"
       +"?iid="+id+"&checked="+check)
       .subscribe((data:any)=>{
          console.log(data);
       })
    }
}