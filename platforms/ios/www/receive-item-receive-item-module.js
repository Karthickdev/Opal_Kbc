(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receive-item-receive-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/receive-item/receive-item.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/receive-item/receive-item.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding class=\"header\">\n  <div text-uppercase text-center class=\"title\">Receive Item</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\n              [disabled]=\"!receiveForm.valid || autoSave == true\"\n              [style.cursor]=\"!receiveForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\n          </div> -->\n          <ion-buttons style=\"float: right;\">\n            <ion-button class=\"save-center\" type=\"submit\" [disabled]=\"!receiveForm.valid || autoSave == true\"\n              (click)=\"receiveSubmit()\">SAVE</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"receiveForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Batch</ion-label>\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"batch\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Container</ion-label>\n          <ion-input text-uppercase type=\"text\" formControlName=\"container\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            formControlName=\"model\" class=\"lab-font\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 20px\">\n            <ion-row>\n              <ion-label>{{item}}</ion-label>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\"\n            (ionInput)=\"getNine($event)\" (ionFocus)=\"checkEntry($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\"\n            text-uppercase required>\n          </ion-input>\n        </ion-item>\n        <!-- <div class=\"error-message\" *ngIf=\"errSerial\">Serial number already exist</div> -->\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <ion-toggle class=\"toggle-color\" color = \"primary\"></ion-toggle> -->\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/receive-item/receive-item.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/receive-item/receive-item.module.ts ***!
  \*****************************************************/
/*! exports provided: ReceiveItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveItemPageModule", function() { return ReceiveItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _receive_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receive-item.page */ "./src/app/receive-item/receive-item.page.ts");







var routes = [
    {
        path: '',
        component: _receive_item_page__WEBPACK_IMPORTED_MODULE_6__["ReceiveItemPage"]
    }
];
var ReceiveItemPageModule = /** @class */ (function () {
    function ReceiveItemPageModule() {
    }
    ReceiveItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_receive_item_page__WEBPACK_IMPORTED_MODULE_6__["ReceiveItemPage"]]
        })
    ], ReceiveItemPageModule);
    return ReceiveItemPageModule;
}());



/***/ }),

/***/ "./src/app/receive-item/receive-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/receive-item/receive-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.header {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 15%;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff;\n}\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important;\n}\n\n.tool1 {\n  position: relative;\n  top: 1%;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #00BFCC;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvcmVjZWl2ZS1pdGVtL3JlY2VpdmUtaXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlY2VpdmUtaXRlbS9yZWNlaXZlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNFLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDSSxvQ0FBQTtBQ0ZKOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNJLGtCQUFBO0FDRk47O0FES0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFBZSxhQUFBO0FDRGY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkE3SlU7QUM2Slo7O0FER0E7RUFDRSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFFQSwyQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNGRjs7QURLQTtFQUNDLGNBQUE7QUNGRDs7QURJQTtFQUNDLGFBQUE7QUNERDs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0UsNEJBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSwwQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcmVjZWl2ZS1pdGVtL3JlY2VpdmUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbi5yb3VuZCB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDg4MDg4O1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmx1ZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uYmFjay1tYXJne1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLmNsZWFyLW1hcmd7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyOWM1YzU7XG59XG5cbi5zYXZlLWNlbnRlcntcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDdhZWJhO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50b2dnbGUtY29sb3J7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzAwQkZDQyAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtcG9ze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTUlO1xufVxuXG4ucm93LXBhZGR7XG4gIHBhZGRpbmc6IDAuNSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi50b29sMntcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGRkYwMDtcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnRvb2wxe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMSU7XG59XG5cbi5zcmNjcm9sbHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNyY2hndHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxhYi1mb250e1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpY3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub25cbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZntcbiAgcGFkZGluZy1sZWZ0OjMzcHg7XG59XG5cbi5vbntcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkKyAuc2xpZGVyIC5vblxue2Rpc3BsYXk6IGJsb2NrO31cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZlxue2Rpc3BsYXk6IG5vbmU7fVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4gIFxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSIsIi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JsdWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmcge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLmNsZWFyLW1hcmcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uc2F2ZS1jZW50ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMwMEJGQ0MgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZCB7XG4gIHBhZGRpbmc6IDAuNSUgMyU7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQkZDQztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2ZmIHtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xufVxuXG4ub24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/receive-item/receive-item.page.ts":
/*!***************************************************!*\
  !*** ./src/app/receive-item/receive-item.page.ts ***!
  \***************************************************/
/*! exports provided: ReceiveItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveItemPage", function() { return ReceiveItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");







var ReceiveItemPage = /** @class */ (function () {
    function ReceiveItemPage(formBuilder, routeTo, opalService, keyboard, nativeAudio) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.keyboard = keyboard;
        this.nativeAudio = nativeAudio;
        this.autoSave = false;
        this.modelList = [];
        this.keyboardOpen = false;
        this.eventLog = "";
        //DO NOT delete as we may have to reanable these later. 
        this.validation_messages = {
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
        };
        this.receiveForm = this.formBuilder.group({
            batch: [''],
            container: [''],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            serial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, { updateOn: 'blur' });
    }
    ReceiveItemPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.batchInput.setFocus();
        }, 400);
        this.nativeAudio.preloadSimple('errorBeep', 'assets/audio/error.mp3');
        this.nativeAudio.preloadSimple('successBeep', 'assets/audio/scan.mp3');
    };
    ReceiveItemPage.prototype.ngOnInit = function () { };
    ReceiveItemPage.prototype.ionViewDidEnter = function () {
        this.opalService.getAllModelList();
    };
    //Method to search model
    ReceiveItemPage.prototype.searchModel = function (ev) {
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
    //Method to check if serial number is exist
    ReceiveItemPage.prototype.scanSerial = function (value) {
        var _this = this;
        var serialScan = this.opalService.baseUrl + this.opalService.receiveSerialScan;
        var dataParam = {
            'serialNumber': value,
        };
        this.opalService.present();
        this.opalService.ajaxCallService(serialScan, "post", dataParam).then(function (result) {
            if (result['verified'] == true) {
                _this.opalService.presentToast(result['message'], "danger");
                // this.eventLog = 'Serial # ' + value + ' (' + result['modelNumber'] + ') : Already exists \u2716' + '\n' + this.eventLog;
                _this.eventLog = 'Serial # ' + value + ' ' + result['message'] + '\n' + _this.eventLog;
                _this.errSerial = true;
                _this.receiveForm.controls['serial'].reset();
                _this.nativeAudio.play('errorBeep');
                setTimeout(function () {
                    _this.serialInput.setFocus();
                }, 300);
            }
            else {
                _this.serialNo = value;
                _this.autoSaveSerial(value);
            }
            _this.opalService.dismiss();
        });
    };
    //method to check nine
    ReceiveItemPage.prototype.checkNine = function (evt) {
        var val = evt.target.value;
        if (val.length < 9 && val.length != 0) {
            this.opalService.presentToast("Serial number should have at least 9 digits", "danger");
            this.eventLog = 'Serial # ' + val + ' : Should have at least 9 digits \u2716' + '\n' + this.eventLog;
            this.nativeAudio.play('errorBeep');
        }
    };
    //Method to set selected value in model search
    ReceiveItemPage.prototype.getSelectedItem = function (item) {
        this.showList = false;
        // this.isSelected = true;
        this.receiveForm.controls['model'].setValue(item);
    };
    //Method to save receive item details
    ReceiveItemPage.prototype.receiveSubmit = function () {
        var _this = this;
        var saveReceive = this.opalService.baseUrl + this.opalService.saveReceive;
        var id = JSON.parse(localStorage.getItem("Id"));
        var model = this.receiveForm.controls['model'].value;
        // if(this.autoSave == false){
        //   this.serialNo = this.receiveForm.controls['serial'].value;
        // }
        var dataParam = {
            'batchNumber': this.receiveForm.value.batch.toUpperCase(),
            'containerNumber': this.receiveForm.value.container.toUpperCase(),
            'modelNumber': this.receiveForm.value.model,
            'serialNumber': this.serialNo.toUpperCase(),
            'createdBy': id['userId']
        };
        this.opalService.present();
        this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(function (result) {
            if (result['message'] == 'Success') {
                _this.opalService.presentToast('Item added to inventory', 'success');
                _this.eventLog = 'Serial #' + _this.serialNo + ' (' + model + ') added to inventory. \u2714' + '\n' + _this.eventLog;
                _this.nativeAudio.play('successBeep');
                _this.receiveForm.controls['serial'].reset();
                setTimeout(function () {
                    _this.serialInput.setFocus();
                }, 700);
                _this.opalService.dismiss();
            }
            else if (result['message'] == 'Fail') {
                _this.opalService.presentToast('Error occured while saving item details. Please try again.', 'danger');
                _this.eventLog = 'Error occured while saving item details. Please try again.\u2716' + '\n' + _this.eventLog;
                _this.nativeAudio.play('errorBeep');
                _this.opalService.dismiss();
            }
            else {
                _this.opalService.presentToast(result['message'], 'danger');
                _this.eventLog = result['message'] + '\n' + _this.eventLog;
                _this.nativeAudio.play('errorBeep');
                _this.opalService.dismiss();
            }
        });
    };
    //Method to check and uncheck
    ReceiveItemPage.prototype.isChecked = function ($event, check) {
        if (check == true) {
            this.autoSave = true;
        }
        else {
            this.autoSave = false;
        }
    };
    //check if model is empty
    ReceiveItemPage.prototype.checkEmpty = function (e) {
        if (this.showList != false) {
            this.receiveForm.controls['model'].setValue("");
        }
        else {
            this.showList = false;
        }
    };
    //Auto save method
    ReceiveItemPage.prototype.autoSaveSerial = function (value) {
        var _this = this;
        if (this.autoSave == true) {
            var batch = this.receiveForm.value.batch, model = this.receiveForm.value.model, serial = value;
            if (batch != "" && model != "" && serial != "") {
                setTimeout(function () {
                    _this.receiveSubmit();
                }, 300);
            }
        }
    };
    //Method to go back to home page
    ReceiveItemPage.prototype.backToHome = function () {
        var batch = this.receiveForm.value.batch, container = this.receiveForm.value.container, model = this.receiveForm.value.model, serial = this.receiveForm.value.serial;
        if ((batch == "" || batch == null) && (container == "" || container == null) &&
            (model == "" || model == null) && (serial == "" || serial == null)) {
            this.routeTo.navigate(['/home']);
        }
        else {
            this.opalService.presentToast("There is unsaved data in the form, either save or clear the form.", "danger");
        }
    };
    //Method to get 9 digit serial number 
    ReceiveItemPage.prototype.getNine = function (evt) {
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
    ReceiveItemPage.prototype.checkEntry = function (evt) {
        //this.errSerial = false;
    };
    //Method to reset the form
    ReceiveItemPage.prototype.formReset = function () {
        this.receiveForm.reset();
        this.errSerial = false;
        this.batchInput.setFocus();
    };
    ReceiveItemPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] },
        { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeAudio"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("batch", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiveItemPage.prototype, "batchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("serial", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiveItemPage.prototype, "serialInput", void 0);
    ReceiveItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receive-item',
            template: __webpack_require__(/*! raw-loader!./receive-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/receive-item/receive-item.page.html"),
            styles: [__webpack_require__(/*! ./receive-item.page.scss */ "./src/app/receive-item/receive-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"],
            _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeAudio"]])
    ], ReceiveItemPage);
    return ReceiveItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=receive-item-receive-item-module.js.map