(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L6id:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),t=u("pMnS"),i=u("oBZk"),r=u("ZZ/e"),b=u("Ip0R"),c=function(){function l(l,n){this.routeTo=l,this.activatedRoute=n,this.userName=""}return l.prototype.ngOnInit=function(){var l=JSON.parse(localStorage.getItem("Id"));this.userName="WELCOME "+l.userName},l.prototype.ionViewWillEnter=function(){this.userInfo=JSON.parse(localStorage.getItem("loginAccess")),this.enableScan=0!=this.userInfo.scanOrder,this.enableReceiveItems=0!=this.userInfo.receiveItems,this.enableReturn=0!=this.userInfo.returnItems,this.enableAddSale=0!=this.userInfo.addSaleItem,this.enableViewInventory=0!=this.userInfo.viewInventory,console.log(this.enableViewInventory)},l.prototype.goTorReturnPage=function(){this.routeTo.navigate(["/return-item"])},l.prototype.goToScanPage=function(){this.routeTo.navigate(["/scan-item"])},l.prototype.goToReceivePage=function(){this.routeTo.navigate(["/receive-item"])},l.prototype.goToAddSalePage=function(){this.routeTo.navigate(["/add-sale-item"])},l.prototype.goToViewInventory=function(){this.routeTo.navigate(["/view-inventory"])},l.prototype.goToSignInPage=function(){localStorage.removeItem("Id"),localStorage.removeItem("loginAccess"),this.routeTo.navigate(["/sign-in"])},l}(),s=u("ZYCi"),a=e.nb({encapsulation:0,styles:[["ion-title[_ngcontent-%COMP%]{font-size:30px}.header[_ngcontent-%COMP%]{background-image:url(homebg_new.0227eaa1f63def651b24.png)!important;background-size:100% 100%;background-position:center center;background-repeat:no-repeat;height:200px!important}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.btn-height[_ngcontent-%COMP%]{height:70;width:100%;color:#070707;border-radius:8px;font-size:24px;font-weight:600}.opal-icon[_ngcontent-%COMP%]{height:38px;width:38px;position:absolute;top:3px;left:10px}.scanner-svg[_ngcontent-%COMP%]{height:40px;width:40px}.user-img[_ngcontent-%COMP%]{height:150px;width:150px;margin:auto}@media only screen and (max-width:320px){.scanner-svg[_ngcontent-%COMP%]{height:25px;width:25px}.btn-height[_ngcontent-%COMP%]{height:80px;width:100%;color:#070707;font-size:18px}}"]],data:{}});function g(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function d(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,8,"ion-col",[["size","2"],["style","padding-right: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #C3DBB7"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToScanPage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(7,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(8,0,null,0,0,"img",[["src","../../assets/icon/barcode.svg"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"2"),l(n,4,0,"dark","outline","large")}),null)}function p(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,6,"ion-col",[["size","8"],["style","padding-left: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,3,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #C3DBB7"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToScanPage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.Db(-1,0,[" scan order "]))],(function(l,n){l(n,1,0,"8"),l(n,4,0,"dark","outline","large")}),null)}function f(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function z(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function k(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,8,"ion-col",[["size","2"],["style","padding-right: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #00BFCC"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToReceivePage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(7,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(8,0,null,0,0,"img",[["src","../../assets/icon/receive.svg"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"2"),l(n,4,0,"dark","outline","large")}),null)}function h(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,6,"ion-col",[["size","8"],["style","padding-left: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,3,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #00BFCC"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToReceivePage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.Db(-1,0,[" receive items "]))],(function(l,n){l(n,1,0,"8"),l(n,4,0,"dark","outline","large")}),null)}function x(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function v(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function I(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,8,"ion-col",[["size","2"],["style","padding-right: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #FC6864"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goTorReturnPage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(7,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(8,0,null,0,0,"img",[["src","../../assets/icon/return.svg"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"2"),l(n,4,0,"dark","outline","large")}),null)}function m(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,7,"ion-col",[["size","8"],["style","padding-left: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #FC6864"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goTorReturnPage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Db(-1,null,[" return items "]))],(function(l,n){l(n,1,0,"8"),l(n,4,0,"dark","outline","large")}),null)}function y(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function O(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function w(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,8,"ion-col",[["size","2"],["style","padding-right: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #268387"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToAddSalePage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(7,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(8,0,null,0,0,"img",[["src","../../assets/icon/addsale.svg"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"2"),l(n,4,0,"dark","outline","large")}),null)}function S(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,7,"ion-col",[["size","8"],["style","padding-left: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,4,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #268387"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToAddSalePage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Db(-1,null,[" Add sale Item "]))],(function(l,n){l(n,1,0,"8"),l(n,4,0,"dark","outline","large")}),null)}function E(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function P(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function T(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,8,"ion-col",[["size","2"],["style","padding-right: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #C3DBB7"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToScanPage()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(7,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(8,0,null,0,0,"img",[["src","../../assets/newspaper.svg"]],null,null,null,null,null))],(function(l,n){l(n,1,0,"2"),l(n,4,0,"dark","outline","large")}),null)}function C(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,6,"ion-col",[["size","8"],["style","padding-left: 0"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(3,0,null,0,3,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #C3DBB7"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToViewInventory()&&e),e}),i.v,i.b)),e.ob(4,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(5,16384,null,0,r.d,[e.k],null,null),(l()(),e.Db(-1,0,[" View Inventory "]))],(function(l,n){l(n,1,0,"8"),l(n,4,0,"dark","outline","large")}),null)}function L(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(1,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(2,16384,null,0,r.d,[e.k],null,null)],(function(l,n){l(n,1,0,"1")}),null)}function M(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,3,"ion-header",[["class","header"]],null,null,null,i.B,i.h)),e.ob(1,49152,null,0,r.A,[e.h,e.k,e.z],null,null),(l()(),e.pb(2,0,null,0,1,"div",[["class","title"],["text-center",""],["text-uppercase",""]],null,null,null,null,null)),e.ob(3,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(4,0,null,null,67,"ion-content",[["padding",""]],null,null,null,i.y,i.e)),e.ob(5,49152,null,0,r.t,[e.h,e.k,e.z],null,null),e.ob(6,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(9,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(12,0,null,0,59,"ion-grid",[],null,null,null,i.A,i.g)),e.ob(13,49152,null,0,r.z,[e.h,e.k,e.z],null,null),(l()(),e.pb(14,0,null,0,57,"ion-row",[["margin-vertical",""],["padding-vertical",""],["style","padding-bottom: 0;padding-top: 0"]],null,null,null,i.I,i.o)),e.ob(15,49152,null,0,r.ib,[e.h,e.k,e.z],null,null),e.ob(16,16384,null,0,r.d,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,g)),e.ob(18,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,d)),e.ob(20,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,p)),e.ob(22,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,f)),e.ob(24,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,z)),e.ob(26,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,k)),e.ob(28,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,h)),e.ob(30,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,x)),e.ob(32,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,v)),e.ob(34,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,I)),e.ob(36,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,m)),e.ob(38,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,y)),e.ob(40,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,O)),e.ob(42,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,w)),e.ob(44,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,S)),e.ob(46,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,E)),e.ob(48,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,P)),e.ob(50,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,T)),e.ob(52,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,C)),e.ob(54,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,0,1,null,L)),e.ob(56,16384,null,0,b.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(57,0,null,0,2,"ion-col",[["size","8"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(58,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(59,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(60,0,null,0,8,"ion-col",[["size","3"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(61,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(62,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(63,0,null,0,5,"ion-button",[["class","btn-height"],["color","dark"],["fill","outline"],["size","large"],["style","background: #ffffff"],["text-uppercase",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToSignInPage()&&e),e}),i.v,i.b)),e.ob(64,49152,null,0,r.j,[e.h,e.k,e.z],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),e.ob(65,16384,null,0,r.d,[e.k],null,null),(l()(),e.pb(66,0,null,0,2,"ion-thumbnail",[["class","scanner-svg"]],null,null,null,i.M,i.s)),e.ob(67,49152,null,0,r.yb,[e.h,e.k,e.z],null,null),(l()(),e.pb(68,0,null,0,0,"img",[["src","../../assets/icon/logout.svg"]],null,null,null,null,null)),(l()(),e.pb(69,0,null,0,2,"ion-col",[["size","1"],["text-center",""]],null,null,null,i.x,i.d)),e.ob(70,49152,null,0,r.s,[e.h,e.k,e.z],{size:[0,"size"]},null),e.ob(71,16384,null,0,r.d,[e.k],null,null)],(function(l,n){var u=n.component;l(n,18,0,u.enableScan),l(n,20,0,u.enableScan),l(n,22,0,u.enableScan),l(n,24,0,u.enableScan),l(n,26,0,u.enableReceiveItems),l(n,28,0,u.enableReceiveItems),l(n,30,0,u.enableReceiveItems),l(n,32,0,u.enableReceiveItems),l(n,34,0,u.enableReturn),l(n,36,0,u.enableReturn),l(n,38,0,u.enableReturn),l(n,40,0,u.enableReturn),l(n,42,0,u.enableAddSale),l(n,44,0,u.enableAddSale),l(n,46,0,u.enableAddSale),l(n,48,0,u.enableAddSale),l(n,50,0,u.enableViewInventory),l(n,52,0,u.enableViewInventory),l(n,54,0,u.enableViewInventory),l(n,56,0,u.enableViewInventory),l(n,58,0,"8"),l(n,61,0,"3"),l(n,64,0,"dark","outline","large"),l(n,70,0,"1")}),null)}function R(l){return e.Eb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,M,a)),e.ob(1,114688,null,0,c,[s.m,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=e.lb("app-home",c,R,{},{},[]),A=u("gIcY");u.d(n,"HomePageModuleNgFactory",(function(){return B}));var B=e.mb(o,[],(function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[t.a,j]],[3,e.j],e.x]),e.xb(4608,b.k,b.j,[e.u,[2,b.q]]),e.xb(4608,A.s,A.s,[]),e.xb(4608,r.b,r.b,[e.z,e.g]),e.xb(4608,r.Gb,r.Gb,[r.b,e.j,e.q]),e.xb(4608,r.Jb,r.Jb,[r.b,e.j,e.q]),e.xb(1073742336,b.b,b.b,[]),e.xb(1073742336,A.q,A.q,[]),e.xb(1073742336,A.g,A.g,[]),e.xb(1073742336,r.Db,r.Db,[]),e.xb(1073742336,s.n,s.n,[[2,s.t],[2,s.m]]),e.xb(1073742336,o,o,[]),e.xb(1024,s.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);