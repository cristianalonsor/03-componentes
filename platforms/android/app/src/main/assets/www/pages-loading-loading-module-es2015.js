(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loading-loading-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"loading\" ></app-header>\n\n<ion-content padding>\n  <h1>Cargando</h1>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/loading/loading-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loading/loading-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoadingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageRoutingModule", function() { return LoadingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/loading/loading.page.ts");




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"]
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/loading/loading.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.module.ts ***!
  \*************************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-routing.module */ "./src/app/pages/loading/loading-routing.module.ts");
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading.page */ "./src/app/pages/loading/loading.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoadingPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
    })
], LoadingPageModule);



/***/ }),

/***/ "./src/app/pages/loading/loading.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/loading/loading.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYWRpbmcvbG9hZGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/loading/loading.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/loading/loading.page.ts ***!
  \***********************************************/
/*! exports provided: LoadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let LoadingPage = class LoadingPage {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
        this.presentLoading('Cargando...');
        // cancelo el loading independiente del proceso que sea
        setTimeout(() => {
            this.loading.dismiss();
        }, 1500);
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Cargando...',
            });
            return this.loading.present();
        });
    }
};
LoadingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loading.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/loading/loading.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loading.page.scss */ "./src/app/pages/loading/loading.page.scss")).default]
    })
], LoadingPage);



/***/ })

}]);
//# sourceMappingURL=pages-loading-loading-module-es2015.js.map