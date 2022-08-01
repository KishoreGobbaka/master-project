import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginClass } from 'src/app/model/class';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  detailForm=this.formbuilder.group({
     itemid:[''],
     itemname:[''],
     itemdisc:[''],
     itemimage:[''],
     itemstatus:['']
  })
  dataInfo: any;
  url:any;
  selectImage: any;
  data: any;
  id: any;
  public date=new Date();
  imageUrl='https://saapi.azaz.com/'
  constructor(private apiservice:ApiService,private formbuilder:FormBuilder,private router:Router,private actrouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.actrouter.params.subscribe((res:any)=>{
      this.dataInfo=res.id
    })
    console.log(this.dataInfo);
    this.apiservice.GetDetails(this.dataInfo)
    .subscribe((res:any)=>{
      console.log(res);

      this.detailForm=new FormGroup({
        itemid:new FormControl(res['iId']),
        itemname:new FormControl(res['iName']),
        itemdisc:new FormControl(res['iDesc']),
        itemimage:new FormControl(res['iImage']),
        itemstatus:new FormControl(res['iStatus']),
      })
    })
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
EditDetails(){
  this.id=this.actrouter.snapshot.params['id'];
  console.log(this.id);

  const obj={
  "iId": this.id,
  "iName": this.detailForm.value['itemname'],
  "iIgId": 21,
  "iDesc": this.detailForm.value['itemdisc'],
  "iImage": this.imageUrl+this.data.dbPath,
  "iStatus":this.detailForm.value['itemstatus'],
  "iTs": this.date
  }
  console.log(obj);

  this.apiservice.EditDetails(this.dataInfo,obj)
  .subscribe((res:any)=>{
    console.log(res);
    alert('Item Details Updated Successfull')
    this.router.navigate(['home'])
  })
}
}

