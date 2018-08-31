webpackJsonp([12],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\hawra-app\src\pages\home\home.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>الرئيسية</ion-title>\n      \n    <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row text-center>\n          <ion-col col-4>\n            <p>0</p>\n            <p><ion-icon name="chatbubbles" color="primary" class="fontIcon"></ion-icon></p>\n            <p>رسائل جديدة</p>\n          </ion-col>\n          <ion-col col-4>\n            <p>0</p>\n            <p><ion-icon name="heart" color="danger" class="fontIcon"></ion-icon></p>\n            <p>المعجبون الجدد</p>\n          </ion-col>\n          <ion-col col-4>\n            <p>0</p>\n            <p><ion-icon name="eye" color="primary" class="fontIcon" ></ion-icon></p>\n            <p>زائرين جدد</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      <h6 padding><b>الأعضاء المناسبين</b></h6>\n\n      <ion-grid text-center>\n      <ion-slides>\n        <ion-slide>\n         \n              <ion-row text-center>\n                  <ion-col col-3>\n                    <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                    <p class="usersname">نسرين</p>\n                  </ion-col>\n\n                  <ion-col col-3>\n                    <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                    <p class="usersname">سهام اسيف</p>\n                  </ion-col>\n\n                  <ion-col col-3>\n                    <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6IUyEhkZ29VheQCKWqI4HkCyDvk8JyxdscBJ0rFux5Ni8faT">\n                    <p class="usersname">فاطمة محمد</p>\n                  </ion-col>\n\n                  <ion-col col-3>\n                    <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n                    <p class="usersname">هشام امير</p>\n                  </ion-col>\n\n                </ion-row>\n           \n        </ion-slide>\n      </ion-slides>\n    </ion-grid>\n    \n\n      <ion-list padding>\n\n               <h6 padding><b>البحث السريع</b></h6>\n \n          <ion-item>\n            <ion-label>الجنس</ion-label>\n            <ion-select [(ngModel)]="gender" okText="اختيار" cancelText="الغاء">\n              <ion-option value="1">ذكر</ion-option>\n              <ion-option value="2">أنثى</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>بيانات مع صور</ion-label>\n              <ion-checkbox color="primary" checked="true"></ion-checkbox>\n            </ion-item>\n          \n            <ion-item>\n                <ion-label>المتواجدون الان</ion-label>\n                <ion-checkbox color="primary" checked="true"></ion-checkbox>\n              </ion-item>\n              \n              <ion-item>\n                  <ion-label>الهدف</ion-label>\n                  <ion-select [(ngModel)]="merrieda" okText="اختيار" cancelText="الغاء">\n                    <ion-option value="1">زواج عادي</ion-option>\n                    <ion-option value="2">زواج مسار</ion-option>\n                  </ion-select>\n                </ion-item>\n    \n                <ion-item>\n                    <ion-label>الدولة</ion-label>\n                    <ion-select [(ngModel)]="merriedz" okText="اختيار" cancelText="الغاء">\n                      <ion-option value="1">المملة العربية السعودية</ion-option>\n                      <ion-option value="2">المملكة المغربية</ion-option>\n                      <ion-option value="3">الجزائر</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label>العمر</ion-label>\n                      <ion-select [(ngModel)]="merried" okText="اختيار" cancelText="الغاء">\n                        <ion-option value="1">18 - 22</ion-option>\n                        <ion-option value="2">23 - 27</ion-option>\n                        <ion-option value="3">28 - 32</ion-option>\n                      </ion-select>\n                    </ion-item>\n\n                  </ion-list>\n                    \n                    <div padding>\n                        <button ion-button full> ابحث </button>\n                      </div>\n\n                      <h6 padding><b>الخطابات</b></h6>\n\n                      <ion-grid text-center>\n                          <ion-slides>\n                            <ion-slide>\n                             \n                                  <ion-row text-center>\n                                      <ion-col col-3>\n                                        <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                                        <p class="usersname">نسرين</p>\n                                      </ion-col>\n                    \n                                                              \n                                      <ion-col col-3>\n                                          <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n                                          <p class="usersname">هشام امير</p>\n                                        </ion-col>\n\n                                      <ion-col col-3>\n                                        <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                                        <p class="usersname">سهام اسيف</p>\n                                      </ion-col>\n                    \n                                      <ion-col col-3>\n                                        <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6IUyEhkZ29VheQCKWqI4HkCyDvk8JyxdscBJ0rFux5Ni8faT">\n                                        <p class="usersname">فاطمة محمد</p>\n                                      </ion-col>\n                    \n                         \n                    \n                                    </ion-row>\n                               \n                            </ion-slide>\n                          </ion-slides>\n                        </ion-grid>\n\n\n                          <h6 padding><b>الأعضاء الجدد</b></h6>\n\n                          <ion-grid text-center>\n                              <ion-slides>\n                                <ion-slide>\n                                 \n                                      <ion-row text-center>\n                                          <ion-col col-3>\n                                            <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                                            <p class="usersname">نسرين</p>\n                                          </ion-col>\n                        \n                                          <ion-col col-3>\n                                            <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiPc_Fv1pmtnUhF0AEOTG6sVCZJ3MZq3rRJfZzDyNZcYB_xc4qcQ">\n                                            <p class="usersname">سهام اسيف</p>\n                                          </ion-col>\n                        \n                                                                  \n                                          <ion-col col-3>\n                                              <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="http://static.ounousa.com/Content/ResizedImages/638/654/inside/141119114438104.jpg">\n                                              <p class="usersname">هشام امير</p>\n                                            </ion-col>\n\n                                          <ion-col col-3>\n                                            <img style="width: 65px; height: 65px; border-radius: 50%;text-align: center;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6IUyEhkZ29VheQCKWqI4HkCyDvk8JyxdscBJ0rFux5Ni8faT">\n                                            <p class="usersname">فاطمة محمد</p>\n                                          </ion-col>\n                        \n                                        </ion-row>\n                                   \n                                </ion-slide>\n                              </ion-slides>\n                            </ion-grid>\n\n      \n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=12.js.map