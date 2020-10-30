(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-item-return-item-module"],{

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

/***/ "./src/app/return-item/return-item.page.html":
/*!***************************************************!*\
  !*** ./src/app/return-item/return-item.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding>\r\n  <div text-uppercase text-center class=\"title\">Return Item</div>\r\n  <ion-toolbar>\r\n    <ion-grid no-padding>\r\n      <ion-row>\r\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\r\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\" text-center class=\"padd-left-0\">\r\n          <!-- <div style=\"display: inline-block\">\r\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\r\n              [disabled]=\"!returnForm.valid\" [style.cursor]=\"!returnForm.valid ? 'not-allowed' : 'pointer'\">Save\r\n            </ion-button>\r\n          </div> -->\r\n          <ion-buttons style=\"float: right\">\r\n            <ion-button class=\"save-center\" type=\"submit\" (click)=\"receiveSubmit()\" [disabled]=\"!returnForm.valid\"> SAVE\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"4\" text-right>\r\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\r\n            <ion-button style=\"font-size: 22px;color:#ffffff\">CLEAR</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form [formGroup]=\"returnForm\">\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Serial<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <ion-input #serial type=\"text\" formControlName=\"serial\" (ionFocus)=\"enableScanner()\"\r\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" maxLength=\"12\" text-uppercase clear-input=true\r\n            class=\"lab-font\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <div *ngFor=\"let validation of validation_messages['serial']\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"returnForm.get('serial').hasError(validation['type']) && returnForm.get('serial').touched\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Model<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <!-- <ion-input type = \"text\" formControlName=\"model\" (ionBlur) = \"searchModel()\" (ionInput) = \"disableKey()\" required></ion-input> -->\r\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\r\n            class=\"lab-font\" formControlName=\"model\"></ion-input>\r\n        </ion-item>\r\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\r\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 22px;\">\r\n            {{item}}\r\n          </ion-item>\r\n        </ion-list>\r\n        <div class=\"validation-errors\">\r\n          <div *ngFor=\"let validation of validation_messages['model']\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"returnForm.get('model').hasError(validation['type']) && returnForm.get('model').touched\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">PO</ion-label>\r\n          <ion-input type=\"text\" text-uppercase formControlName=\"po\" class=\"lab-font\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Condition<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <ion-select formControlName=\"condition\" value=\"{{option1}}\" [interfaceOptions]=\"customActionSheetOptions\"\r\n            (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\" okText=\"Done\" cancelText=\"Cancel\" class=\"lab-font\">\r\n            <ion-select-option *ngFor=\"let item of conditionList\" value=\"{{item.enumValue}}\">{{item.enumName}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <div *ngFor=\"let validation of validation_messages['condition']\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"returnForm.get('condition').hasError(validation['type']) && returnForm.get('condition').touched\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"error-message\" *ngIf=\"condRequired\">Condition is a required field</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">Reason<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <ion-select formControlName=\"reason\" value=\"{{option2}}\" okText=\"Done\"\r\n            [interfaceOptions]=\"customActionSheetOptions\" (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\"\r\n            cancelText=\"Cancel\" class=\"lab-font\">\r\n            <ion-select-option *ngFor=\"let item of reasonList\" value=\"{{item.enumValue}}\">{{item.enumName}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <div class=\"error-message\" *ngIf=\"reasonRequired\">Reason is a required field</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" class=\"lab-font\">Notes</ion-label>\r\n          <!-- <ion-input rows = \"3\" formControlName=\"notes\" class=\"lab-font\"></ion-input> -->\r\n          <ion-textarea rows=\"2\" formControlName=\"notes\" class=\"lab-font\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  <ion-row class=\"marginTL10\">\r\n    <ion-col size=\"12\">\r\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-item padding-horizontal>\r\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer [hidden]=\"keyboardOpen\">\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/return-item/return-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/return-item/return-item.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('orangebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #fd433e;\n  font-size: initial;\n  font-size: 25px; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a; }\n\n.save-center {\n  border-radius: 50%;\n  background: #e34844;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.tool-2-pos {\n  background: #dedede; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #FFFFFF00;\n  color: #fff; }\n\nion-toolbar {\n  --background: #ffFFFF00;\n  --border-width: 0px !important; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.input-has-focus {\n  color: #056075; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.select-text {\n  font-size: 25px !important; }\n\n.action-sheet-wrapper {\n  --max-width: 760px !important; }\n\n.sc-ion-action-sheet-ios {\n  color: red !important; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0dXJuLWl0ZW0vRTpcXEthcnRoaWNrXFxpb25pY1Byb2plY3RzXFxPcGFsS0JDL3NyY1xcYXBwXFxyZXR1cm4taXRlbVxccmV0dXJuLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZ0RBQTREO0VBQzVELDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0ksb0JBQWdCO0VBQ2hCLHdCQUFpQjtFQUdqQixZQUFZO0VBQ1osV0FBVztFQUVYLHlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0MsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUdyQixXQUFXLEVBQUE7O0FBR2I7RUFDRSx1QkFBYTtFQUNiLDhCQUFnQixFQUFBOztBQVFsQjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksY0FBZSxFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSw2QkFBWSxFQUFBOztBQUdkO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JldHVybi1pdGVtL3JldHVybi1pdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRidG4tY29sb3I6ICMwMGE0ZTg7XHJcbiR0ZXh0LWNvbG9yOiAjMDcwNzA3O1xyXG4vLyAkbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiAjMDBhNGU4O1xyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL29yYW5nZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucm91bmQge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAvLyBoZWlnaHQ6IDYwcHg7XHJcbiAgICAvLyB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgLy8gLS1pb24tY29sb3ItYmFzZSA6ICNGQzY4NjQ7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjZmQ0MzNlO1xyXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2stbWFyZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkNDVlNWFcclxuICB9XHJcblxyXG4gIC5jbGVhci1tYXJne1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Q0NWU1YVxyXG4gIH1cclxuXHJcbiAgLnNhdmUtY2VudGVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2UzNDg0NDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAubGFiZWwtcG9ze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNSU7XHJcbiAgfVxyXG5cclxuICAucm93LXBhZGR7XHJcbiAgICBwYWRkaW5nOiAwLjUlIDMlO1xyXG4gIH1cclxuXHJcbiAgLnRvb2wtMi1wb3N7XHJcbiAgIGJhY2tncm91bmQ6ICNkZWRlZGU7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMDA7XHJcbiAgICAvLyBtYXJnaW46IDElIDMwJTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZkZGRkYwMDtcclxuICAgIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC8vIC0tbWluLWhlaWdodDogMzBweDtcclxuICAgIC8vIGhlaWdodDogNzVweDtcclxuICAgIC8vIC0tY29sb3I6ICMwNzA3MDc7XHJcbiAgfVxyXG5cclxuICAuc3JjY3JvbGx7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5zcmNoZ3R7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWhhcy1mb2N1c3tcclxuICAgIGNvbG9yOiAjMDU2MDc1IDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmV2ZW50LWZvbnR7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udC1pdGFsaWN7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNlbGVjdC10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aW9uLXNoZWV0LXdyYXBwZXJ7XHJcbiAgLS1tYXgtd2lkdGg6IDc2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm1hcmdpbkwxNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

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
            'serialNumber': this.returnForm.value.serial.toUpperCase(),
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
        }
        else if (val.length == 12 && !/^[0-9]+$/.test(val)) {
            this.scanSerial(val);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('serial'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReturnItemPage.prototype, "serial", void 0);
    ReturnItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-return-item',
            template: __webpack_require__(/*! ./return-item.page.html */ "./src/app/return-item/return-item.page.html"),
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