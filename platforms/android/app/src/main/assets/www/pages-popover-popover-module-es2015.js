(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popover-popover-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Popover</ion-title>\n\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"mostrarPop($event)\">\n        <ion-icon name=\"person-circle\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-button (click)=\"mostrarPop($event)\" color=\"danger\" expand=\"full\">\n\n    <ion-icon name=\"person-circle\" slot=\"icon-only\"></ion-icon>\n    <ion-label>Popover</ion-label>\n\n  </ion-button>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color=\"danger\">\n\n    <ion-buttons slot=\"end\">\n\n      <ion-button (click)=\"mostrarPop($event)\" color=\"dark\">\n        <ion-icon name=\"person-circle\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/popover/popover-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/popover/popover-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageRoutingModule", function() { return PopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");




const routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"]
    }
];
let PopoverPageRoutingModule = class PopoverPageRoutingModule {
};
PopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopoverPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/popover/popover.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.module.ts ***!
  \*************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-routing.module */ "./src/app/pages/popover/popover-routing.module.ts");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/popover/popover.page.ts");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









let PopoverPageModule = class PopoverPageModule {
};
PopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopoverPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
    })
], PopoverPageModule);



/***/ }),

/***/ "./src/app/pages/popover/popover.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/popover/popover.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvcG92ZXIvcG9wb3Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/popover/popover.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/popover/popover.page.ts ***!
  \***********************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");




let PopoverPage = class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() {
    }
    mostrarPop(evento) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                // el argumento del evento es la posicion desde donde fue llamado el pop para mostrarse justo ahi
                component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__["PopinfoComponent"],
                event: evento,
                mode: 'ios',
                backdropDismiss: false
            });
            yield popover.present();
            // procesamiento del argumento que recivo del popover
            const { data } = yield popover.onDidDismiss(); // espera a que se cierre el popover para ejecutar
            // const { data } = await popover.onWillDismiss(); a penas empieza a cerrar ejecuta el codigos
            console.log('Padre', data);
        });
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.page.scss */ "./src/app/pages/popover/popover.page.scss")).default]
    })
], PopoverPage);



/***/ })

}]);
//# sourceMappingURL=pages-popover-popover-module-es2015.js.map