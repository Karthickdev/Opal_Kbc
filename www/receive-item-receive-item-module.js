(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receive-item-receive-item-module"],{

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

/***/ "./src/app/receive-item/receive-item.page.html":
/*!*****************************************************!*\
  !*** ./src/app/receive-item/receive-item.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding>\n  <div text-uppercase text-center class=\"title\">Receive Item</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\n              [disabled]=\"!receiveForm.valid || autoSave == true\"\n              [style.cursor]=\"!receiveForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\n          </div> -->\n          <ion-buttons style=\"float: right;\">\n            <ion-button class=\"save-center\" type=\"submit\" [disabled]=\"!receiveForm.valid || autoSave == true\"\n              (click)=\"receiveSubmit()\">SAVE</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"receiveForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Batch</ion-label>\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"batch\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Container</ion-label>\n          <ion-input text-uppercase type=\"text\" formControlName=\"container\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            formControlName=\"model\" class=\"lab-font\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 20px\">\n            <ion-row>\n              <ion-label>{{item}}</ion-label>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\"\n            (ionInput)=\"getNine($event)\" (ionFocus)=\"checkEntry($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\"\n            text-uppercase required>\n          </ion-input>\n        </ion-item>\n        <!-- <div class=\"error-message\" *ngIf=\"errSerial\">Serial number already exist</div> -->\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-toolbar class=\"tool1\">\n    <ion-grid style=\"padding: 3% 5%\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <ion-toggle class=\"toggle-color\" color = \"primary\"></ion-toggle> -->\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\n          </label>\n        </ion-col>\n        <ion-col size=\"5\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/receive-item/receive-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/receive-item/receive-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px; }\n\n.header {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5; }\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff; }\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important; }\n\n.tool1 {\n  position: relative;\n  top: 1%; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #00BFCC; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL3JlY2VpdmUtaXRlbS9yZWNlaXZlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0JBQWdCO0VBQ2hCLHdCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNFLDhDQUEwRDtFQUMxRCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksb0NBQWlCLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usc0JBQWE7RUFDYiw4QkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTyxFQUFBOztBQUdUO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQ3hDLGtCQUFrQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQWUsYUFBWSxFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkE3SmlCLEVBQUE7O0FBZ0tuQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUdFLDJCQUEyQixFQUFBOztBQUc3QjtFQUVFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFpQixFQUFBOztBQUduQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0NBQStCO0VBQy9CLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdDQUFnQyxFQUFBOztBQUdsQztFQUNDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGFBQWEsRUFBQTs7QUFFZDtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXZlLWl0ZW0vcmVjZWl2ZS1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICMwMEJGQ0M7XG4kdGV4dC1jb2xvcjogIzA3MDcwNztcblxuLnJvdW5kIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5iYWNrLW1hcmd7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xufVxuXG4uY2xlYXItbWFyZ3tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzI5YzVjNTtcbn1cblxuLnNhdmUtY2VudGVye1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvcntcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbC1wb3N7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG59XG5cbi5yb3ctcGFkZHtcbiAgcGFkZGluZzogMC41JSAzJTtcbn1cblxuLmVycm9yLW1lc3NhZ2V7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNSU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRvb2wye1xuICAtLWJhY2tncm91bmQ6I0ZGRkZGRjAwO1xuICAtLWJvcmRlci13aWR0aCA6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9vbDF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxJTtcbn1cblxuLnNyY2Nyb2xse1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubGFiLWZvbnR7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmV2ZW50LWZvbnQtaXRhbGlje1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vblxue1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2Zme1xuICBwYWRkaW5nLWxlZnQ6MzNweDtcbn1cblxuLm9ue1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmZcbntcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXG57ZGlzcGxheTogYmxvY2s7fVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXG57ZGlzcGxheTogbm9uZTt9XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbiAgXG4ubWFyZ2luTDE1IHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
        //let serialNo = value == undefined ? this.receiveForm.value.serial : value;
        var serialNo = this.receiveForm.value.serial;
        var dataParam = {
            'batchNumber': this.receiveForm.value.batch.toUpperCase(),
            'containerNumber': this.receiveForm.value.container.toUpperCase(),
            'modelNumber': this.receiveForm.value.model,
            'serialNumber': serialNo.toUpperCase(),
            'createdBy': id['userId']
        };
        this.opalService.present();
        this.opalService.ajaxCallService(saveReceive, "post", dataParam).then(function (result) {
            if (result['message'] == 'Success') {
                _this.opalService.presentToast('Item added to inventory', 'success');
                _this.eventLog = 'Serial #' + serialNo + ' (' + model + ') added to inventory. \u2714' + '\n' + _this.eventLog;
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
        if (this.autoSave == true) {
            var batch = this.receiveForm.value.batch, model = this.receiveForm.value.model, serial = value;
            if (batch != "" && model != "" && serial != "") {
                this.receiveSubmit();
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
    ReceiveItemPage.prototype.checkEntry = function (evt) {
        //this.errSerial = false;
    };
    //Method to reset the form
    ReceiveItemPage.prototype.formReset = function () {
        this.receiveForm.reset();
        this.errSerial = false;
        this.batchInput.setFocus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("batch"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiveItemPage.prototype, "batchInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("serial"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReceiveItemPage.prototype, "serialInput", void 0);
    ReceiveItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-receive-item',
            template: __webpack_require__(/*! ./receive-item.page.html */ "./src/app/receive-item/receive-item.page.html"),
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