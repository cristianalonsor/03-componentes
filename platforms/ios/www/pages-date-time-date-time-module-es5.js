function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-date-time-date-time-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDateTimeDateTimePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"date time\"></app-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-list-header>\n            <ion-label>Datos de nacimiento</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Fecha Nacimiento</ion-label>\n            <ion-datetime placeholder=\"Fecha\"\n\n                            display-format=\"YYYY MMMM DD\"\n                            cancelText=\"Cancelar!!!\"\n                            [ngModel]=\"fechaNac.toISOString()\"\n                            (ionChange)=\"cambioFecha($event)\"></ion-datetime>\n        </ion-item>\n\n        <ion-list-header>\n            <ion-label>Restricciones</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label>Minimo y maximo</ion-label>\n            <ion-datetime placeholder=\"yyyy-mm-dd\"\n                        display-format=\"YYYY-MMMM-DD\"\n                        min=\"1995-01-01\"\n                        max=\"2020-07-07\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Años</ion-label>\n            <ion-datetime placeholder=\"yyyy\"\n                        display-format=\"YYYY\"\n                        min=\"1995\"\n                        max=\"2020\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Años</ion-label>\n            <ion-datetime [pickerOptions]=\"customPickerOptions\"\n                    [(ngModel)]=\"customDate\"></ion-datetime>\n        </ion-item>\n    </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/date-time/date-time-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DateTimePageRoutingModule */

  /***/
  function srcAppPagesDateTimeDateTimeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePageRoutingModule", function () {
      return DateTimePageRoutingModule;
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


    var _date_time_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-time.page */
    "./src/app/pages/date-time/date-time.page.ts");

    var routes = [{
      path: '',
      component: _date_time_page__WEBPACK_IMPORTED_MODULE_3__["DateTimePage"]
    }];

    var DateTimePageRoutingModule = function DateTimePageRoutingModule() {
      _classCallCheck(this, DateTimePageRoutingModule);
    };

    DateTimePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DateTimePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/date-time/date-time.module.ts ***!
    \*****************************************************/

  /*! exports provided: DateTimePageModule */

  /***/
  function srcAppPagesDateTimeDateTimeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePageModule", function () {
      return DateTimePageModule;
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


    var _date_time_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./date-time-routing.module */
    "./src/app/pages/date-time/date-time-routing.module.ts");
    /* harmony import */


    var _date_time_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./date-time.page */
    "./src/app/pages/date-time/date-time.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var DateTimePageModule = function DateTimePageModule() {
      _classCallCheck(this, DateTimePageModule);
    };

    DateTimePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _date_time_routing_module__WEBPACK_IMPORTED_MODULE_5__["DateTimePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_date_time_page__WEBPACK_IMPORTED_MODULE_6__["DateTimePage"]]
    })], DateTimePageModule);
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/date-time/date-time.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDateTimeDateTimePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/date-time/date-time.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/date-time/date-time.page.ts ***!
    \***************************************************/

  /*! exports provided: DateTimePage */

  /***/
  function srcAppPagesDateTimeDateTimePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePage", function () {
      return DateTimePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DateTimePage = /*#__PURE__*/function () {
      function DateTimePage() {
        _classCallCheck(this, DateTimePage);

        this.fechaNac = new Date();
        this.customPickerOptions = {
          buttons: [{
            text: 'Save',
            handler: function handler(evento) {
              console.log('Clicked Save!');
              console.log(evento);
            }
          }, {
            text: 'Log',
            handler: function handler() {
              console.log('Clicked Log. Do not Dismiss.');
              return false;
            }
          }]
        };
      }

      _createClass(DateTimePage, [{
        key: "cambioFecha",
        value: function cambioFecha(event) {
          console.log('ionChange', event);
          console.log('Date', new Date(event.detail.value));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DateTimePage;
    }();

    DateTimePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date-time',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./date-time.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/date-time/date-time.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./date-time.page.scss */
      "./src/app/pages/date-time/date-time.page.scss"))["default"]]
    })], DateTimePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-date-time-date-time-module-es5.js.map