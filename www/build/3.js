webpackJsonp([3],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordPageModule", function() { return RecoverPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recover_password__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecoverPasswordPageModule = /** @class */ (function () {
    function RecoverPasswordPageModule() {
    }
    RecoverPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recover_password__["a" /* RecoverPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recover_password__["a" /* RecoverPasswordPage */]),
            ],
        })
    ], RecoverPasswordPageModule);
    return RecoverPasswordPageModule;
}());

//# sourceMappingURL=recover-password.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecoverPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecoverPasswordPage = /** @class */ (function () {
    function RecoverPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecoverPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecoverPasswordPage');
    };
    RecoverPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recover-password',template:/*ion-inline-start:"C:\hawra-app\src\pages\recover-password\recover-password.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>استرجاع كلمة المرور</ion-title>\n          \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n <br>\n\n <div text-center>\n     <img src="http://awa.m-apps.co/uploads/2018-04/2ba5f00e80db2b6982cdb74d506eb0e9.png" width="100"/>\n </div>\n\n <br>\n\n  <div padding>\n      <p>لاستعادة كلمة المرور يرجى ادخال البريد الالكتروني الخاص بك و سيتم ارسال رسالة لتغيير كلمة المرور</p>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>البريد الالكتروني</ion-label>\n      <ion-input type="email"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n    <div>\n      <button ion-button full> استرجاع كلمة المرور \n      \n          <ion-buttons  icon-only>\n          <ion-icon name="arrow-forward"></ion-icon>\n            </ion-buttons>\n      </button>\n  \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\recover-password\recover-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecoverPasswordPage);
    return RecoverPasswordPage;
}());

//# sourceMappingURL=recover-password.js.map

/***/ })

});
//# sourceMappingURL=3.js.map