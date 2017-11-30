import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'orderConfirmThree',
    templateUrl: './orderConfirmThree.component.html'
})

export class OrderConfirmThreeComponent implements OnInit {
    time=5;
    myTimer:any=null;
    constructor(private myRouter:Router) { }

    ngOnInit() {
        this.myTimer=setInterval(()=>{
            this.time--;
            if(this.time==0){
               clearInterval(this.myTimer);
               this.myTimer=null;
               this.myRouter.navigateByUrl('/index')
            }
        },1000)
     }
    //  angular生命周期的最后一个时期？？？？？？？？？？？？？？
}