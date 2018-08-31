webpackJsonp([0],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsPageModule", function() { return VisitorsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitors__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisitorsPageModule = /** @class */ (function () {
    function VisitorsPageModule() {
    }
    VisitorsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__visitors__["a" /* VisitorsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__visitors__["a" /* VisitorsPage */]),
            ],
        })
    ], VisitorsPageModule);
    return VisitorsPageModule;
}());

//# sourceMappingURL=visitors.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorsPage; });
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


var VisitorsPage = /** @class */ (function () {
    function VisitorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VisitorsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisitorsPage');
    };
    VisitorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visitors',template:/*ion-inline-start:"C:\hawra-app\src\pages\visitors\visitors.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>لائحة الزيارات</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n\n      <ion-list>\n          <ion-item>\n            <ion-thumbnail item-start>\n                <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center;" src="https://atgbcentral.com/data/out/198/5739491-beautiful-girl-images.jpg">\n              </ion-thumbnail>\n            <h4 text-wrap>سهام أسيف</h4>\n            <button ion-button clear item-end>10 - 22 - 2018</button>\n          </ion-item>\n\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n                </ion-thumbnail>\n              <h4 text-wrap>هشام محمد </h4>\n              <button ion-button clear item-end>10 - 22 - 2018</button>\n            </ion-item>\n\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center;" src="http://hdqwalls.com/wallpapers/dana-kareglazaya-gorgeous-wallpaper.jpg">\n                  </ion-thumbnail>\n                <h4 text-wrap>فاطمة محمد</h4>\n                <button ion-button clear item-end>10 - 22 - 2018</button>\n              </ion-item>\n\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n                    </ion-thumbnail>\n                  <h4 text-wrap>هشام محمد</h4>\n                  <button ion-button clear item-end>10 - 22 - 2018</button>\n                </ion-item>\n\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img style="width: 60px; height: 60px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6IUyEhkZ29VheQCKWqI4HkCyDvk8JyxdscBJ0rFux5Ni8faT">\n                      </ion-thumbnail>\n                    <h4 text-wrap>نسرين ابو كريم</h4>\n                    <button ion-button clear item-end>10 - 22 - 2018</button>\n                  </ion-item>\n\n        </ion-list>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\hawra-app\src\pages\visitors\visitors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], VisitorsPage);
    return VisitorsPage;
}());

//# sourceMappingURL=visitors.js.map

/***/ })

});
//# sourceMappingURL=0.js.map