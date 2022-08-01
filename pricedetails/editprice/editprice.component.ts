import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-editprice',
  templateUrl: './editprice.component.html',
  styleUrls: ['./editprice.component.css']
})
export class EditpriceComponent implements OnInit {
  priceForm=this.formbuilder.group({
    priceid:[''],
    itempriceid:[''],
    pricemrp:[''],
    merketprice:[''],
    dicount:[''],
    statdate:[''],
    enddate:[''],
    status:['']
  })
  priceInfo: any;
  id: any;
  public date=new Date();

  constructor(private apiservice:ApiService,private formbuilder:FormBuilder,private actrouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.actrouter.params.subscribe((res:any)=>{
      this.priceInfo=res.id
    })

    this.apiservice.GetPrice(this.priceInfo)
    .subscribe((res:any)=>{
      console.log(res);

      this.priceForm=new FormGroup({
        priceid:new FormControl(res['ipdId']),
        itempriceid:new FormControl(res['ipdIId']),
        pricemrp:new FormControl(res['ipdMrp']),
        merketprice:new FormControl(res['ipdMarketPrice']),
        dicount:new FormControl(res['ipdDiscount']),
        statdate:new FormControl(res['ipdStartDate']),
        enddate:new FormControl(res['ipdEndDate']),
        status:new FormControl(res['ipdStatus']),
      })
    })
  }
EditPrice(){
   this.id=this.actrouter.snapshot.params['id'];
     console.log(this.id);

     const obj={
      "ipdId": this.id,
      "ipdIId":42,
      "ipdMrp": this.priceForm.value['pricemrp'],
      "ipdMarketPrice": this.priceForm.value['merketprice'],
      "ipdDiscount":  this.priceForm.value['dicount'],
      "ipdStartDate":  this.priceForm.value['statdate'],
      "ipdEndDate":  this.priceForm.value['enddate'],
      "ipdStatus":  this.priceForm.value['status'],
      "ipdTs": this.date
     }
     console.log(obj);

     this.apiservice.EditPrice(this.priceInfo,obj)
     .subscribe(res=>{
       alert('Price Updated SuccessFull');
       this.router.navigate(['home'])
     })
}
}
