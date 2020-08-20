(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alert-alert-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [titulo]=\"titulo || 'Alert Pages'\"></app-header>\n\n<ion-content>\n  <ion-button color=\"primary\" (click)=\"presentAlert()\" expand=\"full\">\n    Mostrar alerta\n  </ion-button>\n  <ion-button color=\"warning\" expand=\"full\" (click)=\"presentAlertPrompt()\">\n    Formulario\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/alert/alert-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/alert/alert-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AlertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function() { return AlertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.page */ "./src/app/pages/alert/alert.page.ts");




const routes = [
    {
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
    }
];
let AlertPageRoutingModule = class AlertPageRoutingModule {
};
AlertPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlertPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/alert/alert.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.module.ts ***!
  \*********************************************/
/*! exports provided: AlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-routing.module */ "./src/app/pages/alert/alert-routing.module.ts");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.page */ "./src/app/pages/alert/alert.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let AlertPageModule = class AlertPageModule {
};
AlertPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"] // importar los modulos a utilizar, para que sean reconocidos fuera de sus carpetas
        ],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
    })
], AlertPageModule);



/***/ }),

/***/ "./src/app/pages/alert/alert.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/alert/alert.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsZXJ0L2FsZXJ0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/alert/alert.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/alert/alert.page.ts ***!
  \*******************************************/
/*! exports provided: AlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPage", function() { return AlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AlertPage = class AlertPage {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'subtitulo',
                message: 'Este es un mensaje de alerta',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Ok',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirmar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Formulario!',
                inputs: [
                    {
                        name: 'txtNombre',
                        type: 'text',
                        placeholder: 'Nombre dentro y vea la magia',
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log(data);
                            this.titulo = data.txtNombre;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
AlertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/alert/alert.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert.page.scss */ "./src/app/pages/alert/alert.page.scss")).default]
    })
], AlertPage);



/***/ })

}]);
//# sourceMappingURL=pages-alert-alert-module-es2015.js.map