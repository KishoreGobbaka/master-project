import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneproductsComponent } from '../allproducts/oneproducts/oneproducts.component';
import { PrivilageComponent } from '../privilage/privilage.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent } ,
                        {path:'oneproduct/:id',component:OneproductsComponent},
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
