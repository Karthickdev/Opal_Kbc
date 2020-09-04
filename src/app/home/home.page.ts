import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userName: String = "";
  userInfo:any;
  scanOrder:any;
  receiveItems:any;
  addSaleItem:any;
  viewInventory:any;
  enableScan:any;
  enableReceiveItems:any;
  enableReturn:any;
  enableAddSale:any;
  enableViewInventory:any;
  constructor(private routeTo: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id = JSON.parse(localStorage.getItem("Id"));
    this.userName = 'WELCOME ' + id['userName'];
  }

  ionViewWillEnter(){
    this.userInfo = JSON.parse(localStorage.getItem("loginAccess"));
    if(this.userInfo.scanOrder != false){
      this.enableScan = true
    }else{
      this.enableScan = false
    }
    if(this.userInfo.receiveItems != false){
      this.enableReceiveItems = true
    }else{
      this.enableReceiveItems = false
    }
    if(this.userInfo.returnItems != false){
      this.enableReturn = true
    }else{
      this.enableReturn = false
    }
    if(this.userInfo.addSaleItem != false){
      this.enableAddSale = true
    }else{
      this.enableAddSale = false
    }
    if(this.userInfo.viewInventory != false){
      this.enableViewInventory = true
    }else{
      this.enableViewInventory = false
    }
    console.log(this.enableViewInventory);
  }

  goTorReturnPage() {
    this.routeTo.navigate(["/return-item"]);
  }

  goToScanPage() {
    this.routeTo.navigate(["/scan-item"]);
  }

  goToReceivePage() {
    this.routeTo.navigate(["/receive-item"]);
  }

  goToAddSalePage() {
    this.routeTo.navigate(["/add-sale-item"]);
  }

  goToViewInventory(){
    this.routeTo.navigate(['/view-inventory']);
  }

  goToSignInPage() {
    localStorage.removeItem("Id");
    localStorage.removeItem("loginAccess");
    this.routeTo.navigate(["/sign-in"]);
  }

}
