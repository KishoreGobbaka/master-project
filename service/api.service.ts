import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string=' https://saapi.azaz.com/api';

  constructor(private http:HttpClient) { }

 AddRole(obj:any){
     return this.http.post(this.baseUrl+'/AdminRoles',JSON.stringify(obj),headersData)
 }

 ViewRole(){
   return this.http.get(this.baseUrl+'/AdminRoles')
 }

 GetRole(id: any){
   return this.http.get(this.baseUrl+'/AdminRoles/'+id)
 }

 EditRole(id:any,data:any){
   return this.http.put (this.baseUrl+'/AdminRoles/'+id,data)
 }

 DeleteRole(id:any){
   return this.http.delete(this.baseUrl+'/AdminRoles/'+id)
 }

 ViewPrvg(){
   return this.http.get(this.baseUrl+'/AdminPrivilages')
 }

 AddPrvg(obj:any){
   return this.http.post(this.baseUrl+'/AdminPrivilages',JSON.stringify(obj),headersData)
 }

 GetPrvg(id:any){
   return this.http.get(this.baseUrl+'/AdminPrivilages/'+id)
 }

 EditPrvg(id:any,data:any){
   return this.http.put(this.baseUrl+'/AdminPrivilages/'+id,data)
 }

 DeletePrvg(id:any){
   return this.http.delete(this.baseUrl+'/AdminPrivilages/'+id)
 }

 ViewUser(){
   return this.http.get(this.baseUrl+'/AdminLogins')
 }

AddUser(obj:any){
   return this.http.post(this.baseUrl+'/AdminLogins',JSON.stringify(obj),headersData)
}

GetUser(id:any){
  return this.http.get(this.baseUrl+'/AdminLogins/'+id)
}

EditUser(id:any,data:any){
  return this.http.put(this.baseUrl+'/AdminLogins/'+id,data)
}

DeleteUser(id:any){
  return this.http.delete(this.baseUrl+'/AdminLogins/'+id)
}

ViewItem(){
  return this.http.get(this.baseUrl+'/ItemGroups')
}

AddItem(obj:any){
  return this.http.post(this.baseUrl+'/ItemGroups',JSON.stringify(obj),headersData)
}

GetItem(id:any){
  return this.http.get(this.baseUrl+'/ItemGroups/'+id)
}

EditItem(id:any,data:any){
  return this.http.put(this.baseUrl+'/ItemGroups/'+id,data)
}

DeleteItem(id:any){
   return this.http.delete(this.baseUrl+'/ItemGroups/'+id)
}

ViewPrice(){
  return this.http.get(this.baseUrl+'/ItemPriceDetails')
}

AddPrice(obj:any){
  return this.http.post(this.baseUrl+'/ItemPriceDetails',JSON.stringify(obj),headersData)
}

GetPrice(id:any){
  return this.http.get(this.baseUrl+'/ItemPriceDetails/'+id)
}

EditPrice(id:any,data:any){
  return this.http.put(this.baseUrl+'/ItemPriceDetails/'+id,data)
}

DeletePrice(id:any){
  return this.http.delete(this.baseUrl+'/ItemPriceDetails/'+id)
}

ViewDetails(){
  return this.http.get(this.baseUrl+'/ItemPrivilages')
}

AddDetails(obj:any){
  return this.http.post(this.baseUrl+'/ItemPrivilages',JSON.stringify(obj),headersData)
}

GetDetails(id:any){
  return this.http.get(this.baseUrl+'/ItemPrivilages/'+id)
}

EditDetails(id:any,data:any){
  return this.http.put(this.baseUrl+'/ItemPrivilages/'+id,data)
}

DeleteDetails(id:any){
  return this.http.delete(this.baseUrl+'/ItemPrivilages/'+id)
}

UplodImage(obj:any){
  var formdata:any=new FormData();
  formdata.append("file to upload",obj)

  return this.http.post(this.baseUrl+'/Upload',formdata)
}
}


