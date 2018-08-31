webpackJsonp([14],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPoriflePageModule", function() { return EditPoriflePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_porifle__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPoriflePageModule = /** @class */ (function () {
    function EditPoriflePageModule() {
    }
    EditPoriflePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_porifle__["a" /* EditPoriflePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_porifle__["a" /* EditPoriflePage */]),
            ],
        })
    ], EditPoriflePageModule);
    return EditPoriflePageModule;
}());

//# sourceMappingURL=edit-porifle.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPoriflePage; });
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


var EditPoriflePage = /** @class */ (function () {
    function EditPoriflePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditPoriflePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPoriflePage');
    };
    EditPoriflePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-porifle',template:/*ion-inline-start:"C:\hawra-app\src\pages\edit-porifle\edit-porifle.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  \n        <ion-title>تعديل بياناتي</ion-title>\n              \n      <ion-buttons end>\n        <button ion-button right icon-only (click)="Logout()">\n            <ion-icon name="log-out"></ion-icon>\n        </button>\n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content padding>\n\n    <div padding>\n        <h5>بياناتي الشخصية</h5>\n    </div>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>الاسم</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>رقم الهاتف</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n      \n          <ion-item>\n              <ion-label>البريد الالكتروني</ion-label>\n              <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>الجنس</ion-label>\n              <ion-select [(ngModel)]="gender" okText="اختيار" cancelText="الغاء">\n                <ion-option value="F">أنثى</ion-option>\n                <ion-option value="M">ذكر</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>هدف التسجيل</ion-label>\n                <ion-select [(ngModel)]="merrieda" okText="اختيار" cancelText="الغاء">\n                  <ion-option value="1">زواج عادي</ion-option>\n                  <ion-option value="2">زواج مسار</ion-option>\n                </ion-select>\n              </ion-item>\n            \n              <ion-item>\n                  <ion-label>العمر</ion-label>\n                  <ion-select [(ngModel)]="merried" okText="اختيار" cancelText="الغاء">\n                    <ion-option value="1">18 - 22</ion-option>\n                    <ion-option value="2">23 - 27</ion-option>\n                    <ion-option value="3">28 - 32</ion-option>\n                  </ion-select>\n                </ion-item>\n                \n                <ion-item>\n                    <ion-label>الدولة</ion-label>\n                    <ion-select [(ngModel)]="merriedz" okText="اختيار" cancelText="الغاء">\n                      <ion-option value="1">المملة العربية السعودية</ion-option>\n                      <ion-option value="2">المملكة المغربية</ion-option>\n                      <ion-option value="3">الجزائر</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n\n      </ion-list>\n\n      <div padding>\n          <h5>التفاصيل</h5>\n      </div>\n      \n      <ion-list>\n      <ion-item>\n          <ion-label>الجنسية</ion-label>\n          <ion-select [(ngModel)]="Country" okText="اختيار" cancelText="الغاء">\n            <ion-option value="1">المملة العربية السعودية</ion-option>\n            <ion-option value="2">المملكة المغربية</ion-option>\n            <ion-option value="3">الجزائر</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>الحالة الاجتماعية</ion-label>\n            <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n              <ion-option value="1">متزوج</ion-option>\n              <ion-option value="2">أعزب</ion-option>\n              <ion-option value="3">مطلق</ion-option>\n              <ion-option value="4">ارمل</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>هل لديك أبناء ؟</ion-label>\n              <ion-select [(ngModel)]="children" okText="اختيار" cancelText="الغاء">\n                <ion-option value="1">نعم</ion-option>\n                <ion-option value="2">لا</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>المؤهل التعليمي</ion-label>\n                <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n                  <ion-option value="1">غير متعلم</ion-option>\n                  <ion-option value="2">تعليم مدرسي</ion-option>\n                  <ion-option value="3">تعليم جامعي</ion-option>\n                  <ion-option value="4">دراسات عليا</ion-option>\n                  <ion-option value="4">غير دلك</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>المهنة</ion-label>\n                  <ion-select [(ngModel)]="work" okText="اختيار" cancelText="الغاء">\n                    <ion-option value="1">موظف حكومي</ion-option>\n                    <ion-option value="2">موظف قطاع خاص</ion-option>\n                    <ion-option value="3">طالب</ion-option>\n                    <ion-option value="4">أعمال مصرفية</ion-option>\n                  </ion-select>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>طريقة التواصل</ion-label>\n                    <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n                      <ion-option value="1">التطبيق</ion-option>\n                      <ion-option value="2">الايميل</ion-option>\n                      <ion-option value="3">ماسنجر</ion-option>\n                      <ion-option value="4">ماسنجر وكام</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n\n                </ion-list>\n\n                <div padding>\n                    <h5>المظهر</h5>\n                </div>\n                \n                <ion-list>\n                <ion-item>\n                    <ion-label>لون العينين</ion-label>\n                    <ion-select [(ngModel)]="easy" okText="اختيار" cancelText="الغاء">\n                      <ion-option value="1">بني</ion-option>\n                      <ion-option value="2">أسود</ion-option>\n                      <ion-option value="3">أزرق</ion-option>\n                    </ion-select>\n                  </ion-item>\n          \n                  <ion-item>\n                      <ion-label>لون الشعر</ion-label>\n                      <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n                        <ion-option value="1">أسود</ion-option>\n                        <ion-option value="1">بني</ion-option>\n                        <ion-option value="2">أحمر</ion-option>\n                        <ion-option value="3">أزرق</ion-option>\n                      </ion-select>\n                    </ion-item>\n          \n                  <ion-item>\n                      <ion-label>لون الجلد</ion-label>\n                      <ion-select [(ngModel)]="children" okText="اختيار" cancelText="الغاء">\n                        <ion-option value="1">يميل الى البياض</ion-option>\n                        <ion-option value="2">أسمر</ion-option>\n                      </ion-select>\n                    </ion-item>\n        \n                    <ion-item>\n                        <ion-label>الطول</ion-label>\n                        <ion-select [(ngModel)]="encouple" okText="اختيار" cancelText="الغاء">\n                          <ion-option value="1">140</ion-option>\n                          <ion-option value="2">141</ion-option>\n                          <ion-option value="3">142</ion-option>\n                          <ion-option value="4">143</ion-option>\n                        </ion-select>\n                      </ion-item>\n        \n                      <ion-item>\n                          <ion-label>الوزن</ion-label>\n                          <ion-select [(ngModel)]="work" okText="اختيار" cancelText="الغاء">\n                            <ion-option value="1">60 - 70</ion-option>\n                            <ion-option value="2">70 - 75</ion-option>\n                          </ion-select>\n                        </ion-item>\n      \n                  </ion-list>\n      <div>\n        <button ion-button full> حفظ الاعدادات </button>\n      </div>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\hawra-app\src\pages\edit-porifle\edit-porifle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditPoriflePage);
    return EditPoriflePage;
}());

//# sourceMappingURL=edit-porifle.js.map

/***/ })

});
//# sourceMappingURL=14.js.map