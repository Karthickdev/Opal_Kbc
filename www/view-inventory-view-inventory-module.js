(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-inventory-view-inventory-module"],{

/***/ "./src/app/view-inventory/view-inventory.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/view-inventory/view-inventory.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewInventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInventoryPageModule", function() { return ViewInventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-inventory.page */ "./src/app/view-inventory/view-inventory.page.ts");







var routes = [
    {
        path: '',
        component: _view_inventory_page__WEBPACK_IMPORTED_MODULE_6__["ViewInventoryPage"]
    }
];
var ViewInventoryPageModule = /** @class */ (function () {
    function ViewInventoryPageModule() {
    }
    ViewInventoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_inventory_page__WEBPACK_IMPORTED_MODULE_6__["ViewInventoryPage"]]
        })
    ], ViewInventoryPageModule);
    return ViewInventoryPageModule;
}());



/***/ }),

/***/ "./src/app/view-inventory/view-inventory.page.html":
/*!*********************************************************!*\
  !*** ./src/app/view-inventory/view-inventory.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding style=\"height: 15%;\">\n  <div text-uppercase text-center class=\"title\">View Inventory</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left>\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"scanSubmit()\"\n              [disabled]=\"!scanForm.valid || autoSave == true\">Save</ion-button>\n          </div> -->\n          <!-- <ion-buttons style=\"float: right\">\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"scanSubmit()\"\n              >SAVE</ion-button>\n          </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right (click)=\"formReset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <form [formGroup]=\"returnForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" (ionBlur) = \"searchModel()\" (ionInput) = \"disableKey()\" required></ion-input> -->\n          <ion-input #model type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            class=\"lab-font\" formControlName=\"model\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 22px;\">\n            {{item}}\n          </ion-item>\n        </ion-list>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['model']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('model').hasError(validation['type']) && returnForm.get('model').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"showDetail\">\n    <ion-row class=\"row-padd\" >\n      <ion-col size=\"4\">\n        <ion-label>Item Name:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{itemName}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Quantity Availabel:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{quantity}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Quantity On-Order:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{quantityonOrder}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Bin Location:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{binLocation}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/view-inventory/view-inventory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/view-inventory/view-inventory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%; }\n\n.header {\n  background-image: url('greenbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #5d844b;\n  font-size: initial;\n  font-size: 25px; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 15%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px; }\n\n.clear-marg {\n  float: right;\n  position: relative;\n  top: 15%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px; }\n\n.save-center {\n  border-radius: 50%;\n  background: #8fb47c;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #d7e8cf !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 16%;\n  display: flex; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.toggle {\n  padding-left: 0;\n  text-align: center; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  color: #fff;\n  background: #00000000; }\n\n.icon {\n  font-size: 30px;\n  color: #000;\n  border-radius: 15%;\n  background: transparent; }\n\n.icon-label {\n  position: absolute;\n  left: 20%; }\n\n.tool2 {\n  --background:#00000000;\n  --border-width: 0px !important; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #C3DBB7; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL3ZpZXctaW52ZW50b3J5L3ZpZXctaW52ZW50b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNFLCtDQUEyRDtFQUMzRCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLG9CQUFnQjtFQUNoQix3QkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSxvQ0FBaUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFHYjtFQUNFLHNCQUFhO0VBQ2IsOEJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUFlLGFBQVksRUFBQTs7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLHVCQUF1QjtFQUV2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBL0lpQixFQUFBOztBQWtKbkI7RUFDRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFHRSwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdDQUErQjtFQUMvQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDQyxjQUFjLEVBQUE7O0FBRWY7RUFDQyxhQUFhLEVBQUE7O0FBRWQ7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDRSw0QkFBNEI7RUFDNUIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0ksNEJBQTRCO0VBQzVCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0Q0FBNEM7RUFDNUMsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWludmVudG9yeS92aWV3LWludmVudG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjQzNEQkI3O1xuJHRleHQtY29sb3I6ICMwNzA3MDc7XG5cbmlvbi1yb3d7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZ3JlZW5iZy5wbmdcIikhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnJvdW5kIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgLS1pb24tY29sb3ItYmFzZTogIzVkODQ0YjtcbiAgZm9udC1zaXplOiBpbml0aWFsO1xuICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAuYmFjay1tYXJne1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5MGJlOTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5jbGVhci1tYXJne1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTBiZTkwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuc2F2ZS1jZW50ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM4ZmI0N2M7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAudG9nZ2xlLWNvbG9ye1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogI2Q3ZThjZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmxhYmVsLXBvc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxNiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5yb3ctcGFkZHtcbiAgICBwYWRkaW5nOiAwLjUlIDMlO1xuICB9XG5cbiAgLnRvZ2dsZXtcbiAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDMzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG4gIH1cbiAgXG4gIC5pY29ue1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNSU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pY29uLWxhYmVse1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMCU7XG59XG5cbi50b29sMntcbiAgLS1iYWNrZ3JvdW5kOiMwMDAwMDAwMDtcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxhYi1mb250e1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ldmVudC1mb250e1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpY3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9XG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRidG4tY29sb3I7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcbn1cblxuLm9ue1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2Zme1xuICBwYWRkaW5nLWxlZnQ6MzNweDtcbn1cblxuLm9ue1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmZcbntcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXG57ZGlzcGxheTogYmxvY2s7fVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXG57ZGlzcGxheTogbm9uZTt9XG5cbi5zbGlkZXIucm5kIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLnNsaWRlci5ybmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbiAgXG4ubWFyZ2luTDE1IHtcbiAgICBtYXJnaW4tbGVmdDogMzVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3JjY3JvbGx7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc3JjaGd0e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-inventory/view-inventory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-inventory/view-inventory.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewInventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInventoryPage", function() { return ViewInventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");







var ViewInventoryPage = /** @class */ (function () {
    function ViewInventoryPage(formBuilder, routeTo, opalService, alert, keyboard, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.alert = alert;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.showList = false;
        this.searchList = [];
        this.showDetail = false;
        this.validation_messages = {
            'model': [
                { type: 'required', message: 'Model is a required field.' },
            ]
        };
        this.returnForm = this.formBuilder.group({
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ViewInventoryPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.model.setFocus();
        }, 500);
    };
    ViewInventoryPage.prototype.ngOnInit = function () {
    };
    //Method to search model
    ViewInventoryPage.prototype.searchModel = function (ev) {
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
    ViewInventoryPage.prototype.checkEmpty = function (e) {
        if (this.showList != false) {
            this.returnForm.controls['model'].reset();
        }
        else {
            this.showList = false;
        }
    };
    ViewInventoryPage.prototype.getSelectedItem = function (item) {
        this.showList = false;
        this.returnForm.controls['model'].setValue(item);
        this.getInventory(item);
    };
    ViewInventoryPage.prototype.getInventory = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, inventory, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: "bubbles"
                        })];
                    case 1:
                        loading = _a.sent();
                        inventory = this.opalService.baseUrl + this.opalService.viewInventory;
                        console.log(inventory);
                        data = {
                            ItemName: item
                        };
                        loading.present();
                        this.opalService.ajaxCallService(inventory, "post", data).then(function (resp) {
                            _this.inventory = resp;
                            if (_this.inventory.status == "Success") {
                                _this.showDetail = true;
                                _this.itemDetails = _this.inventory.item;
                                _this.itemName = _this.itemDetails.itemName;
                                _this.quantity = _this.itemDetails.quantityAvailable;
                                _this.quantityonOrder = _this.itemDetails.quantityOnOrder;
                                _this.binLocation = _this.itemDetails.binLocation;
                                loading.dismiss();
                            }
                            else {
                                _this.opalService.presentToast(_this.inventory.message, "danger");
                                loading.dismiss();
                            }
                        }, function (err) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewInventoryPage.prototype.backToHome = function () {
        this.routeTo.navigate(['/home']);
    };
    ViewInventoryPage.prototype.formReset = function () {
        this.returnForm.reset();
        this.showDetail = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('model'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewInventoryPage.prototype, "model", void 0);
    ViewInventoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-inventory',
            template: __webpack_require__(/*! ./view-inventory.page.html */ "./src/app/view-inventory/view-inventory.page.html"),
            styles: [__webpack_require__(/*! ./view-inventory.page.scss */ "./src/app/view-inventory/view-inventory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], ViewInventoryPage);
    return ViewInventoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-inventory-view-inventory-module.js.map