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

module.exports = "<ion-header no-padding>\n  <div text-uppercase text-center class=\"title\">Return Item</div>\n  <ion-toolbar>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center class=\"padd-left-0\">\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"receiveSubmit()\"\n              [disabled]=\"!returnForm.valid\" [style.cursor]=\"!returnForm.valid ? 'not-allowed' : 'pointer'\">Save\n            </ion-button>\n          </div> -->\n          <ion-buttons style=\"float: right\">\n            <ion-button class=\"save-center\" type=\"submit\" (click)=\"receiveSubmit()\" [disabled]=\"!returnForm.valid\"> SAVE\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right>\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\n            <ion-button style=\"font-size: 22px;color:#ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content no-padding>\n  <form [formGroup]=\"returnForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Serial<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-input #serial type=\"text\" formControlName=\"serial\" (ionFocus)=\"enableScanner()\"\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" maxLength=\"12\" text-uppercase clear-input=true\n            class=\"lab-font\" required>\n          </ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['serial']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('serial').hasError(validation['type']) && returnForm.get('serial').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" (ionBlur) = \"searchModel()\" (ionInput) = \"disableKey()\" required></ion-input> -->\n          <ion-input type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            class=\"lab-font\" formControlName=\"model\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 22px;\">\n            {{item}}\n          </ion-item>\n        </ion-list>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['model']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('model').hasError(validation['type']) && returnForm.get('model').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">PO</ion-label>\n          <ion-input type=\"text\" text-uppercase formControlName=\"po\" class=\"lab-font\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Condition<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-select formControlName=\"condition\" value=\"{{option1}}\"\n            (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\" okText=\"Done\" cancelText=\"Cancel\" class=\"lab-font\">\n            <ion-select-option *ngFor=\"let item of conditionList\" value=\"{{item.enumValue}}\">{{item.enumName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['condition']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('condition').hasError(validation['type']) && returnForm.get('condition').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n        <div class=\"error-message\" *ngIf=\"condRequired\">Condition is a required field</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Reason<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <ion-select formControlName=\"reason\" value=\"{{option2}}\" okText=\"Done\"\n            (ionChange)=\"hideErrorMsg()\" interface=\"action-sheet\"\n            cancelText=\"Cancel\" class=\"lab-font\">\n            <ion-select-option *ngFor=\"let item of reasonList\" value=\"{{item.enumValue}}\">{{item.enumName}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div class=\"error-message\" *ngIf=\"reasonRequired\">Reason is a required field</div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"lab-font\">Notes</ion-label>\n          <!-- <ion-input rows = \"3\" formControlName=\"notes\" class=\"lab-font\"></ion-input> -->\n          <ion-textarea rows=\"2\" formControlName=\"notes\" class=\"lab-font\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n  <ion-row class=\"marginTL10\">\n    <ion-col size=\"12\">\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item padding-horizontal>\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer [hidden]=\"keyboardOpen\">\n</ion-footer>"

/***/ }),

/***/ "./src/app/return-item/return-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/return-item/return-item.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('orangebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #fd433e;\n  font-size: initial;\n  font-size: 25px; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #d45e5a; }\n\n.save-center {\n  border-radius: 50%;\n  background: #e34844;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.tool-2-pos {\n  background: #dedede; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #FFFFFF00;\n  color: #fff; }\n\nion-toolbar {\n  --background: #ffFFFF00;\n  --border-width: 0px !important; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.input-has-focus {\n  color: #056075; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.select-text {\n  font-size: 25px !important; }\n\n.action-sheet-wrapper {\n  --max-width: 760px !important; }\n\n.sc-ion-action-sheet-ios {\n  color: red !important; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL3JldHVybi1pdGVtL3JldHVybi1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGdEQUE0RDtFQUM1RCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQUc5QjtFQUNJLG9CQUFnQjtFQUNoQix3QkFBaUI7RUFHakIsWUFBWTtFQUNaLFdBQVc7RUFFWCx5QkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUNGLEVBQUE7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFDRixFQUFBOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFHckIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsdUJBQWE7RUFDYiw4QkFBZ0IsRUFBQTs7QUFRbEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQzVDLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGNBQWUsRUFBQTs7QUFHbkI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsNkJBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXR1cm4taXRlbS9yZXR1cm4taXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBhNGU4O1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG4vLyAkbGFiZWwtbWQtdGV4dC1jb2xvci1mb2N1c2VkOiAjMDBhNGU4O1xuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL29yYW5nZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucm91bmQge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvLyBoZWlnaHQ6IDYwcHg7XG4gICAgLy8gd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIC8vIC0taW9uLWNvbG9yLWJhc2UgOiAjRkM2ODY0O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICNmZDQzM2U7XG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5iYWNrLW1hcmd7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDQ1ZTVhXG4gIH1cblxuICAuY2xlYXItbWFyZ3tcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMjUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZDQ1ZTVhXG4gIH1cblxuICAuc2F2ZS1jZW50ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICNlMzQ4NDQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAubGFiZWwtcG9ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE1JTtcbiAgfVxuXG4gIC5yb3ctcGFkZHtcbiAgICBwYWRkaW5nOiAwLjUlIDMlO1xuICB9XG5cbiAgLnRvb2wtMi1wb3N7XG4gICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xuICB9XG5cbiAgLmVycm9yLW1lc3NhZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUlO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGMDA7XG4gICAgLy8gbWFyZ2luOiAxJSAzMCU7XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZGRkZGMDA7XG4gICAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC8vIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgLy8gLS1taW4taGVpZ2h0OiAzMHB4O1xuICAgIC8vIGhlaWdodDogNzVweDtcbiAgICAvLyAtLWNvbG9yOiAjMDcwNzA3O1xuICB9XG5cbiAgLnNyY2Nyb2xse1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNyY2hndHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG4uaW5wdXQtaGFzLWZvY3Vze1xuICAgIGNvbG9yOiAjMDU2MDc1IDtcbn1cblxuLmxhYi1mb250e1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpY3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc2VsZWN0LXRleHR7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLXNoZWV0LXdyYXBwZXJ7XG4gIC0tbWF4LXdpZHRoOiA3NjBweCAhaW1wb3J0YW50O1xufVxuXG4uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDsgXG59XG5cbi5tYXJnaW5UTDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuICBcbi5tYXJnaW5MMTUge1xuICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"

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