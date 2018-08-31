webpackJsonp([18],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyBankFormPageModule", function() { return ApplyBankFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_bank_form__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyBankFormPageModule = /** @class */ (function () {
    function ApplyBankFormPageModule() {
    }
    ApplyBankFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_bank_form__["a" /* ApplyBankFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_bank_form__["a" /* ApplyBankFormPage */]),
            ],
        })
    ], ApplyBankFormPageModule);
    return ApplyBankFormPageModule;
}());

//# sourceMappingURL=apply-bank-form.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyBankFormPage; });
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
 * Generated class for the ApplyBankFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyBankFormPage = /** @class */ (function () {
    function ApplyBankFormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApplyBankFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyBankFormPage');
    };
    ApplyBankFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apply-bank-form',template:/*ion-inline-start:"C:\hawra-app\src\pages\apply-bank-form\apply-bank-form.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title>نمودج التحويل</ion-title>\n            \n    <ion-buttons end>\n      <button ion-button right icon-only (click)="Logout()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div padding>\n      <h5>المعلومات الشخصية</h5>\n  </div>\n\n  <ion-list>\n      <ion-item>\n          <ion-label>الاسم الكامل</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>الدولة</ion-label>\n          <ion-select [(ngModel)]="merriedz" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">المملة العربية السعودية</ion-option>\n            <ion-option value="2">المملكة المغربية</ion-option>\n            <ion-option value="3">الجزائر</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>البريد الالكتروني</ion-label>\n          <ion-input type="text"></ion-input>\n      </ion-item>\n\n        <ion-item>\n          <ion-label>رقم الهاتف</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div padding>\n        <h5>تفاصيل الايداع</h5>\n    </div>\n    \n    <ion-list>\n      <ion-item>\n        <ion-label>الاسم الكامل</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>طريقة الايداع</ion-label>\n          <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">عبر الانترنت المصرفي</ion-option>\n            <ion-option value="2">عبر الصراف الآلي</ion-option>\n            <ion-option value="3">عبر الهاتف المصرفي</ion-option>\n            <ion-option value="4">عبر الايداع النقدي</ion-option>\n            <ion-option value="5">التحويل الدولي</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>اسم البنك</ion-label>\n            <ion-select [(ngModel)]="children" okText="اختيار" cancelText="الغاء">\n              <ion-option value="1">بنك الراجحي</ion-option>\n              <ion-option value="2">البنك العربي</ion-option>\n              <ion-option value="3">انماء</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>رقم الحساب المحول منه</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>ملاحظات</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n\n            </ion-list>\n    <div>\n      <button ion-button full> ارسال </button>\n    </div>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\apply-bank-form\apply-bank-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ApplyBankFormPage);
    return ApplyBankFormPage;
}());

//# sourceMappingURL=apply-bank-form.js.map

/***/ })

});
//# sourceMappingURL=18.js.map