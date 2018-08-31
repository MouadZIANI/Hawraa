webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionUserPageModule", function() { return PromotionUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotion_user__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PromotionUserPageModule = /** @class */ (function () {
    function PromotionUserPageModule() {
    }
    PromotionUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__promotion_user__["a" /* PromotionUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__promotion_user__["a" /* PromotionUserPage */]),
            ],
        })
    ], PromotionUserPageModule);
    return PromotionUserPageModule;
}());

//# sourceMappingURL=promotion-user.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionUserPage; });
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


var PromotionUserPage = /** @class */ (function () {
    function PromotionUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PromotionUserPage.prototype.BankForm = function () {
        this.navCtrl.push('ApplyBankFormPage');
    };
    PromotionUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promotion-user',template:/*ion-inline-start:"C:\hawra-app\src\pages\promotion-user\promotion-user.html"*/'\n<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>ترقية العضوية</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="OpenSearch()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n\n<ion-content>\n\n  <ion-card>\n\n      <ion-card-header>\n        <h2 class="promotionUserHead" text-wrap>لكي تتمكن من الاستفادة من جميع خدمات الموقع يجب عليك ترقية العضوية. </h2>\n      </ion-card-header>\n    \n      <ion-card-content>\n          <h2 class="promotionUserHead2" text-wrap>العضوية مدتها سنة و المبلغ المطلوب 100 دولار أمريكي. </h2>\n          <h2 class="promotionUserHead2" text-wrap>- يعادل فقط 8.33 دولارا شهريا !      </h2>\n          <h2 class="promotionUserHead" text-wrap> ملاحظة: لا يمكن الاشتراك لمدة أقل من سنة  </h2>\n      </ion-card-content>\n    \n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n            <img src="https://downloads.intercomcdn.com/i/o/35053605/22efd80bfe03b9b7ff6bf2ce/paypal.png"/>\n        </ion-card-content>\n  \n      </ion-card>\n\n\n  <ion-card>\n    \n      <ion-card-content>\n          <h2 class="promotionUserDetailsHead" text-wrap>الخدمات المتوفرة بعد ترقية العضوية </h2>\n          <h2 class="promotionUserDetails" text-wrap>\n              إرسال وقراءة كل الرسائل</h2>\n        <h2 class="promotionUserDetails" text-wrap> \n            إرسال رسائل إعجاب بدون حد يومي\n          </h2>\n          <h2 class="promotionUserDetails" text-wrap>توفير كل خيارات البحث المتقدم\n            </h2>\n            <h2 class="promotionUserDetails" text-wrap>علامة في بياناتك توضح أنك عضو مميز\n              </h2> \n      </ion-card-content>\n    \n    </ion-card>\n\n    <div padding>\n        <button ion-button full (click)="BankForm()"> تعبئة نمودج التحويل  </button>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\promotion-user\promotion-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PromotionUserPage);
    return PromotionUserPage;
}());

//# sourceMappingURL=promotion-user.js.map

/***/ })

});
//# sourceMappingURL=4.js.map