(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-inventory-view-inventory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-inventory/view-inventory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-inventory/view-inventory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-padding style=\"height: 15%;\" class=\"header\">\n  <div text-uppercase text-center class=\"title\">View Inventory</div>\n  <ion-toolbar class=\"tool2\">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"4\" text-left>\n          <ion-buttons class=\"back-marg\" (click)=\"backToHome()\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">BACK</ion-button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"2\" text-center>\n          <!-- <div style=\"display: inline-block\">\n            <ion-button type=\"submit\" expand=\"block\" color=\"save\" class=\"round\" (click)=\"scanSubmit()\"\n              [disabled]=\"!scanForm.valid || autoSave == true\">Save</ion-button>\n          </div> -->\n          <!-- <ion-buttons style=\"float: right\">\n            <ion-button type=\"submit\" class=\"save-center\" (click)=\"scanSubmit()\"\n              >SAVE</ion-button>\n          </ion-buttons> -->\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"4\" text-right (click)=\"formReset()\">\n          <ion-buttons class=\"clear-marg\">\n            <ion-button style=\"font-size: 22px;color: #ffffff\">CLEAR</ion-button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <form [formGroup]=\"returnForm\">\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">Model<ion-note style=\"color: red\">*</ion-note>\n          </ion-label>\n          <!-- <ion-input type = \"text\" formControlName=\"model\" (ionBlur) = \"searchModel()\" (ionInput) = \"disableKey()\" required></ion-input> -->\n          <ion-input #model type=\"search\" text-uppercase (ionInput)=\"searchModel($event)\" (ionBlur)=\"checkEmpty($event)\"\n            class=\"lab-font\" formControlName=\"model\"></ion-input>\n        </ion-item>\n        <ion-list *ngIf=\"showList\" [class]=\"searchList.length > 6 ? 'srccroll' : 'srchgt'\">\n          <ion-item *ngFor=\"let item of searchList\" (click)=\"getSelectedItem(item)\" style=\"font-size: 22px;\">\n            {{item}}\n          </ion-item>\n        </ion-list>\n        <div class=\"validation-errors\">\n          <div *ngFor=\"let validation of validation_messages['model']\">\n            <div class=\"error-message\"\n              *ngIf=\"returnForm.get('model').hasError(validation['type']) && returnForm.get('model').touched\">\n              {{ validation.message }}\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-grid *ngIf=\"showDetail\">\n    <ion-row class=\"row-padd\" >\n      <ion-col size=\"4\">\n        <ion-label>Item Name:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{itemName}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Quantity Availabel:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{quantity}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Quantity On-Order:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{quantityonOrder}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"row-padd\">\n      <ion-col size=\"4\">\n        <ion-label>Bin Location:</ion-label>\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-label>{{binLocation}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

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

/***/ "./src/app/view-inventory/view-inventory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/view-inventory/view-inventory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-row {\n  width: 100%;\n}\n\n.header {\n  background-image: url('greenbg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.round {\n  --border-radius: 50%;\n  --vertical-align: middle;\n  height: 60px;\n  width: 60px;\n  --ion-color-base: #5d844b;\n  font-size: initial;\n  font-size: 25px;\n}\n\n.back-marg {\n  float: left;\n  position: relative;\n  top: 15%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px;\n}\n\n.clear-marg {\n  float: right;\n  position: relative;\n  top: 15%;\n  padding: 10px;\n  background: #90be90;\n  border-radius: 10px;\n}\n\n.save-center {\n  border-radius: 50%;\n  background: #8fb47c;\n  font-size: 22px;\n  color: #ffffff;\n  height: 80px;\n  width: 85px;\n  border-radius: 50%;\n}\n\n.toggle-color {\n  --ion-color-base: #d7e8cf !important;\n}\n\n.label-pos {\n  position: absolute;\n  bottom: 16%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.row-padd {\n  padding: 0.5% 3%;\n}\n\n.toggle {\n  padding-left: 0;\n  text-align: center;\n}\n\n.title {\n  font-size: 33px;\n  font-weight: 500;\n  padding-top: 10px;\n  color: #fff;\n  background: #00000000;\n}\n\n.icon {\n  font-size: 30px;\n  color: #000;\n  border-radius: 15%;\n  background: transparent;\n}\n\n.icon-label {\n  position: absolute;\n  left: 20%;\n}\n\n.tool2 {\n  --background:#00000000;\n  --border-width: 0px !important;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.event-font {\n  font-size: 16px;\n}\n\n.event-font-italic {\n  font-size: 16px;\n  color: #333;\n  font-style: italic;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 65px;\n  height: 34px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: grey;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 28px;\n  width: 28px;\n  left: 4px;\n  top: 3px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #C3DBB7;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  transform: translateX(30px);\n}\n\n.on {\n  display: none;\n}\n\n.off {\n  padding-left: 33px;\n}\n\n.on {\n  padding-right: 25px;\n}\n\n.on, .off {\n  color: white;\n  position: absolute;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  font-size: 13px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked + .slider .on {\n  display: block;\n}\n\ninput:checked + .slider .off {\n  display: none;\n}\n\n.slider.rnd {\n  border-radius: 16px;\n}\n\n.slider.rnd:before {\n  border-radius: 14px;\n}\n\n.marginTL10 {\n  margin-left: 20px !important;\n  margin-top: 10px !important;\n}\n\n.marginL15 {\n  margin-left: 35px !important;\n  margin-top: 0px !important;\n}\n\n.srccroll {\n  height: 200px;\n  overflow: scroll;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n\n.srchgt {\n  height: auto;\n  overflow: hidden;\n  visibility: visible;\n  z-index: 999;\n  position: absolute;\n  width: -webkit-fill-available;\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.28);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvdmlldy1pbnZlbnRvcnkvdmlldy1pbnZlbnRvcnkucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LWludmVudG9yeS92aWV3LWludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDRSwrQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDSSxvQ0FBQTtBQ0ZOOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRko7O0FES0U7RUFDRSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNGSjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQWUsYUFBQTtBQ0RmOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBL0lVO0FDZ0paOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLG1DQUFBO0VBRUEsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQUY7O0FER0E7RUFDQyxjQUFBO0FDQUQ7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7QUNFRjs7QURDQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1pbnZlbnRvcnkvdmlldy1pbnZlbnRvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0bi1jb2xvcjogI0MzREJCNztcbiR0ZXh0LWNvbG9yOiAjMDcwNzA3O1xuXG5pb24tcm93e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2dyZWVuYmcucG5nXCIpIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM1ZDg0NGI7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLmJhY2stbWFyZ3tcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTBiZTkwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuY2xlYXItbWFyZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzkwYmU5MDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLnNhdmUtY2VudGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOGZiNDdjO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnRvZ2dsZS1jb2xvcntcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6ICNkN2U4Y2YgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5sYWJlbC1wb3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTYlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAucm93LXBhZGR7XG4gICAgcGFkZGluZzogMC41JSAzJTtcbiAgfVxuXG4gIC50b2dnbGV7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDAwO1xuICB9XG4gIFxuICAuaWNvbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbi1sYWJlbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjAlO1xufVxuXG4udG9vbDJ7XG4gIC0tYmFja2dyb3VuZDojMDAwMDAwMDA7XG4gIC0tYm9yZGVyLXdpZHRoIDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWItZm9udHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZXZlbnQtZm9udHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZXZlbnQtZm9udC1pdGFsaWN7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnRuLWNvbG9yO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi5vbntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9mZntcbiAgcGFkZGluZy1sZWZ0OjMzcHg7XG59XG5cbi5vbntcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLm9uLCAub2ZmXG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pbnB1dDpjaGVja2VkKyAuc2xpZGVyIC5vblxue2Rpc3BsYXk6IGJsb2NrO31cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIgLm9mZlxue2Rpc3BsYXk6IG5vbmU7fVxuXG4uc2xpZGVyLnJuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG5cbi5zbGlkZXIucm5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLm1hcmdpblRMMTAge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4gIFxuLm1hcmdpbkwxNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnNyY2Nyb2xse1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNyY2hndHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlIDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCJpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvZ3JlZW5iZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5yb3VuZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICM1ZDg0NGI7XG4gIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uYmFjay1tYXJnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM5MGJlOTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jbGVhci1tYXJnIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTBiZTkwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2F2ZS1jZW50ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICM4ZmI0N2M7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZS1jb2xvciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNkN2U4Y2YgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLXBvcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNiU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yb3ctcGFkZCB7XG4gIHBhZGRpbmc6IDAuNSUgMyU7XG59XG5cbi50b2dnbGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaWNvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xufVxuXG4udG9vbDIge1xuICAtLWJhY2tncm91bmQ6IzAwMDAwMDAwO1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWItZm9udCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmV2ZW50LWZvbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5ldmVudC1mb250LWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGxlZnQ6IDRweDtcbiAgdG9wOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzREJCNztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4ub24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub2ZmIHtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xufVxuXG4ub24ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ub24sIC5vZmYge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlci5ybmQge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuXG4uc2xpZGVyLnJuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4ubWFyZ2luVEwxMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLm1hcmdpbkwxNSB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc3JjY3JvbGwge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcmNoZ3Qge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yOCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */"

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
                        }).catch(function (err) {
                            loading.dismiss();
                            _this.opalService.presentToast("An error has occurred. Please try after some time.", "danger");
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
    ViewInventoryPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('model', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewInventoryPage.prototype, "model", void 0);
    ViewInventoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-inventory',
            template: __webpack_require__(/*! raw-loader!./view-inventory.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-inventory/view-inventory.page.html"),
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