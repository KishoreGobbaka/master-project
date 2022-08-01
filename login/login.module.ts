import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import {
//   FacebookLoginProvider,
//   SocialLoginModule,
//   SocialAuthServiceConfig,
// } from 'angularx-social-login';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   // SocialLoginModule,


  ],
   providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('1369121273585678'),
    //       },
    //     ],
    //   } as SocialAuthServiceConfig,
    // },
  ],
})
export class LoginModule { }
