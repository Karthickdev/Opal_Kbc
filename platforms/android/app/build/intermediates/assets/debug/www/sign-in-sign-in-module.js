(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");







var routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]
    }
];
var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
        })
    ], SignInPageModule);
    return SignInPageModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.html":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <div text-uppercase text-center class=\"title\"></div>\r\n</ion-header>\r\n<ion-content hide-tabs>\r\n  <form [formGroup]=\"logingrp\" (ngSubmit)=\"btnLogin()\">\r\n    <ion-grid><br>\r\n      <br><br>\r\n      <div padding>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">\r\n           User Id\r\n          </ion-label>\r\n          <ion-input #email type=\"email\" formControlName=\"userEmail\" class=\"lab-font\" (ionInput) = \"checkEmptyIdOnFocus($event)\"  \r\n          (ionBlur) = \"checkEmptyIdOnBlur($event)\" required></ion-input>\r\n        </ion-item>\r\n        <div class=\"error-message\" *ngIf = \"errUserName\">User Id is required. Please enter a valid User Id</div><br>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" class=\"lab-font\">\r\n            Password\r\n          </ion-label>\r\n          <ion-input #password type=\"Password\" formControlName=\"userPwd\" class=\"lab-font\" (ionInput) = \"checkEmptyPassOnFocus($event)\"  \r\n          (ionBlur) = \"checkEmptyPassOnBlur($event)\"></ion-input>\r\n        </ion-item>\r\n        <!-- <div class=\"validation-errors\">\r\n           <div  *ngIf=\"logingrp.get('userPwd').hasError('pattern')\">\r\n            Password is required\r\n          </div> \r\n        </div>-->\r\n        <div class=\"error-message\" *ngIf = \"errPassword\">Password is required. Please enter a valid password</div>\r\n        <!-- <ion-item *ngIf=\"loginpass.touched\"></ion-item> -->\r\n        <br><br>\r\n        <ion-row justify-content-center align-items-center>\r\n          <ion-col size=\"3\"></ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-button type=\"submit\" size=\"medium\" expand=\"block\" class=\"loggbtn\" color=\"medium\" >Login</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"3\"></ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n<ion-footer no-border text-center>\r\n<!-- <ion-label style=\"font-size: 14px;\">Version: TEST - 0.0.2 (29-05-19)</ion-label> -->\r\n<ion-label style=\"font-size: 14px;\">Version: UAT - 1.1.2 (06-05-19)</ion-label>\r\n<!-- <ion-label style=\"font-size: 14px;\">Version: PROD - 1.0.5 (22-05-19)</ion-label>-->\r\n</ion-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important; }\n\nion-grid {\n  width: 100%;\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  background: #fff; }\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.validation-errors {\n  font-size: 15px;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9FOlxcS2FydGhpY2tcXGlvbmljUHJvamVjdHNcXE9wYWxLQkMvc3JjXFxhcHBcXHNpZ24taW5cXHNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksOENBQTBEO0VBQzFELDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHdCQUF1QixFQUFBOztBQUczQjtFQUNDLFdBQVU7RUFDVixZQVplLEVBQUE7O0FBZWhCO0VBQ0MsWUFoQmUsRUFBQTs7QUFtQmhCO0VBQ0MsZ0JBckJpQixFQUFBOztBQXdCbEI7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGVBQWU7RUFDZixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWduLWluL3NpZ24taW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlLWNvbG9yOiAjZmZmO1xyXG4kaGVpZ2h0MTAwOiAxMDAlO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG5cdGhlaWdodDogJGhlaWdodDEwMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcblx0YmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4ubG9nZ2J0bntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiA1JTtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmxhYi1mb250e1xyXG5cdGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLnZhbGlkYXRpb24tZXJyb3Jze1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var SignInPage = /** @class */ (function () {
    function SignInPage(formBuilder, routeTo, opalService) {
        this.formBuilder = formBuilder;
        this.routeTo = routeTo;
        this.opalService = opalService;
        this.logingrp = this.formBuilder.group({
            userEmail: [''],
            userPwd: [''],
        }, { updateOn: 'blur' });
        this.opalService.getAllModelList();
    }
    SignInPage.prototype.ngOnInit = function () {
        this.errPassword = false;
        this.errUserName = false;
    };
    SignInPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var id = localStorage.getItem("userName");
        this.logingrp.reset();
        if (id != undefined && id != null && id != "") {
            this.logingrp.controls['userEmail'].setValue(id);
            this.logingrp.controls['userPwd'].reset();
            setTimeout(function () {
                _this.password.setFocus();
            }, 700);
        }
        else {
            setTimeout(function () {
                _this.email.setFocus();
            }, 700);
        }
    };
    //method to call login ajax call service
    SignInPage.prototype.btnLogin = function () {
        var _this = this;
        var loginUrl = this.opalService.baseUrl + this.opalService.userLogin;
        if (this.logingrp.value.userEmail == undefined || this.logingrp.value.userEmail == "") {
            this.opalService.presentToast('Username is required', 'danger');
            this.errUserName = true;
            return false;
        }
        else {
            this.errUserName = false;
        }
        if (this.logingrp.value.userPwd == undefined || this.logingrp.value.userPwd == "") {
            this.opalService.presentToast('Password is required', 'danger');
            this.errPassword = true;
            return false;
        }
        else {
            this.errPassword = false;
        }
        var dataParam = {
            "loginId": this.logingrp.value.userEmail,
            "password": this.logingrp.value.userPwd
        };
        var userName = this.logingrp.value.userEmail;
        this.opalService.present();
        this.opalService.ajaxCallService(loginUrl, "post", dataParam).then(function (result) {
            if (result == undefined) {
                _this.opalService.presentToast('Unable to reach server, Please try again', 'danger');
            }
            else if (result == "Login Id invalid") {
                _this.opalService.presentToast('Invalid login Id', 'danger');
            }
            else if (result == "Password invalid") {
                _this.opalService.presentToast('Invalid password', 'danger');
            }
            else {
                localStorage.setItem("Id", JSON.stringify(result));
                localStorage.setItem("userName", userName);
                _this.userInfo = result;
                localStorage.setItem("loginAccess", JSON.stringify(_this.userInfo.loginAccess));
                // this.opalService.presentToast('Successfully Logged in','secondary');
                _this.routeTo.navigate(["/home"]);
                _this.errPassword = false;
            }
            _this.opalService.dismiss();
        }).catch(function (err) {
            _this.opalService.presentToast('Unable to reach server, Please try again', 'danger');
            _this.opalService.dismiss();
        });
    };
    //check if model is empty
    SignInPage.prototype.checkEmptyIdOnFocus = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
    };
    //check if model is empty
    SignInPage.prototype.checkEmptyIdOnBlur = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errUserName = false;
        }
        else {
            this.errUserName = true;
        }
    };
    //check if model is empty
    SignInPage.prototype.checkEmptyPassOnFocus = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
    };
    //check if model is empty
    SignInPage.prototype.checkEmptyPassOnBlur = function (evt) {
        if (evt.target.value != undefined && evt.target.value != "") {
            this.errPassword = false;
        }
        else {
            this.errPassword = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("email"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignInPage.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("password"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignInPage.prototype, "password", void 0);
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.page.html */ "./src/app/sign-in/sign-in.page.html"),
            styles: [__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], SignInPage);
    return SignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map