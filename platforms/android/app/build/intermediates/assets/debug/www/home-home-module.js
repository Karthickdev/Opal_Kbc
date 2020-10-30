(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <div text-uppercase text-center class=\"title\"></div>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div padding text-center>\r\n    <ion-thumbnail slot=\"start\" class=\"user-img\">\r\n      <img src=\"../../assets/people.svg\">\r\n    </ion-thumbnail>\r\n    <div text-uppercase text-center class=\"title\" >\r\n        <ion-input [readonly]='true' [(ngModel)]=\"userName\"></ion-input>\r\n    </div>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row padding-vertical  margin-vertical style=\"padding-bottom: 0;padding-top: 0\">\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\r\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableScan\">\r\n          <ion-button\r\n            size = \"large\"\r\n            text-uppercase\r\n            color = \"dark\"\r\n            fill = \"outline\"\r\n            class=\"btn-height\"\r\n            style=\"background: #C3DBB7\"\r\n            (click) = \"goToScanPage()\">\r\n            <ion-thumbnail class=\"scanner-svg\">\r\n              <img src = \"../../assets/icon/barcode.svg\">\r\n            </ion-thumbnail>\r\n          </ion-button>\r\n        </ion-col>\r\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableScan\"> \r\n        <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          class=\"btn-height\"\r\n          style=\"background: #C3DBB7\"\r\n          (click) = \"goToScanPage()\">\r\n          scan order\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\r\n\r\n        <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\r\n          <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReceiveItems\">\r\n              <ion-button\r\n              size = \"large\"\r\n              text-uppercase\r\n              color = \"dark\"\r\n              fill = \"outline\"\r\n              style=\"background: #00BFCC\"\r\n              class=\"btn-height\"\r\n              (click) = \"goToReceivePage()\">\r\n              <ion-thumbnail class=\"scanner-svg\">\r\n                <img src = \"../../assets/icon/receive.svg\">\r\n              </ion-thumbnail>\r\n            </ion-button>\r\n          </ion-col>\r\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReceiveItems\">\r\n          <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          style=\"background: #00BFCC\"\r\n          class=\"btn-height\"\r\n          (click) = \"goToReceivePage()\">\r\n          receive items\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\r\n\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\r\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReturn\">\r\n          <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          style=\"background: #FC6864\"\r\n          class=\"btn-height\"\r\n          (click) = \"goTorReturnPage()\">\r\n          <ion-thumbnail class=\"scanner-svg\">\r\n              <img src = \"../../assets/icon/return.svg\">\r\n          </ion-thumbnail>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReturn\">\r\n        <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          style=\"background: #FC6864\"\r\n          class=\"btn-height\"\r\n          (click) = \"goTorReturnPage()\">\r\n          <span>\r\n            return items\r\n          </span>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\r\n\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\r\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableAddSale\">\r\n          <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          style=\"background: #268387\"\r\n          class=\"btn-height\"\r\n          (click) = \"goToAddSalePage()\">\r\n          <ion-thumbnail class=\"scanner-svg\">\r\n              <img src = \"../../assets/icon/addsale.svg\">\r\n          </ion-thumbnail>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableAddSale\">\r\n        <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          style=\"background: #268387\"\r\n          class=\"btn-height\"\r\n          (click) = \"goToAddSalePage()\">\r\n          <span>\r\n            Add sale Item\r\n          </span>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\r\n\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\r\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableViewInventory\">\r\n          <ion-button\r\n            size = \"large\"\r\n            text-uppercase\r\n            color = \"dark\"\r\n            fill = \"outline\"\r\n            class=\"btn-height\"\r\n            style=\"background: #C3DBB7\"\r\n            (click) = \"goToScanPage()\">\r\n            <ion-thumbnail class=\"scanner-svg\">\r\n              <img src = \"../../assets/newspaper.svg\">\r\n            </ion-thumbnail>\r\n          </ion-button>\r\n        </ion-col>\r\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableViewInventory\">\r\n        <ion-button\r\n          size = \"large\"\r\n          text-uppercase\r\n          color = \"dark\"\r\n          fill = \"outline\"\r\n          class=\"btn-height\"\r\n          style=\"background: #C3DBB7\"\r\n          (click) = \"goToViewInventory()\">\r\n          View Inventory\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\r\n\r\n      <ion-col size = \"8\"  text-center></ion-col>\r\n      <ion-col size = \"3\"  text-center>\r\n          <ion-button\r\n            size = \"large\"\r\n            text-uppercase\r\n            color = \"dark\"\r\n            fill = \"outline\"\r\n            style=\"background: #ffffff\"\r\n            class=\"btn-height\"\r\n            (click) = \"goToSignInPage()\">\r\n            <ion-thumbnail class=\"scanner-svg\">\r\n                <img src = \"../../assets/icon/logout.svg\">\r\n            </ion-thumbnail>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size = \"1\"  text-center></ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 30px; }\n\n.header {\n  background-image: url('homebg_new.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 200px !important; }\n\n.title {\n  font-size: 24px;\n  font-weight: 600; }\n\n.btn-height {\n  height: 70;\n  width: 100%;\n  color: #070707;\n  border-radius: 8px;\n  font-size: 24px;\n  font-weight: 600; }\n\n.opal-icon {\n  height: 38px;\n  width: 38px;\n  position: absolute;\n  top: 3px;\n  left: 10px; }\n\n.scanner-svg {\n  height: 40px;\n  width: 40px; }\n\n.user-img {\n  height: 150px;\n  width: 150px;\n  margin: auto; }\n\n@media only screen and (max-width: 320px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px; }\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcS2FydGhpY2tcXGlvbmljUHJvamVjdHNcXE9wYWxLQkMvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtEQUE4RDtFQUM5RCwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1Qix3QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVSxFQUFBOztBQUdkO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJO0lBQ0ksWUFBWTtJQUNaLFdBQVcsRUFBQTtFQUdmO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFDSixFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9ob21lYmdfbmV3LnBuZ1wiKSFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuLWhlaWdodHtcclxuICAgIGhlaWdodDogNzA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMDcwNzA3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm9wYWwtaWNvbntcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uc2Nhbm5lci1zdmd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLnVzZXItaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1hcmdpbjogYXV0bzs7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICAuc2Nhbm5lci1zdmd7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNXB4OztcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWhlaWdodHtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICMwNzA3MDc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(routeTo, activatedRoute) {
        this.routeTo = routeTo;
        this.activatedRoute = activatedRoute;
        this.userName = "";
    }
    HomePage.prototype.ngOnInit = function () {
        var id = JSON.parse(localStorage.getItem("Id"));
        this.userName = 'WELCOME ' + id['userName'];
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.userInfo = JSON.parse(localStorage.getItem("loginAccess"));
        if (this.userInfo.scanOrder != false) {
            this.enableScan = true;
        }
        else {
            this.enableScan = false;
        }
        if (this.userInfo.receiveItems != false) {
            this.enableReceiveItems = true;
        }
        else {
            this.enableReceiveItems = false;
        }
        if (this.userInfo.returnItems != false) {
            this.enableReturn = true;
        }
        else {
            this.enableReturn = false;
        }
        if (this.userInfo.addSaleItem != false) {
            this.enableAddSale = true;
        }
        else {
            this.enableAddSale = false;
        }
        if (this.userInfo.viewInventory != false) {
            this.enableViewInventory = true;
        }
        else {
            this.enableViewInventory = false;
        }
        console.log(this.enableViewInventory);
    };
    HomePage.prototype.goTorReturnPage = function () {
        this.routeTo.navigate(["/return-item"]);
    };
    HomePage.prototype.goToScanPage = function () {
        this.routeTo.navigate(["/scan-item"]);
    };
    HomePage.prototype.goToReceivePage = function () {
        this.routeTo.navigate(["/receive-item"]);
    };
    HomePage.prototype.goToAddSalePage = function () {
        this.routeTo.navigate(["/add-sale-item"]);
    };
    HomePage.prototype.goToViewInventory = function () {
        this.routeTo.navigate(['/view-inventory']);
    };
    HomePage.prototype.goToSignInPage = function () {
        localStorage.removeItem("Id");
        localStorage.removeItem("loginAccess");
        this.routeTo.navigate(["/sign-in"]);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map