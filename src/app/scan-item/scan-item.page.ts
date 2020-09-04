import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-scan-item',
  templateUrl: './scan-item.page.html',
  styleUrls: ['./scan-item.page.scss']
})
export class ScanItemPage implements OnInit {
  public scanForm: FormGroup;
  @ViewChild('order') order;
  @ViewChild('serial') serial;
  @ViewChildren('serialInputs') elements;

  MySelect1: any = [];
  moreIndex1: any = 1;
  itemList: any;
  modelCount: any = [];
  qty: number = 0;
  orderId: any;
  orderRes: {};
  tempSerial: any[];
  tempModel: any[];
  autoSave: boolean = false;
  showList: boolean;
  errSerial1: boolean;
  errSerial2: boolean;
  errOrder: boolean;
  keyboardOpen: boolean = false;
  eventLog: String = "";
  checked: boolean;
  enterEvt: boolean = false;
  searched: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService: ApiService,
    public keyboard: Keyboard
  ) {
    this.scanForm = this.formBuilder.group({
      order: ['', Validators.compose([Validators.required])],
      customerName: [""],
      model_0: [""],
      serial_0: [""],
      // subModel_0: [""]
    }, { updateOn: 'blur' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.order.setFocus();
    }, 400);
  }

  // handleKeyboardEvent(event: KeyboardEvent, pEvent) {
  //   if(event.key.toLowerCase() === "enter"){
  //     console.log("enter Key");
  //     // setTimeout(() => {
  //       this.orderSearch(pEvent.target.value);
  //     // }, 250);
  //   }
  // }

  validation_messages: any = {
    'order': [
      { type: 'required', message: 'Order/Tracking/UCC # is required.' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],
    'serial[0]': [
      { type: 'required', message: 'Serial # is required.' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ]

  }

  ngOnInit() {
    this.tempSerial = [];
    this.tempModel = [];
  }

  //Method to scan order
  scanOrder() {
    console.log('In scan order');
    let value = this.scanForm.controls['order'].value;
    this.orderSearch(value);
  }

  orderSearch(evt) {
    var orderScan = this.opalService.baseUrl + this.opalService.orderScan;
    let pValue = evt;
    if (pValue != "" && pValue != null) {
      var dataParam = {
        'soNumber': pValue.toUpperCase()
      }
      this.opalService.present();
      this.opalService.ajaxCallService(orderScan, "post", dataParam).then(result => {
        if (result['itemList']['length'] != 0) {
          this.enterEvt = false;
          this.scanForm.controls['customerName'].setValue(result['customerName'] + " (PO# " + result['orderNumber'] + ')');
          this.itemList = result['itemList'];
          this.orderId = result['orderId'];
          this.orderRes = result;
          for (var i in this.itemList) {
            if (Number(i) < this.itemList['length'] - 1) {
              this.modelCount.push(Number(i) + 1);
              this.scanForm.addControl('model' + '_' + (Number(i) + 1), new FormControl());
              this.moreIndex1 = Number(i) + 1;
            }
            if (Number(i) < this.itemList['length']) {
              this.scanForm.controls['model_' + i].setValue(this.itemList[i]['itemName'] + '(' + this.itemList[i]['qty'] + ')');
            }
            this.qty = this.qty + Number(this.itemList[i]['qty']);
          }
          setTimeout(() => {
            this.serial.setFocus();
          }, 500);
          // this.eventLog = 'DEBUG >>> Order/Tracking/UCC # ' + pValue + ' successfully scanned' + '\n' + this.eventLog;
          this.scanForm.controls['order'].disable();
          this.scanForm.controls['serial_0'].enable();
          this.searched = true;

        } else if (result['message'] == 'Order has already been scanned.') {
          this.eventLog = 'Order/Tracking/UCC # ' + pValue + result['message'] + '\u2716' + '\n' + this.eventLog;
          this.opalService.presentToast('Order/Tracking/UCC # ' + pValue + result['message'], "danger");
          this.errSerial2 = false;
          this.errSerial1 = false;
        } else {
          this.eventLog = 'Order/Tracking/UCC # ' + pValue + ' : Invalid/Not found. \u2716' + '\n' + this.eventLog;
          this.opalService.presentToast("Invalid Order/Tracking/UCC #", "danger");
          this.errOrder = true;
          this.errSerial2 = false;
          this.errSerial1 = false;
        }
        for (var y = 0; y < this.qty - 1; y++) {
          this.MySelect1.push(Number(y) + 1);
          this.scanForm.addControl('serial' + '_' + (Number(y) + 1), new FormControl('', Validators.required));
          // this.scanForm.addControl('subModel' + '_' + (Number(y)+1), new FormControl('', Validators.required));
          this.moreIndex1 = Number(y) + 2;
        }
        this.opalService.dismiss();
      })
    }
  }

  //Method for add and remove serial number field
  iconClick(val1) {
    if (val1 == 1) {
      this.MySelect1.push(this.moreIndex1);
      this.scanForm.addControl('serial' + '_' + this.moreIndex1, new FormControl('', Validators.required));
      //  this.scanForm.addControl('subModel' + '_' + this.moreIndex1, new FormControl('', Validators.required));
      this.moreIndex1++;
    }
    else {
      this.MySelect1.pop(this.moreIndex1);
      this.moreIndex1--;
      this.scanForm.removeControl('serial' + '_' + this.moreIndex1);
      // this.scanForm.removeControl('subModel' + '_' + this.moreIndex1);
    }
  }

  //Method to verify Serial Number
  serialVerify(value, idx) {
    // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification started' + '\n' + this.eventLog;
    this.opalService.present();
    var verifySerial = this.opalService.baseUrl + this.opalService.verifySerial;

    let dataParam = {
      'serialNumber': value,
      'orderId': this.orderId
    }

    // this.tempSerial = [];
    // for(var i=0;i<this.qty;i++){
    //   this.tempSerial.push(this.scanForm.controls['serial_' + i].value);
    // }

    for (var i = 0; i < this.tempSerial.length; i++) {
      if (this.tempSerial[i] == value) {
        this.opalService.dismiss();
        this.eventLog = 'Serial # ' + value + ' (' + this.tempModel[i] + ') : Already added/scanned' + '\n' + this.eventLog;
        this.opalService.presentToast("Serial number already added/scanned", "danger");
        this.errSerial1 = true;
        this.scanForm.controls['serial_' + idx].reset();
        // this.scanForm.controls['subModel_' + idx].reset();
        if (idx == 0) {
          setTimeout(() => {
            this.serial.setFocus();
          }, 500);
        } else {
          setTimeout(() => {
            this.elements.toArray()[Number(idx) - 1].setFocus();
          }, 500);
        }
        return false;
      }
    }
    this.opalService.ajaxCallService(verifySerial, "post", dataParam).then(result => {
      this.opalService.dismiss();
      // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification API response received' + '\n' + this.eventLog;
      if (result['isExist'] == false) {
        this.opalService.presentToast(result['message'], 'danger');
        this.errSerial2 = true;
        this.errSerial1 = false;
        this.scanForm.controls['serial_' + idx].reset();
        // this.scanForm.controls['subModel_' + idx].reset();
        if (idx < this.qty) {
          if (idx == 0) {
            setTimeout(() => {
              this.serial.setFocus();
            }, 500);
          } else {
            setTimeout(() => {
              this.elements.toArray()[Number(idx) - 1].setFocus();
            }, 500);
          }
        }
      } else {
        // this.tempSerial.push(this.scanForm.controls['serial_' + idx].value);
        // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification successful. Valid to proceed' + '\n' + this.eventLog;
        this.scanForm.controls['serial_' + idx].disable();
        this.tempSerial.push(value);
        this.tempModel.push(result['modelNumber']);
        // this.scanForm.controls['serial_' + idx].setValue(value + '(' + result['modelNumber'] + ')');
        // this.scanForm.controls['subModel_' + idx].setValue(result['modelNumber']);
        // this.eventLog = 'DEBUG >>> Autosave method is being called' + '\n' + this.eventLog;
        this.autoSaveSerial();
        if (idx < this.qty - 1) {
          setTimeout(() => {
            this.elements.toArray()[idx].setFocus();
          }, 500);
        }
      }
      // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification API response completed' + '\n' + this.eventLog;
    })
  }

  //Method to save form data via save button 
  scanSubmit() {
    this.opalService.present();
    console.log(this.tempSerial);
    this.orderRes['serialNumbers'] = this.tempSerial;
    var saveOrder = this.opalService.baseUrl + this.opalService.saveOrder;
    console.log(this.orderRes);
    this.opalService.ajaxCallService(saveOrder, "post", this.orderRes).then(result => {
      if (result == "Success") {
        this.opalService.presentToast("Order scan completed", "success");
        this.eventLog = 'Order/Tracking/UCC # ' + this.orderId + ' scan and save completed. \u2714' + '\n' + this.eventLog;
        this.formReset();
        setTimeout(() => {
          this.order.setFocus();
        }, 400);
      } else if (result = "Order Item not mapped with scan item or qty") {
        this.opalService.presentToast("Serial #(s) entered does not match with order item’s quantities. Please check and scan matching serial #(s)", "danger");
        this.eventLog = 'Serial #(s) entered does not match with order item’s quantities. Please check and scan matching serial #(s) \u2716' + '\n' + this.eventLog;
      } else {
        this.opalService.presentToast("Error in saving the scanned order details. Please try again.", "danger");
        this.eventLog = 'Error in saving the scanned order details. Please try again.\u2716' + '\n' + this.eventLog;
      }
      this.opalService.dismiss();
    })
  }

  //Method to check if autoSave is on/off
  isChecked($event, check) {

    if (check == true) {
      this.autoSave = true;
    } else {
      this.autoSave = false;
    }
  }

  //Method to go back to home page
  backToHome() {
    let order = this.scanForm.value.order,
      container = this.scanForm.value.container,
      model = this.scanForm.value.model,
      serial = this.scanForm.value.serial,
      custName = this.scanForm.value.customerName;

    if ((order == "" || order == null) && (container == "" || container == null) &&
      (model == "" || model == null) && (serial == "" || serial == null) && (custName == "" || custName == null)) {
      this.routeTo.navigate(['/home']);
    } else {
      this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }

  //Method to save form data via auto save
  autoSaveSerial() {
    let saveOrder = this.opalService.baseUrl + this.opalService.saveOrder;
    // this.eventLog = 'DEBUG >>> Autosave method is being called' + '\n' + this.eventLog;
    if (this.autoSave == true) {
      // this.eventLog = 'DEBUG >>> Autosave flag is set. Verified.' + '\n' + this.eventLog;
      // for(var i=0;i<this.qty;i++){          
      //   if(this.scanForm.controls['serial_' + i] != undefined && 
      //     this.scanForm.controls['serial_' + i].value != null &&
      //     (this.scanForm.controls['serial_' + i].value.toString()).length == 9){
      //       this.eventLog = 'DEBUG >>> Collect all serial numbers - ' + this.scanForm.controls['serial_' + i].value + '\n' + this.eventLog;
      //       this.orderRes['serialNumbers'] = this.tempSerial;
      //     }else{
      //     this.eventLog = 'DEBUG >>> Serial No data not fully set, returning. - ' + this.scanForm.controls['serial_' + i].value + '\n' + this.eventLog;
      //     return false;
      //   }
      // }
      if (this.tempSerial.length == this.qty) {
        this.orderRes['serialNumbers'] = this.tempSerial;
      } else {
        return false;
      }
      console.log(this.orderRes);
      this.opalService.present();
      this.opalService.ajaxCallService(saveOrder, "post", this.orderRes).then(result => {
        // this.eventLog = 'DEBUG >>> Save Order scan API getting called.' + '\n' + this.eventLog;
        if (result == 'Success') {
          this.opalService.presentToast('Order scan completed', 'success');
          this.eventLog = 'Order/Tracking/UCC # ' + this.orderId + ' scan and save completed. \u2714' + '\n' + this.eventLog;
          // this.eventLog = 'DEBUG >>> Save Order successfully completed via Auto save.' + '\n' + this.eventLog;
          this.formReset();
          setTimeout(() => {
            this.order.setFocus();
          }, 400);
        } else if (result = "Order Item not mapped with scan item or qty") {
          this.opalService.presentToast("Serial#(s) entered does not match with order item’s quantities. Please check and scan matching serial#(s)", "danger");
          this.eventLog = 'Serial#(s) entered does not match with order item’s quantities. Please check and scan matching serial#(s) \u2716' + '\n' + this.eventLog;
        } else {
          this.opalService.presentToast("Error in saving the scanned order details. Please try again.", "danger");
          this.eventLog = 'Error in saving the scanned order details. Please try again.\u2716' + '\n' + this.eventLog;
        }
        this.opalService.dismiss();
        // this.eventLog = 'DEBUG >>> Save Order scan API response completed.' + '\n' + this.eventLog;
      })
    } else {
      // this.eventLog = 'DEBUG >>> Autosave flag is turned off' + '\n' + this.eventLog;
    }
  }


  //method to check nine
  checkNine(evt) {
    let val = evt.target.value;
    if (val.length < 9 && val.length != 0) {
      this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
      this.eventLog = 'Serial # ' + val + ' should have at least 9 digits \u2716' + '\n' + this.eventLog;
    }
  }

  //Method to get 9 digit serial number 
  getNine(evt, item) {
    let val = evt.target.value.toUpperCase();
    // if (val.length == 9) {
    //   if (/^[0-9]+$/.test(val)) {
    //     if (val > 100000001 && val < 100021688) {
    //       this.serialVerify(val, item);
    //     } else {
    //       this.eventLog = 'Serial # ' + val + ' : should be from 100000001 to 100021688 \u2716' + '\n' + this.eventLog;
    //     }
    //   }
    // } else if (val.length > 9 && !val.startsWith('K') && !val.endsWith('BC')) {
    //   if (/^[0-9]+$/.test(val)) {
    //     this.scanForm.controls['serial'].setValue(val.slice(0, 9));
    //     this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //   } else {
    //     this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //   }
    //   return false;
    // } else if (val.startsWith('K') && val.endsWith('BC') && val.length == 12) {
    //   if ((val.slice(1, val.length - 2) > 100000001)) {
    //     this.serialVerify(val, item);
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
    //     this.scanForm.controls['serial'].setValue(val.slice(0, 9));
    //     this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //     return false;
    //   }
    // }

    if (val.length == 9 && /^[0-9]+$/.test(val)) {
      this.serialVerify(val, item);
    } else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
      this.serialVerify(val, item);
    }
  }

  //Method to reset form
  formReset() {
    this.scanForm.controls['order'].enable();
    for (var i = 0; i < this.qty; i++) {
      if (i > 0) {
        this.scanForm.removeControl('serial_' + i);
        // this.scanForm.removeControl('subModel_' + i);
      }
    }
    this.scanForm.controls['serial_0'].disable();
    this.scanForm.reset();
    this.modelCount = [];
    this.MySelect1 = [];
    this.qty = 0;
    this.tempSerial = [];
    this.errOrder = false;
    this.errSerial1 = false;
    this.errSerial2 = false;
    this.enterEvt = false;
    setTimeout(() => {
      this.order.setFocus();
    }, 300)
    this.searched = false;
  }

  //Method enable serial
  enableSerialNumbers(event) {
    this.errOrder = false;
    this.errSerial1 = false;
    this.errSerial2 = false;
    for (var i = 0; i < this.qty; i++) {
      this.scanForm.controls['serial_' + i].enable();
    }
  }

  //oreder search via enter key
  handleScanner(evt) {
    setTimeout(() => {
      let value = evt.target.value;
      this.enterEvt = true;
      this.orderSearch(value);
    }, 800);
  }

  //Method to clear the errors
  clearErrors() {
    this.errOrder = false;
    this.errSerial1 = false;
    this.errSerial2 = false;
  }

  //Method to clear selected fields serial number
  clearSerialField(param) {
    if (param == 'all') {
      for (var i = 0; i < this.qty; i++) {
        this.scanForm.controls['serial_' + i].enable();
        this.scanForm.controls['serial_' + i].reset();
        // this.scanForm.controls['subModel_' + i].reset();
      }
      this.tempSerial = [];
      setTimeout(() => {
        this.serial.setFocus();
      }, 300);
    } else {
      if (param == 0) {
        setTimeout(() => {
          this.serial.setFocus();
        }, 300);
      } else {
        setTimeout(() => {
          this.elements.toArray()[param - 1].setFocus();
        }, 500);
      }
      for (var i = 0; i < this.tempSerial.length; i++) {
        if (this.tempSerial[param] == this.scanForm.controls['serial_' + i].value) {
          this.tempSerial.splice(i, 1);
        }
      }

      this.scanForm.controls['serial_' + param].enable();
      this.scanForm.controls['serial_' + param].reset();
      // this.scanForm.controls['subModel_' + param].reset();
    }
  }

}
