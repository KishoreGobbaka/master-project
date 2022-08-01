import { Component, OnInit,ViewChild,ElementRef,VERSION } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('htmlData') htmlData!: ElementRef;
data:any;
searchText:string='';
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.ViewUser();
  }
ViewUser(){
  this.apiservice.ViewUser()
  .subscribe(res=>{
    console.log(res);
    this.data=res
  })
}
DeleteUser(res:any){
  console.log(res);
    this.apiservice.DeleteUser(res)
    .subscribe(res=>{
      alert('You Want To Delete')
      this.ViewUser();
    })
}

//pdf method
public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}

//print method
printPage() {
  window.print();
}

//excel method
ExportTOExcel() {
  const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.htmlData.nativeElement);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'ScoreSheet.xlsx');
}
//CSV print method
ngAfterViewChecked() {
  document.querySelector('angular2csv > button')!.innerHTML = 'CSV';
}

}
