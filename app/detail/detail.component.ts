import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MyHttpService} from '../utility/service/MyHttp.service';

@Component({
    selector: 'storeDetail',
    templateUrl: './detail.component.html',
    styleUrls:['assets/css/product_details.css']
})

export class DetailComponent implements OnInit {
    id:any="";
    details:any="";
    family:any="";
    img:string="";
    imgList:Array<any>=[];
    detail:any=null;
    count:number=1;
    // 此处的商品介绍
    constructor(private ac:ActivatedRoute,
                private router:Router,
                private http:MyHttpService) { }

    ngOnInit() { 
        this.ac.params.subscribe((data:any)=>{
           this.id=data.id;
           this.http.sendRequest("http://localhost/project-angular/data/product/details.php?lid="+this.id)
           .subscribe((data:any)=>{
              this.details=data.details;
              this.family=data.family;
              this.img=data.details.picList[0].md;
              this.imgList=data.details.picList;
              this.detail=data.details.details;
           })
        });
    }
     //修改数量
    modifyCount(isAdd:boolean){  
        if(isAdd){
            //数量增加
            this.count++;
        }
        else{
        //数量减少
            if(this.count==1){
                return;
            }
            else{
                this.count--;
            }
        }
    }
     addToCart(index:number){
        this.http.sendRequest("http://localhost/project-angular/data/cart/add.php?lid="+
        this.id+"&buyCount="+this.count)
            .subscribe((data)=>{
                console.log(data)
                if(data.code==300)
                   this.router.navigateByUrl('/login');
                else if(data.code==500){
                   alert("添加失败");
                }
                else if(data.code==200){
                   alert("添加成功");
                }
        })
    }
}