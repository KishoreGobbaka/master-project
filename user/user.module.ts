import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { SortDirective } from './sort.directive';
import { Angular2CsvModule } from 'angular2-csv';

@NgModule({
  declarations: [
    UserComponent,
    AdduserComponent,
    ViewuserComponent,
    EdituserComponent,
    SearchPipe,
    SortDirective,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Angular2CsvModule
  ]
})
export class UserModule { }
