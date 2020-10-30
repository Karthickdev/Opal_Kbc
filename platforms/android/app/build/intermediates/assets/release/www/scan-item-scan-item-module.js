(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scan-item-scan-item-module"],{

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

/***/ "./src/app/scan-item/scan-item.page.html":
/*!***********************************************!*\
  !*** ./src/app/scan-item/scan-item.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding>\r\n  <div text-uppercase text-center class=\"title\">Scan Order</div>\r\n  <ion-toolbar class=\"tool2\">\r\n    <ion-grid no-padding>\r\n      <ion-row>\r\n        <ion-col size=\"4\" text-left>\r\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <!-- <div style=\"display: inline-block\">\r\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"scanSubmit()\"\r\n              [disabled]=\"!scanForm.valid || autoSave == true\">Save</ion-button>\r\n          </div> -->\r\n          <ion-buttons style=\"float: right\">\r\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"scanSubmit()\"\r\n              [disabled]=\"!scanForm.valid || autoSave == true\">SAVE</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"4\" text-right (click)=\"formReset()\">\r\n          <ion-buttons class=\"clear-marg\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form [formGroup]=\"scanForm\">\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"11\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Order/Tracking/UCC No.<ion-note style=\"color: red\">*\r\n            </ion-note>\r\n          </ion-label>\r\n          <ion-input #order type=\"text\" text-uppercase formControlName=\"order\" (ionFocus)=\"enableSerialNumbers($event)\"\r\n            class=\"lab-font\" (keyup.enter)=\"handleScanner($event)\" required clearInput></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <div *ngFor=\"let validation of validation_messages['order']\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"scanForm.get('order').hasError(validation['type']) && scanForm.get('order').touched\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"error-message\" *ngIf=\"errOrder\">Invalid Order/Tracking/UCC number.</div>\r\n      </ion-col>\r\n      <ion-col size=\"1\"\r\n        style=\"display: flex!important; align-content: center!important; align-items: center!important;\">\r\n        <ion-buttons>\r\n          <ion-button fill=\"clear\" (click)=\"scanOrder()\" type=\"button\" [disabled]=\"searched\" item-right\r\n            style=\"background:white; margin-top: 100%\">\r\n            <ion-icon name=\"search\" style=\"width: 35px; height: 35px; color:darkgray\"> </ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Customer Name</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"customerName\" class=\"lab-font\" readonly></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\" style=\"margin: 3% auto;\">\r\n      <ion-col size=\"2\">\r\n        <ion-label position=\"floating\" class=\"lab-font\" style=\"margin:10%\">Model<ion-note style=\"color: red\">*\r\n          </ion-note>\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n        <div *ngFor=\"let item of modelCount; let i=index; \">\r\n          <ion-item>\r\n            <ion-input type=\"text\" text-uppercase formControlName=\"model_{{item}}\" class=\"lab-font\" readonly>\r\n            </ion-input>\r\n          </ion-item>\r\n        </div>\r\n        <div>\r\n          <ion-item>\r\n            <ion-input type=\"text\" text-uppercase formControlName=\"model_0\" class=\"lab-font\" readonly></ion-input>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\" style=\"margin: 3% auto;\">\r\n      <ion-row style=\"margin: 1%\">\r\n        <ion-col size=\"4\">\r\n          <ion-label position=\"floating\" class=\"lab-font\">Serial Number<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <!-- <ion-label position=\"floating\" class=\"lab-font\" style=\"padding-left: 17px\">Model Number</ion-label> -->\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-right style=\"padding-right: 6px\">\r\n          <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray; padding-right: 8px\"\r\n            (click)=\"clearSerialField('all')\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-col size=\"12\">\r\n        <div>\r\n          <ion-item>\r\n            <ion-input type=\"text\" #serial id=\"serial_0\" formControlName=\"serial_0\" (ionFocus)=\"clearErrors()\"\r\n              (ionBlur)=\"checkNine($event)\" clearInput text-uppercase maxLength=\"12\" (ionInput)=\"getNine($event,'0')\"\r\n              minLength=9 class=\"lab-font\" required disabled></ion-input>\r\n            <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray\" (click)=\"clearSerialField(0)\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n        <div *ngFor=\"let item of MySelect1; let i=index;\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" #serialInputs formControlName=\"serial_{{item}}\" (ionFocus)=\"clearErrors()\"\r\n              (ionBlur)=\"checkNine($event)\" clearInput text-uppercase maxLength=\"12\" (ionInput)=\"getNine($event,item)\"\r\n              minLength=9 class=\"lab-font\" required></ion-input>\r\n            <ion-icon name=\"close\" style=\"font-size: 37px; color: darkgray\" (click)=\"clearSerialField(item)\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n        <!-- <div class=\"error-message\" *ngIf=\"errSerial1\">Serial number already exist</div>\r\n        <div class=\"error-message\" *ngIf=\"errSerial2\">Invalid serial number</div> -->\r\n      </ion-col>\r\n      <!-- <ion-col size=\"8\">\r\n        <ion-item>\r\n          <ion-input type=\"text\" formControlName=\"subModel_0\" class=\"lab-font\" readonly></ion-input>\r\n          <ion-icon name=\"close\" style=\"font-size: 35px; color: #888\" (click)=\"clearSerialField(0)\"></ion-icon>\r\n        </ion-item>\r\n        <div *ngFor=\"let item of MySelect1\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" formControlName=\"subModel_{{item}}\" class=\"lab-font\" readonly></ion-input>\r\n            <ion-icon name=\"close\" style=\"font-size: 35px; color: #888\" (click)=\"clearSerialField(item)\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </form>\r\n  <ion-toolbar class=\"tool1\">\r\n    <ion-grid style=\"padding: 3% 5%\">\r\n      <ion-row>\r\n        <ion-col size=\"5\">\r\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <!-- <ion-toggle class=\"toggle-color\" ion-toggle-text = \"on;off\" color = \"primary\"></ion-toggle> -->\r\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\r\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\r\n          </label>\r\n        </ion-col>\r\n        <ion-col size=\"5\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <ion-row class=\"marginTL10\">\r\n    <ion-col size=\"12\">\r\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-item padding-horizontal>\r\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/scan-item/scan-item.page.scss":
/*!***********************************************!*\
  !*** ./src/app/scan-item/scan-item.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%; }\n\n.header {\n  background-image: url('greenbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #5d844b;\n  font-size: initial;\n  font-size: 25px; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px; }\n\n.clear-marg {\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px; }\n\n.save-center {\n  border-radius: 50%;\n  background: #8fb47c;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #d7e8cf !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 16%;\n  display: flex; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.toggle {\n  padding-left: 0;\n  text-align: center; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  color: #fff;\n  background: #00000000; }\n\n.icon {\n  font-size: 30px;\n  color: #000;\n  border-radius: 15%;\n  background: transparent; }\n\n.icon-label {\n  position: absolute;\n  left: 20%; }\n\n.tool2 {\n  --background:#00000000;\n  --border-width: 0px !important; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #C3DBB7; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nhbi1pdGVtL0U6XFxLYXJ0aGlja1xcaW9uaWNQcm9qZWN0c1xcT3BhbEtCQy9zcmNcXGFwcFxcc2Nhbi1pdGVtXFxzY2FuLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0UsK0NBQTJEO0VBQzNELDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0Usb0JBQWdCO0VBQ2hCLHdCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNJLG9DQUFpQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdiO0VBQ0Usc0JBQWE7RUFDYiw4QkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQWUsYUFBWSxFQUFBOztBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkEvSWlCLEVBQUE7O0FBa0puQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsYUFBYSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNJLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NjYW4taXRlbS9zY2FuLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogI0MzREJCNztcclxuJHRleHQtY29sb3I6ICMwNzA3MDc7XHJcblxyXG5pb24tcm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ncmVlbmJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucm91bmQge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogIzVkODQ0YjtcclxuICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2stbWFyZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzkwYmU5MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2xlYXItbWFyZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MGJlOTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNhdmUtY2VudGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzhmYjQ3YztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAudG9nZ2xlLWNvbG9ye1xyXG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiAjZDdlOGNmICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtcG9ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLnJvdy1wYWRke1xyXG4gICAgcGFkZGluZzogMC41JSAzJTtcclxuICB9XHJcblxyXG4gIC50b2dnbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmljb24tbGFiZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbn1cclxuXHJcbi50b29sMntcclxuICAtLWJhY2tncm91bmQ6IzAwMDAwMDAwO1xyXG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWItZm9udHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnQtaXRhbGlje1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbn1cclxuXHJcbi5vbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub2Zme1xyXG4gIHBhZGRpbmctbGVmdDozM3B4O1xyXG59XHJcblxyXG4ub257XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uLCAub2ZmXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cclxue2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcclxue2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLnNsaWRlci5ybmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm1hcmdpbkwxNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

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
                    _this.eventLog = 'Order/Tracking/UCC # ' + pValue + ' : Invalid/Not found. \u2716' + '\n' + _this.eventLog;
                    _this.opalService.presentToast("Invalid Order/Tracking/UCC #", "danger");
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
            this.serialVerify(val, item);
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            this.serialVerify(val, item);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('order'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serial'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "serial", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('serialInputs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScanItemPage.prototype, "elements", void 0);
    ScanItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scan-item',
            template: __webpack_require__(/*! ./scan-item.page.html */ "./src/app/scan-item/scan-item.page.html"),
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