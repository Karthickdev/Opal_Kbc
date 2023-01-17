(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-item-return-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/return-item/return-item.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/return-item/return-item.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding class=\"header\">\n  <div text-uppercase text-center class=\"title\">Return Item</div>\n  <ion-toolbar>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center class=\"padd-left-0\">\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\n              [disabled]=\"!returnForm.valid\" [style.cursor]=\"!returnForm.valid ? 'not-allowed' : 'pointer'\">Save\n            </ion-button>\n          </div> -->\n          <ion-buttons style=\"float: right\">\n            <ion-button class=\"save-center\" type=\"submit\" (click)=\"receiveSubmit()\" [disabled]=\"!returnForm.valid\"> SAVE\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color:#ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"returnForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" (ionFocus)=\"enableScanner()\" minLength=\"9\" maxLength=\"12\"\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" maxLength=\"12\" text-uppercase clear-input=true\n            class=\"lab-font\" required>\n          </ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['serial']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('serial').hasError(validation['type']) && returnForm.get('serial').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" (ionBlur) = \"searchModel()\" (ionInput) = \"disableKey()\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            class=\"lab-font\" formControlName=\"model\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 22px;\">\n            {{item}}\n          </ion-item>\n        </ion-list>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['model']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('model').hasError(validation['type']) && returnForm.get('model').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">PO</ion-label>\n          <ion-input type=\"text\" text-uppercase formControlName=\"po\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Condition<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-select formControlName=\"condition\" value=\"{{option1}}\"\n            (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\" okText=\"Done\" cancelText=\"Cancel\" class=\"lab-font\">\n            <ion-select-option *ngFor=\"let item of conditionList\" value=\"{{item.enumValue}}\">{{item.enumName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['condition']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('condition').hasError(validation['type']) && returnForm.get('condition').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n        <div class=\"error-message\" *ngIf=\"condRequired\">Condition is a required field</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Reason<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-select formControlName=\"reason\" value=\"{{option2}}\" okText=\"Done\"\n            (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\"\n            cancelText=\"Cancel\" class=\"lab-font\">\n            <ion-select-option *ngFor=\"let item of reasonList\" value=\"{{item.enumValue}}\">{{item.enumName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"reasonRequired\">Reason is a required field</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lab-font\">Notes</ion-label>\n          <!-- <ion-input rows = \"3\" formControlName=\"notes\" class=\"lab-font\"></ion-input> -->\n          <ion-textarea rows=\"2\" formControlName=\"notes\" class=\"lab-font\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer [hidden]=\"keyboardOpen\">\n</ion-footer>"

/***/ }),

/***/ "./src/app/return-item/return-item.module.ts":
/*!***************************************************!*\
  !*** ./src/app/return-item/return-item.module.ts ***!
  \***************************************************/
/*! exports provided: ReturnItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnItemPageModule", function() { return ReturnItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _return_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./return-item.page */ "./src/app/return-item/return-item.page.ts");







var routes = [
    {
        path: '',
        component: _return_item_page__WEBPACK_IMPORTED_MODULE_6__["ReturnItemPage"]
    }
];
var ReturnItemPageModule = /** @class */ (function () {
    function ReturnItemPageModule() {
    }
    ReturnItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_return_item_page__WEBPACK_IMPORTED_MODULE_6__["ReturnItemPage"]]
        })
    ], ReturnItemPageModule);
    return ReturnItemPageModule;
}());



/***/ }),

/***/ "./src/app/return-item/return-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/return-item/return-item.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('orangebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #fd433e;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #e34844;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.tool-2-pos {\n  background: #dedede;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #FFFFFF00;\n  color: #fff;\n}\n\nion-toolbar {\n  --background: #ffFFFF00;\n  --border-width: 0px !important;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.input-has-focus {\n  color: #056075;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.select-text {\n  font-size: 25px !important;\n}\n\n.action-sheet-wrapper {\n  --max-width: 760px !important;\n}\n\n.sc-ion-action-sheet-ios {\n  color: red !important;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvcmV0dXJuLWl0ZW0vcmV0dXJuLWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9yZXR1cm4taXRlbS9yZXR1cm4taXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxnREFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0hGOztBRE1BO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUdBLFlBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNOSjs7QURTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFNFO0VBQ0UsZ0JBQUE7QUNOSjs7QURTRTtFQUNDLG1CQUFBO0FDTkg7O0FEU0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUdBLFdBQUE7QUNSSjs7QURXRTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUNSSjs7QURnQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ2JKOztBRGVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURnQkE7RUFDSSxjQUFBO0FDYko7O0FEZ0JBO0VBQ0UsZUFBQTtBQ2JGOztBRGdCQTtFQUNFLGVBQUE7QUNiRjs7QURnQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsMEJBQUE7QUNiRjs7QURnQkE7RUFDRSw2QkFBQTtBQ2JGOztBRGdCQTtFQUNFLHFCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQ2JGOztBRGdCQTtFQUNFLDRCQUFBO0VBQ0EsMEJBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL3JldHVybi1pdGVtL3JldHVybi1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICMwMGE0ZTg7XG4kdGV4dC1jb2xvcjogIzA3MDcwNztcbi8vICRsYWJlbC1tZC10ZXh0LWNvbG9yLWZvY3VzZWQ6ICMwMGE0ZTg7XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvb3JhbmdlYmcucG5nXCIpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5yb3VuZCB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC8vIGhlaWdodDogNjBweDtcbiAgICAvLyB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgLy8gLS1pb24tY29sb3ItYmFzZSA6ICNGQzY4NjQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogI2ZkNDMzZTtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmJhY2stbWFyZ3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkNDVlNWFcbiAgfVxuXG4gIC5jbGVhci1tYXJne1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkNDVlNWFcbiAgfVxuXG4gIC5zYXZlLWNlbnRlcntcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2UzNDg0NDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5sYWJlbC1wb3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTUlO1xuICB9XG5cbiAgLnJvdy1wYWRke1xuICAgIHBhZGRpbmc6IDAuNSUgMyU7XG4gIH1cblxuICAudG9vbC0yLXBvc3tcbiAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XG4gIH1cblxuICAuZXJyb3ItbWVzc2FnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNSU7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYwMDtcbiAgICAvLyBtYXJnaW46IDElIDMwJTtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICBpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICNmZkZGRkYwMDtcbiAgICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xuICAgIC8vIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAvLyAtLW1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgLy8gaGVpZ2h0OiA3NXB4O1xuICAgIC8vIC0tY29sb3I6ICMwNzA3MDc7XG4gIH1cblxuICAuc3JjY3JvbGx7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi5pbnB1dC1oYXMtZm9jdXN7XG4gICAgY29sb3I6ICMwNTYwNzUgO1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zZWxlY3QtdGV4dHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tc2hlZXQtd3JhcHBlcntcbiAgLS1tYXgtd2lkdGg6IDc2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50OyBcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4gIFxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvb3JhbmdlYmcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucm91bmQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmQ0MzNlO1xuICBmb250LXNpemU6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJhY2stbWFyZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDQ1ZTVhO1xufVxuXG4uY2xlYXItbWFyZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkNDVlNWE7XG59XG5cbi5zYXZlLWNlbnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2UzNDg0NDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtcG9zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1JTtcbn1cblxuLnJvdy1wYWRkIHtcbiAgcGFkZGluZzogMC41JSAzJTtcbn1cblxuLnRvb2wtMi1wb3Mge1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICNmZkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3JjY3JvbGwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcmNoZ3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlucHV0LWhhcy1mb2N1cyB7XG4gIGNvbG9yOiAjMDU2MDc1O1xufVxuXG4ubGFiLWZvbnQge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zZWxlY3QtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLXNoZWV0LXdyYXBwZXIge1xuICAtLW1heC13aWR0aDogNzYwcHggIWltcG9ydGFudDtcbn1cblxuLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/return-item/return-item.page.ts":
/*!*************************************************!*\
  !*** ./src/app/return-item/return-item.page.ts ***!
  \*************************************************/
/*! exports provided: ReturnItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnItemPage", function() { return ReturnItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");







var ReturnItemPage = /** @class */ (function () {
    function ReturnItemPage(formBuilder, routeTo, opalService, alert, keyboard) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.alert = alert;
        this.keyboard = keyboard;
        this.eventLog = "";
        this.searchList = [];
        this.showList = false;
        this.modelList = [];
        this.returned = false;
        this.keyboardOpen = false;
        this.condRequired = false;
        this.reasonRequired = false;
        this.scanned = false;
        this.validation_messages = {
            'serial': [
                { type: 'required', message: 'Serial number is a required field.' },
                { type: 'pattern', message: 'Only numbers and characters are allowed' },
            ],
            'model': [
                { type: 'required', message: 'Model is a required field.' },
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
        };
        this.returnForm = this.formBuilder.group({
            serial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            condition: [''],
            po: [""],
            reason: [""],
            notes: [""],
        }, { updateOn: 'blur' });
    }
    ReturnItemPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.serial.setFocus();
        }, 500);
    };
    //Alert controller
    ReturnItemPage.prototype.presentAlertConfirm = function (header, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: header,
                            message: msg,
                            keyboardClose: true,
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'No',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.formReset();
                                        setTimeout(function () {
                                            _this.serial.setFocus();
                                        }, 300);
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReturnItemPage.prototype.ngOnInit = function () {
        this.conditionDropDown();
        this.resonDropDown();
    };
    ReturnItemPage.prototype.ionViewDidEnter = function () {
        this.opalService.getAllModelList();
    };
    //Method to get condition dropdown values
    ReturnItemPage.prototype.conditionDropDown = function () {
        var _this = this;
        var loginUrl = this.opalService.baseUrl + this.opalService.conditionDrop;
        this.opalService.ajaxCallService(loginUrl, "post", "").then(function (result) {
            _this.conditionList = result;
        });
    };
    //Method to get reason dropdown values
    ReturnItemPage.prototype.resonDropDown = function () {
        var _this = this;
        var loginUrl = this.opalService.baseUrl + this.opalService.reasonDrop;
        this.opalService.ajaxCallService(loginUrl, "post", "").then(function (result) {
            _this.reasonList = result;
        });
    };
    //Method to scan serial number
    ReturnItemPage.prototype.scanSerial = function (value) {
        var _this = this;
        console.log(value);
        var serialScan = this.opalService.baseUrl + this.opalService.serialScan;
        var dataParam = {
            'serialNumber': value
        };
        this.scanned = true;
        this.opalService.present();
        this.opalService.ajaxCallService(serialScan, "post", dataParam).then(function (result) {
            if (result['availableForInventryEnum'] != undefined && result['availableForInventryEnum'] == '10') {
                _this.opalService.presentToast("Serial # " + result['serialNumber'] + " already available in Inventory. Cannot return already available item.", 'danger');
                _this.eventLog = 'Serial # ' + value + '(' + result['modelNumber'] + ') already available in Inventory. Cannot return already available item. \u2716 \n' + _this.eventLog;
            }
            else if (result['message'] == "Serial number not associated with any order") {
                _this.returnForm.controls['serial'].setValue(result['serialNumber']);
                _this.returnForm.controls['model'].setValue(result['modelNumber']);
                _this.returnForm.controls['po'].setValue(result['po']);
                _this.returnForm.controls['notes'].setValue(result['notes']);
                // this.option1 = result['itemConditionEnum'];
                // this.option2 = result['itemReasonEnum'];
                _this.eventLog = 'Serial number ' + result['serialNumber'] + ' (' + result['modelNumber'] + ') not associated with any order \u2716 \n' + _this.eventLog;
                ;
            }
            else if (result['message'] == "Available") {
                _this.returnForm.controls['serial'].setValue(result['serialNumber']);
                _this.returnForm.controls['model'].setValue(result['modelNumber']);
                _this.returnForm.controls['po'].setValue(result['po']);
                // this.option1 = result['itemConditionEnum'];
                // this.option2 = result['itemReasonEnum'];
            }
            else if (result['message'] == "Item already returned") {
                _this.opalService.presentToast("Item already returned (Model No : \'" + result['modelNumber'] + "\' & Order No : \'" + result['modelNumber'] + "\'", 'danger');
                _this.eventLog = 'Serial # ' + value + ' : ' + result['message'] + ' \u2716 \n' + _this.eventLog;
                _this.returned = true;
            }
            else {
                _this.scanned = true;
                _this.presentAlertConfirm("Serial # " + value + " Not found", "Do you want to save this as new serial number?");
                _this.eventLog = 'Serial # ' + value + ' : Not found \u2716' + '\n' + _this.eventLog;
            }
            _this.opalService.dismiss();
        });
    };
    //method to check nine digits serial number
    ReturnItemPage.prototype.checkNine = function (evt) {
        var val = evt.target.value;
        if (val.length < 9 && val.length != 0) {
            this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
            this.eventLog = 'Serial # ' + val + ' Should have at least 9 digits. \u2716' + ' \n' + this.eventLog;
        }
    };
    //Method to search model
    ReturnItemPage.prototype.searchModel = function (ev) {
        this.searchList = [];
        var searchVal = ev.target.value;
        if (searchVal.length > 2) {
            if (searchVal && searchVal.trim() != '') {
                this.showList = true;
                this.searchList = this.opalService.allModelLists.filter(function (item) { return item.includes(searchVal.toUpperCase()); });
                this.searchList = this.searchList.slice(0, 20);
            }
        }
        else {
            this.showList = false;
        }
    };
    //method to append selected model number
    ReturnItemPage.prototype.getSelectedItem = function (item) {
        this.showList = false;
        this.returnForm.controls['model'].setValue(item);
    };
    //Method to save form 
    ReturnItemPage.prototype.receiveSubmit = function () {
        var _this = this;
        this.condRequired = false;
        this.reasonRequired = false;
        var saveReturnItem = this.opalService.baseUrl + this.opalService.saveReturnItem;
        var id = JSON.parse(localStorage.getItem("Id"));
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
        };
        if (this.returned == false) {
            this.opalService.present();
            this.opalService.ajaxCallService(saveReturnItem, "post", dataParam).then(function (result) {
                if (result == "Success") {
                    _this.opalService.presentToast('Item added back to inventory', 'success');
                    _this.eventLog = "Serial # " + _this.returnForm.value.serial + " added back to the inventory. \u2714" + '\n' + _this.eventLog;
                    _this.returnForm.reset();
                    _this.condRequired = false;
                    _this.reasonRequired = false;
                    _this.returnForm.controls['serial'].reset();
                    setTimeout(function () {
                        _this.serial.setFocus();
                    }, 500);
                }
                else {
                    _this.opalService.presentToast('Failed to save data. Please check connectivity and try again.', 'danger');
                    _this.eventLog = "Failed to save data. Please check connectivity and try again. \u2716" + '\n' + _this.eventLog;
                }
                _this.opalService.dismiss();
            });
        }
        else {
            this.opalService.presentToast('Item already returned.', 'danger');
            this.eventLog = "Item is already returned.\u2716" + '\n' + this.eventLog;
        }
    };
    //method to check model is empty
    ReturnItemPage.prototype.checkEmpty = function (e) {
        if (this.showList != false) {
            this.returnForm.controls['model'].reset();
        }
        else {
            this.showList = false;
        }
    };
    //Method to get 9 digit serial number 
    ReturnItemPage.prototype.getNine = function (evt) {
        var val = evt.target.value.toUpperCase();
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
            this.serialNo = val;
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            this.scanSerial(val);
            this.serialNo = val;
        }
    };
    //Method to go back to home page
    ReturnItemPage.prototype.backToHome = function () {
        var serial = this.returnForm.value.serial, model = this.returnForm.value.model, po = this.returnForm.value.po, condition = this.returnForm.value.condition, reason = this.returnForm.value.reason, notes = this.returnForm.value.notes;
        if ((po == "" || po == null) && (notes == "" || notes == null) &&
            (model == "" || model == null) && (serial == "" || serial == null) &&
            (condition == "" || condition == null) && (reason == "" || reason == null)) {
            this.routeTo.navigate(['/home']);
        }
        else {
            this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    };
    //Method to enable scanner
    ReturnItemPage.prototype.enableScanner = function () {
        this.scanned = false;
        // console.log("Focused");
    };
    //Method to reset form
    ReturnItemPage.prototype.formReset = function () {
        this.returnForm.reset();
        this.serial.setFocus();
        this.condRequired = false;
        this.reasonRequired = false;
        this.returned = false;
        this.scanned = false;
    };
    //Method to hide error messages
    ReturnItemPage.prototype.hideErrorMsg = function () {
        console.log("changed");
        this.condRequired = false;
        this.reasonRequired = false;
    };
    ReturnItemPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serial', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReturnItemPage.prototype, "serial", void 0);
    ReturnItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-return-item',
            template: __webpack_require__(/*! raw-loader!./return-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/return-item/return-item.page.html"),
            styles: [__webpack_require__(/*! ./return-item.page.scss */ "./src/app/return-item/return-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]])
    ], ReturnItemPage);
    return ReturnItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=return-item-return-item-module.js.map