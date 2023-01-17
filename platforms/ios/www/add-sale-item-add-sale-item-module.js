(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sale-item-add-sale-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-sale-item/add-sale-item.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-sale-item/add-sale-item.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding class=\"header\">\n  <div text-uppercase text-center class=\"title\">Add Sale Item</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n           <ion-buttons (click)=\"addSaleSubmit()\">\n            <ion-button type=\"submit\" class=\"round\" color=\"save\" [disabled]=\"!addSaleForm.valid || autoSave == true\"\n            [style.cursor]=\"!addSaleForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\n           </ion-buttons>\n          </div> -->\n          <ion-buttons style=\"float: right\">\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"addSaleSubmit()\"\n              [disabled]=\"!addSaleForm.valid || autoSave == true\"> SAVE</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"addSaleForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">\n            Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\" text-uppercase\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errSerial\">Serial number not available</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase formControlName=\"model\" class=\"lab-font\" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Customer Name / PO</ion-label>\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"customerPO\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-sale-item/add-sale-item.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.module.ts ***!
  \*******************************************************/
/*! exports provided: AddSaleItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaleItemPageModule", function() { return AddSaleItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_sale_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-sale-item.page */ "./src/app/add-sale-item/add-sale-item.page.ts");







var routes = [
    {
        path: '',
        component: _add_sale_item_page__WEBPACK_IMPORTED_MODULE_6__["AddSaleItemPage"]
    }
];
var AddSaleItemPageModule = /** @class */ (function () {
    function AddSaleItemPageModule() {
    }
    AddSaleItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_sale_item_page__WEBPACK_IMPORTED_MODULE_6__["AddSaleItemPage"]]
        })
    ], AddSaleItemPageModule);
    return AddSaleItemPageModule;
}());



/***/ }),

/***/ "./src/app/add-sale-item/add-sale-item.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #268387;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.header {\n  background-image: url('cyanbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #359ca1;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvYWRkLXNhbGUtaXRlbS9hZGQtc2FsZS1pdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXNhbGUtaXRlbS9hZGQtc2FsZS1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0ksb0NBQUE7QUNGSjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDSSxrQkFBQTtBQ0ZOOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQWUsYUFBQTtBQ0FmOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBNUpVO0FDNkpaOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0E7RUFDQyxjQUFBO0FDQUQ7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUNFRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zYWxlLWl0ZW0vYWRkLXNhbGUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMyNjgzODc7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2N5YW5iZy5wbmdcIikhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZ3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM1ODlmYTI7XG59XG5cbi5jbGVhci1tYXJne1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg5ZmEyO1xufVxuXG4uc2F2ZS1jZW50ZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzM1OWNhMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9ye1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRke1xuICBwYWRkaW5nOiAwLjUlIDMlO1xufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDJ7XG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xufVxuXG4uc3JjY3JvbGx7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmZ7XG4gIHBhZGRpbmctbGVmdDozM3B4O1xufVxuXG4ub257XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZlxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuICBcbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iLCIucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMjY4Mzg3O1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jeWFuYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmFjay1tYXJnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM1ODlmYTI7XG59XG5cbi5jbGVhci1tYXJnIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzU4OWZhMjtcbn1cblxuLnNhdmUtY2VudGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMzU5Y2ExO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3Ige1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4ucm93LXBhZGQge1xuICBwYWRkaW5nOiAwLjUlIDMlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wyIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndCB7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGQ0M7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZiB7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLm9uIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-sale-item/add-sale-item.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.page.ts ***!
  \*****************************************************/
/*! exports provided: AddSaleItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSaleItemPage", function() { return AddSaleItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");







var AddSaleItemPage = /** @class */ (function () {
    function AddSaleItemPage(formBuilder, routeTo, opalService, keyboard, nativeAudio) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.keyboard = keyboard;
        this.nativeAudio = nativeAudio;
        this.eventLog = '';
        this.addSaleForm = this.formBuilder.group({
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            serial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            customerPO: ['']
        }, { updateOn: 'blur' });
    }
    AddSaleItemPage.prototype.ngOnInit = function () {
    };
    AddSaleItemPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.serialInput.setFocus();
        }, 400);
    };
    //Method to go back to home page
    AddSaleItemPage.prototype.backToHome = function () {
        var customerPO = this.addSaleForm.value.customerPO, model = this.addSaleForm.value.model, serial = this.addSaleForm.value.serial;
        if ((customerPO == "" || customerPO == null) &&
            (model == "" || model == null) && (serial == "" || serial == null)) {
            this.routeTo.navigate(['/home']);
        }
        else {
            this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    };
    //Method to reset the form
    AddSaleItemPage.prototype.formReset = function () {
        this.addSaleForm.reset();
        this.errSerial = false;
        this.serialInput.setFocus();
    };
    //method to check nine
    AddSaleItemPage.prototype.checkNine = function (evt) {
        var val = evt.target.value;
        if (val.length < 9 && val.length != 0) {
            this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
            this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
            this.nativeAudio.play('errorBeep');
        }
    };
    //Method to get 9 digit serial number 
    AddSaleItemPage.prototype.getNine = function (evt) {
        var val = evt.target.value.toUpperCase();
        if (val.length == 9 && /^[0-9]+$/.test(val)) {
            this.scanSerial(val);
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            this.scanSerial(val);
        }
        this.errSerial = false;
    };
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
    //       this.addSaleForm.controls['serial'].setValue(val.slice(0, 9));
    //       this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //     } else {
    //       this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //     }
    //     return false;
    //   } else if (val.startsWith('K') && val.endsWith('BC') && val.length == 12) {
    //     if ((val.slice(1, val.length - 2) > 100000001)) {
    //       this.scanSerial(val);
    //     } else {
    //       this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //       return false;
    //     }
    //   } else {
    //     if (val.startsWith('K')) {
    //       if ((val.slice(1, val.length)).length > 9) {
    //         if (!(val.charAt(val.length - 1)).startsWith('B')) {
    //           this.eventLog = 'Serial # ' + val + ' is invalid \u2716' + '\n' + this.eventLog;
    //           return false;
    //         }
    //       }
    //     } else if (val.length > 9) {
    //       this.addSaleForm.controls['serial'].setValue(val.slice(0, 9));
    //       this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
    //       return false;
    //     }
    //   }
    // }
    // getNine(evt) {
    //   let val = evt.target.value;
    //   if (val.length == 9) {
    //     this.scanSerial(val);
    //   } else if (val.length == 12) {
    //     this.scanSerial(val);
    //   }
    //   this.errSerial = false;
    // }
    //Method to check if serial number is exist
    AddSaleItemPage.prototype.scanSerial = function (value) {
        var _this = this;
        var serialScan = this.opalService.baseUrl + this.opalService.scanSerial;
        var dataParam = {
            'serialNumber': value.toUpperCase()
        };
        this.opalService.present();
        this.opalService.ajaxCallService(serialScan, "post", dataParam).then(function (result) {
            if (result['modelNumber'] != undefined) {
                _this.addSaleForm.controls['model'].setValue(result['modelNumber']);
                _this.serialNo = value;
                _this.autoSaveSerial(value);
            }
            else {
                _this.opalService.presentToast(result['message'], "danger");
                _this.eventLog = 'Serial # ' + value.toUpperCase() + ' : ' + result['message'] + '\u2716 \n' + _this.eventLog;
                _this.errSerial = true;
                _this.addSaleForm.controls['serial'].reset();
                _this.nativeAudio.play('errorBeep');
                setTimeout(function () {
                    _this.serialInput.setFocus();
                }, 300);
            }
            _this.opalService.dismiss();
        });
    };
    //Auto save method
    AddSaleItemPage.prototype.autoSaveSerial = function (value) {
        if (this.autoSave == true) {
            var batch = this.addSaleForm.value.batch, model = this.addSaleForm.value.model, serial = value;
            if (batch != "" && model != "" && serial != "") {
                this.addSaleSubmit();
            }
        }
    };
    //Method to save receive item details
    AddSaleItemPage.prototype.addSaleSubmit = function () {
        var _this = this;
        var saveReceive = this.opalService.baseUrl + this.opalService.saleSave;
        var id = JSON.parse(localStorage.getItem("Id"));
        //this.serialNo = value == undefined ? this.addSaleForm.value.serial : value;
        // if(this.autoSave == false){
        //   this.serialNo = this.addSaleForm.controls['serial'].value
        // }
        var model = this.addSaleForm.controls['model'].value;
        var dataParam = {
            "serialNumber": this.serialNo.toUpperCase(),
            "modelNumber": this.addSaleForm.value.model,
            "po": this.addSaleForm.value.customerPO,
            "modifiedBy": id.userId
        };
        this.opalService.present();
        this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(function (result) {
            if (result == 'Success') {
                _this.opalService.presentToast('Item removed from inventory', 'success');
                _this.eventLog = 'Serial # ' + _this.serialNo + ' (' + model + ') removed from inventory. \u2714' + '\n' + _this.eventLog;
                _this.nativeAudio.play('successBeep');
                _this.addSaleForm.reset();
                setTimeout(function () {
                    _this.serialInput.setFocus();
                }, 500);
                _this.opalService.dismiss();
            }
            else {
                _this.opalService.presentToast(result, 'danger');
                _this.eventLog = result + ' \u2716 \n' + _this.eventLog;
                _this.nativeAudio.play('errorBeep');
                _this.opalService.dismiss();
            }
        });
    };
    //Method to check and uncheck
    AddSaleItemPage.prototype.isChecked = function ($event, check) {
        if (check == true) {
            this.autoSave = true;
        }
        else {
            this.autoSave = false;
        }
    };
    AddSaleItemPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
        { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeAudio"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("serial", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddSaleItemPage.prototype, "serialInput", void 0);
    AddSaleItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-sale-item',
            template: __webpack_require__(/*! raw-loader!./add-sale-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-sale-item/add-sale-item.page.html"),
            styles: [__webpack_require__(/*! ./add-sale-item.page.scss */ "./src/app/add-sale-item/add-sale-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeAudio"]])
    ], AddSaleItemPage);
    return AddSaleItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-sale-item-add-sale-item-module.js.map