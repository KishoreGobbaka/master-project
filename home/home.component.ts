import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdddetailsComponent } from '../itemdetails/adddetails/adddetails.component';
import { AdditemComponent } from '../itemgroup/additem/additem.component';
import { AddpriceComponent } from '../pricedetails/addprice/addprice.component';
import { AddprvgComponent } from '../privilage/addprvg/addprvg.component';
import { AddroleComponent } from '../role/addrole/addrole.component';
import { ApiService } from '../service/api.service';
import { AdduserComponent } from '../user/adduser/adduser.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
  product2: any;
  onedata:any;
  sigleiddata:any=[];
  public showme=true;
  oneproduct: any;



  constructor(public dialog: MatDialog,private router:Router,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.apiservice.ViewDetails()
    .subscribe(res=>{
      console.log(res);
      this.product=res;
    });

    this.apiservice.ViewPrice()
    .subscribe(res=>{
      console.log(res);
      this.product2=res;
    })

    this.apiservice.ViewItem()
    .subscribe(data=>{
      console.log(data);
      this.oneproduct=data
    })

  }

 OneItem(oneitem:any){
  this.apiservice.ViewDetails()
  .subscribe(res=>{
    this.product=res;
    this.product=this.product.filter((response:any)=>response.iIgId == oneitem)
    console.log(this.product)
  });
  this.back();
 }

  productClick(val){
    this.showme=false;
    console.log(val);
     this.sigleiddata=val
     this.product2.forEach(e=>{
      if(e.ipdIId == val.iId)
      {
         this.onedata=e;
        console.log(e)
      }
     })
  }

  back(){
    this.showme=true;
    console.log(this.showme)
  }

  openDialog() {
    this.dialog.open(AddroleComponent);
  }
  logOut(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['login'])
  }
  openDialog2() {
    this.dialog.open(AddprvgComponent);
  }
  openDialog3() {
    this.dialog.open(AdduserComponent);
  }
  openDialog4() {
    this.dialog.open(AdditemComponent);
  }
  openDialog5() {
    this.dialog.open(AdddetailsComponent);
  }
  openDialog6() {
    this.dialog.open(AddpriceComponent);
  }
  Status(){
     if(localStorage.getItem('status') == 'N'){
      alert('Your Not Allow This Page');
        // this.router.navigate(['home'])
     }
     else{
       this.openDialog2();
     }


  }


}
