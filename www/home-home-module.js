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

module.exports = "<ion-header>\n  <div text-uppercase text-center class=\"title\"></div>\n</ion-header>\n\n<ion-content padding>\n  <div padding text-center>\n    <ion-thumbnail slot=\"start\" class=\"user-img\">\n      <img src=\"../../assets/people.svg\">\n    </ion-thumbnail>\n    <div text-uppercase text-center class=\"title\" >\n        <ion-input [readonly]='true' [(ngModel)]=\"userName\"></ion-input>\n    </div>\n  </div>\n  <ion-grid>\n    <ion-row padding-vertical  margin-vertical style=\"padding-bottom: 0;padding-top: 0\">\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableScan\">\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            class=\"btn-height\"\n            style=\"background: #C3DBB7\"\n            (click) = \"goToScanPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/barcode.svg\">\n            </ion-thumbnail>\n          </ion-button>\n        </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableScan\"> \n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          class=\"btn-height\"\n          style=\"background: #C3DBB7\"\n          (click) = \"goToScanPage()\">\n          scan order\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableScan\"></ion-col>\n\n        <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\n          <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReceiveItems\">\n              <ion-button\n              size = \"large\"\n              text-uppercase\n              color = \"dark\"\n              fill = \"outline\"\n              style=\"background: #00BFCC\"\n              class=\"btn-height\"\n              (click) = \"goToReceivePage()\">\n              <ion-thumbnail class=\"scanner-svg\">\n                <img src = \"../../assets/icon/receive.svg\">\n              </ion-thumbnail>\n            </ion-button>\n          </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReceiveItems\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #00BFCC\"\n          class=\"btn-height\"\n          (click) = \"goToReceivePage()\">\n          receive items\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReceiveItems\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableReturn\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #FC6864\"\n          class=\"btn-height\"\n          (click) = \"goTorReturnPage()\">\n          <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/return.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableReturn\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #FC6864\"\n          class=\"btn-height\"\n          (click) = \"goTorReturnPage()\">\n          <span>\n            return items\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableReturn\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableAddSale\">\n          <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #268387\"\n          class=\"btn-height\"\n          (click) = \"goToAddSalePage()\">\n          <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/icon/addsale.svg\">\n          </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableAddSale\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          style=\"background: #268387\"\n          class=\"btn-height\"\n          (click) = \"goToAddSalePage()\">\n          <span>\n            Add sale Item\n          </span>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableAddSale\"></ion-col>\n\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\n      <ion-col size = \"2\"  text-center style=\"padding-right: 0\" *ngIf=\"enableViewInventory\">\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            class=\"btn-height\"\n            style=\"background: #C3DBB7\"\n            (click) = \"goToScanPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n              <img src = \"../../assets/newspaper.svg\">\n            </ion-thumbnail>\n          </ion-button>\n        </ion-col>\n      <ion-col size = \"8\"  text-center style=\"padding-left: 0\" *ngIf=\"enableViewInventory\">\n        <ion-button\n          size = \"large\"\n          text-uppercase\n          color = \"dark\"\n          fill = \"outline\"\n          class=\"btn-height\"\n          style=\"background: #C3DBB7\"\n          (click) = \"goToViewInventory()\">\n          View Inventory\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center *ngIf=\"enableViewInventory\"></ion-col>\n\n      <ion-col size = \"8\"  text-center></ion-col>\n      <ion-col size = \"3\"  text-center>\n          <ion-button\n            size = \"large\"\n            text-uppercase\n            color = \"dark\"\n            fill = \"outline\"\n            style=\"background: #ffffff\"\n            class=\"btn-height\"\n            (click) = \"goToSignInPage()\">\n            <ion-thumbnail class=\"scanner-svg\">\n                <img src = \"../../assets/icon/logout.svg\">\n            </ion-thumbnail>\n        </ion-button>\n      </ion-col>\n      <ion-col size = \"1\"  text-center></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  font-size: 30px; }\n\n.header {\n  background-image: url('homebg_new.png') !important;\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  height: 200px !important; }\n\n.title {\n  font-size: 24px;\n  font-weight: 600; }\n\n.btn-height {\n  height: 70;\n  width: 100%;\n  color: #070707;\n  border-radius: 8px;\n  font-size: 24px;\n  font-weight: 600; }\n\n.opal-icon {\n  height: 38px;\n  width: 38px;\n  position: absolute;\n  top: 3px;\n  left: 10px; }\n\n.scanner-svg {\n  height: 40px;\n  width: 40px; }\n\n.user-img {\n  height: 150px;\n  width: 150px;\n  margin: auto; }\n\n@media only screen and (max-width: 320px) {\n  .scanner-svg {\n    height: 25px;\n    width: 25px; }\n  .btn-height {\n    height: 80px;\n    width: 100%;\n    color: #070707;\n    font-size: 18px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMTgxMTgwL0RvY3VtZW50cy9PcGFsX0tiYy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0RBQThEO0VBQzlELDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLHdCQUF1QixFQUFBOztBQUczQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBRWhCO0VBQ0k7SUFDSSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBR2Y7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxlQUNKLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaG9tZWJnX25ldy5wbmdcIikhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAyMDBweCFpbXBvcnRhbnQ7XG4gIH1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1oZWlnaHR7XG4gICAgaGVpZ2h0OiA3MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzA3MDcwNztcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vcGFsLWljb257XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHdpZHRoOiAzOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4uc2Nhbm5lci1zdmd7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4udXNlci1pbWd7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvOztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIC5zY2FubmVyLXN2Z3tcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogMjVweDs7XG4gICAgfVxuXG4gICAgLmJ0bi1oZWlnaHR7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMDcwNzA3O1xuICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICB9XG59XG4iXX0= */"

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