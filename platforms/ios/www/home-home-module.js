(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n  <div text-uppercase text-center class=\"title\"></div>\n</ion-header>\n\n<ion-content padding>\n  <!-- <div padding text-center>\n    <ion-thumbnail slot=\"start\" class=\"user-img\">\n      <img src=\"../../assets/people.svg\">\n    </ion-thumbnail>\n    <div text-uppercase text-center class=\"title\" >\n        <ion-input [readonly]='true' [(ngModel)]=\"userName\"></ion-input>\n    </div>\n  </div> -->\n  <br><br><br><br><br>\n  <ion-grid>\n    <ion-row padding-vertical  margin-vertical style=\"padding-bottom: 0;padding-top: 0\">\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableScan\">\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            class=\"btn-height\"\n            style=\"background: #C3DBB7\"\n            (click) = \"goToScanPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/barcode.svg\">\n            </ion-thumbnail>\n          </ion-button>\n        </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableScan\"> \n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          class=\"btn-height\"\n          style=\"background: #C3DBB7\"\n          (click) = \"goToScanPage()\">\n          scan order\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\n\n        <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\n          <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReceiveItems\">\n              <ion-button\n              size = \"large\"\n              text-uppercase\n              color = \"dark\"\n              fill = \"outline\"\n              style=\"background: #00BFCC\"\n              class=\"btn-height\"\n              (click) = \"goToReceivePage()\">\n              <ion-thumbnail class=\"scanner-svg\">\n                <img src = \"../../assets/icon/receive.svg\">\n              </ion-thumbnail>\n            </ion-button>\n          </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReceiveItems\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #00BFCC\"\n          class=\"btn-height\"\n          (click) = \"goToReceivePage()\">\n          receive items\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReturn\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #FC6864\"\n          class=\"btn-height\"\n          (click) = \"goTorReturnPage()\">\n          <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/return.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReturn\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #FC6864\"\n          class=\"btn-height\"\n          (click) = \"goTorReturnPage()\">\n          <span>\n            return items\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableAddSale\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #268387\"\n          class=\"btn-height\"\n          (click) = \"goToAddSalePage()\">\n          <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/addsale.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableAddSale\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #268387\"\n          class=\"btn-height\"\n          (click) = \"goToAddSalePage()\">\n          <span>\n            Add sale Item\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableViewInventory\">\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            class=\"btn-height\"\n            style=\"background: #C3DBB7\"\n            (click) = \"goToScanPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/newspaper.svg\">\n            </ion-thumbnail>\n          </ion-button>\n        </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableViewInventory\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          class=\"btn-height\"\n          style=\"background: #C3DBB7\"\n          (click) = \"goToViewInventory()\">\n          View Inventory\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\n\n      <ion-col size = \"8\"  text-center></ion-col>\n      <ion-col size = \"3\"  text-center>\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            style=\"background: #ffffff\"\n            class=\"btn-height\"\n            (click) = \"goToSignInPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n                <img src = \"../../assets/icon/logout.svg\">\n            </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

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

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 30px;\n}\n\n.header {\n  background-image: url('homebg_new.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 200px !important;\n}\n\n.title {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.btn-height {\n  height: 70;\n  width: 100%;\n  color: #070707;\n  border-radius: 8px;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.opal-icon {\n  height: 38px;\n  width: 38px;\n  position: absolute;\n  top: 3px;\n  left: 10px;\n}\n\n.scanner-svg {\n  height: 40px;\n  width: 40px;\n}\n\n.user-img {\n  height: 150px;\n  width: 150px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px;\n  }\n\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXZla25hdGgvRG9jdW1lbnRzL09wYWxfS2JjL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtEQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ0VOOztFRENFO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ0VOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZ19uZXcucG5nXCIpIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xuICB9XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idG4taGVpZ2h0e1xuICAgIGhlaWdodDogNzA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwNzA3MDc7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ub3BhbC1pY29ue1xuICAgIGhlaWdodDogMzhweDtcbiAgICB3aWR0aDogMzhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMTBweDtcbn1cblxuLnNjYW5uZXItc3Zne1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbn1cblxuLnVzZXItaW1ne1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bzs7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcbiAgICAuc2Nhbm5lci1zdmd7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgd2lkdGg6IDI1cHg7O1xuICAgIH1cblxuICAgIC5idG4taGVpZ2h0e1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzA3MDcwNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgfVxufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hvbWViZ19uZXcucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1oZWlnaHQge1xuICBoZWlnaHQ6IDcwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwNzA3MDc7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ub3BhbC1pY29uIHtcbiAgaGVpZ2h0OiAzOHB4O1xuICB3aWR0aDogMzhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLnNjYW5uZXItc3ZnIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnVzZXItaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnNjYW5uZXItc3ZnIHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAuYnRuLWhlaWdodCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMDcwNzA3O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufSJdfQ== */"

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
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map