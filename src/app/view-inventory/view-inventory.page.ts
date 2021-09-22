import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.page.html',
  styleUrls: ['./view-inventory.page.scss'],
})
export class ViewInventoryPage implements OnInit {
  @ViewChild('model') model;
  public returnForm: FormGroup;
  showList: boolean = false;
  searchList: any = [];
  showDetail: boolean = false;
  itemDetails:any;
  itemName:any;
  quantity:any;
  quantityonOrder:any;
  binLocation:any;
  inventory:any;
  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService: ApiService,
    public alert: AlertController,
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController
  ) {
    this.returnForm = this.formBuilder.group({
      model: ['', Validators.required]
  });
}

ngAfterViewInit() {
  setTimeout(() => {
    this.model.setFocus();
  }, 500);
}
validation_messages: any = {
  'model': [
    { type: 'required', message: 'Model is a required field.' },
  ]
}
  ngOnInit() {
  }

  //Method to search model
  searchModel(ev: any) {
    this.searchList = [];

    var searchVal = ev.target.value;
    if (searchVal.length > 2) {
      if (searchVal && searchVal.trim() != '') {
        this.showList = true;
        this.searchList = this.opalService.allModelLists.filter(item => item.includes(searchVal.toUpperCase()));
        this.searchList = this.searchList.slice(0, 20);
      }
    } else {
      this.showList = false;
    }
  }

  checkEmpty(e) {
    if (this.showList != false) {
      this.returnForm.controls['model'].reset();
    } else {
      this.showList = false;
    }
  }

  getSelectedItem(item) {
    this.showList = false;
    this.returnForm.controls['model'].setValue(item);
    this. getInventory(item)
  }

  async getInventory(item){
    let loading = await this.loadingCtrl.create({
      spinner: "bubbles"
    });
    let inventory = this.opalService.baseUrl + this.opalService.viewInventory
    console.log(inventory);
    let data = {
      ItemName: item
    }
    loading.present();
    this.opalService.ajaxCallService(inventory, "post", data).then(resp =>{
     this.inventory = resp
     if(this.inventory.status == "Success"){
       this.showDetail = true
       this.itemDetails = this.inventory.item
       this.itemName = this.itemDetails.itemName
       this.quantity = this.itemDetails.quantityAvailable
       this.quantityonOrder = this.itemDetails.quantityOnOrder
       this.binLocation = this.itemDetails.binLocation
       loading.dismiss();
     }else{
      this.opalService.presentToast(this.inventory.message, "danger")
      loading.dismiss();
     }
    }).catch((err)=>{
      loading.dismiss();
      this.opalService.presentToast("An error has occurred. Please try after some time.", "danger");
    })
  }

  backToHome() {
    this.routeTo.navigate(['/home']);
  }

  formReset() {
    this.returnForm.reset();
    this.showDetail = false
  }

}
