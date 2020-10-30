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

module.exports = "<ion-header no-padding>\r\n  <div text-uppercase text-center class=\"title\">Receive Item</div>\r\n  <ion-toolbar class=\"tool2\">\r\n    <ion-grid no-padding>\r\n      <ion-row>\r\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\r\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <!-- <div style=\"display: inline-block\">\r\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\r\n              [disabled]=\"!receiveForm.valid || autoSave == true\"\r\n              [style.cursor]=\"!receiveForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\r\n          </div> -->\r\n          <ion-buttons style=\"float: right;\">\r\n            <ion-button class=\"save-center\" type=\"submit\" [disabled]=\"!receiveForm.valid || autoSave == true\"\r\n              (click)=\"receiveSubmit()\">SAVE</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"4\" text-right>\r\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form [formGroup]=\"receiveForm\">\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Batch</ion-label>\r\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"batch\" class=\"lab-font\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Container</ion-label>\r\n          <ion-input text-uppercase type=\"text\" formControlName=\"container\" class=\"lab-font\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\r\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\r\n            formControlName=\"model\" class=\"lab-font\"></ion-input>\r\n        </ion-item>\r\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\r\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 20px\">\r\n            <ion-row>\r\n              <ion-label>{{item}}</ion-label>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Serial<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\"\r\n            (ionInput)=\"getNine($event)\" (ionFocus)=\"checkEntry($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\"\r\n            text-uppercase required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <!-- <div class=\"error-message\" *ngIf=\"errSerial\">Serial number already exist</div> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  <ion-toolbar class=\"tool1\">\r\n    <ion-grid style=\"padding: 3% 5%\">\r\n      <ion-row>\r\n        <ion-col size=\"5\">\r\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <!-- <ion-toggle class=\"toggle-color\" color = \"primary\"></ion-toggle> -->\r\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\r\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\r\n          </label>\r\n        </ion-col>\r\n        <ion-col size=\"5\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <ion-row class=\"marginTL10\">\r\n    <ion-col size=\"12\">\r\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-item padding-horizontal>\r\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/receive-item/receive-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/receive-item/receive-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #088088;\n  font-size: initial;\n  font-size: 25px; }\n\n.header {\n  background-image: url('bluebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #29c5c5; }\n\n.save-center {\n  border-radius: 50%;\n  background: #07aeba;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff; }\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important; }\n\n.tool1 {\n  position: relative;\n  top: 1%; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #00BFCC; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjZWl2ZS1pdGVtL0U6XFxLYXJ0aGlja1xcaW9uaWNQcm9qZWN0c1xcT3BhbEtCQy9zcmNcXGFwcFxccmVjZWl2ZS1pdGVtXFxyZWNlaXZlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksb0JBQWdCO0VBQ2hCLHdCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNFLDhDQUEwRDtFQUMxRCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksb0NBQWlCLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usc0JBQWE7RUFDYiw4QkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTyxFQUFBOztBQUdUO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQ3hDLGtCQUFrQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQWUsYUFBWSxFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkE3SmlCLEVBQUE7O0FBZ0tuQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFFRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsYUFBYSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlY2VpdmUtaXRlbS9yZWNlaXZlLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogIzAwQkZDQztcclxuJHRleHQtY29sb3I6ICMwNzA3MDc7XHJcblxyXG4ucm91bmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIC0taW9uLWNvbG9yLWJhc2U6ICMwODgwODg7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ibHVlYmcucG5nXCIpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrLW1hcmd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uY2xlYXItbWFyZ3tcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjljNWM1O1xyXG59XHJcblxyXG4uc2F2ZS1jZW50ZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwN2FlYmE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi50b2dnbGUtY29sb3J7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1wb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG59XHJcblxyXG4ucm93LXBhZGR7XHJcbiAgcGFkZGluZzogMC41JSAzJTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvb2wye1xyXG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XHJcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2wxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDElO1xyXG59XHJcblxyXG4uc3JjY3JvbGx7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc3JjaGd0e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udC1pdGFsaWN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjVweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjhweDtcclxuICB3aWR0aDogMjhweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1jb2xvcjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XHJcbn1cclxuXHJcbi5vblxyXG57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9mZntcclxuICBwYWRkaW5nLWxlZnQ6MzNweDtcclxufVxyXG5cclxuLm9ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5vbiwgLm9mZlxyXG57XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXHJcbntkaXNwbGF5OiBibG9jazt9XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXHJcbntkaXNwbGF5OiBub25lO31cclxuXHJcbi5zbGlkZXIucm5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLm1hcmdpblRMMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgXHJcbi5tYXJnaW5MMTUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

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
    ReceiveItemPage.prototype.receiveSubmit = function (value) {
        var _this = this;
        var saveReceive = this.opalService.baseUrl + this.opalService.saveReceive;
        var id = JSON.parse(localStorage.getItem("Id"));
        var model = this.receiveForm.controls['model'].value;
        var serialNo = value == undefined ? this.receiveForm.value.serial : value;
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
                this.receiveSubmit(value);
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