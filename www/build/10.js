webpackJsonp([10],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.RecoverPassword = function () {
        this.navCtrl.push('RecoverPasswordPage');
    };
    LoginPage.prototype.Regitser = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\hawra-app\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>تسجيل الدخول</ion-title>\n            \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n <br>\n\n <div text-center>\n     <img src="http://awa.m-apps.co/uploads/2018-04/2ba5f00e80db2b6982cdb74d506eb0e9.png" width="100"/>\n </div>\n\n <br>\n\n  <div padding>\n      <h5>تسجيل الدخول</h5>\n  </div>\n\n  <ion-list>\n\n      <ion-item>\n          <ion-label>البريد الالكتروني</ion-label>\n          <ion-input type="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>كلمة المرور</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div>\n      <button ion-button full> الدخول \n      \n          <ion-buttons  icon-only>\n          <ion-icon name="arrow-forward"></ion-icon>\n            </ion-buttons>\n      </button>\n  \n    </div>\n\n    <br>\n\n    <div text-center>\n          <button ion-button full color="secondary" margin-top (click)="RecoverPassword()">  هل نسيت كلمة المرور ؟\n      </button>\n    </div>\n\n    <div text-center>\n          <button ion-button full color="secondary" margin-top (click)="Regitser()"> ليس لديك حساب ؟ سجل الآن! \n      </button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=10.js.map