import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemdetailsRoutingModule } from './itemdetails-routing.module';
import { ItemdetailsComponent } from './itemdetails.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    ItemdetailsComponent,
    AdddetailsComponent,
    EditdetailsComponent,
    ViewdetailsComponent,
    SearchPipe,
    SortDirective
  ],
  imports: [
    CommonModule,
    ItemdetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ItemdetailsModule { }
