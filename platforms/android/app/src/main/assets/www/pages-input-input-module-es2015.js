(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-input-input-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Input - Forms\"></app-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Nombre: {{nombre || 'Nombre'}}</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"nombre\"></ion-input>\n    </ion-item>\n\n    <form #formularuio=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\n      <ion-list>\n        <ion-list-header>\n          <ion-label>Formulario template: Valido {{ formularuio.valid }}</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input \n          type=\"email\" \n          [(ngModel)]=\"usuario.email\"\n          name=\"email\"\n          pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n          required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input \n          type=\"password\" \n          [(ngModel)]=\"usuario.password\"\n          name=\"password\"\n          required></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <ion-button [disabled]=\"formularuio.invalid\" type=\"submit\" expand=\"full\" shape=\"round\">\n        Enviar\n      </ion-button>\n    </form>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/input/input-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/input/input-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: InputPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageRoutingModule", function() { return InputPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/input/input.page.ts");




const routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_3__["InputPage"]
    }
];
let InputPageRoutingModule = class InputPageRoutingModule {
};
InputPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InputPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/input/input.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.module.ts ***!
  \*********************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _input_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-routing.module */ "./src/app/pages/input/input-routing.module.ts");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/input/input.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let InputPageModule = class InputPageModule {
};
InputPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _input_routing_module__WEBPACK_IMPORTED_MODULE_5__["InputPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]]
    })
], InputPageModule);



/***/ }),

/***/ "./src/app/pages/input/input.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/input/input.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lucHV0L2lucHV0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/input/input.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/input/input.page.ts ***!
  \*******************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InputPage = class InputPage {
    constructor() {
        this.usuario = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    onSubmitTemplate() {
        console.log('submit');
        console.log(this.usuario);
    }
};
InputPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./input.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/input/input.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./input.page.scss */ "./src/app/pages/input/input.page.scss")).default]
    })
], InputPage);



/***/ })

}]);
//# sourceMappingURL=pages-input-input-module-es2015.js.map