(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n    <div text-uppercase text-center class=\"title\"></div>\n</ion-header>\n<ion-content hide-tabs>\n  <form [formGroup]=\"logingrp\" (ngSubmit)=\"btnLogin()\">\n    <ion-grid><br>\n      <br><br>\n      <div padding>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n           User Id\n          </ion-label>\n          <ion-input #email type=\"email\" formControlName=\"userEmail\" class=\"lab-font\" (ionInput) = \"checkEmptyIdOnFocus($event)\"  \n          (ionBlur) = \"checkEmptyIdOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf = \"errUserName\">User Id is required. Please enter a valid User Id</div><br>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            Password\n          </ion-label>\n          <ion-input #password type=\"Password\" formControlName=\"userPwd\" class=\"lab-font\" (ionInput) = \"checkEmptyPassOnFocus($event)\"  \n          (ionBlur) = \"checkEmptyPassOnBlur($event)\"></ion-input>\n        </ion-item>\n        <!-- <div class=\"validation-errors\">\n           <div  *ngIf=\"logingrp.get('userPwd').hasError('pattern')\">\n            Password is required\n          </div> \n        </div>-->\n        <div class=\"error-message\" *ngIf = \"errPassword\">Password is required. Please enter a valid password</div>\n        <!-- <ion-item *ngIf=\"loginpass.touched\"></ion-item> -->\n        <br><br>\n        <ion-row justify-content-center align-items-center>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"6\">\n            <ion-button type=\"submit\" size=\"medium\" expand=\"block\" class=\"loggbtn\" color=\"medium\" >Login</ion-button>\n          </ion-col>\n          <ion-col size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer no-border text-center>\n<!-- <ion-label style=\"font-size: 14px;\">Version: TEST - 0.0.2 (29-05-19)</ion-label> -->\n<!-- <ion-label style=\"font-size: 14px;\">Version: UAT - 1.1.2 (11-02-2020)</ion-label> -->\n<ion-label style=\"font-size: 14px;\">Version: UAT - 1.1.2 (12-20-2022)</ion-label>\n<!-- <ion-label style=\"font-size: 14px;\">Version: PROD - 1.0.5 (03-09-2021)</ion-label> -->\n</ion-footer>\n\n"

/***/ }),

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

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  background: #fff;\n}\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px;\n}\n\n.lab-font {\n  font-size: 25px;\n}\n\n.validation-errors {\n  font-size: 15px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNGSjs7QURLQTtFQUNDLFdBQUE7RUFDQSxZQVpXO0FDVVo7O0FES0E7RUFDQyxZQWhCVztBQ2NaOztBREtBO0VBQ0MsZ0JBckJhO0FDbUJkOztBREtBO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRkQ7O0FES0E7RUFDQyxlQUFBO0FDRkQ7O0FES0E7RUFDQyxlQUFBO0VBQ0EsVUFBQTtBQ0ZEIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ob21lYmcucG5nXCIpIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG5cdHdpZHRoOjEwMCU7XG5cdGhlaWdodDogJGhlaWdodDEwMDtcbn1cblxuaW9uLXJvdyB7XG5cdGhlaWdodDogJGhlaWdodDEwMDtcbn1cblxuaW9uLWNvbCB7XG5cdGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcbn1cblxuLmxvZ2didG57XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiA1JTtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAyNXB4O1xufVxuXG4ubGFiLWZvbnR7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnZhbGlkYXRpb24tZXJyb3Jze1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGNvbG9yOiByZWQ7XG59XG4iLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZy5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmxvZ2didG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxhYi1mb250IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

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
        localStorage.removeItem("loginAccess");
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
        localStorage.removeItem("loginAccess");
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
    SignInPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("email", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignInPage.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("password", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignInPage.prototype, "password", void 0);
    SignInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.page.html"),
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