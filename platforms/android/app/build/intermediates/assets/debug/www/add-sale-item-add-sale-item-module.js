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

module.exports = "<ion-header no-padding>\r\n  <div text-uppercase text-center class=\"title\">Add Sale Item</div>\r\n  <ion-toolbar class=\"tool2\">\r\n    <ion-grid no-padding>\r\n      <ion-row>\r\n        <ion-col size=\"4\" text-left class=\"padd-left-0\">\r\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <!-- <div style=\"display: inline-block\">\r\n           <ion-buttons (click)=\"addSaleSubmit()\">\r\n            <ion-button type=\"submit\" class=\"round\" color=\"save\" [disabled]=\"!addSaleForm.valid || autoSave == true\"\r\n            [style.cursor]=\"!addSaleForm.valid ? 'not-allowed' : 'pointer'\">Save</ion-button>\r\n           </ion-buttons>\r\n          </div> -->\r\n          <ion-buttons style=\"float: right\">\r\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"addSaleSubmit()\"\r\n              [disabled]=\"!addSaleForm.valid || autoSave == true\"> SAVE</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col size=\"1\"></ion-col>\r\n        <ion-col size=\"4\" text-right>\r\n          <ion-buttons class=\"clear-marg\" (click)=\"formReset()\">\r\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content no-padding>\r\n  <form [formGroup]=\"addSaleForm\">\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">\r\n            Serial<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <ion-input #serial type=\"text\" formControlName=\"serial\" minLength=\"9\" maxLength=\"12\" text-uppercase\r\n            (ionInput)=\"getNine($event)\" (ionBlur)=\"checkNine($event)\" class=\"lab-font\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-message\" *ngIf=\"errSerial\">Serial number not available</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Model<ion-note style=\"color: red\">*</ion-note>\r\n          </ion-label>\r\n          <!-- <ion-input type = \"text\" formControlName=\"model\" required></ion-input> -->\r\n          <ion-input type=\"search\" text-uppercase formControlName=\"model\" class=\"lab-font\" readonly></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row-padd\">\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font lab-color\">Customer Name / PO</ion-label>\r\n          <ion-input #batch text-uppercase type=\"text\" formControlName=\"customerPO\" class=\"lab-font\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n  <ion-toolbar class=\"tool1\">\r\n    <ion-grid style=\"padding: 3% 5%\">\r\n      <ion-row>\r\n        <ion-col size=\"5\">\r\n          <ion-label class=\"lab-font\">Auto Save</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" text-center>\r\n          <label class=\"switch\"><input type=\"checkbox\" [(ngModel)]=\"checked\" (change)=\"isChecked($event, checked)\">\r\n            <div class=\"slider rnd\"><span class=\"on\">ON</span><span class=\"off\">OFF</span></div>\r\n          </label>\r\n        </ion-col>\r\n        <ion-col size=\"5\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n  <ion-row class=\"marginTL10\">\r\n    <ion-col size=\"12\">\r\n      <ion-label position=\"stacked\" class=\"event-font marginTL10\">Event Log</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-item padding-horizontal>\r\n        <ion-textarea rows=\"3\" [readonly]='true' [(ngModel)]=\"eventLog\" class=\"event-font-italic\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/add-sale-item/add-sale-item.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-sale-item/add-sale-item.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #268387;\n  font-size: initial;\n  font-size: 25px; }\n\n.header {\n  background-image: url('cyanbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat; }\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2; }\n\n.clear-marg {\n  background: transparent;\n  float: right;\n  position: relative;\n  top: 25%;\n  padding: 10px;\n  border-radius: 10px;\n  background: #589fa2; }\n\n.save-center {\n  border-radius: 50%;\n  background: #359ca1;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%; }\n\n.toggle-color {\n  --ion-color-base: #00BFCC !important; }\n\n.label-pos {\n  position: absolute;\n  bottom: 15%; }\n\n.row-padd {\n  padding: 0.5% 3%; }\n\n.error-message {\n  position: absolute;\n  left: 5%;\n  color: red;\n  font-size: 15px; }\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  background: #00000000;\n  color: #fff; }\n\n.tool2 {\n  --background:#FFFFFF00;\n  --border-width: 0px !important; }\n\n.tool1 {\n  position: relative;\n  top: 1%; }\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.event-font {\n  font-size: 16px; }\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic; }\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px; }\n\n.switch input {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #00BFCC; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px); }\n\n.on {\n  display: none; }\n\n.off {\n  padding-left: 33px; }\n\n.on {\n  padding-right: 25px; }\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif; }\n\ninput:checked + .slider .on {\n  display: block; }\n\ninput:checked + .slider .off {\n  display: none; }\n\n.slider.rnd {\n  border-radius: 16px; }\n\n.slider.rnd:before {\n  border-radius: 14px; }\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important; }\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXNhbGUtaXRlbS9FOlxcS2FydGhpY2tcXGlvbmljUHJvamVjdHNcXE9wYWxLQkMvc3JjXFxhcHBcXGFkZC1zYWxlLWl0ZW1cXGFkZC1zYWxlLWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usb0JBQWdCO0VBQ2hCLHdCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDhDQUEwRDtFQUMxRCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0ksb0NBQWlCLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usc0JBQWE7RUFDYiw4QkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTyxFQUFBOztBQUdUO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNENBQTRDO0VBQ3hDLGtCQUFrQixFQUFBOztBQUV4QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDRDQUE0QztFQUM1QyxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQWUsYUFBWSxFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHNCQUFzQjtFQUV0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsdUJBQXVCO0VBRXZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkE1SmlCLEVBQUE7O0FBK0puQjtFQUNFLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdDQUErQjtVQUEvQixnQ0FBK0I7RUFDL0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsYUFBYSxFQUFBOztBQUVkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0UsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLDRCQUE0QjtFQUM1QiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkZC1zYWxlLWl0ZW0vYWRkLXNhbGUtaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnRuLWNvbG9yOiAjMDBCRkNDO1xyXG4kdGV4dC1jb2xvcjogIzA3MDcwNztcclxuXHJcbi5yb3VuZCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiAjMjY4Mzg3O1xyXG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jeWFuYmcucG5nXCIpIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5iYWNrLW1hcmd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNTg5ZmEyO1xyXG59XHJcblxyXG4uY2xlYXItbWFyZ3tcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjUlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjNTg5ZmEyO1xyXG59XHJcblxyXG4uc2F2ZS1jZW50ZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMzNTljYTE7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi50b2dnbGUtY29sb3J7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMDBCRkNDICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1wb3N7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG59XHJcblxyXG4ucm93LXBhZGR7XHJcbiAgcGFkZGluZzogMC41JSAzJTtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvb2wye1xyXG4gIC0tYmFja2dyb3VuZDojRkZGRkZGMDA7XHJcbiAgLS1ib3JkZXItd2lkdGggOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2wxe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDElO1xyXG59XHJcblxyXG4uc3JjY3JvbGx7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5zcmNoZ3R7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZSA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGFiLWZvbnR7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZXZlbnQtZm9udHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ldmVudC1mb250LWl0YWxpY3tcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB0b3A6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcclxufVxyXG5cclxuLm9uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ub2Zme1xyXG4gIHBhZGRpbmctbGVmdDozM3B4O1xyXG59XHJcblxyXG4ub257XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLm9uLCAub2ZmXHJcbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cclxue2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcclxue2Rpc3BsYXk6IG5vbmU7fVxyXG5cclxuLnNsaWRlci5ybmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWFyZ2luVEwxMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLm1hcmdpbkwxNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

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
                this.addSaleSubmit(value);
            }
        }
    };
    //Method to save receive item details
    AddSaleItemPage.prototype.addSaleSubmit = function (value) {
        var _this = this;
        var saveReceive = this.opalService.baseUrl + this.opalService.saleSave;
        var id = JSON.parse(localStorage.getItem("Id"));
        var serialNo = value == undefined ? this.addSaleForm.value.serial : value;
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