webpackJsonp([19],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumPageModule", function() { return AlbumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__album__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlbumPageModule = /** @class */ (function () {
    function AlbumPageModule() {
    }
    AlbumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__album__["a" /* AlbumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__album__["a" /* AlbumPage */]),
            ],
        })
    ], AlbumPageModule);
    return AlbumPageModule;
}());

//# sourceMappingURL=album.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumPage; });
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
 * Generated class for the AlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlbumPage = /** @class */ (function () {
    function AlbumPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlbumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlbumPage');
    };
    AlbumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-album',template:/*ion-inline-start:"C:\hawra-app\src\pages\album\album.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>البوم الصور</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img style="width: 110px; height: 110px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n          </ion-thumbnail>\n          <button ion-button item-end padding>تحديث الصورة</button>\n          <button ion-button item-end padding color="danger">حذف </button>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail item-start>\n              <img style="width: 110px; height: 110px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n            </ion-thumbnail>\n            <button ion-button item-end padding>تحديث الصورة</button>\n            <button ion-button item-end padding color="danger">حذف </button>\n        </ion-item>        \n\n      <ion-item>\n          <ion-thumbnail item-start>\n            <img style="width: 110px; height: 110px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n          </ion-thumbnail>\n\n          <button ion-button item-end padding>تحديث الصورة</button>\n          <button ion-button item-end padding color="danger">حذف </button>\n      </ion-item>  \n\n      <ion-item>\n          <ion-thumbnail item-start>\n            <img style="width: 110px; height: 110px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n          </ion-thumbnail>\n          <button ion-button item-end padding>تحديث الصورة</button>\n          <button ion-button item-end padding color="danger">حذف </button>\n      </ion-item>  \n\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\album\album.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AlbumPage);
    return AlbumPage;
}());

//# sourceMappingURL=album.js.map

/***/ })

});
//# sourceMappingURL=19.js.map