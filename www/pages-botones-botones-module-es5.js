function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBotonesBotonesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons>\n      <ion-button slot=\"start\">\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Botones y routing</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-button>\n\n      <ion-button color=\"primary\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-button size=\"small\">pequeño</ion-button>\n  <ion-button size=\"default\">default</ion-button>\n  <ion-button size=\"large\">grande</ion-button>\n\n  <!--Navegar o routing-->\n  <ion-button class=\"top-20\" expand=\"full\" routerLink=\"/alert\" color=\"success\">Navegar</ion-button>\n\n  <!-- ion-row + ion-col -->\n  <ion-row class=\"top-20\">\n    <ion-col>\n      <ion-button expand=\"full\" routerLink=\"/avatar\" color=\"success\">Navegar</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"full\" routerLink=\"/action-sheet\" color=\"success\">Navegar</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <!--fill-->\n  <ion-button class=\"top-20\" fill=\"clear\">Clear</ion-button>\n  <ion-button class=\"top-20\" fill=\"solid\">Clear</ion-button>\n  <ion-button class=\"top-20\" fill=\"outline\">Clear</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/botones/botones-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/botones/botones-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BotonesPageRoutingModule */

  /***/
  function srcAppPagesBotonesBotonesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotonesPageRoutingModule", function () {
      return BotonesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _botones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./botones.page */
    "./src/app/pages/botones/botones.page.ts");

    var routes = [{
      path: '',
      component: _botones_page__WEBPACK_IMPORTED_MODULE_3__["BotonesPage"]
    }];

    var BotonesPageRoutingModule = function BotonesPageRoutingModule() {
      _classCallCheck(this, BotonesPageRoutingModule);
    };

    BotonesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BotonesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/botones/botones.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/botones/botones.module.ts ***!
    \*************************************************/

  /*! exports provided: BotonesPageModule */

  /***/
  function srcAppPagesBotonesBotonesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function () {
      return BotonesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./botones-routing.module */
    "./src/app/pages/botones/botones-routing.module.ts");
    /* harmony import */


    var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./botones.page */
    "./src/app/pages/botones/botones.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var BotonesPageModule = function BotonesPageModule() {
      _classCallCheck(this, BotonesPageModule);
    };

    BotonesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _botones_routing_module__WEBPACK_IMPORTED_MODULE_5__["BotonesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
    })], BotonesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/botones/botones.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/botones/botones.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBotonesBotonesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-20 {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm90b25lcy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXGlvbmljXFwwNC1jb21wb25lbnRlcy9zcmNcXGFwcFxccGFnZXNcXGJvdG9uZXNcXGJvdG9uZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib3RvbmVzL2JvdG9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLTIwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iLCIudG9wLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/botones/botones.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/botones/botones.page.ts ***!
    \***********************************************/

  /*! exports provided: BotonesPage */

  /***/
  function srcAppPagesBotonesBotonesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BotonesPage", function () {
      return BotonesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BotonesPage = /*#__PURE__*/function () {
      function BotonesPage() {
        _classCallCheck(this, BotonesPage);
      }

      _createClass(BotonesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BotonesPage;
    }();

    BotonesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-botones',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./botones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/botones/botones.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./botones.page.scss */
      "./src/app/pages/botones/botones.page.scss"))["default"]]
    })], BotonesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-botones-botones-module-es5.js.map