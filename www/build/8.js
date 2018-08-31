webpackJsonp([8],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
            ],
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
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


var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.segmento = "inbox";
    }
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\hawra-app\src\pages\messages\messages.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>صندوق البريد</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n\n\n      <div padding>\n          <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="inbox">\n              الرسائل الصادرة\n            </ion-segment-button>\n            <ion-segment-button value="sendmessagess">\n              الرسائل الواردة\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n        \n        <div [ngSwitch]="pet">\n          <ion-list *ngSwitchCase="\'inbox\'">\n            <ion-item>\n              <p class="netoo" text-wrap>يرجى الملاحظة : الرسائل التي لم تفتح يتم الغائها بعد مرور ثلاتة ولا يمكن استرجاعها</p>\n            </ion-item>\n          </ion-list>\n        \n          <ion-list *ngSwitchCase="\'sendmessages\'">\n              <ion-item>\n                  <p class="netoo" text-wrap>يرجى الملاحظة : الرسائل التي لم تفتح يتم الغائها بعد مرور ثلاتة ولا يمكن استرجاعها</p>\n                </ion-item>\n          </ion-list>\n        </div>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\hawra-app\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=8.js.map