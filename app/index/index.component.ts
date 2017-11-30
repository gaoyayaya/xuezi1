import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/MyHttp.service'

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls:['assets/css/animate.css','assets/css/item_cat.css']
})

export class IndexComponent implements OnInit {

    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];
    //保存的推荐商品的对象数组
    recommendedItems:Array<any>=[];
    //保存新品上架商品的对象数组
    newArrivalItems:Array<any>=[];
    //保存热销单品的对象数组
    topSaleItems:Array<any>=[];
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() {
        this.loadData();
     }

    //初始化数据
    loadData(){
        this.myHttp
        .sendRequest("http://localhost/project-angular/data/product/index.php")
        .subscribe((data:any)=>{
            console.log(data);
            //对slides数组进行赋值
            if(data.carouselItems){
                for(var i=0;i<data.carouselItems.length;i++)
                {
                    this.slides.push({
                         image:data.carouselItems[i].img
                    })
                }
            }
            //保存推荐商品的数据
            this.recommendedItems = data.recommendedItems;
            this.newArrivalItems = data.newArrivalItems;
            this.topSaleItems = data.topSaleItems;
            console.log(this.recommendedItems);
            console.log(this.newArrivalItems);
            console.log(this.topSaleItems);
        })
    }
}