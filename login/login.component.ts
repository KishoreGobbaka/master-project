import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { LoginClass } from '../model/class';
// import {
//   SocialAuthService,
//   FacebookLoginProvider,
//   SocialUser,
// } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef | undefined;
//   auth2: any;
//   loginForm!: FormGroup;
//   socialUser!: SocialUser;
//   isLoggedin?: boolean = undefined;
   result : any;
  constructor(private formbuilder:FormBuilder,
              private loginservice:LoginService,
              private router:Router,
              // private socialAuthService: SocialAuthService
              ) { }

  ngOnInit(): void {
    // this.loginForm = this.formbuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });

    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);

    // });
    // this.googleSDK();
  }
  myForm=this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  login(){
    const loginClass=new LoginClass (this.myForm.controls['username'].value,
                                     this.myForm.controls['password'].value);
        this.loginservice.login(loginClass)
        .subscribe(res=>{
          console.log(res)
          this.result = res;
          console.log(this.result[0].aStatus);

          if(res=''){
            alert('login Failed')
          }
          else{
            alert('Login Successfull')
            this.myForm.reset();
            this.router.navigate(['home'])

           localStorage.setItem('username',this.myForm.value['username'])
           localStorage.setItem('password',this.myForm.value['password'])

            localStorage.setItem('status',this.result[0].aStatus)
            sessionStorage.setItem('status',this.result[0].aStatus)
          }

        })
  }
  // googleSDK() {

  //   (window as any)['googleSDKLoaded'] = () => {
  //     (window as any)['gapi'].load('auth2', () => {
  //       this.auth2 =  (window as any)['gapi'].auth2.init({
  //         client_id: '203674294492-35ao6so9bbk43hdar9a05h2t1t4pgndu.apps.googleusercontent.com',
  //         cookiepolicy: 'single_host_origin',
  //         scope: 'profile email'
  //       });
  //       this.prepareLoginButton();
  //     });
  //   }

  //   (function(d, s, id){
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) {return;}
  //     js = d.createElement(s); js.id = id;
  //     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   }(document, 'script', 'google-jssdk'));

  // }
  // prepareLoginButton() {

  //   this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
  //     (googleUser) => {
  //           console.log(googleUser);

  //       let profile = googleUser.getBasicProfile();
  //       console.log(profile);

  //       console.log('Token || ' + googleUser.getAuthResponse().id_token);
  //       console.log('ID: ' + profile.getId());
  //       console.log('Name: ' + profile.getName());
  //       console.log('Image URL: ' + profile.getImageUrl());
  //       console.log('Email: ' + profile.getEmail());
  //       //YOUR CODE HERE


  //     }, (error) => {
  //       alert(JSON.stringify(error, undefined, 2));
  //     });

  // }

  // loginWithFacebook(): void {
  //   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //  // console.log(this.loginWithFacebook());
  // }
  // signOut(): void {
  //   this.socialAuthService.signOut();
  // }
}
