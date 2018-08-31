webpackJsonp([7],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountPageModule", function() { return MyaccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myaccount__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyaccountPageModule = /** @class */ (function () {
    function MyaccountPageModule() {
    }
    MyaccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myaccount__["a" /* MyaccountPage */]),
            ],
        })
    ], MyaccountPageModule);
    return MyaccountPageModule;
}());

//# sourceMappingURL=myaccount.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyaccountPage; });
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


var MyaccountPage = /** @class */ (function () {
    function MyaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyaccountPage.prototype.OpenChangePassword = function () {
        this.navCtrl.push('ChangepasswordPage');
    };
    MyaccountPage.prototype.EditProfile = function () {
        this.navCtrl.push('EditPoriflePage');
    };
    MyaccountPage.prototype.EditDescription = function () {
        this.navCtrl.push('EditDescriptionPage');
    };
    MyaccountPage.prototype.Album = function () {
        this.navCtrl.push('AlbumPage');
    };
    MyaccountPage.prototype.OpenPromotionUser = function () {
        this.navCtrl.push('PromotionUserPage');
    };
    MyaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myaccount',template:/*ion-inline-start:"C:\hawra-app\src\pages\myaccount\myaccount.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title>لوحة تحكم [ حسابي ]</ion-title>\n            \n    <ion-buttons end>\n      <button ion-button right icon-only (click)="OpenSearch()">\n          <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-list class="itemslistcontrol">\n          <button ion-item class="itemslistcontrol" (click)="OpenPromotionUser()">\n            <ion-icon name="star"  color="primary" item-start></ion-icon>\n            ترقية العضوية\n          </button>\n      \n          <button ion-item class="itemslistcontrol">\n            <ion-icon name="contact"  color="primary" item-start></ion-icon>\n            معلومات حسابي\n          </button>\n      \n          <button ion-item class="itemslistcontrol" (click)="OpenChangePassword()"> \n            <ion-icon name="lock"  color="primary" item-start></ion-icon>\n            تعديل كلمة المرور\n          </button>\n          \n          <button ion-item class="itemslistcontrol">\n            <ion-icon name="eye-off"  color="primary" item-start></ion-icon>\n           قائمة التجاهل\n          </button>\n      \n          <button ion-item class="itemslistcontrol" (click)="EditProfile()">\n            <ion-icon name="construct"  color="primary" item-start></ion-icon>\n            تعديل بياناتي\n          </button>\n      \n          <button ion-item class="itemslistcontrol" (click)="EditDescription()">\n              <ion-icon name="cog"  color="primary" item-start></ion-icon>\n              تعديل الوصف\n          </button>\n\n          <button ion-item class="itemslistcontrol" (click)="Album()">\n              <ion-icon name="images"  color="primary" item-start></ion-icon>\n              ادارة البوم الصور\n          </button>\n\n          <button ion-item class="itemslistcontrol">\n              <ion-icon name="document"  color="primary" item-start></ion-icon>\n              سياسة الخصوصية\n            </button>\n\n            <button ion-item class="itemslistcontrol">\n                <ion-icon name="warning"  color="primary" item-start></ion-icon>\n                تحذيرات الأمان\n            </button>\n\n            <button ion-item class="itemslistcontrol">\n              <ion-icon name="help-circle"  color="primary" item-start></ion-icon>\n                  الأسئلة الشائعة\n            </button>\n\n            <button ion-item class="itemslistcontrol">\n                <ion-icon name="help-buoy"  color="primary" item-start></ion-icon>\n                    نصائح و اقتراحات\n            </button>                \n\n            <button ion-item class="itemslistcontrol">\n              <ion-icon name="paper"  color="primary" item-start></ion-icon>\n                      شروط الاستخدام\n            </button>                \n  \n        </ion-list>\n      </ion-card>\n\n    </ion-content>\n\n'/*ion-inline-end:"C:\hawra-app\src\pages\myaccount\myaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MyaccountPage);
    return MyaccountPage;
}());

//# sourceMappingURL=myaccount.js.map

/***/ })

});
//# sourceMappingURL=7.js.map