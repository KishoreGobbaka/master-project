import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserComponent } from './user.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [{ path: '', component: UserComponent },
                        { path: 'adduser', component: AdduserComponent },
                        { path: 'viewuser', component: ViewuserComponent },
                        { path: 'edituser/:id', component: EdituserComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
