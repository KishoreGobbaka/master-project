import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-addprice',
  templateUrl: './addprice.component.html',
  styleUrls: ['./addprice.component.css']
})
export class AddpriceComponent implements OnInit {

  constructor( private apiservice: ApiService,private formbuilder:FormBuilder,private router:Router,private actroute:ActivatedRoute) { }
  public date=new Date();
  pricedetails:any;
  public detailsId: any;
  public discount:any;


 public pricemrp:any;
 public startdate='';
 public enddate='';
 public status='';
  ngOnInit(): void {
    this.actroute.params.subscribe((res:any)=>{
      this.pricedetails=res.iId
      console.log(this.pricedetails)
    })
    this.apiservice.GetDetails(this.pricedetails)
    .subscribe((res:any)=>{
      console.log('hello',res);
      this.detailsId=res.iId;
      console.log(this.detailsId);
      let abc=res.iDesc;
      this.discount=Number(res.iDesc.slice(0,abc.length-1))
      console.log(this.discount);
    })
  }
//  AddPrice(){
//    const obj={
//     "ipdId": 0,
//     "ipdIId": 101,
//     "ipdMrp": this.priceForm.value.pricemrp,
//     "ipdMarketPrice": this.priceForm.value.marketprice,
//     "ipdDiscount": this.priceForm.value.pricediscount,
//     "ipdStartDate": this.priceForm.value.startdate,
//     "ipdEndDate": this.priceForm.value.enddate,
//     "ipdStatus": this.priceForm.value.status,
//     "ipdTs": this.date
//    }
//    console.log(obj);
//    this.apiservice.AddPrice(obj)
//   .subscribe(res=>{
//    console.log(res);
//    alert('Price Added SuccessFull');
//    this.router.navigate(['viewprice'])
//  })
//  }
 addpricedetails(){
  const obj={
    "ipdId": 0,
    "ipdIId": this.detailsId,
    "ipdMrp": this.pricemrp,
    "ipdMarketPrice": String(this.pricemrp-(this.pricemrp*this.discount/100)),
    "ipdDiscount": this.discount,
    "ipdStartDate": this.startdate,
    "ipdEndDate": this.enddate,
    "ipdStatus": this.status,
    "ipdTs": this.date
  }
  console.log(obj);
    this.apiservice.AddPrice(obj)
    .subscribe((res:any)=>{
      console.log(res);
      alert('Price Added Successfully');
      this.router.navigate(['viewprice'])
    })
 }
}
