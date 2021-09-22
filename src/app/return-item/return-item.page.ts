import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-return-item',
  templateUrl: './return-item.page.html',
  styleUrls: ['./return-item.page.scss'],
})
export class ReturnItemPage implements OnInit {
  @ViewChild('serial') serial;

  eventLog: String = "";
  public returnForm: FormGroup;
  conditionList: {};
  reasonList: {};
  modelNumber: any;
  serialNumber: any;
  itemId: any;
  orderId: any;
  po: any;
  searchList: any = [];
  showList: boolean = false;
  modelList: any = [];
  option1: any;
  option2: any;
  returned: boolean = false;
  keyboardOpen: boolean = false;
  condRequired: boolean = false;
  reasonRequired: boolean = false;
  scanned: boolean = false;
  serialNo: any;
  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService: ApiService,
    public alert: AlertController,
    public keyboard: Keyboard
  ) {
    this.returnForm = this.formBuilder.group({
      serial: ['', Validators.required],
      model: ['', Validators.required],
      condition: [''],
      po: [""],
      reason: [""],
      notes: [""],
    }, { updateOn: 'blur' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.serial.setFocus();
    }, 500);
  }
  validation_messages: any = {
    'serial': [
      { type: 'required', message: 'Serial number is a required field.' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],

    'model': [
      { type: 'required', message: 'Model is a required field.' },
      // { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],
    'po': [
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],
    'condition': [
      { type: 'required', message: 'Condition is a required field.' },
    ],
    'reason': [
      { type: 'required', message: 'Reason is a required field.' },
    ],
    'notes': [
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ]

  }

  //Alert controller
  async presentAlertConfirm(header, msg) {
    const alert = await this.alert.create({
      header: header,
      message: msg,
      keyboardClose: true,
      buttons: [
        {
          text: 'No',
          role: 'No',
          cssClass: 'secondary',
          handler: (blah) => {
            this.formReset();
            setTimeout(() => {
              this.serial.setFocus()
            }, 300);
          }
        }, {
          text: 'Yes',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.conditionDropDown();
    this.resonDropDown();
  }

  ionViewDidEnter() {
    this.opalService.getAllModelList();
  }

  //Method to get condition dropdown values
  conditionDropDown() {
    var loginUrl = this.opalService.baseUrl + this.opalService.conditionDrop;
    this.opalService.ajaxCallService(loginUrl, "post", "").then(result => {
      this.conditionList = result;
    })
  }

  //Method to get reason dropdown values
  resonDropDown() {
    var loginUrl = this.opalService.baseUrl + this.opalService.reasonDrop;
    this.opalService.ajaxCallService(loginUrl, "post", "").then(result => {
      this.reasonList = result;
    })
  }

  //Method to scan serial number
  scanSerial(value) {
    console.log(value);
    var serialScan = this.opalService.baseUrl + this.opalService.serialScan;
    var dataParam = {
      'serialNumber': value
    }
    this.scanned = true;
    this.opalService.present();
    this.opalService.ajaxCallService(serialScan, "post", dataParam).then(result => {
      if (result['availableForInventryEnum'] != undefined && result['availableForInventryEnum'] == '10') {
        this.opalService.presentToast("Serial # " + result['serialNumber'] + " already available in Inventory. Cannot return already available item.", 'danger');
        this.eventLog = 'Serial # ' + value + '(' + result['modelNumber'] + ') already available in Inventory. Cannot return already available item. \u2716 \n' + this.eventLog;
      } else if (result['message'] == "Serial number not associated with any order") {
        this.returnForm.controls['serial'].setValue(result['serialNumber']);
        this.returnForm.controls['model'].setValue(result['modelNumber']);
        this.returnForm.controls['po'].setValue(result['po']);
        this.returnForm.controls['notes'].setValue(result['notes']);
        // this.option1 = result['itemConditionEnum'];
        // this.option2 = result['itemReasonEnum'];
        this.eventLog = 'Serial number ' + result['serialNumber'] + ' (' + result['modelNumber'] + ') not associated with any order \u2716 \n' + this.eventLog;;
      } else if (result['message'] == "Available") {
        this.returnForm.controls['serial'].setValue(result['serialNumber']);
        this.returnForm.controls['model'].setValue(result['modelNumber']);
        this.returnForm.controls['po'].setValue(result['po']);
        // this.option1 = result['itemConditionEnum'];
        // this.option2 = result['itemReasonEnum'];
      } else if (result['message'] == "Item already returned") {
        this.opalService.presentToast("Item already returned (Model No : \'" + result['modelNumber'] + "\' & Order No : \'" + result['modelNumber'] + "\'", 'danger');
        this.eventLog = 'Serial # ' + value + ' : ' + result['message'] + ' \u2716 \n' + this.eventLog;
        this.returned = true;
      } else {
        this.scanned = true;
        this.presentAlertConfirm("Serial # " + value + " Not found", "Do you want to save this as new serial number?");
        this.eventLog = 'Serial # ' + value + ' : Not found \u2716' + '\n' + this.eventLog;
      }
      this.opalService.dismiss();
    })
  }

  //method to check nine digits serial number
  checkNine(evt) {
    let val = evt.target.value;
    if (val.length < 9 && val.length != 0) {
      this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
      this.eventLog = 'Serial # ' + val + ' Should have at least 9 digits. \u2716' + ' \n' + this.eventLog;
    }
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

  //method to append selected model number
  getSelectedItem(item) {
    this.showList = false;
    this.returnForm.controls['model'].setValue(item);
  }

  //Method to save form 
  receiveSubmit() {
    this.condRequired = false;
    this.reasonRequired = false;
    var saveReturnItem = this.opalService.baseUrl + this.opalService.saveReturnItem;
    let id = JSON.parse(localStorage.getItem("Id"));
    if (this.returnForm.value.condition == undefined || this.returnForm.value.condition == "") {
      this.eventLog = 'Condition is a requied field. \u2716 \n' + this.eventLog;
      this.condRequired = true;
      return false;
    }
    if (this.returnForm.value.reason == undefined || this.returnForm.value.reason == "") {
      this.eventLog = 'Reason is a requied field. \u2716 \n' + this.eventLog;
      this.reasonRequired = true;
      return false;
    }
    var dataParam = {
      //'serialNumber': this.returnForm.controls['serial'].value,
      'serialNumber': this.serialNo,
      'modelNumber': this.returnForm.value.model,
      'po': this.returnForm.value.po,
      'itemConditionEnum': this.returnForm.value.condition,
      'itemReasonEnum': this.returnForm.value.reason,
      'notes': this.returnForm.value.notes,
      'createdBy': id.userId
    }
    if (this.returned == false) {
      this.opalService.present();
      this.opalService.ajaxCallService(saveReturnItem, "post", dataParam).then(result => {
        if (result == "Success") {
          this.opalService.presentToast('Item added back to inventory', 'success');
          this.eventLog = "Serial # " + this.returnForm.value.serial + " added back to the inventory. \u2714" + '\n' + this.eventLog;
          this.returnForm.reset();
          this.condRequired = false;
          this.reasonRequired = false;
          this.returnForm.controls['serial'].reset();
          setTimeout(() => {
            this.serial.setFocus();
          }, 500);
        } else {
          this.opalService.presentToast('Failed to save data. Please check connectivity and try again.', 'danger');
          this.eventLog = "Failed to save data. Please check connectivity and try again. \u2716" + '\n' + this.eventLog;
        }
        this.opalService.dismiss();
      })
    } else {
      this.opalService.presentToast('Item already returned.', 'danger');
      this.eventLog = "Item is already returned.\u2716" + '\n' + this.eventLog;
    }
  }

  //method to check model is empty
  checkEmpty(e) {
    if (this.showList != false) {
      this.returnForm.controls['model'].reset();
    } else {
      this.showList = false;
    }
  }

  //Method to get 9 digit serial number 
  getNine(evt) {
    let val = evt.target.value.toUpperCase();
    // if (val.length == 9) {
    //   if (/^[0-9]+$/.test(val)) {
    //     if (val > 100000001 && val < 100021688) {
    //       this.scanSerial(val);
    //     } else {
    //       this.eventLog = 'Serial # ' + val + ' : should be from 100000001 to 100021688 \u2716' + '\n' + this.eventLog;
    //     }
    //   }
    // } else if (val.length > 9 && !val.startsWith('K') && !val.endsWith('BC')) {
    //   if (/^[0-9]+$/.test(val)) {
    //     this.returnForm.controls['serial'].setValue(val.slice(0, 9));
    //     this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //   } else {
    //     this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //   }
    //   return false;
    // } else if (val.startsWith('K') && val.endsWith('BC') && val.length == 12) {
    //   if ((val.slice(1, val.length - 2) > 100000001)) {
    //     this.scanSerial(val);
    //   } else {
    //     this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //     return false;
    //   }
    // } else {
    //   if (val.startsWith('K')) {
    //     if ((val.slice(1, val.length)).length > 9) {
    //       if (!(val.charAt(val.length - 1)).startsWith('B')) {
    //         this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //         return false;
    //       }
    //     }
    //   } else if (val.length > 9) {
    //     this.returnForm.controls['serial'].setValue(val.slice(0, 9));
    //     this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //     return false;
    //   }
    // }

    if (val.length == 9 && /^[0-9]+$/.test(val)) {
      this.scanSerial(val);
      this.serialNo = val
    } else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
      this.scanSerial(val);
      this.serialNo = val
    }
  }

  //Method to go back to home page
  backToHome() {
    let serial = this.returnForm.value.serial,
      model = this.returnForm.value.model,
      po = this.returnForm.value.po,
      condition = this.returnForm.value.condition,
      reason = this.returnForm.value.reason,
      notes = this.returnForm.value.notes;

    if ((po == "" || po == null) && (notes == "" || notes == null) &&
      (model == "" || model == null) && (serial == "" || serial == null) &&
      (condition == "" || condition == null) && (reason == "" || reason == null)) {
      this.routeTo.navigate(['/home']);
    } else {
      this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }

  //Method to enable scanner
  enableScanner() {
    this.scanned = false;
    // console.log("Focused");
  }

  //Method to reset form
  formReset() {
    this.returnForm.reset();
    this.serial.setFocus();
    this.condRequired = false;
    this.reasonRequired = false;
    this.returned = false;
    this.scanned = false;
  }

  //Method to hide error messages
  hideErrorMsg() {
    console.log("changed");
    this.condRequired = false;
    this.reasonRequired = false;
  }
}
