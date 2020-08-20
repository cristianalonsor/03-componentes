function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesListListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"List Item Sliding\"></app-header>\n\n<ion-content>\n  <ion-list #lista>\n    \n    <!--solo se soportan los arreglos, y sita error se pasa por el pype async-->\n    <ion-item-sliding *ngFor=\"let i of data |async\">\n      <ion-item>\n        <ion-label>\n          <h3>{{ i.name }}</h3>\n          <p>{{i.email}}</p>\n        </ion-label>\n        <ion-label slot=\"end\"> \n          {{i.phone}}\n        </ion-label>\n      </ion-item>\n      \n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"favorito(i)\" expandable>\n\n          <ion-icon name=\"star\" slot=\"icon-only\"></ion-icon></ion-item-option>\n\n        <ion-item-option (click)=\"compartir(i)\" color=\"success\" expandable>\n\n          <ion-icon name=\"share\" slot=\"icon-only\"></ion-icon>\n\n        </ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\">\n\n        <ion-item-option (click)=\"borrar(i)\" color=\"danger\" expandable>\n          <!--el sloto=\"icon-only\" agranda los iconos-->\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n\n      </ion-item-options>\n    </ion-item-sliding>\n    \n\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/list/list-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/list/list-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ListPageRoutingModule */

  /***/
  function srcAppPagesListListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
      return ListPageRoutingModule;
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


    var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/list/list.page.ts");

    var routes = [{
      path: '',
      component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }];

    var ListPageRoutingModule = function ListPageRoutingModule() {
      _classCallCheck(this, ListPageRoutingModule);
    };

    ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/list/list.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/list/list.module.ts ***!
    \*******************************************/

  /*! exports provided: ListPageModule */

  /***/
  function srcAppPagesListListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
      return ListPageModule;
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


    var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-routing.module */
    "./src/app/pages/list/list-routing.module.ts");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/list/list.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var ListPageModule = function ListPageModule() {
      _classCallCheck(this, ListPageModule);
    };

    ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })], ListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/list/list.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/list/list.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesListListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/list/list.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/list/list.page.ts ***!
    \*****************************************/

  /*! exports provided: ListPage */

  /***/
  function srcAppPagesListListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPage", function () {
      return ListPage;
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


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ListPage = /*#__PURE__*/function () {
      function ListPage(dataService, toastCtrl) {
        _classCallCheck(this, ListPage);

        this.dataService = dataService;
        this.toastCtrl = toastCtrl;
      }

      _createClass(ListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.dataService.getUsers().subscribe( console.log );
          this.data = this.dataService.getUsers();
        }
      }, {
        key: "presentToast",
        value: function presentToast(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1250,
                      color: 'danger'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "favorito",
        value: function favorito(user) {
          // console.log('favorito', user);
          this.presentToast('Guardado en Favoritos');
          this.lista.closeSlidingItems();
        }
      }, {
        key: "compartir",
        value: function compartir(user) {
          // console.log('compartir', user);
          this.presentToast('Compartido');
          this.lista.closeSlidingItems();
        }
      }, {
        key: "borrar",
        value: function borrar(user) {
          // console.log('borrar', user);
          this.presentToast('Eliminado');
          this.lista.closeSlidingItems();
        }
      }]);

      return ListPage;
    }();

    ListPage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lista')], ListPage.prototype, "lista", void 0);
    ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list.page.scss */
      "./src/app/pages/list/list.page.scss"))["default"]]
    })], ListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-list-list-module-es5.js.map