import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent implements OnInit {
url:any;
selectImage:any;
data:any=[];
public date=new Date();
imageUrl='https://saapi.azaz.com/'

  constructor(private formbuilder:FormBuilder,private apiservice:ApiService, private router:Router) { }

  ngOnInit(): void {

  }
  selectFile(event:any){
      if(event.target.files && event.target.files[0]){
        var reader=new FileReader();
        reader.onload=(event:any)=>
        this.url=event.target.result;
        reader.readAsDataURL(event.target.files[0]);
        this.selectImage=event.target.files[0]
      }
    this.Upload();
  }
  Upload(){
    this.apiservice.UplodImage(this.selectImage).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
      console.log(this.data);
     // alert('upload successfull'+this.data)
    })
  }

  detailForm=this.formbuilder.group({
    itemname:[''],
    itemdesc:[''],
    itemimage:[''],
    itemstatus:['']
  })
  AddDetails(){
   const obj={
    "iId": 0,
    "iName": this.detailForm.value.itemname,
    "iIgId": 25,
    "iDesc": this.detailForm.value.itemdesc,
    "iImage":this.imageUrl+this.data.dbPath,
    "iStatus": this.detailForm.value.itemstatus,
    "iTs": this.date
   }
   console.log(obj);
   this.apiservice.AddDetails(obj)
   .subscribe(res=>{
     console.log(res)
     alert('Item Details Added Successfull')
     this.router.navigate(['viewdetail'])
   })
  }
}
