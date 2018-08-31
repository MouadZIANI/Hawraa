webpackJsonp([16],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsPageModule = /** @class */ (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
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
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\hawra-app\src\pages\contacts\contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>اتصل بنا</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="OpenSearch()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content padding>\n\n  <p class="contact-intro">نحن نقدر كل ردود الفعل التي تلقيناها - إيجابية وبناءة - ونحب أن نسمع رأيك عنا، يرجى ملء النموذج القصير وسوف نتواصل معكم في أقرب وقت ممكن.\n\n    </p>\n\n    <ion-list>\n\n\n        <ion-item>\n            <ion-label>اختيار الموضوع</ion-label>\n            <ion-select [(ngModel)]="gender" okText="اختيار" cancelText="الغاء">\n              <ion-option value="1">شكوى</ion-option>\n              <ion-option value="2">اقتراح</ion-option>\n              <ion-option value="3">استفسار</ion-option>\n            </ion-select>\n          </ion-item>\n\n        <ion-item class="contact.inputform">\n            <ion-textarea placeholder="اكتب رسالتك هنا .. " class="contact.inputform" rows="3"></ion-textarea>\n          </ion-item>\n\n          <button ion-button full>  ارسال الرسالة</button>\n      \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=16.js.map