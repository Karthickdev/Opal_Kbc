import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { timeout } from 'q';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-receive-item',
  templateUrl: './receive-item.page.html',
  styleUrls: ['./receive-item.page.scss'],
})
export class ReceiveItemPage implements OnInit {

  @ViewChild("batch") batchInput;
  @ViewChild("serial") serialInput;

  public receiveForm: FormGroup;
  searchList: any[];
  showList: boolean;
  autoSave: boolean = false;
  isSelected: boolean;
  modelList: any = [];
  errSerial: boolean;
  keyboardOpen: boolean = false;
  checked: boolean;
  eventLog: String = "";
  serialNo: any;
  constructor(
    private formBuilder: FormBuilder,
    private routeTo: Router,
    private opalService: ApiService,
    public keyboard: Keyboard,
    public nativeAudio: NativeAudio
  ) {
    this.receiveForm = this.formBuilder.group({
      batch: [''],
      container: [''],
      model: ['', Validators.required],
      serial: ['', Validators.required],
    }, { updateOn: 'blur' });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.batchInput.setFocus();
    }, 400);
    this.nativeAudio.preloadSimple('errorBeep', 'assets/audio/error.mp3');
    this.nativeAudio.preloadSimple('successBeep', 'assets/audio/scan.mp3');
  }

  //DO NOT delete as we may have to reanable these later. 
  validation_messages: any = {
    // 'batch': [
    //     { type: 'required', message: 'Batch is required.' },
    //     // { type: 'minlength', message: 'Username must be at least 5 characters long.' },
    //     // { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
    //     { type: 'pattern', message: 'Only numbers and characters allowed' },
    //     // { type: 'validUsername', message: 'Your username has already been taken.' }
    //   ],

    // // 'container': [
    // //   { type: 'required', message: 'Container is required.' },
    // //   { type: 'pattern', message: 'Only numbers and characters allowed' },
    // // ],
    // 'model': [
    //   { type: 'required', message: 'Model is required.' },
    //   { type: 'pattern', message: 'Only numbers and characters allowed' },
    // ],
    // 'serial': [
    //   { type: 'required', message: 'Serial is required.' },
    //   { type: 'pattern', message: 'Only numbers and characters allowed' },
    // ]

  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.opalService.getAllModelList();
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

  //Method to check if serial number is exist
  scanSerial(value) {
    var serialScan = this.opalService.baseUrl + this.opalService.receiveSerialScan;
    var dataParam = {
      'serialNumber': value,
    }

    this.opalService.present();
    this.opalService.ajaxCallService(serialScan, "post", dataParam).then(result => {
      if (result['verified'] == true) {
        this.opalService.presentToast(result['message'], "danger");
        // this.eventLog = 'Serial # ' + value + ' (' + result['modelNumber'] + ') : Already exists \u2716' + '\n' + this.eventLog;
        this.eventLog = 'Serial # ' + value + ' ' + result['message'] + '\n' + this.eventLog;
        this.errSerial = true;
        this.receiveForm.controls['serial'].reset();
        this.nativeAudio.play('errorBeep');
        setTimeout(() => {
          this.serialInput.setFocus();
        }, 300);
      } else {
        this.serialNo = value
        this.autoSaveSerial(value);
      }
      this.opalService.dismiss();
    })
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

  //Method to set selected value in model search
  getSelectedItem(item) {
    this.showList = false;
    // this.isSelected = true;
    this.receiveForm.controls['model'].setValue(item);
  }

  //Method to save receive item details
  receiveSubmit() {
    var saveReceive = this.opalService.baseUrl + this.opalService.saveReceive;
    let id = JSON.parse(localStorage.getItem("Id"));
    let model = this.receiveForm.controls['model'].value;
    // if(this.autoSave == false){
    //   this.serialNo = this.receiveForm.controls['serial'].value;
    // }
    
    var dataParam = {
      'batchNumber': this.receiveForm.value.batch.toUpperCase(),
      'containerNumber': this.receiveForm.value.container.toUpperCase(),
      'modelNumber': this.receiveForm.value.model,
      'serialNumber': this.serialNo.toUpperCase(),
      'createdBy': id['userId']
    }
    this.opalService.present();
    this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(result => {
      if (result['message'] == 'Success') {
        this.opalService.presentToast('Item added to inventory', 'success');
        this.eventLog = 'Serial #' + this.serialNo + ' (' + model + ') added to inventory. \u2714' + '\n' + this.eventLog;
        this.nativeAudio.play('successBeep');
        this.receiveForm.controls['serial'].reset();
        setTimeout(() => {
          this.serialInput.setFocus();
        }, 700);
        this.opalService.dismiss();
      } else if (result['message'] == 'Fail') {
        this.opalService.presentToast('Error occured while saving item details. Please try again.', 'danger');
        this.eventLog = 'Error occured while saving item details. Please try again.\u2716' + '\n' + this.eventLog;
        this.nativeAudio.play('errorBeep');
        this.opalService.dismiss();
      } else {
        this.opalService.presentToast(result['message'], 'danger');
        this.eventLog = result['message'] + '\n' + this.eventLog;
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

  //check if model is empty
  checkEmpty(e) {
    if (this.showList != false) {
      this.receiveForm.controls['model'].setValue("");
    } else {
      this.showList = false;
    }
  }

  //Auto save method
  autoSaveSerial(value) {
    if (this.autoSave == true) {
      let batch = this.receiveForm.value.batch,
        model = this.receiveForm.value.model,
        serial = value;
      if (batch != "" && model != "" && serial != "") {
        setTimeout(()=>{
          this.receiveSubmit();
        }, 300)
      }
    }
  }

  //Method to go back to home page
  backToHome() {
    let batch = this.receiveForm.value.batch,
      container = this.receiveForm.value.container,
      model = this.receiveForm.value.model,
      serial = this.receiveForm.value.serial;

    if ((batch == "" || batch == null) && (container == "" || container == null) &&
      (model == "" || model == null) && (serial == "" || serial == null)) {
      this.routeTo.navigate(['/home']);
    } else {
      this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }

  //Method to get 9 digit serial number 
  getNine(evt) {
    let val = evt.target.value.toUpperCase();
    if (val.length == 9 && /^[0-9]+$/.test(val)) {
      this.scanSerial(val);
    } else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
      this.scanSerial(val);
    }
    this.errSerial = false;
  }

  // getNine(evt) {
  //   let val = evt.target.value.toUpperCase();
  //   if (val.length == 9) {
  //     this.scanSerial(val);
  //   } else if (val.length == 12) {
  //     this.scanSerial(val);
  //   }
  //   this.errSerial = false;
  // }

  // getNine(evt) {
  //   let val = evt.target.value;
  //   if (val.length == 9) {
  //     if (/^[0-9]+$/.test(val)) {
  //       if (val > 100000001 && val < 100021688) {
  //         this.scanSerial(val);
  //       } else {
  //         this.eventLog = 'Serial # ' + val + ' : should be from 100000001 to 100021688 \u2716' + '\n' + this.eventLog;
  //       }
  //     }
  //   } else if (val.length > 9 && !val.startsWith('K') && !val.endsWith('BC')) {
  //     if (/^[0-9]+$/.test(val)) {
  //       this.receiveForm.controls['serial'].setValue(val.slice(0, 9));
  //       this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
  //     } else {
  //       this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
  //     }
  //     return false;
  //   } else if (val.startsWith('K') && val.endsWith('BC') && val.length == 12) {
  //     if ((val.slice(1, val.length - 2) > 100000001)) {
  //       console.log(val);
  //       this.scanSerial(val);
  //     } else {
  //       console.log(val);
  //       this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
  //       return false;
  //     }
  //   } else {
  //     if (val.startsWith('K')) {
  //       if ((val.slice(1, val.length)).length > 9) {
  //         if (!(val.charAt(val.length - 1)).startsWith('B')) {
  //           console.log(val);
  //           this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
  //           return false;
  //         }
  //       }
  //     } else if (val.length > 9) {
  //       this.receiveForm.controls['serial'].setValue(val.slice(0, 9));
  //       this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
  //       return false;
  //     }
  //   }

    
  // }

  checkEntry(evt) {
    //this.errSerial = false;
  }

  //Method to reset the form
  formReset() {
    this.receiveForm.reset();
    this.errSerial = false;
    this.batchInput.setFocus();
  }

}
