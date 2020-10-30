import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-add-sale-item',
  templateUrl: './add-sale-item.page.html',
  styleUrls: ['./add-sale-item.page.scss'],
})
export class AddSaleItemPage implements OnInit {
  @ViewChild("serial") serialInput;

  public addSaleForm: FormGroup;
  errSerial: boolean;
  eventLog: string = '';
  autoSave: boolean;
  checked: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService: ApiService,
    public keyboard: Keyboard,
    public nativeAudio: NativeAudio
  ) {
    this.addSaleForm = this.formBuilder.group({
      model: ['', Validators.required],
      serial: ['', Validators.required],
      customerPO: ['']
    }, { updateOn: 'blur' });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.serialInput.setFocus();
    }, 400);
  }

  //Method to go back to home page
  backToHome() {
    let customerPO = this.addSaleForm.value.customerPO,
      model = this.addSaleForm.value.model,
      serial = this.addSaleForm.value.serial;

    if ((customerPO == "" || customerPO == null) &&
      (model == "" || model == null) && (serial == "" || serial == null)) {
      this.routeTo.navigate(['/home']);
    } else {
      this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }

  //Method to reset the form
  formReset() {
    this.addSaleForm.reset();
    this.errSerial = false;
    this.serialInput.setFocus();
  }

  //method to check nine
  checkNine(evt) {
    let val = evt.target.value;
    if (val.length < 9 && val.length != 0) {
      this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
      this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
      this.nativeAudio.play('errorBeep');
    }
  }

  //Method to get 9 digit serial number 
  getNine(evt) {
    let val = evt.target.value;
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
    //     this.addSaleForm.controls['serial'].setValue(val.slice(0, 9));
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
    //     this.addSaleForm.controls['serial'].setValue(val.slice(0, 9));
    //     this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //     return false;
    //   }
    // }

    if (val.length == 9 && /^[0-9]+$/.test(val)) {
      this.scanSerial(val);
    } else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
      this.scanSerial(val);
    }
    this.errSerial = false;
  }


  //Method to check if serial number is exist
  scanSerial(value) {
    var serialScan = this.opalService.baseUrl + this.opalService.scanSerial;
    var dataParam = {
      'serialNumber': value.toUpperCase()
    }

    this.opalService.present();
    this.opalService.ajaxCallService(serialScan, "post", dataParam).then(result => {
      if (result['modelNumber'] != undefined) {
        this.addSaleForm.controls['model'].setValue(result['modelNumber']);
        this.autoSaveSerial(value);
      } else {
        this.opalService.presentToast(result['message'], "danger");
        this.eventLog = 'Serial # ' + value.toUpperCase() + ' : ' + result['message'] + '\u2716 \n' + this.eventLog;
        this.errSerial = true;
        this.addSaleForm.controls['serial'].reset();
        this.nativeAudio.play('errorBeep');
        setTimeout(() => {
          this.serialInput.setFocus();
        }, 300);
      }
      this.opalService.dismiss();
    })
  }

  //Auto save method
  autoSaveSerial(value) {
    if (this.autoSave == true) {
      let batch = this.addSaleForm.value.batch,
        model = this.addSaleForm.value.model,
        serial = value;

      if (batch != "" && model != "" && serial != "") {
        this.addSaleSubmit();
      }
    }
  }

  //Method to save receive item details
  addSaleSubmit() {
    var saveReceive = this.opalService.baseUrl + this.opalService.saleSave;
    let id = JSON.parse(localStorage.getItem("Id"));
    //let serialNo = value == undefined ? this.addSaleForm.value.serial : value;
    let serialNo = this.addSaleForm.value.serial
    let model = this.addSaleForm.controls['model'].value;
    var dataParam = {
      "serialNumber": serialNo.toUpperCase(),
      "modelNumber": this.addSaleForm.value.model,
      "po": this.addSaleForm.value.customerPO,
      "modifiedBy": id.userId
    }
    this.opalService.present();
    this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(result => {
      if (result == 'Success') {
        this.opalService.presentToast('Item removed from inventory', 'success');
        this.eventLog = 'Serial # ' + serialNo + ' (' + model + ') removed from inventory. \u2714' + '\n' + this.eventLog;
        this.nativeAudio.play('successBeep');
        this.addSaleForm.reset();
        setTimeout(() => {
          this.serialInput.setFocus();
        }, 500);
        this.opalService.dismiss();
      } else {
        this.opalService.presentToast(result, 'danger');
        this.eventLog = result + ' \u2716 \n' + this.eventLog;
        this.nativeAudio.play('errorBeep');
        this.opalService.dismiss();
      }
    })
  }

  //Method to check and uncheck
  isChecked($event, check) {
    if (check == true) {
      this.autoSave = true;
    } else {
      this.autoSave = false;
    }
  }

}
