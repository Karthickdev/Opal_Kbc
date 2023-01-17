(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-item-scan-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scan-item/scan-item.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scan-item/scan-item.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding class=\"header\">\n  <div text-uppercase text-center class=\"title\">Scan Order</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left>\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"scanSubmit()\"\n              [disabled]=\"!scanForm.valid || autoSave == true\">Save</ion-button>\n          </div> -->\n          <ion-buttons style=\"float: right\">\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"scanSubmit()\"\n              [disabled]=\"!scanForm.valid || autoSave == true\">SAVE</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right (click)=\"formReset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"scanForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"11\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Order/Tracking/UCC No.<ion-note style=\"color: red\">*\n            </ion-note>\n          </ion-label>\n          <ion-input #order type=\"text\" text-uppercase formControlName=\"order\" (ionFocus)=\"enableSerialNumbers($event)\"\n            class=\"lab-font\" (keyup.enter)=\"handleScanner($event)\" required clearInput></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['order']\">\n            <div class=\"error-message\"\n              *ngIf=\"scanForm.get('order').hasError(validation['type']) && scanForm.get('order').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n        <div class=\"error-message\" *ngIf=\"errOrder\">Invalid Order/Tracking/UCC number.</div>\n      </ion-col>\n      <ion-col size=\"1\"\n        style=\"display: flex!important; align-content: center!important; align-items: center!important;\">\n        <ion-buttons>\n          <ion-button fill=\"clear\" (click)=\"scanOrder()\" type=\"button\" [disabled]=\"searched\" item-right\n            style=\"background:white; margin-top: 100%\">\n            <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray\"> </ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Customer Name</ion-label>\n          <ion-input type=\"text\" formControlName=\"customerName\" class=\"lab-font\" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\" style=\"margin: 3% auto;\">\n      <ion-col size=\"2\">\n        <ion-label position=\"floating\" class=\"lab-font\" style=\"margin:10%\">Model<ion-note style=\"color: red\">*\n          </ion-note>\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div *ngFor=\"let item of modelCount; let i=index; \">\n          <ion-item>\n            <ion-input type=\"text\" text-uppercase formControlName=\"model_{{item}}\" class=\"lab-font\" readonly>\n            </ion-input>\n          </ion-item>\n        </div>\n        <div>\n          <ion-item>\n            <ion-input type=\"text\" text-uppercase formControlName=\"model_0\" class=\"lab-font\" readonly></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\" style=\"margin: 3% auto;\">\n      <ion-row style=\"margin: 1%\">\n        <ion-col size=\"4\">\n          <ion-label position=\"floating\" class=\"lab-font\">Serial Number<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <!-- <ion-label position=\"floating\" class=\"lab-font\" style=\"padding-left: 17px\">Model Number</ion-label> -->\n        </ion-col>\n        <ion-col size=\"2\" text-right style=\"padding-right: 6px\">\n          <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray; padding-right: 8px\"\n            (click)=\"clearSerialField('all')\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <ion-item>\n            <ion-input type=\"text\" #serial id=\"serial_0\" formControlName=\"serial_0\" (ionFocus)=\"clearErrors()\"\n              (ionBlur)=\"checkNine($event)\" clearInput text-uppercase maxLength=\"12\" (ionInput)=\"getNine($event,'0')\"\n              minLength=9 class=\"lab-font\" required disabled></ion-input>\n            <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray\" (click)=\"clearSerialField(0)\"></ion-icon>\n          </ion-item>\n        </div>\n        <div *ngFor=\"let item of MySelect1; let i=index;\">\n          <ion-item>\n            <ion-input type=\"text\" #serialInputs formControlName=\"serial_{{item}}\" (ionFocus)=\"clearErrors()\"\n              (ionBlur)=\"checkNine($event)\" clearInput text-uppercase maxLength=\"12\" (ionInput)=\"getNine($event,item)\"\n              minLength=9 class=\"lab-font\" required></ion-input>\n            <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray\" (click)=\"clearSerialField(item)\"></ion-icon>\n          </ion-item>\n        </div>\n        <!-- <div class=\"error-message\" *ngIf=\"errSerial1\">Serial number already exist</div>\n        <div class=\"error-message\" *ngIf=\"errSerial2\">Invalid serial number</div> -->\n      </ion-col>\n      <!-- <ion-col size=\"8\">\n        <ion-item>\n          <ion-input type=\"text\" formControlName=\"subModel_0\" class=\"lab-font\" readonly></ion-input>\n          <ion-icon name=\"close\" style=\"font-size: 35px; color: #888\" (click)=\"clearSerialField(0)\"></ion-icon>\n        </ion-item>\n        <div *ngFor=\"let item of MySelect1\">\n          <ion-item>\n            <ion-input type=\"text\" formControlName=\"subModel_{{item}}\" class=\"lab-font\" readonly></ion-input>\n            <ion-icon name=\"close\" style=\"font-size: 35px; color: #888\" (click)=\"clearSerialField(item)\"></ion-icon>\n          </ion-item>\n        </div>\n      </ion-col> -->\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <ion-toggle class=\"toggle-color\" ion-toggle-text = \"on;off\" color = \"primary\"></ion-toggle> -->\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/scan-item/scan-item.module.ts":
/*!***********************************************!*\
  !*** ./src/app/scan-item/scan-item.module.ts ***!
  \***********************************************/
/*! exports provided: ScanItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanItemPageModule", function() { return ScanItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scan_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan-item.page */ "./src/app/scan-item/scan-item.page.ts");







var routes = [
    {
        path: '',
        component: _scan_item_page__WEBPACK_IMPORTED_MODULE_6__["ScanItemPage"]
    }
];
var ScanItemPageModule = /** @class */ (function () {
    function ScanItemPageModule() {
    }
    ScanItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_scan_item_page__WEBPACK_IMPORTED_MODULE_6__["ScanItemPage"]]
        })
    ], ScanItemPageModule);
    return ScanItemPageModule;
}());



/***/ }),

/***/ "./src/app/scan-item/scan-item.page.scss":
/*!***********************************************!*\
  !*** ./src/app/scan-item/scan-item.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%;\n}\n\n.header {\n  background-image: url('greenbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #5d844b;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px;\n}\n\n.clear-marg {\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #8fb47c;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #d7e8cf !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 16%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.toggle {\n  padding-left: 0;\n  text-align: center;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  color: #fff;\n  background: #00000000;\n}\n\n.icon {\n  font-size: 30px;\n  color: #000;\n  border-radius: 15%;\n  background: transparent;\n}\n\n.icon-label {\n  position: absolute;\n  left: 20%;\n}\n\n.tool2 {\n  --background:#00000000;\n  --border-width: 0px !important;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #C3DBB7;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvc2Nhbi1pdGVtL3NjYW4taXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NjYW4taXRlbS9zY2FuLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtBQ0ZKOztBREtBO0VBQ0UsK0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0ksb0NBQUE7QUNGTjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDRko7O0FES0E7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUFlLGFBQUE7QUNEZjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQS9JVTtBQ2dKWjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtFQUVBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0MsY0FBQTtBQ0FEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0FDRUY7O0FEQ0E7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zY2FuLWl0ZW0vc2Nhbi1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICNDM0RCQjc7XG4kdGV4dC1jb2xvcjogIzA3MDcwNztcblxuaW9uLXJvd3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ncmVlbmJnLnBuZ1wiKSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjNWQ4NDRiO1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5iYWNrLW1hcmd7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzkwYmU5MDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmNsZWFyLW1hcmd7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI1JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5MGJlOTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5zYXZlLWNlbnRlcntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzhmYjQ3YztcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC50b2dnbGUtY29sb3J7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDdlOGNmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGFiZWwtcG9ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnJvdy1wYWRke1xuICAgIHBhZGRpbmc6IDAuNSUgMyU7XG4gIH1cblxuICAudG9nZ2xle1xuICAgIHBhZGRpbmctbGVmdDowO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgfVxuICBcbiAgLmljb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmljb24tbGFiZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwJTtcbn1cblxuLnRvb2wye1xuICAtLWJhY2tncm91bmQ6IzAwMDAwMDAwO1xuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub257XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmZ7XG4gIHBhZGRpbmctbGVmdDozM3B4O1xufVxuXG4ub257XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZlxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuICBcbi5tYXJnaW5MMTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59IiwiaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2dyZWVuYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjNWQ4NDRiO1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTBiZTkwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzkwYmU5MDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNhdmUtY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjOGZiNDdjO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZDdlOGNmICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTYlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucm93LXBhZGQge1xuICBwYWRkaW5nOiAwLjUlIDMlO1xufVxuXG4udG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmljb24tbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwJTtcbn1cblxuLnRvb2wyIHtcbiAgLS1iYWNrZ3JvdW5kOiMwMDAwMDAwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0RCQjc7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZiB7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLm9uIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scan-item/scan-item.page.ts":
/*!*********************************************!*\
  !*** ./src/app/scan-item/scan-item.page.ts ***!
  \*********************************************/
/*! exports provided: ScanItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanItemPage", function() { return ScanItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






var ScanItemPage = /** @class */ (function () {
    function ScanItemPage(formBuilder, routeTo, opalService, keyboard) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.keyboard = keyboard;
        this.MySelect1 = [];
        this.moreIndex1 = 1;
        this.modelCount = [];
        this.qty = 0;
        this.autoSave = false;
        this.keyboardOpen = false;
        this.eventLog = "";
        this.enterEvt = false;
        this.searched = false;
        // handleKeyboardEvent(event: KeyboardEvent, pEvent) {
        //   if(event.key.toLowerCase() === "enter"){
        //     console.log("enter Key");
        //     // setTimeout(() => {
        //       this.orderSearch(pEvent.target.value);
        //     // }, 250);
        //   }
        // }
        this.validation_messages = {
            'order': [
                { type: 'required', message: 'Order/Tracking/UCC # is required.' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ],
            'serial[0]': [
                { type: 'required', message: 'Serial # is required.' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ]
        };
        this.scanForm = this.formBuilder.group({
            order: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            customerName: [""],
            model_0: [""],
            serial_0: [""],
        }, { updateOn: 'blur' });
    }
    ScanItemPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.order.setFocus();
        }, 400);
    };
    ScanItemPage.prototype.ngOnInit = function () {
        this.tempSerial = [];
        this.tempModel = [];
    };
    //Method to scan order
    ScanItemPage.prototype.scanOrder = function () {
        console.log('In scan order');
        var value = this.scanForm.controls['order'].value;
        this.orderSearch(value);
    };
    ScanItemPage.prototype.orderSearch = function (evt) {
        var _this = this;
        var orderScan = this.opalService.baseUrl + this.opalService.orderScan;
        var pValue = evt;
        if (pValue != "" && pValue != null) {
            var dataParam = {
                'soNumber': pValue.toUpperCase()
            };
            this.opalService.present();
            this.opalService.ajaxCallService(orderScan, "post", dataParam).then(function (result) {
                if (result['itemList']['length'] != 0) {
                    _this.enterEvt = false;
                    _this.scanForm.controls['customerName'].setValue(result['customerName'] + " (PO# " + result['orderNumber'] + ')');
                    _this.itemList = result['itemList'];
                    _this.orderId = result['orderId'];
                    _this.orderRes = result;
                    for (var i in _this.itemList) {
                        if (Number(i) < _this.itemList['length'] - 1) {
                            _this.modelCount.push(Number(i) + 1);
                            _this.scanForm.addControl('model' + '_' + (Number(i) + 1), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                            _this.moreIndex1 = Number(i) + 1;
                        }
                        if (Number(i) < _this.itemList['length']) {
                            _this.scanForm.controls['model_' + i].setValue(_this.itemList[i]['itemName'] + '(' + _this.itemList[i]['qty'] + ')');
                        }
                        _this.qty = _this.qty + Number(_this.itemList[i]['qty']);
                    }
                    setTimeout(function () {
                        _this.serial.setFocus();
                    }, 500);
                    // this.eventLog = 'DEBUG >>> Order/Tracking/UCC # ' + pValue + ' successfully scanned' + '\n' + this.eventLog;
                    _this.scanForm.controls['order'].disable();
                    _this.scanForm.controls['serial_0'].enable();
                    _this.searched = true;
                }
                else if (result['message'] == 'Order has already been scanned.') {
                    _this.eventLog = 'Order/Tracking/UCC # ' + pValue + result['message'] + '\u2716' + '\n' + _this.eventLog;
                    _this.opalService.presentToast('Order/Tracking/UCC # ' + pValue + result['message'], "danger");
                    _this.errSerial2 = false;
                    _this.errSerial1 = false;
                }
                else {
                    _this.eventLog = result['message'] + '\n' + _this.eventLog;
                    _this.opalService.presentToast(result['message'], "danger");
                    _this.errOrder = true;
                    _this.errSerial2 = false;
                    _this.errSerial1 = false;
                }
                for (var y = 0; y < _this.qty - 1; y++) {
                    _this.MySelect1.push(Number(y) + 1);
                    _this.scanForm.addControl('serial' + '_' + (Number(y) + 1), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
                    // this.scanForm.addControl('subModel' + '_' + (Number(y)+1), new FormControl('', Validators.required));
                    _this.moreIndex1 = Number(y) + 2;
                }
                _this.opalService.dismiss();
            });
        }
    };
    //Method for add and remove serial number field
    ScanItemPage.prototype.iconClick = function (val1) {
        if (val1 == 1) {
            this.MySelect1.push(this.moreIndex1);
            this.scanForm.addControl('serial' + '_' + this.moreIndex1, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            //  this.scanForm.addControl('subModel' + '_' + this.moreIndex1, new FormControl('', Validators.required));
            this.moreIndex1++;
        }
        else {
            this.MySelect1.pop(this.moreIndex1);
            this.moreIndex1--;
            this.scanForm.removeControl('serial' + '_' + this.moreIndex1);
            // this.scanForm.removeControl('subModel' + '_' + this.moreIndex1);
        }
    };
    //Method to verify Serial Number
    ScanItemPage.prototype.serialVerify = function (value, idx) {
        var _this = this;
        // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification started' + '\n' + this.eventLog;
        this.opalService.present();
        var verifySerial = this.opalService.baseUrl + this.opalService.verifySerial;
        var dataParam = {
            'serialNumber': value,
            'orderId': this.orderId
        };
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
                    setTimeout(function () {
                        _this.serial.setFocus();
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        _this.elements.toArray()[Number(idx) - 1].setFocus();
                    }, 500);
                }
                return false;
            }
        }
        this.opalService.ajaxCallService(verifySerial, "post", dataParam).then(function (result) {
            _this.opalService.dismiss();
            // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification API response received' + '\n' + this.eventLog;
            if (result['isExist'] == false) {
                _this.opalService.presentToast(result['message'], 'danger');
                _this.errSerial2 = true;
                _this.errSerial1 = false;
                _this.scanForm.controls['serial_' + idx].reset();
                // this.scanForm.controls['subModel_' + idx].reset();
                if (idx < _this.qty) {
                    if (idx == 0) {
                        setTimeout(function () {
                            _this.serial.setFocus();
                        }, 500);
                    }
                    else {
                        setTimeout(function () {
                            _this.elements.toArray()[Number(idx) - 1].setFocus();
                        }, 500);
                    }
                }
            }
            else {
                // this.tempSerial.push(this.scanForm.controls['serial_' + idx].value);
                // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification successful. Valid to proceed' + '\n' + this.eventLog;
                _this.scanForm.controls['serial_' + idx].disable();
                _this.tempSerial.push(value);
                _this.tempModel.push(result['modelNumber']);
                // this.scanForm.controls['serial_' + idx].setValue(value + '(' + result['modelNumber'] + ')');
                // this.scanForm.controls['subModel_' + idx].setValue(result['modelNumber']);
                // this.eventLog = 'DEBUG >>> Autosave method is being called' + '\n' + this.eventLog;
                _this.autoSaveSerial();
                if (idx < _this.qty - 1) {
                    setTimeout(function () {
                        _this.elements.toArray()[idx].setFocus();
                    }, 500);
                }
            }
            // this.eventLog = 'DEBUG >>> Serial # ' + value + ' verification API response completed' + '\n' + this.eventLog;
        });
    };
    //Method to save form data via save button 
    ScanItemPage.prototype.scanSubmit = function () {
        var _this = this;
        this.opalService.present();
        console.log(this.tempSerial);
        this.orderRes['serialNumbers'] = this.tempSerial;
        var saveOrder = this.opalService.baseUrl + this.opalService.saveOrder;
        console.log(this.orderRes);
        this.opalService.ajaxCallService(saveOrder, "post", this.orderRes).then(function (result) {
            if (result == "Success") {
                _this.opalService.presentToast("Order scan completed", "success");
                _this.eventLog = 'Order/Tracking/UCC # ' + _this.orderId + ' scan and save completed. \u2714' + '\n' + _this.eventLog;
                _this.formReset();
                setTimeout(function () {
                    _this.order.setFocus();
                }, 400);
            }
            else if (result = "Order Item not mapped with scan item or qty") {
                _this.opalService.presentToast("Serial #(s) entered does not match with order item’s quantities. Please check and scan matching serial #(s)", "danger");
                _this.eventLog = 'Serial #(s) entered does not match with order item’s quantities. Please check and scan matching serial #(s) \u2716' + '\n' + _this.eventLog;
            }
            else {
                _this.opalService.presentToast("Error in saving the scanned order details. Please try again.", "danger");
                _this.eventLog = 'Error in saving the scanned order details. Please try again.\u2716' + '\n' + _this.eventLog;
            }
            _this.opalService.dismiss();
        });
    };
    //Method to check if autoSave is on/off
    ScanItemPage.prototype.isChecked = function ($event, check) {
        if (check == true) {
            this.autoSave = true;
        }
        else {
            this.autoSave = false;
        }
    };
    //Method to go back to home page
    ScanItemPage.prototype.backToHome = function () {
        var order = this.scanForm.value.order, container = this.scanForm.value.container, model = this.scanForm.value.model, serial = this.scanForm.value.serial, custName = this.scanForm.value.customerName;
        if ((order == "" || order == null) && (container == "" || container == null) &&
            (model == "" || model == null) && (serial == "" || serial == null) && (custName == "" || custName == null)) {
            this.routeTo.navigate(['/home']);
        }
        else {
            this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    };
    //Method to save form data via auto save
    ScanItemPage.prototype.autoSaveSerial = function () {
        var _this = this;
        var saveOrder = this.opalService.baseUrl + this.opalService.saveOrder;
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
            }
            else {
                return false;
            }
            console.log(this.orderRes);
            this.opalService.present();
            this.opalService.ajaxCallService(saveOrder, "post", this.orderRes).then(function (result) {
                // this.eventLog = 'DEBUG >>> Save Order scan API getting called.' + '\n' + this.eventLog;
                if (result == 'Success') {
                    _this.opalService.presentToast('Order scan completed', 'success');
                    _this.eventLog = 'Order/Tracking/UCC # ' + _this.orderId + ' scan and save completed. \u2714' + '\n' + _this.eventLog;
                    // this.eventLog = 'DEBUG >>> Save Order successfully completed via Auto save.' + '\n' + this.eventLog;
                    _this.formReset();
                    setTimeout(function () {
                        _this.order.setFocus();
                    }, 400);
                }
                else if (result = "Order Item not mapped with scan item or qty") {
                    _this.opalService.presentToast("Serial#(s) entered does not match with order item’s quantities. Please check and scan matching serial#(s)", "danger");
                    _this.eventLog = 'Serial#(s) entered does not match with order item’s quantities. Please check and scan matching serial#(s) \u2716' + '\n' + _this.eventLog;
                }
                else {
                    _this.opalService.presentToast("Error in saving the scanned order details. Please try again.", "danger");
                    _this.eventLog = 'Error in saving the scanned order details. Please try again.\u2716' + '\n' + _this.eventLog;
                }
                _this.opalService.dismiss();
                // this.eventLog = 'DEBUG >>> Save Order scan API response completed.' + '\n' + this.eventLog;
            });
        }
        else {
            // this.eventLog = 'DEBUG >>> Autosave flag is turned off' + '\n' + this.eventLog;
        }
    };
    //method to check nine
    ScanItemPage.prototype.checkNine = function (evt) {
        var val = evt.target.value;
        if (val.length < 9 && val.length != 0) {
            this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
            this.eventLog = 'Serial # ' + val + ' should have at least 9 digits \u2716' + '\n' + this.eventLog;
        }
    };
    //Method to get 9 digit serial number 
    ScanItemPage.prototype.getNine = function (evt, item) {
        var _this = this;
        var val = evt.target.value.toUpperCase();
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
            setTimeout(function () {
                _this.serialVerify(val, item);
            }, 200);
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            setTimeout(function () {
                _this.serialVerify(val, item);
            }, 200);
        }
    };
    //Method to reset form
    ScanItemPage.prototype.formReset = function () {
        var _this = this;
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
        setTimeout(function () {
            _this.order.setFocus();
        }, 300);
        this.searched = false;
    };
    //Method enable serial
    ScanItemPage.prototype.enableSerialNumbers = function (event) {
        this.errOrder = false;
        this.errSerial1 = false;
        this.errSerial2 = false;
        for (var i = 0; i < this.qty; i++) {
            this.scanForm.controls['serial_' + i].enable();
        }
    };
    //oreder search via enter key
    ScanItemPage.prototype.handleScanner = function (evt) {
        var _this = this;
        setTimeout(function () {
            var value = evt.target.value;
            _this.enterEvt = true;
            _this.orderSearch(value);
        }, 800);
    };
    //Method to clear the errors
    ScanItemPage.prototype.clearErrors = function () {
        this.errOrder = false;
        this.errSerial1 = false;
        this.errSerial2 = false;
    };
    //Method to clear selected fields serial number
    ScanItemPage.prototype.clearSerialField = function (param) {
        var _this = this;
        if (param == 'all') {
            for (var i = 0; i < this.qty; i++) {
                this.scanForm.controls['serial_' + i].enable();
                this.scanForm.controls['serial_' + i].reset();
                // this.scanForm.controls['subModel_' + i].reset();
            }
            this.tempSerial = [];
            setTimeout(function () {
                _this.serial.setFocus();
            }, 300);
        }
        else {
            if (param == 0) {
                setTimeout(function () {
                    _this.serial.setFocus();
                }, 300);
            }
            else {
                setTimeout(function () {
                    _this.elements.toArray()[param - 1].setFocus();
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
    };
    ScanItemPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('order', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serial', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "serial", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('serialInputs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "elements", void 0);
    ScanItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scan-item',
            template: __webpack_require__(/*! raw-loader!./scan-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/scan-item/scan-item.page.html"),
            styles: [__webpack_require__(/*! ./scan-item.page.scss */ "./src/app/scan-item/scan-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]])
    ], ScanItemPage);
    return ScanItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=scan-item-scan-item-module.js.map