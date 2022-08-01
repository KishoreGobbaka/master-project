import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpriceComponent } from '../pricedetails/addprice/addprice.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ItemdetailsComponent } from './itemdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [{ path: '', component: ItemdetailsComponent },
                        { path: 'adddetail', component: AdddetailsComponent },
                        { path: 'viewdetail', component: ViewdetailsComponent },
                        { path: 'editdetail/:id', component:EditdetailsComponent},
                        { path: 'addprice/:iId/:iDesc', component:AddpriceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemdetailsRoutingModule { }
