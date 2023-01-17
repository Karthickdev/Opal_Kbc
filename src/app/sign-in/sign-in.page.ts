import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  @ViewChild("email", { static: false }) email;
  @ViewChild("password", { static: false }) password;
  public logingrp: FormGroup;

  errUserName : boolean;
  errPassword : boolean;
  userInfo:any;
  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService:ApiService
    ) {
    this.logingrp = this.formBuilder.group({
      userEmail:[''],
      userPwd:[''],
    },{ updateOn : 'blur' });
    this.opalService.getAllModelList();
  }

  ngOnInit() {
    this.errPassword = false;
    this.errUserName = false;
  }

  ionViewDidEnter() {
    localStorage.removeItem("loginAccess");
    let id = localStorage.getItem("userName");
    this.logingrp.reset();
    if(id != undefined && id != null && id != "" ){
      this.logingrp.controls['userEmail'].setValue(id);
      this.logingrp.controls['userPwd'].reset();
      setTimeout(()=>{ 
        this.password.setFocus();
      },700);
    } else {
      setTimeout(()=>{
        this.email.setFocus();
      },700);
    }
  }


  //method to call login ajax call service
	btnLogin(){
    localStorage.removeItem("loginAccess");
      var loginUrl  = this.opalService.baseUrl + this.opalService.userLogin;
      if (this.logingrp.value.userEmail == undefined || this.logingrp.value.userEmail == ""){
        this.opalService.presentToast('Username is required','danger');
        this.errUserName = true;
        return false;
      } else {
        this.errUserName = false;
      }
      if (this.logingrp.value.userPwd == undefined || this.logingrp.value.userPwd == ""){
        this.opalService.presentToast('Password is required','danger');
        this.errPassword = true;
        return false;
      } else {
        this.errPassword = false;
      }
      var dataParam = {
        "loginId" : this.logingrp.value.userEmail,
        "password" :this.logingrp.value.userPwd
      }
      let userName = this.logingrp.value.userEmail;
      this.opalService.present();
      this.opalService.ajaxCallService(loginUrl,"post", dataParam).then(result => {
        if(result == undefined){
          this.opalService.presentToast('Unable to reach server, Please try again','danger');
        }
        else if(result == "Login Id invalid"){
          this.opalService.presentToast('Invalid login Id','danger');  
        }else if(result == "Password invalid"){
          this.opalService.presentToast('Invalid password','danger');
        }else{
          localStorage.setItem("Id", JSON.stringify(result));
          localStorage.setItem("userName", userName);
          this.userInfo = result
          localStorage.setItem("loginAccess", JSON.stringify(this.userInfo.loginAccess));
          // this.opalService.presentToast('Successfully Logged in','secondary');
          this.routeTo.navigate(["/home"]);
          this.errPassword = false;
        }
        this.opalService.dismiss();
      }).catch(err => {
        this.opalService.presentToast('Unable to reach server, Please try again','danger');
        this.opalService.dismiss();
      });
  }
  
  //check if model is empty
  checkEmptyIdOnFocus(evt){
    if(evt.target.value != undefined && evt.target.value != "" ){
      this.errUserName = false;
    }
  }

  //check if model is empty
  checkEmptyIdOnBlur(evt){
    if(evt.target.value != undefined && evt.target.value != "" ){
      this.errUserName = false;
    } else {
      this.errUserName = true;
    }
  }

  //check if model is empty
  checkEmptyPassOnFocus(evt){
    if(evt.target.value != undefined && evt.target.value != "" ){
      this.errPassword = false;
    }
  }

  //check if model is empty
  checkEmptyPassOnBlur(evt){
    if(evt.target.value != undefined && evt.target.value != "" ){
      this.errPassword = false;
    } else {
      this.errPassword = true;
    }
  }
}
