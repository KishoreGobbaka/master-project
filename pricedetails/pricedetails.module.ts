import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricedetailsRoutingModule } from './pricedetails-routing.module';
import { PricedetailsComponent } from './pricedetails.component';
import { AddpriceComponent } from './addprice/addprice.component';
import { ViewpriceComponent } from './viewprice/viewprice.component';
import { EditpriceComponent } from './editprice/editprice.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    PricedetailsComponent,
    AddpriceComponent,
    ViewpriceComponent,
    EditpriceComponent,
    SearchPipe,
    SortDirective
  ],
  imports: [
    CommonModule,
    PricedetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PricedetailsModule { }
