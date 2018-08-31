webpackJsonp([11],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhtabatPageModule", function() { return KhtabatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__khtabat__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var KhtabatPageModule = /** @class */ (function () {
    function KhtabatPageModule() {
    }
    KhtabatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__khtabat__["a" /* KhtabatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__khtabat__["a" /* KhtabatPage */]),
            ],
        })
    ], KhtabatPageModule);
    return KhtabatPageModule;
}());

//# sourceMappingURL=khtabat.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KhtabatPage; });
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
 * Generated class for the KhtabatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KhtabatPage = /** @class */ (function () {
    function KhtabatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KhtabatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KhtabatPage');
    };
    KhtabatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-khtabat',template:/*ion-inline-start:"C:\hawra-app\src\pages\khtabat\khtabat.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>الخطابات</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content>\n\n  <br>\n\n<ion-list>\n          <ion-item>\n\n    <ion-grid no-padding>\n\n        <ion-row text-center>\n          <ion-col col-3>\n          <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center; margin-left:2px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n          </ion-col>\n          <ion-col>\n          <p>فاطمة محمد</p>\n           <p>المملكة العربية السعودية</p>\n          </ion-col>          \n          <ion-col>\n            <span><ion-icon name="phone-portrait" color="primary" class="fontIcon"></ion-icon></span>\n            <span>00212678528410</span>\n          </ion-col>\n          <ion-col col-1> \n            <span><ion-icon name="call" color="primary" class="fontIcon"></ion-icon></span>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      </ion-item>\n\n          <ion-item>\n\n    <ion-grid no-padding>\n\n        <ion-row text-center>\n          <ion-col col-3>\n          <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center; margin-left:2px;" src="http://hdqwalls.com/wallpapers/dana-kareglazaya-gorgeous-wallpaper.jpg">\n          </ion-col>\n          <ion-col>\n          <p>فاطمة محمد</p>\n           <p>المملكة العربية السعودية</p>\n          </ion-col>          \n          <ion-col>\n            <span><ion-icon name="phone-portrait" color="primary" class="fontIcon"></ion-icon></span>\n            <span>00212678528410</span>\n          </ion-col>\n          <ion-col col-1> \n            <span><ion-icon name="call" color="primary" class="fontIcon"></ion-icon></span>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      </ion-item>\n\n\n                <ion-item>\n\n      <ion-grid no-padding>\n\n        <ion-row text-center>\n          <ion-col col-3>\n          <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center; margin-left:2px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6IUyEhkZ29VheQCKWqI4HkCyDvk8JyxdscBJ0rFux5Ni8faT">\n          </ion-col>\n          <ion-col>\n          <p>فاطمة محمد</p>\n           <p>المملكة العربية السعودية</p>\n          </ion-col>          \n          <ion-col>\n            <span><ion-icon name="phone-portrait" color="primary" class="fontIcon"></ion-icon></span>\n            <span>00212678528410</span>\n          </ion-col>\n          <ion-col col-1> \n            <span><ion-icon name="call" color="primary" class="fontIcon"></ion-icon></span>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      </ion-item>\n\n  </ion-list>\n    \n  </ion-content>\n  '/*ion-inline-end:"C:\hawra-app\src\pages\khtabat\khtabat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], KhtabatPage);
    return KhtabatPage;
}());

//# sourceMappingURL=khtabat.js.map

/***/ })

});
//# sourceMappingURL=11.js.map