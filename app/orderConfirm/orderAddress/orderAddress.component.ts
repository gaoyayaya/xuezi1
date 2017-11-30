import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../../utility/service/MyHttp.service';
import {Router} from '@angular/router';


@Component({
    selector: 'orderAddress',
    templateUrl: './orderAddress.component.html',
    styleUrls:['assets/css/order_confirm.css']
})

export class OrderAddressComponent implements OnInit {
    userName:string="";
    userAddr:string="";
    uesrPhone:string="";
    userYoubian:string="";
    province:string="";
    city:string="";
    country:string="";
    constructor(private http:MyHttpService,
    private router:Router) { }

    ngOnInit() { }
    addAddr(){
       this.http.sendRequest("http://localhost/project-angular/data/user/add_address.php"+
       "?name="+this.userName+"&province="+this.province+"&city="+this.city+"&country="
       +this.country+"&addr="+this.userAddr+"&phone="+this.uesrPhone+"&fixedphone="+
       this.uesrPhone+"&postcode="+this.userYoubian)
       .subscribe((data:any)=>{
           console.log(data);
           if(data.code==200){
               alert("添加成功");
            //    this.router.navigateByUrl('/orderConfirm/orderconfirmone');
           }
           else{
               alert("添加失败");
           }
       })
    }
}