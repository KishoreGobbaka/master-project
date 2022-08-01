import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  searchText:string='';
  data:any;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.ViewDetails();
  }

  ViewDetails(){
    this.apiservice.ViewDetails()
    .subscribe(res=>{
      console.log(res);
      this.data=res
    })
  }
DeleteDetails(res:any){
    this.apiservice.DeleteDetails(res)
    .subscribe(res=>{
      alert('you Want To Delete')
      this.ViewDetails();
    })
}
}
