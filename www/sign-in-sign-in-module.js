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

module.exports = "<ion-header>\n    <div text-uppercase text-center class=\"title\"></div>\n</ion-header>\n<ion-content hide-tabs>\n  <form [formGroup]=\"logingrp\" (ngSubmit)=\"btnLogin()\">\n    <ion-grid><br>\n      <br><br>\n      <div padding>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n           User Id\n          </ion-label>\n          <ion-input #email type=\"email\" formControlName=\"userEmail\" class=\"lab-font\" (ionInput) = \"checkEmptyIdOnFocus($event)\"  \n          (ionBlur) = \"checkEmptyIdOnBlur($event)\" required></ion-input>\n        </ion-item>\n        <div class=\"error-message\" *ngIf = \"errUserName\">User Id is required. Please enter a valid User Id</div><br>\n        <ion-item>\n          <ion-label position=\"floating\" class=\"lab-font\">\n            Password\n          </ion-label>\n          <ion-input #password type=\"Password\" formControlName=\"userPwd\" class=\"lab-font\" (ionInput) = \"checkEmptyPassOnFocus($event)\"  \n          (ionBlur) = \"checkEmptyPassOnBlur($event)\"></ion-input>\n        </ion-item>\n        <!-- <div class=\"validation-errors\">\n           <div  *ngIf=\"logingrp.get('userPwd').hasError('pattern')\">\n            Password is required\n          </div> \n        </div>-->\n        <div class=\"error-message\" *ngIf = \"errPassword\">Password is required. Please enter a valid password</div>\n        <!-- <ion-item *ngIf=\"loginpass.touched\"></ion-item> -->\n        <br><br>\n        <ion-row justify-content-center align-items-center>\n          <ion-col size=\"3\"></ion-col>\n          <ion-col size=\"6\">\n            <ion-button type=\"submit\" size=\"medium\" expand=\"block\" class=\"loggbtn\" color=\"medium\" >Login</ion-button>\n          </ion-col>\n          <ion-col size=\"3\"></ion-col>\n        </ion-row>\n      </div>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer no-border text-center>\n<!-- <ion-label style=\"font-size: 14px;\">Version: TEST - 0.0.2 (29-05-19)</ion-label> -->\n<ion-label style=\"font-size: 14px;\">Version: UAT - 1.1.2 (09-09-20)</ion-label>\n<!-- <ion-label style=\"font-size: 14px;\">Version: PROD - 1.0.5 (22-05-19)</ion-label>-->\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background-image: url('homebg.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 250px !important; }\n\nion-grid {\n  width: 100%;\n  height: 100%; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  background: #fff; }\n\n.loggbtn {\n  width: 100%;\n  border-radius: 5%;\n  font-weight: normal;\n  font-size: 25px; }\n\n.lab-font {\n  font-size: 25px; }\n\n.validation-errors {\n  font-size: 15px;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSw4Q0FBMEQ7RUFDMUQsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsd0JBQXVCLEVBQUE7O0FBRzNCO0VBQ0MsV0FBVTtFQUNWLFlBWmUsRUFBQTs7QUFlaEI7RUFDQyxZQWhCZSxFQUFBOztBQW1CaEI7RUFDQyxnQkFyQmlCLEVBQUE7O0FBd0JsQjtFQUNDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZTtFQUNmLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNmZmY7XG4kaGVpZ2h0MTAwOiAxMDAlO1xuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnLnBuZ1wiKSFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuXHR3aWR0aDoxMDAlO1xuXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1yb3cge1xuXHRoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuXHRiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG59XG5cbi5sb2dnYnRue1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogNSU7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmxhYi1mb250e1xuXHRmb250LXNpemU6IDI1cHg7XG59XG5cbi52YWxpZGF0aW9uLWVycm9yc3tcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRjb2xvcjogcmVkO1xufVxuIl19 */"

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