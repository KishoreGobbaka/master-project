import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpriceComponent } from './addprice/addprice.component';
import { EditpriceComponent } from './editprice/editprice.component';
import { PricedetailsComponent } from './pricedetails.component';
import { ViewpriceComponent } from './viewprice/viewprice.component';

const routes: Routes = [{ path: '', component: PricedetailsComponent },
                        { path: 'addprice', component: AddpriceComponent },
                        { path: 'viewprice', component: ViewpriceComponent },
                        { path: 'editprice/:id', component:EditpriceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricedetailsRoutingModule { }
