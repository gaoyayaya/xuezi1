import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
    selector: 'orderConfirmTwo',
    templateUrl: './orderConfirmTwo.component.html',
    styleUrls:['assets/css/payment.css']
})

export class OrderConfirmTwoComponent implements OnInit {
    sum:number=0;
    minute:number=14;
    second:number=59;
    constructor(private ac:ActivatedRoute,
                private router:Router) { }

    ngOnInit() {
        this.ac.params.subscribe((data:any)=>{
           this.sum=data.pay;
        });
        var timer1=setInterval(()=>{
            this.second--;
            if(this.second<0)
              this.second=59;
        },1000)
        var timer2=setInterval(()=>{
            this.minute--;
            if(this.second<0){
              clearInterval(timer1);
              clearInterval(timer2);
              this.router.navigateByUrl('orderConfirm/orderconfirmone');
              }
        },60000)
     }
}