(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-reorder-list-reorder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-reorder/list-reorder.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-reorder/list-reorder.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\">Back</ion-back-button>\n    </ion-buttons>\n    <ion-title>List-Reorder</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n  <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" [disabled]=\"false\">\n    \n    <ion-item *ngFor=\"let p of personajes\">\n      <ion-label>{{ p }}</ion-label>\n      <ion-reorder slot=\"end\"></ion-reorder>\n    </ion-item>\n\n  </ion-reorder-group>\n\n</ion-list>\n\n<ion-button (click)=\"onClick()\" expand=\"full\" shape=\"round\">\n  Guardar\n</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ListReorderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPageRoutingModule", function() { return ListReorderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_reorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-reorder.page */ "./src/app/pages/list-reorder/list-reorder.page.ts");




const routes = [
    {
        path: '',
        component: _list_reorder_page__WEBPACK_IMPORTED_MODULE_3__["ListReorderPage"]
    }
];
let ListReorderPageRoutingModule = class ListReorderPageRoutingModule {
};
ListReorderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListReorderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.module.ts ***!
  \***********************************************************/
/*! exports provided: ListReorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPageModule", function() { return ListReorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-reorder-routing.module */ "./src/app/pages/list-reorder/list-reorder-routing.module.ts");
/* harmony import */ var _list_reorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-reorder.page */ "./src/app/pages/list-reorder/list-reorder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let ListReorderPageModule = class ListReorderPageModule {
};
ListReorderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListReorderPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_list_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ListReorderPage"]]
    })
], ListReorderPageModule);



/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtcmVvcmRlci9saXN0LXJlb3JkZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/list-reorder/list-reorder.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/list-reorder/list-reorder.page.ts ***!
  \*********************************************************/
/*! exports provided: ListReorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReorderPage", function() { return ListReorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListReorderPage = class ListReorderPage {
    constructor() {
        this.personajes = ['superman', 'aquaman', 'wonderwoman', 'linterna verde', 'flash', 'batman'];
    }
    ngOnInit() {
    }
    doReorder(event) {
        console.log(event);
        // le asigno a una const el item a mover,borrandolo desde el arreglo
        const itemMover = this.personajes.splice(event.detail.from, 1)[0];
        // vuelvo a insertar item que borre del arreglo, que etaba en la constante almacenado
        this.personajes.splice(event.detail.to, 0, itemMover);
        event.detail.complete();
    }
    onClick() {
        console.log(this.personajes);
    }
};
ListReorderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-reorder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-reorder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list-reorder/list-reorder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-reorder.page.scss */ "./src/app/pages/list-reorder/list-reorder.page.scss")).default]
    })
], ListReorderPage);



/***/ })

}]);
//# sourceMappingURL=pages-list-reorder-list-reorder-module-es2015.js.map