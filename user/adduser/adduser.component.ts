import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  role : any;

  public date=new Date();
  constructor(private apiservice:ApiService,private router :Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  userForm=this.formbuilder.group({
   username:['',Validators.required],
   password:['',Validators.required],
   role:['',Validators.required],
   status:['',Validators.required],
  })
AddUser(){
const obj={
    "aId": 0,
    "aUsername":this.userForm.value.username,
    "aPassword":this.userForm.value.password,
    "aArId":this.role,
    "aStatus":this.userForm.value.status,
    "aTs":this.date
}
console.log(obj);
  this.apiservice.AddUser(obj)
  .subscribe(res=>{
    console.log(res);
    if(res){
      alert('User Added Successfull');
      this.router.navigate(['viewuser'])
    }
    else{
      alert('User Not Added')
    }
  })
}

change(e : any)
{
console.log(e.target.value)
this.role = e.target.value
}
}

