function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-check-check-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckCheckPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"CheckBox\"></app-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let i of data\"\n              (click)=\"onClick(i)\">\n\n      <ion-label>{{i.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"i.selected\" [color]=\"i.name\" slot=\"end\"></ion-checkbox>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/check/check-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/check/check-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CheckPageRoutingModule */

  /***/
  function srcAppPagesCheckCheckRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPageRoutingModule", function () {
      return CheckPageRoutingModule;
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


    var _check_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./check.page */
    "./src/app/pages/check/check.page.ts");

    var routes = [{
      path: '',
      component: _check_page__WEBPACK_IMPORTED_MODULE_3__["CheckPage"]
    }];

    var CheckPageRoutingModule = function CheckPageRoutingModule() {
      _classCallCheck(this, CheckPageRoutingModule);
    };

    CheckPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/check/check.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/check/check.module.ts ***!
    \*********************************************/

  /*! exports provided: CheckPageModule */

  /***/
  function srcAppPagesCheckCheckModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPageModule", function () {
      return CheckPageModule;
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


    var _check_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./check-routing.module */
    "./src/app/pages/check/check-routing.module.ts");
    /* harmony import */


    var _check_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./check.page */
    "./src/app/pages/check/check.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var CheckPageModule = function CheckPageModule() {
      _classCallCheck(this, CheckPageModule);
    };

    CheckPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _check_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_check_page__WEBPACK_IMPORTED_MODULE_6__["CheckPage"]]
    })], CheckPageModule);
    /***/
  },

  /***/
  "./src/app/pages/check/check.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/check/check.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckCheckPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrL2NoZWNrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/check/check.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/check/check.page.ts ***!
    \*******************************************/

  /*! exports provided: CheckPage */

  /***/
  function srcAppPagesCheckCheckPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckPage", function () {
      return CheckPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CheckPage = /*#__PURE__*/function () {
      function CheckPage() {
        _classCallCheck(this, CheckPage);

        this.data = [{
          name: 'primary',
          selected: true
        }, {
          name: 'secondary',
          selected: false
        }, {
          name: 'tertiary',
          selected: true
        }, {
          name: 'success',
          selected: false
        }, {
          name: 'warning',
          selected: true
        }];
      } // metodo recibe el check como parametro, mostrando por consola el objeto y su valor


      _createClass(CheckPage, [{
        key: "onClick",
        value: function onClick(check) {
          console.log(check);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckPage;
    }();

    CheckPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-check',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./check.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./check.page.scss */
      "./src/app/pages/check/check.page.scss"))["default"]]
    })], CheckPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-check-check-module-es5.js.map