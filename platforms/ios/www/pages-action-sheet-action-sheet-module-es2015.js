(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-action-sheet-action-sheet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">dice que viene uno o mas botones\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>action-sheet</ion-title>\n  </ion-toolbar>\n</ion-header>-->\n<app-header titulo=\"action sheet\"></app-header>\n\n<ion-content>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"presentActionSheet()\">\n    Mostrar ActionSheet\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/action-sheet/action-sheet-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActionSheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageRoutingModule", function() { return ActionSheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-sheet.page */ "./src/app/pages/action-sheet/action-sheet.page.ts");




const routes = [
    {
        path: '',
        component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_3__["ActionSheetPage"]
    }
];
let ActionSheetPageRoutingModule = class ActionSheetPageRoutingModule {
};
ActionSheetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionSheetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/action-sheet/action-sheet.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.module.ts ***!
  \***********************************************************/
/*! exports provided: ActionSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageModule", function() { return ActionSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-sheet-routing.module */ "./src/app/pages/action-sheet/action-sheet-routing.module.ts");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-sheet.page */ "./src/app/pages/action-sheet/action-sheet.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let ActionSheetPageModule = class ActionSheetPageModule {
};
ActionSheetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _action_sheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionSheetPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPage"]]
    })
], ActionSheetPageModule);



/***/ }),

/***/ "./src/app/pages/action-sheet/action-sheet.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGlvbi1zaGVldC9hY3Rpb24tc2hlZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/action-sheet/action-sheet.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/action-sheet/action-sheet.page.ts ***!
  \*********************************************************/
/*! exports provided: ActionSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPage", function() { return ActionSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let ActionSheetPage = class ActionSheetPage {
    // el actionSheetCrtl es el nombre con el que lo vere fuera, importo el actionsheetcontroller
    // y al aplicar el enter se llama automaticamente arriba
    constructor(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
    }
    // es una promesa, tarea asincrona
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Opciones',
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                // vemos todos los botones hacia abajo y sus propiedades
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        cssClass: 'rojo',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Play (open modal)',
                        icon: 'caret-forward-circle',
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }, {
                        text: 'Favorite',
                        icon: 'heart',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    ngOnInit() {
    }
};
ActionSheetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
ActionSheetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./action-sheet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-sheet/action-sheet.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./action-sheet.page.scss */ "./src/app/pages/action-sheet/action-sheet.page.scss")).default]
    })
], ActionSheetPage);



/***/ })

}]);
//# sourceMappingURL=pages-action-sheet-action-sheet-module-es2015.js.map