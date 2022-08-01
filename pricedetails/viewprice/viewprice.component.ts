import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-viewprice',
  templateUrl: './viewprice.component.html',
  styleUrls: ['./viewprice.component.css']
})
export class ViewpriceComponent implements OnInit {
  data:any;
 searchText:string='';
  constructor(private apiservice:ApiService ) { }

  ngOnInit(): void {
    this.ViewPrice();
  }
  ViewPrice(){
    this.apiservice.ViewPrice()
    .subscribe(res=>{
      console.log(res);
      this.data=res
    })
  }
  DeletePrice(res:any){
    this.apiservice.DeletePrice(res)
    .subscribe(res=>{
     this.ViewPrice();
     alert ('You Want To Delete')
    })
  }
}
