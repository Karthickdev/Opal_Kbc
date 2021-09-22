(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sale-item-add-sale-item-module"],{

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

/***/ "./src/app/add-sale-item/add-sale-item.page.html":
/*!*******************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding>\n  <div text-uppercase text-center class=\"title\">Add Sale Item</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n           <ion-buttons (click)=\"addSaleSubmit()\">\n            <ion-button type=\"submit\" class=\"round\" color=\"save\" [disabled]=\"!addSaleForm.valid || autoSave == true\"\n            [style.cursor]=\"!addSaleForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\n           </ion-buttons>\n          </div> -->\n          <ion-buttons style=\"float: right\">\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"addSaleSubmit()\"\n              [disabled]=\"!addSaleForm.valid || autoSave == true\"> SAVE</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"addSaleForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">\n            Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\" text-uppercase\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"errSerial\">Serial number not available</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase formControlName=\"model\" class=\"lab-font\" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Customer Name / PO</ion-label>\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"customerPO\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/add-sale-item/add-sale-item.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #268387;\n  font-size: initial;\n  font-size: 25px; }\n\n.header {\n  background-image: url('cyanbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2; }\n\n.save-center {\n  border-radius: 50%;\n  background: #359ca1;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff; }\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important; }\n\n.tool1 {\n  position: relative;\n  top: 1%; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #00BFCC; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL2FkZC1zYWxlLWl0ZW0vYWRkLXNhbGUtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQkFBZ0I7RUFDaEIsd0JBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsOENBQTBEO0VBQzFELDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSxvQ0FBaUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxzQkFBYTtFQUNiLDhCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPLEVBQUE7O0FBR1Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7RUFDeEMsa0JBQWtCLEVBQUE7O0FBRXhCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQzVDLGtCQUFrQixFQUFBOztBQUd0QjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFBZSxhQUFZLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUix1QkFBdUI7RUFFdkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHlCQTVKaUIsRUFBQTs7QUErSm5CO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBR0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQ0FBK0I7RUFDL0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsYUFBYSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1zYWxlLWl0ZW0vYWRkLXNhbGUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMyNjgzODc7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2N5YW5iZy5wbmdcIikhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJhY2stbWFyZ3tcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM1ODlmYTI7XG59XG5cbi5jbGVhci1tYXJne1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNTg5ZmEyO1xufVxuXG4uc2F2ZS1jZW50ZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzM1OWNhMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlLWNvbG9ye1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRke1xuICBwYWRkaW5nOiAwLjUlIDMlO1xufVxuXG4uZXJyb3ItbWVzc2FnZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDJ7XG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDElO1xufVxuXG4uc3JjY3JvbGx7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vZmZ7XG4gIHBhZGRpbmctbGVmdDozM3B4O1xufVxuXG4ub257XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5vbiwgLm9mZlxue1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cbntkaXNwbGF5OiBibG9jazt9XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcbntkaXNwbGF5OiBub25lO31cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuICBcbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

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
        var val = evt.target.value;
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
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            this.scanSerial(val);
        }
        this.errSerial = false;
    };
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
        //let serialNo = value == undefined ? this.addSaleForm.value.serial : value;
        var serialNo = this.addSaleForm.value.serial;
        var model = this.addSaleForm.controls['model'].value;
        var dataParam = {
            "serialNumber": serialNo.toUpperCase(),
            "modelNumber": this.addSaleForm.value.model,
            "po": this.addSaleForm.value.customerPO,
            "modifiedBy": id.userId
        };
        this.opalService.present();
        this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(function (result) {
            if (result == 'Success') {
                _this.opalService.presentToast('Item removed from inventory', 'success');
                _this.eventLog = 'Serial # ' + serialNo + ' (' + model + ') removed from inventory. \u2714' + '\n' + _this.eventLog;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("serial"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddSaleItemPage.prototype, "serialInput", void 0);
    AddSaleItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-sale-item',
            template: __webpack_require__(/*! ./add-sale-item.page.html */ "./src/app/add-sale-item/add-sale-item.page.html"),
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