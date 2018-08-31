webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
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


var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\hawra-app\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>تسجيل مستخدم جديد</ion-title>\n            \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n <br>\n\n <div text-center>\n     <img src="http://awa.m-apps.co/uploads/2018-04/2ba5f00e80db2b6982cdb74d506eb0e9.png" width="100"/>\n </div>\n\n <br>\n\n  <div padding>\n      <h5>سجل الآن! للعثور على شريك حياتك</h5>\n  </div>\n\n  <ion-list>\n      <ion-item>\n        <ion-label>اسم المستخدم</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>الاسم الكامل</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>رقم الهاتف</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>البريد الاكتروني</ion-label>\n          <ion-input type="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>تاكيد البريد الاكتروني</ion-label>\n          <ion-input type="email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>كلمة المرور</ion-label>\n          <ion-input type="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>الجنس</ion-label>\n          <ion-select [(ngModel)]="gender" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">ذكر</ion-option>\n            <ion-option value="2">أنثى</ion-option>\n          </ion-select>\n        </ion-item>\n\n         <ion-item>\n          <ion-label>الهدف</ion-label>\n          <ion-select [(ngModel)]="merrieda" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">زواج عادي</ion-option>\n            <ion-option value="2">زواج مسار</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>الدولة</ion-label>\n          <ion-select [(ngModel)]="merriedz" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">المملة العربية السعودية</ion-option>\n            <ion-option value="2">المملكة المغربية</ion-option>\n            <ion-option value="3">الجزائر</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item class="contact-inputform">\n         <ion-label>تحدث عن نفسك</ion-label>\n          <ion-textarea rows="3"></ion-textarea>\n        </ion-item>\n\n        <ion-item class="contact-inputform">\n          <ion-label>تحدث عن شريكك</ion-label>\n          <ion-textarea rows="3"></ion-textarea>\n        </ion-item>\n\n    </ion-list>\n\n    <div>\n      <button ion-button full> سجل الآن! \n      \n          <ion-buttons  icon-only>\n          <ion-icon name="arrow-forward"></ion-icon>\n            </ion-buttons>\n      </button>\n  \n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=2.js.map