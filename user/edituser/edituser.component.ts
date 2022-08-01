import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userdata:any;
  userInfo:any;
  id:any;
  public date=new Date();
  userForm=this.formbuilder.group({
    id:[''],
    username:[''],
    password:[''],
    roleid:[''],
    status:['']
  })
  constructor(private apiservice:ApiService,private router:Router,private actrouter:ActivatedRoute,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.actrouter.params.subscribe((data:any)=>{
      this.userInfo=data.id;
      console.log(this.userInfo)
    })
    this.apiservice.GetUser(this.userInfo)
   .subscribe((res:any)=>{
     console.log(res)

     this.userForm=new FormGroup({
       id:new FormControl(res['aId']),
       username:new FormControl(res['aUsername']),
       password:new FormControl(res['aPassword']),
       roleid:new FormControl(res['aArId']),
       status:new FormControl(res['aStatus'])

     })
  })
  }
  EditUser(){
    this.id=this.actrouter.snapshot.params['id'];
    console.log(this.id)
    const obj={
      "aId":this.id,
      "aUsername":this.userForm.value['username'],
      "aPassword":this.userForm.value['password'],
      "aArId": this.userForm.value['roleid'],
      "aStatus": this.userForm.value['status'],
      "aTs":this.date
 }
 console.log(obj);
 this.apiservice.EditUser(this.userInfo,obj)
 .subscribe(res=>{
   alert ('User Updated Successfull');
   this.router.navigate(['viewuser']);
 })
}
}
