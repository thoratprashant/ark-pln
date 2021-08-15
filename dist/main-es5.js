function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$": function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive": function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/services/route-parts.service */
    "./src/app/shared/services/route-parts.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { ThemeService } from './shared/services/theme.service';
    // import { LayoutService } from './shared/services/layout.service';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(title, router, activeRoute, routePartsService) {
        _classCallCheck(this, AppComponent);

        this.title = title;
        this.router = router;
        this.activeRoute = activeRoute;
        this.routePartsService = routePartsService;
        this.appTitle = 'PLN';
        this.pageTitle = '';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changePageTitle();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "changePageTitle",
        value: function changePageTitle() {
          var _this = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (routeChange) {
            var routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot);

            if (!routeParts.length) return _this.title.setTitle(_this.appTitle); // Extract title from parts;

            _this.pageTitle = routeParts.reverse().map(function (part) {
              return part.title;
            }).reduce(function (partA, partI) {
              return "".concat(partA, " > ").concat(partI);
            });
            _this.pageTitle += " | ".concat(_this.appTitle);

            _this.title.setTitle(_this.pageTitle);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
    /* harmony import */


    var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/inmemory-db/inmemory-db.service */
    "./src/app/shared/inmemory-db/inmemory-db.service.ts");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-apexcharts */
    "./node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/services/error-handler.service */
    "./src/app/shared/services/error-handler.service.ts");
    /* harmony import */


    var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/interceptors/token.interceptor */
    "./src/app/shared/interceptors/token.interceptor.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
        useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerService"]
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
      }, {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, // REQUIRED IF YOU USE JWT AUTHENTICATION
      {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
        useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], {
        passThruUnknownUrl: true
      }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["rootRouterConfig"], {
        useHash: false
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__["NgApexchartsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_6__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_7__["InMemoryDataService"], {
            passThruUnknownUrl: true
          }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["rootRouterConfig"], {
            useHash: false
          })],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
            useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerService"]
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
          }, {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }, // REQUIRED IF YOU USE JWT AUTHENTICATION
          {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts": function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function () {
      return rootRouterConfig;
    });
    /* harmony import */


    var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/components/layouts/auth-layout/auth-layout.component */
    "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _shared_components_layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/components/layouts/broker-auth-layout/broker-auth-layout.component */
    "./src/app/shared/components/layouts/broker-auth-layout/broker-auth-layout.component.ts");
    /* harmony import */


    var _shared_components_layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/components/layouts/broker-layout/broker-layout.component */
    "./src/app/shared/components/layouts/broker-layout/broker-layout.component.ts");
    /* harmony import */


    var _shared_components_layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/components/layouts/pre-login/pre-login-layout.component */
    "./src/app/shared/components/layouts/pre-login/pre-login-layout.component.ts");

    var rootRouterConfig = [// Landing layout 
    {
      path: '',
      component: _shared_components_layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["PreLoginLayoutComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-pre-login-pre-login-module */
          "views-pre-login-pre-login-module").then(__webpack_require__.bind(null,
          /*! ./views/pre-login/pre-login.module */
          "./src/app/views/pre-login/pre-login.module.ts")).then(function (m) {
            return m.PreLoginModule;
          });
        },
        data: {
          title: 'Prelogin'
        }
      }]
    }, {
      path: '',
      component: _shared_components_layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["BrokerAuthLayoutComponent"],
      children: [{
        path: 'broker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-sessions-sessions-module */
          "views-sessions-sessions-module").then(__webpack_require__.bind(null,
          /*! ./views/sessions/sessions.module */
          "./src/app/views/sessions/sessions.module.ts")).then(function (m) {
            return m.SessionsModule;
          });
        },
        data: {
          title: 'Signup'
        }
      }]
    }, {
      path: '',
      component: _shared_components_layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_2__["BrokerLayoutComponent"],
      children: [{
        path: 'broker',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-broker-broker-module */
          "views-broker-broker-module").then(__webpack_require__.bind(null,
          /*! ./views/broker/broker.module */
          "./src/app/views/broker/broker.module.ts")).then(function (m) {
            return m.BrokerModule;
          });
        },
        data: {
          title: 'Broker'
        }
      }]
    }, {
      path: '',
      component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-auth-auth-module */
          "views-auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./views/auth/auth.module */
          "./src/app/views/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        },
        data: {
          title: 'Auth'
        }
      }]
    }, {
      path: '**',
      redirectTo: 'sessions/404'
    }];
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.ts": function srcAppSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/route-parts.service */
    "./src/app/shared/services/route-parts.service.ts");
    /* harmony import */


    var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    function BreadcrumbComponent_mat_toolbar_0_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var part_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r3.url, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r3.breadcrumb);
      }
    }

    function BreadcrumbComponent_mat_toolbar_0_div_5_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var part_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r6.url, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](part_r6.breadcrumb);
      }
    }

    function BreadcrumbComponent_mat_toolbar_0_div_5_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_mat_toolbar_0_div_5_ul_3_li_1_Template, 3, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routeParts);
      }
    }

    function BreadcrumbComponent_mat_toolbar_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreadcrumbComponent_mat_toolbar_0_div_5_ul_3_Template, 2, 1, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.routeParts[ctx_r2.routeParts.length - 1] == null ? null : ctx_r2.routeParts[ctx_r2.routeParts.length - 1].breadcrumb, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.routeParts.length > 1);
      }
    }

    function BreadcrumbComponent_mat_toolbar_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_mat_toolbar_0_li_4_Template, 3, 2, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbComponent_mat_toolbar_0_div_5_Template, 4, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.routeParts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.layout.layoutConf.useBreadcrumb && ctx_r0.layout.layoutConf.breadcrumb === "title");
      }
    }

    var BreadcrumbComponent = /*#__PURE__*/function () {
      // public isEnabled: boolean = true;
      function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
        var _this2 = this;

        _classCallCheck(this, BreadcrumbComponent);

        this.router = router;
        this.routePartsService = routePartsService;
        this.activeRoute = activeRoute;
        this.layout = layout;
        this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
        this.routerEventSub = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (routeChange) {
          _this2.routeParts = _this2.routePartsService.generateRouteParts(_this2.activeRoute.snapshot); // generate url from parts

          _this2.routeParts.reverse().map(function (item, i) {
            item.breadcrumb = _this2.parseText(item);
            item.urlSegments.forEach(function (urlSegment, j) {
              if (j === 0) return item.url = "".concat(urlSegment.path);
              item.url += "/".concat(urlSegment.path);
            });

            if (i === 0) {
              return item;
            } // prepend previous part to current part


            item.url = "".concat(_this2.routeParts[i - 1].url, "/").concat(item.url);
            return item;
          });
        });
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
          }
        }
      }, {
        key: "parseText",
        value: function parseText(part) {
          if (!part.breadcrumb) {
            return '';
          }

          part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
            var r = part.params[b];
            return typeof r === 'string' ? r : a;
          });
          return part.breadcrumb;
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
      return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]));
    };

    BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BreadcrumbComponent,
      selectors: [["app-breadcrumb"]],
      decls: 1,
      vars: 1,
      consts: [["class", "breadcrumb-toolbar border-top-light", 4, "ngIf"], [1, "breadcrumb-toolbar", "border-top-light"], [1, "container-dynamic"], [1, "breadcrumb-bar"], [1, "breadcrumb", "path"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-title", 4, "ngIf"], [3, "routerLink"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb breadMain", 4, "ngIf"], [1, "breadcrumb", "breadMain"], [1, "text-muted", 3, "routerLink"]],
      template: function BreadcrumbComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_mat_toolbar_0_Template, 6, 2, "mat-toolbar", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "simple");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-breadcrumb',
          templateUrl: './breadcrumb.component.html',
          styleUrls: ['./breadcrumb.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/broker-top-header/broker-top-header.component.ts": function srcAppSharedComponentsBrokerTopHeaderBrokerTopHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrokerHeaderTopComponent", function () {
      return BrokerHeaderTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function BrokerHeaderTopComponent_mat_list_item_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r3.color)("svgIcon", n_r3.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r3.route || "/dashboard"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.time);
      }
    }

    var _c1 = function _c1() {
      return ["/broker/profile"];
    };

    var _c2 = function _c2() {
      return ["/profile/settings"];
    };

    var BrokerHeaderTopComponent = /*#__PURE__*/function () {
      function BrokerHeaderTopComponent(layout, navService, themeService, renderer, jwtAuth) {
        _classCallCheck(this, BrokerHeaderTopComponent);

        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.marcoThemes = []; // Dummy notifications

        this.notifications = [{
          message: 'New orders received',
          icon: 'assignment_ind',
          time: '3 min ago',
          route: '/inbox',
          color: 'primary'
        }, {
          message: 'New costumer has registered',
          icon: 'chat',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'Project has been appoved',
          icon: 'settings_backup_restore',
          time: '12 min ago',
          route: '/charts',
          color: 'warn'
        }, {
          message: 'Task has been finished',
          icon: 'account_box',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'New account added',
          icon: 'attach_file',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }];
      }

      _createClass(BrokerHeaderTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.layoutConf = this.layout.layoutConf;
          this.marcoThemes = this.themeService.marcoThemes;
          this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
            res = res.filter(function (item) {
              return item.type !== 'icon' && item.type !== 'separator';
            });
            var limit = 4;
            var mainItems = res.slice(0, limit);

            if (res.length <= limit) {
              return _this3.menuItems = mainItems;
            }

            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
              name: 'Morence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            }, {
              name: 'Kurence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            });
            _this3.menuItems = mainItems;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.menuItemSub.unsubscribe();
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.layout.publishLayoutChange({
            matTheme: theme.name
          });
        }
      }, {
        key: "toggleNotific",
        value: function toggleNotific() {
          this.notificPanel.toggle();
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            });
          }

          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }]);

      return BrokerHeaderTopComponent;
    }();

    BrokerHeaderTopComponent.ɵfac = function BrokerHeaderTopComponent_Factory(t) {
      return new (t || BrokerHeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
    };

    BrokerHeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrokerHeaderTopComponent,
      selectors: [["app-broker-top-header"]],
      inputs: {
        notificPanel: "notificPanel"
      },
      decls: 54,
      vars: 13,
      consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "topnav"], [1, "topbar-branding"], ["src", "assets/images/arkenea/logo.webp", "alt", "", 1, "app-logo"], ["fxFlex", ""], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z", "opacity", ".3"], ["d", "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"], [1, "notification-number", "mat-bg-warn"], ["xPosition", "before", 1, "pt-0", "notification-wrap"], ["notificationsMenu", "matMenu"], [1, "text-left", "mat-bg-primary", "p-16"], [1, "m-0"], ["role", "list", 1, "notification-list"], ["class", "notific-item pb-12 pt-12 border-bottom", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "dropdown-footer", "text-center", "pb-12", "pt-12"], ["mat-button", "", "color", "primary"], ["mat-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img"], ["accountMenu", "matMenu"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-left"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img", "rounded-circle", "w-12", "h-12", "mr-05"], ["mat-menu-item", "", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "account_box", 1, "btn-icon"], ["svgIcon", "inbox", 1, "btn-icon"], ["svgIcon", "receipt", 1, "btn-icon"], ["svgIcon", "library_books", 1, "btn-icon"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", "pb-12", "pt-12", "border-bottom"], [1, "btn-icon", "notific-icon", "mr-1", 3, "color", "svgIcon"], [3, "routerLink"], [1, "mat-list-text"], [1, "fw-500"], [1, "time", "text-muted"]],
      template: function BrokerHeaderTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-nav-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BrokerHeaderTopComponent_mat_list_item_18_Template, 8, 7, "mat-list-item", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MARK ALL AS READ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Prashant T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-menu", 11, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-toolbar", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prashant T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-nav-list", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "My Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "My Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Billing Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerHeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-broker-top-header',
          templateUrl: './broker-top-header.component.html'
        }]
      }], function () {
        return [{
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }, {
          type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
        }];
      }, {
        notificPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/button-loading/button-loading.component.ts": function srcAppSharedComponentsButtonLoadingButtonLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonLoadingComponent", function () {
      return ButtonLoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function ButtonLoadingComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }
    }

    function ButtonLoadingComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ButtonLoadingComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
      }
    }

    var _c0 = function _c0(a0, a1, a2) {
      return {
        loading: a0,
        "mat-button": a1,
        "mat-raised-button": a2
      };
    };

    var _c1 = ["*"];

    var ButtonLoadingComponent = /*#__PURE__*/function () {
      function ButtonLoadingComponent() {
        _classCallCheck(this, ButtonLoadingComponent);

        this.raised = true;
        this.loadingText = 'Please wait';
        this.type = 'submit';
      }

      _createClass(ButtonLoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonLoadingComponent;
    }();

    ButtonLoadingComponent.ɵfac = function ButtonLoadingComponent_Factory(t) {
      return new (t || ButtonLoadingComponent)();
    };

    ButtonLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonLoadingComponent,
      selectors: [["button-loading"]],
      inputs: {
        loading: "loading",
        btnClass: "btnClass",
        raised: "raised",
        loadingText: "loadingText",
        type: "type",
        color: "color"
      },
      ngContentSelectors: _c1,
      decls: 4,
      vars: 14,
      consts: [["mat-button", "", 3, "color", "type", "disabled", "ngClass"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner"]],
      template: function ButtonLoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonLoadingComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonLoadingComponent_span_2_Template, 2, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonLoadingComponent_span_3_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-loading ", ctx.btnClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c0, ctx.loading, !ctx.raised, ctx.raised));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi1sb2FkaW5nL2J1dHRvbi1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'button-loading',
          templateUrl: './button-loading.component.html',
          styleUrls: ['./button-loading.component.scss']
        }]
      }], function () {
        return [];
      }, {
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['loading']
        }],
        btnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['btnClass']
        }],
        raised: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['raised']
        }],
        loadingText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['loadingText']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['type']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['color']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts": function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 7,
      vars: 0,
      consts: [[1, "main-footer"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutAlign", "space-between center", 1, "container-dynamic", "d-flex"], ["mat-raised-button", "", "color", "primary", "href", "http://"], [1, "m-auto"], [1, "pb-0", "m-0"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Buy Marco 10+ Angular Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copyright \xA9 Lamarena 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header-side/header-side.component.ts": function srcAppSharedComponentsHeaderSideHeaderSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function () {
      return HeaderSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _search_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../search/search-input-over/search-input-over.component */
    "./src/app/shared/search/search-input-over/search-input-over.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderSideComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleSidenav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HeaderSideComponent_mat_list_item_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r6.color)("svgIcon", n_r6.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r6.route || "/dashboard"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r6.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r6.time);
      }
    }

    var _c1 = function _c1() {
      return ["/profile/overview"];
    };

    var _c2 = function _c2() {
      return ["/profile/settings"];
    };

    var HeaderSideComponent = /*#__PURE__*/function () {
      function HeaderSideComponent(themeService, layout, renderer, jwtAuth) {
        _classCallCheck(this, HeaderSideComponent);

        this.themeService = themeService;
        this.layout = layout;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth; // Dummy notifications

        this.notifications = [{
          message: 'New orders received',
          icon: 'assignment_ind',
          time: '3 min ago',
          route: '/inbox',
          color: 'primary'
        }, {
          message: 'New costumer has registered',
          icon: 'chat',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'Project has been appoved',
          icon: 'settings_backup_restore',
          time: '12 min ago',
          route: '/charts',
          color: 'warn'
        }, {
          message: 'Task has been finished',
          icon: 'account_box',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'New account added',
          icon: 'attach_file',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }];
      }

      _createClass(HeaderSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.marcoThemes = this.themeService.marcoThemes;
          this.layoutConf = this.layout.layoutConf;
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {// this.themeService.changeTheme(theme);
        }
      }, {
        key: "toggleNotific",
        value: function toggleNotific() {
          this.notificPanel.toggle();
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            });
          }

          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          // compact --> full
          if (this.layoutConf.sidebarStyle === 'compact') {
            return this.layout.publishLayoutChange({
              sidebarStyle: 'full',
              sidebarCompactToggle: false
            }, {
              transitionClass: true
            });
          } // * --> compact


          this.layout.publishLayoutChange({
            sidebarStyle: 'compact',
            sidebarCompactToggle: true
          }, {
            transitionClass: true
          });
        }
      }, {
        key: "onSearch",
        value: function onSearch(e) {//   console.log(e)
        }
      }]);

      return HeaderSideComponent;
    }();

    HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) {
      return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]));
    };

    HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderSideComponent,
      selectors: [["app-header-side"]],
      inputs: {
        notificPanel: "notificPanel"
      },
      decls: 60,
      vars: 16,
      consts: [[1, "topbar", "border-bottom-light"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["placeholder", "Country (e.g. US)", "resultPage", "/search"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["svgIcon", "notifications_active", 1, "btn-icon"], [1, "notification-number", "mat-bg-warn"], ["xPosition", "before", 1, "pt-0", "notification-wrap"], ["notificationsMenu", "matMenu"], [1, "text-left", "mat-bg-primary", "p-16"], [1, "m-0"], ["role", "list", 1, "notification-list"], ["class", "notific-item pb-12 pt-12 border-bottom", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "dropdown-footer", "text-center", "pb-12", "pt-12"], ["mat-button", "", "color", "primary"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"], ["d", "M5 19.97l5-2.15 5 2.15V7H5z", "opacity", ".3"], ["mat-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img"], ["accountMenu", "matMenu"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-left"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img", "rounded-circle", "w-12", "h-12", "mr-05"], ["mat-menu-item", "", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "account_box", 1, "btn-icon"], ["svgIcon", "inbox", 1, "btn-icon"], ["svgIcon", "receipt", 1, "btn-icon"], ["svgIcon", "library_books", 1, "btn-icon"], ["mat-button", "", "color", "primary", 1, "fw-500"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", "pb-12", "pt-12", "border-bottom"], [1, "btn-icon", "notific-icon", "mr-1", 3, "color", "svgIcon"], [3, "routerLink"], [1, "mat-list-text"], [1, "fw-500"], [1, "time", "text-muted"]],
      template: function HeaderSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "marco-search-input-over", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderSideComponent_mat_list_item_14_Template, 8, 7, "mat-list-item", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MARK ALL AS READ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_18_listener() {
            return ctx.toggleNotific();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Michael Jordan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-menu", 7, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-toolbar", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Marko Apostolski");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-nav-list", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "My Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "My Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Billing Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _search_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_7__["SearchInputOverComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-side',
          templateUrl: './header-side.template.html'
        }]
      }], function () {
        return [{
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
        }, {
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]
        }];
      }, {
        notificPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/header-top/header-top.component.ts": function srcAppSharedComponentsHeaderTopHeaderTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function () {
      return HeaderTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0() {
      return ["/dashboard/default"];
    };

    var _c1 = function _c1() {
      return ["/chat"];
    };

    var _c2 = function _c2() {
      return ["/calendar"];
    };

    var _c3 = function _c3() {
      return ["/todo/list"];
    };

    var _c4 = function _c4() {
      return ["/shop"];
    };

    var _c5 = function _c5() {
      return ["/shop/cart"];
    };

    var _c6 = function _c6() {
      return ["/shop/checkout"];
    };

    var _c7 = function _c7() {
      return ["/users/list"];
    };

    var _c8 = function _c8() {
      return ["/inbox"];
    };

    var _c9 = function _c9() {
      return ["/sessions/signup"];
    };

    var _c10 = function _c10() {
      return ["/sessions/signup2"];
    };

    var _c11 = function _c11() {
      return ["/sessions/signup3"];
    };

    var _c12 = function _c12() {
      return ["/sessions/signup4"];
    };

    var _c13 = function _c13() {
      return ["/sessions/signin"];
    };

    var _c14 = function _c14() {
      return ["/sessions/signin2"];
    };

    var _c15 = function _c15() {
      return ["/sessions/signin3"];
    };

    var _c16 = function _c16() {
      return ["/sessions/signin4"];
    };

    var _c17 = function _c17() {
      return ["/sessions/forgot-password"];
    };

    var _c18 = function _c18() {
      return ["/sessions/404"];
    };

    var _c19 = function _c19() {
      return ["/sessions/error"];
    };

    var _c20 = function _c20() {
      return ["/invoice/list"];
    };

    var _c21 = function _c21() {
      return ["/profile/overview"];
    };

    var _c22 = function _c22() {
      return ["/pricing"];
    };

    var _c23 = function _c23() {
      return ["/help/help-home"];
    };

    var _c24 = function _c24() {
      return ["/help/faq"];
    };

    var _c25 = function _c25() {
      return ["/help/support"];
    };

    var _c26 = function _c26() {
      return ["/material/autocomplete"];
    };

    var _c27 = function _c27() {
      return ["/material/checkbox"];
    };

    var _c28 = function _c28() {
      return ["/material/datepicker"];
    };

    var _c29 = function _c29() {
      return ["/material/form-field"];
    };

    var _c30 = function _c30() {
      return ["/material/input-field"];
    };

    var _c31 = function _c31() {
      return ["/material/radio-button"];
    };

    var _c32 = function _c32() {
      return ["/material/select"];
    };

    var _c33 = function _c33() {
      return ["/material/slider"];
    };

    var _c34 = function _c34() {
      return ["/material/slider-toggle"];
    };

    var _c35 = function _c35() {
      return ["/material/menu"];
    };

    var _c36 = function _c36() {
      return ["/material/sidenav"];
    };

    var _c37 = function _c37() {
      return ["/material/toolbar"];
    };

    var _c38 = function _c38() {
      return ["/material/card"];
    };

    var _c39 = function _c39() {
      return ["/material/divider"];
    };

    var _c40 = function _c40() {
      return ["/material/expansion-panel"];
    };

    var _c41 = function _c41() {
      return ["/material/grid"];
    };

    var _c42 = function _c42() {
      return ["/material/list"];
    };

    var _c43 = function _c43() {
      return ["/material/stepper"];
    };

    var _c44 = function _c44() {
      return ["/material/tab"];
    };

    var _c45 = function _c45() {
      return ["/material/tree"];
    };

    var _c46 = function _c46() {
      return ["/material/buttons"];
    };

    var _c47 = function _c47() {
      return ["/material/button-toggle"];
    };

    var _c48 = function _c48() {
      return ["/material/badge"];
    };

    var _c49 = function _c49() {
      return ["/material/chips"];
    };

    var _c50 = function _c50() {
      return ["/material/icons"];
    };

    var _c51 = function _c51() {
      return ["/dialogs/confirm"];
    };

    var _c52 = function _c52() {
      return ["/dialogs/loader"];
    };

    var _c53 = function _c53() {
      return ["/page-layouts/left-sidebar-card"];
    };

    var _c54 = function _c54() {
      return ["/page-layouts/full-width-card"];
    };

    var _c55 = function _c55() {
      return ["/page-layouts/full-width-card-tab"];
    };

    var _c56 = function _c56() {
      return ["/others/gallery"];
    };

    var _c57 = function _c57() {
      return ["/others/colors"];
    };

    var _c58 = function _c58() {
      return ["/others/blank"];
    };

    var _c59 = function _c59() {
      return ["/icons"];
    };

    var _c60 = function _c60() {
      return ["/forms/basic"];
    };

    var _c61 = function _c61() {
      return ["/forms/editor"];
    };

    var _c62 = function _c62() {
      return ["/forms/upload"];
    };

    var _c63 = function _c63() {
      return ["/forms/wizard"];
    };

    var _c64 = function _c64() {
      return ["/tables/fullscreen"];
    };

    var _c65 = function _c65() {
      return ["/tables/paging"];
    };

    var _c66 = function _c66() {
      return ["/tables/filter"];
    };

    function HeaderTopComponent_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard 01");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apps");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 41, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Calendar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Todo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ecommerce");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", 41, 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Products");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Product Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Users");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-menu", 41, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "User List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "User Grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Inbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-menu", 41, 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Authentication");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-menu", 41, 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-menu", 41, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sign Up 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sign Up 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sign Up 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-menu", 41, 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sign In 2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sign In 3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sign In 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Forgot");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Error 404");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Error 500");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Invoice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-menu", 41, 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Overview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Pricing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-menu", 41, 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "FAQs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Support");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "UI Elements");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-icon", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-menu", 41, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Components");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-menu", 41, 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Autocomplete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Checkbox");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Datepicker");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Form Field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Input Field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Radio Button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Slider Toggle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Navigation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-menu", 41, 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Sidenav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Toolbar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Expansion Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "List");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Stepper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Tree");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Expansion Panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Buttons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Buttons Toggle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Badge");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Chips");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Icons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Dialogs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-menu", 41, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Loader");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Page Layouts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "mat-menu", 41, 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Left sidebar card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Full width card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Full width card tab");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Extras");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-menu", 41, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Gallery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Colors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Blank");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Material icons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Forms & Tables");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-icon", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-menu", 41, 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Forms");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "mat-menu", 41, 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Basic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Editor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Wizard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Tables");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "mat-menu", 41, 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Fullscreen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Paging");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);

        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);

        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](106);

        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](128);

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](166);

        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](184);

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](198);

        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](202);

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](214);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](89, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](90, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](91, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](92, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](93, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](94, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](95, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](96, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](97, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](98, _c8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r10)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](99, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](100, _c7));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](101, _c9));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](102, _c10));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](103, _c11));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](104, _c12));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](105, _c13));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](106, _c14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](107, _c15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](108, _c16));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](109, _c17));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](110, _c18));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](111, _c19));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](112, _c20));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](113, _c21));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](114, _c22));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](115, _c23));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](116, _c24));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](117, _c25));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](118, _c26));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](119, _c27));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](120, _c28));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](121, _c29));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](122, _c30));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](123, _c31));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](124, _c32));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](125, _c33));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](126, _c34));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](127, _c35));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](128, _c36));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](129, _c37));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](130, _c38));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](131, _c39));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](132, _c40));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](133, _c41));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](134, _c42));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](135, _c43));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](136, _c44));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](137, _c45));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](138, _c40));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](139, _c46));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](140, _c47));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](141, _c48));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](142, _c49));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](143, _c50));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](144, _c51));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](145, _c52));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", ctx_r0.layouts);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](146, _c53));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](147, _c54));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](148, _c55));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](149, _c56));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](150, _c57));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](151, _c58));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](152, _c59));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](153, _c60));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](154, _c61));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](155, _c62));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](156, _c63));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](157, _c64));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](158, _c65));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](159, _c66));
      }
    }

    var _c67 = function _c67(a0) {
      return [a0];
    };

    function HeaderTopComponent_mat_list_item_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r23.color)("svgIcon", n_r23.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c67, n_r23.route || "/dashboard"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r23.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r23.time);
      }
    }

    function HeaderTopComponent_button_65_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_65_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.toggleSidenav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c68 = function _c68() {
      return ["/profile/settings"];
    };

    var HeaderTopComponent = /*#__PURE__*/function () {
      function HeaderTopComponent(layout, navService, themeService, renderer, jwtAuth) {
        _classCallCheck(this, HeaderTopComponent);

        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.renderer = renderer;
        this.jwtAuth = jwtAuth;
        this.marcoThemes = []; // Dummy notifications

        this.notifications = [{
          message: 'New orders received',
          icon: 'assignment_ind',
          time: '3 min ago',
          route: '/inbox',
          color: 'primary'
        }, {
          message: 'New costumer has registered',
          icon: 'chat',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'Project has been appoved',
          icon: 'settings_backup_restore',
          time: '12 min ago',
          route: '/charts',
          color: 'warn'
        }, {
          message: 'Task has been finished',
          icon: 'account_box',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'New account added',
          icon: 'attach_file',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }];
      }

      _createClass(HeaderTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.layoutConf = this.layout.layoutConf;
          this.marcoThemes = this.themeService.marcoThemes;
          this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
            res = res.filter(function (item) {
              return item.type !== 'icon' && item.type !== 'separator';
            });
            var limit = 4;
            var mainItems = res.slice(0, limit);

            if (res.length <= limit) {
              return _this4.menuItems = mainItems;
            }

            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
              name: 'Morence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            }, {
              name: 'Kurence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            });
            _this4.menuItems = mainItems;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.menuItemSub.unsubscribe();
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.layout.publishLayoutChange({
            matTheme: theme.name
          });
        }
      }, {
        key: "toggleNotific",
        value: function toggleNotific() {
          this.notificPanel.toggle();
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            });
          }

          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }]);

      return HeaderTopComponent;
    }();

    HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
      return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
    };

    HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderTopComponent,
      selectors: [["app-header-top"]],
      inputs: {
        notificPanel: "notificPanel"
      },
      decls: 66,
      vars: 17,
      consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "topnav"], [1, "topbar-branding"], ["src", "assets/images/arkenea/logo.webp", "alt", "", 1, "app-logo"], ["fxLayout", "row", "fxLayout.xs", "row", "fxLayoutAlign", "space-between center", "class", "menu", 4, "ngIf"], ["fxFlex", ""], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z", "opacity", ".3"], ["d", "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-2 6H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"], [1, "notification-number", "mat-bg-warn"], ["xPosition", "before", 1, "pt-0", "notification-wrap"], ["notificationsMenu", "matMenu"], [1, "text-left", "mat-bg-primary", "p-16"], [1, "m-0"], ["role", "list", 1, "notification-list"], ["class", "notific-item pb-12 pt-12 border-bottom", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "dropdown-footer", "text-center", "pb-12", "pt-12"], ["mat-button", "", "color", "primary"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["d", "M19 1H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2zm0 14.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10v12.97z"], ["d", "M5 19.97l5-2.15 5 2.15V7H5z", "opacity", ".3"], ["mat-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img"], ["accountMenu", "matMenu"], ["color", "primary"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "text-left"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "profile-img", "rounded-circle", "w-12", "h-12", "mr-05"], ["mat-menu-item", "", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["svgIcon", "account_box", 1, "btn-icon"], ["svgIcon", "inbox", 1, "btn-icon"], ["svgIcon", "receipt", 1, "btn-icon"], ["svgIcon", "library_books", 1, "btn-icon"], ["mat-button", "", "color", "primary", 1, "fw-500"], ["mat-icon-button", "", "class", "mr-1", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "row", "fxLayoutAlign", "space-between center", 1, "menu"], ["mat-button", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", 1, "mat-button", 3, "routerLink"], ["routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", "mat-button", "", 1, "mat-button", 3, "matMenuTriggerFor"], [1, "caret"], [1, "app-dropdown"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", 3, "routerLink"], ["mat-menu-item", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", 3, "matMenuTriggerFor"], ["vertebrates", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}"], ["users", "matMenu"], ["routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", "mat-button", "", 1, "mat-button", "bg-primary", 3, "matMenuTriggerFor"], ["pages", "matMenu"], ["auth", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", 3, "matMenuTriggerFor", "routerLink"], ["mat-menu-item", "", "routerLinkActive", "renata", "routerLinkActiveOptions", "{exact:true}", "routerLinkActiveOptions", "{exact:true}", 3, "matMenuTriggerFor", "routerLink"], ["signUp", "matMenu"], ["signIn", "matMenu"], ["profile", "matMenu"], ["help", "matMenu"], ["UI", "matMenu"], ["components", "matMenu"], ["navigation", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "renatae", "routerLinkActiveOptions", "{exact:true}", 3, "routerLink"], ["dialogs", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "router-link-active", 3, "matMenuTriggerFor"], ["extras", "matMenu"], ["routerLinkActive", "renata", "mat-button", "", 1, "mat-button", 3, "matMenuTriggerFor"], ["Forms", "matMenu"], ["forms", "matMenu"], ["tables", "matMenu"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", "pb-12", "pt-12", "border-bottom"], [1, "btn-icon", "notific-icon", "mr-1", 3, "color", "svgIcon"], [3, "routerLink"], [1, "mat-list-text"], [1, "fw-500"], [1, "time", "text-muted"], ["mat-icon-button", "", 1, "mr-1", 3, "click"]],
      template: function HeaderTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderTopComponent_ul_4_Template, 221, 160, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-nav-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderTopComponent_mat_list_item_19_Template, 8, 7, "mat-list-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "MARK ALL AS READ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_23_listener() {
            return ctx.toggleNotific();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Michael Jordan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", 12, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-toolbar", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Marko Apostolski");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-nav-list", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "My Inbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "My Tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Billing Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HeaderTopComponent_button_65_Template, 3, 0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c21));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c68));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c68));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c68));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-top',
          templateUrl: './header-top.component.html'
        }]
      }], function () {
        return [{
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }, {
          type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
        }];
      }, {
        notificPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts": function srcAppSharedComponentsLayoutsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../header-top/header-top.component */
    "./src/app/shared/components/header-top/header-top.component.ts");
    /* harmony import */


    var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../sidebar-side/sidebar-side.component */
    "./src/app/shared/components/sidebar-side/sidebar-side.component.ts");
    /* harmony import */


    var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../sidebar-top/sidebar-top.component */
    "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
    /* harmony import */


    var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../header-side/header-side.component */
    "./src/app/shared/components/header-side/header-side.component.ts");

    function AdminLayoutComponent_app_header_top_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-top", 13);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
      }
    }

    function AdminLayoutComponent_app_sidebar_side_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar-side", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.sidebarMouseenter($event);
        })("mouseleave", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseleave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.sidebarMouseleave($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLayoutComponent_app_sidebar_top_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-top");
      }
    }

    function AdminLayoutComponent_app_header_side_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 13);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
      }
    }

    function AdminLayoutComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "visible": a0
      };
    };

    var AdminLayoutComponent = /*#__PURE__*/function () {
      function AdminLayoutComponent(router, themeService, layout, cdr, jwtAuth) {
        var _this5 = this;

        _classCallCheck(this, AdminLayoutComponent);

        this.router = router;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.jwtAuth = jwtAuth;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        this.adminContainerClasses = {}; // Check Auth Token is valid

        this.jwtAuth.checkTokenIsValid().subscribe(); // Close sidenav after route change in mobile

        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (routeChange) {
          _this5.layout.adjustLayout({
            route: routeChange.url
          });

          _this5.scrollToTop();
        }); // Translator init
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          // this.layoutConf = this.layout.layoutConf;
          this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
            _this6.layoutConf = layoutConf; // console.log(this.layoutConf);

            _this6.adminContainerClasses = _this6.updateAdminContainerClasses(_this6.layoutConf);

            _this6.cdr.markForCheck();
          }); // FOR MODULE LOADER FLAG

          this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
              _this6.isModuleLoading = true;
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
              _this6.isModuleLoading = false;
            }
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.layout.adjustLayout(event);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var _this7 = this;

          if (document) {
            setTimeout(function () {
              var element;

              if (_this7.layoutConf.topbarFixed) {
                element = document.querySelector('#rightside-content-hold');
              } else {
                element = document.querySelector('#content-wrapper');
              }

              element.scrollTop = 0;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
          }

          if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
          }

          if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
          }
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }, {
        key: "sidebarMouseenter",
        value: function sidebarMouseenter(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "sidebarMouseleave",
        value: function sidebarMouseleave(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'full' && this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
              sidebarStyle: 'compact'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "updateAdminContainerClasses",
        value: function updateAdminContainerClasses(layoutConf) {
          return {
            'navigation-top': layoutConf.navigationPos === 'top',
            'sidebar-full': layoutConf.sidebarStyle === 'full',
            'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
            'compact-toggle-active': layoutConf.sidebarCompactToggle,
            'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
            'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
            'sidebar-closed': layoutConf.sidebarStyle === 'closed',
            'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
          };
        }
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]));
    };

    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 17,
      vars: 20,
      consts: [[1, "app-admin-wrap", 3, "dir"], [3, "dir", "ngClass"], [3, "notificPanel", 4, "ngIf"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "content-wrapper", 1, "content-wrapper", "full-width", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminLayoutComponent_app_header_top_3_Template, 1, 1, "app-header-top", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_12_listener() {
            return ctx.closeSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-notifications", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side" && ctx.layoutConf.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"], _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_13__["HeaderTopComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_14__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_15__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_16__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-layout',
          templateUrl: './admin-layout.template.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts": function srcAppSharedComponentsLayoutsAuthLayoutAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/broker/signup"];
    };

    var AuthLayoutComponent = /*#__PURE__*/function () {
      function AuthLayoutComponent() {
        _classCallCheck(this, AuthLayoutComponent);
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
      return new (t || AuthLayoutComponent)();
    };

    AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthLayoutComponent,
      selectors: [["app-auth-layout"]],
      decls: 10,
      vars: 2,
      consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "topnav"], [1, "topbar-branding", 2, "flex", "auto"], ["src", "assets/images/arkenea/white-logo.webp", "alt", "", 1, "app-logo"], [1, "already--acc"], ["mat-raised-button", "", 1, "topbar-button-right", "img-button", "login--btn", 3, "routerLink"]],
      template: function AuthLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don\u2019t have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".header-topnav.mat-elevation-z2[_ngcontent-%COMP%] {\n  background: #000 !important;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  border-radius: 0;\n  height: auto;\n  width: auto;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .login--btn[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .login--btn[_ngcontent-%COMP%]     .mat-button-wrapper {\n  font-weight: 400;\n}\n\n@media only screen and (max-width: 599px) {\n  .already--acc[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoLWxheW91dC9DOlxcUHJhc2hhbnQtd29ya3NwYWNlXFxhcmstcGxuL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGxheW91dHNcXGF1dGgtbGF5b3V0XFxhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLDJCQUEyQjtBQ0FuQzs7QURGQTtFQUlZLGFBQWE7RUFDYixtQkFBbUI7QUNFL0I7O0FEUEE7RUFPZ0IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0FDSTNCOztBRGJBO0VBYVksV0FBVztBQ0l2Qjs7QURqQkE7RUFnQm9CLGdCQUFnQjtBQ0twQzs7QURFQTtFQUNJO0lBQ0ksYUFBYTtFQ0NuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9wbmF2e1xyXG4gICAgJi5tYXQtZWxldmF0aW9uLXoye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICAudG9wYmFyLWJyYW5kaW5ne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAuYXBwLWxvZ297XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLS1idG57XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICA6Om5nLWRlZXB7XHJcbiAgICAgICAgICAgICAgICAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5hbHJlYWR5LS1hY2N7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIi5oZWFkZXItdG9wbmF2Lm1hdC1lbGV2YXRpb24tejIge1xuICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItdG9wbmF2Lm1hdC1lbGV2YXRpb24tejIgLnRvcGJhci1icmFuZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdG9wbmF2Lm1hdC1lbGV2YXRpb24tejIgLnRvcGJhci1icmFuZGluZyAuYXBwLWxvZ28ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uaGVhZGVyLXRvcG5hdi5tYXQtZWxldmF0aW9uLXoyIC5sb2dpbi0tYnRuIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5oZWFkZXItdG9wbmF2Lm1hdC1lbGV2YXRpb24tejIgLmxvZ2luLS1idG4gOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5hbHJlYWR5LS1hY2Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-layout',
          templateUrl: './auth-layout.component.html',
          styleUrls: ['./auth-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layouts/broker-auth-layout/broker-auth-layout.component.ts": function srcAppSharedComponentsLayoutsBrokerAuthLayoutBrokerAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrokerAuthLayoutComponent", function () {
      return BrokerAuthLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/signin"];
    };

    var BrokerAuthLayoutComponent = /*#__PURE__*/function () {
      function BrokerAuthLayoutComponent() {
        _classCallCheck(this, BrokerAuthLayoutComponent);
      }

      _createClass(BrokerAuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BrokerAuthLayoutComponent;
    }();

    BrokerAuthLayoutComponent.ɵfac = function BrokerAuthLayoutComponent_Factory(t) {
      return new (t || BrokerAuthLayoutComponent)();
    };

    BrokerAuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrokerAuthLayoutComponent,
      selectors: [["app-broker-auth-layout"]],
      decls: 10,
      vars: 2,
      consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "topnav"], [1, "topbar-branding", 2, "flex", "auto"], ["src", "assets/images/arkenea/white-logo.webp", "alt", "", 1, "app-logo"], [1, "already--acc"], ["mat-raised-button", "", 1, "topbar-button-right", "img-button", "login--btn", 3, "routerLink"]],
      template: function BrokerAuthLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".header-topnav.mat-elevation-z2[_ngcontent-%COMP%] {\n  background: #000 !important;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  border-radius: 0;\n  height: auto;\n  width: auto;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .login--btn[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.header-topnav.mat-elevation-z2[_ngcontent-%COMP%]   .login--btn[_ngcontent-%COMP%]     .mat-button-wrapper {\n  font-weight: 400;\n}\n\n@media only screen and (max-width: 599px) {\n  .already--acc[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9icm9rZXItYXV0aC1sYXlvdXQvQzpcXFByYXNoYW50LXdvcmtzcGFjZVxcYXJrLXBsbi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxsYXlvdXRzXFxicm9rZXItYXV0aC1sYXlvdXRcXGJyb2tlci1hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0cy9icm9rZXItYXV0aC1sYXlvdXQvYnJva2VyLWF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsMkJBQTJCO0FDQW5DOztBREZBO0VBSVksYUFBYTtFQUNiLG1CQUFtQjtBQ0UvQjs7QURQQTtFQU9nQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7QUNJM0I7O0FEYkE7RUFhWSxXQUFXO0FDSXZCOztBRGpCQTtFQWdCb0IsZ0JBQWdCO0FDS3BDOztBREVBO0VBQ0k7SUFDSSxhQUFhO0VDQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRzL2Jyb2tlci1hdXRoLWxheW91dC9icm9rZXItYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRvcG5hdntcclxuICAgICYubWF0LWVsZXZhdGlvbi16MntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnRvcGJhci1icmFuZGluZ3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmFwcC1sb2dve1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi0tYnRue1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgOjpuZy1kZWVwe1xyXG4gICAgICAgICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuYWxyZWFkeS0tYWNje1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLXRvcG5hdi5tYXQtZWxldmF0aW9uLXoyIHtcbiAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRvcG5hdi5tYXQtZWxldmF0aW9uLXoyIC50b3BiYXItYnJhbmRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRvcG5hdi5tYXQtZWxldmF0aW9uLXoyIC50b3BiYXItYnJhbmRpbmcgLmFwcC1sb2dvIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmhlYWRlci10b3BuYXYubWF0LWVsZXZhdGlvbi16MiAubG9naW4tLWJ0biB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uaGVhZGVyLXRvcG5hdi5tYXQtZWxldmF0aW9uLXoyIC5sb2dpbi0tYnRuIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuYWxyZWFkeS0tYWNjIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerAuthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-broker-auth-layout',
          templateUrl: './broker-auth-layout.component.html',
          styleUrls: ['./broker-auth-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layouts/broker-layout/broker-layout.component.ts": function srcAppSharedComponentsLayoutsBrokerLayoutBrokerLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrokerLayoutComponent", function () {
      return BrokerLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../broker-top-header/broker-top-header.component */
    "./src/app/shared/components/broker-top-header/broker-top-header.component.ts");
    /* harmony import */


    var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../sidebar-top/sidebar-top.component */
    "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
    /* harmony import */


    var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../header-side/header-side.component */
    "./src/app/shared/components/header-side/header-side.component.ts");

    function BrokerLayoutComponent_app_broker_top_header_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-broker-top-header", 12);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r4);
      }
    }

    function BrokerLayoutComponent_app_sidebar_top_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-top");
      }
    }

    function BrokerLayoutComponent_app_header_side_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 12);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r4);
      }
    }

    function BrokerLayoutComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "visible": a0
      };
    };

    var BrokerLayoutComponent = /*#__PURE__*/function () {
      function BrokerLayoutComponent(router, themeService, layout, cdr, jwtAuth) {
        var _this8 = this;

        _classCallCheck(this, BrokerLayoutComponent);

        this.router = router;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.jwtAuth = jwtAuth;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        this.adminContainerClasses = {}; // Check Auth Token is valid

        this.jwtAuth.checkTokenIsValid().subscribe(); // Close sidenav after route change in mobile

        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (routeChange) {
          _this8.layout.adjustLayout({
            route: routeChange.url
          });

          _this8.scrollToTop();
        }); // Translator init
      }

      _createClass(BrokerLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          // this.layoutConf = this.layout.layoutConf;
          this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
            _this9.layoutConf = layoutConf; // console.log(this.layoutConf);

            _this9.adminContainerClasses = _this9.updateAdminContainerClasses(_this9.layoutConf);

            _this9.cdr.markForCheck();
          }); // FOR MODULE LOADER FLAG

          this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
              _this9.isModuleLoading = true;
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
              _this9.isModuleLoading = false;
            }
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.layout.adjustLayout(event);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var _this10 = this;

          if (document) {
            setTimeout(function () {
              var element;

              if (_this10.layoutConf.topbarFixed) {
                element = document.querySelector('#rightside-content-hold');
              } else {
                element = document.querySelector('#content-wrapper');
              }

              element.scrollTop = 0;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
          }

          if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
          }

          if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
          }
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }, {
        key: "sidebarMouseenter",
        value: function sidebarMouseenter(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "sidebarMouseleave",
        value: function sidebarMouseleave(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'full' && this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
              sidebarStyle: 'compact'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "updateAdminContainerClasses",
        value: function updateAdminContainerClasses(layoutConf) {
          return {
            'navigation-top': layoutConf.navigationPos === 'top',
            'sidebar-full': layoutConf.sidebarStyle === 'full',
            'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
            'compact-toggle-active': layoutConf.sidebarCompactToggle,
            'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
            'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
            'sidebar-closed': layoutConf.sidebarStyle === 'closed',
            'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
          };
        }
      }]);

      return BrokerLayoutComponent;
    }();

    BrokerLayoutComponent.ɵfac = function BrokerLayoutComponent_Factory(t) {
      return new (t || BrokerLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]));
    };

    BrokerLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrokerLayoutComponent,
      selectors: [["app-broker-layout"]],
      hostBindings: function BrokerLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BrokerLayoutComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 16,
      vars: 19,
      consts: [[1, "app-admin-wrap", 3, "dir"], [3, "dir", "ngClass"], [3, "notificPanel", 4, "ngIf"], [4, "ngIf"], ["id", "content-wrapper", 1, "content-wrapper", "full-width", "page-login", "broker-atfer-signup", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"]],
      template: function BrokerLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BrokerLayoutComponent_app_broker_top_header_3_Template, 1, 1, "app-broker-top-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BrokerLayoutComponent_app_sidebar_top_4_Template, 1, 0, "app-sidebar-top", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BrokerLayoutComponent_app_header_side_6_Template, 1, 1, "app-header-side", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BrokerLayoutComponent_div_8_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrokerLayoutComponent_Template_div_click_11_listener() {
            return ctx.closeSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-sidenav", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-notifications", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side" && ctx.layoutConf.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r4);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"], _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_13__["BrokerHeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_14__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_15__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-broker-layout',
          templateUrl: './broker-layout.template.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/layouts/pre-login/pre-login-layout.component.ts": function srcAppSharedComponentsLayoutsPreLoginPreLoginLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginLayoutComponent", function () {
      return PreLoginLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pre-login-footer/pre-login-footer.component */
    "./src/app/shared/components/pre-login-footer/pre-login-footer.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../pre-login-header-top/pre-login-header-top.component */
    "./src/app/shared/components/pre-login-header-top/pre-login-header-top.component.ts");
    /* harmony import */


    var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../sidebar-side/sidebar-side.component */
    "./src/app/shared/components/sidebar-side/sidebar-side.component.ts");
    /* harmony import */


    var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../sidebar-top/sidebar-top.component */
    "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
    /* harmony import */


    var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../header-side/header-side.component */
    "./src/app/shared/components/header-side/header-side.component.ts");

    function PreLoginLayoutComponent_app_pre_login_header_top_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pre-login-header-top", 13);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
      }
    }

    function PreLoginLayoutComponent_app_sidebar_side_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar-side", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PreLoginLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseenter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.sidebarMouseenter($event);
        })("mouseleave", function PreLoginLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseleave_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.sidebarMouseleave($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PreLoginLayoutComponent_app_sidebar_top_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-top");
      }
    }

    function PreLoginLayoutComponent_app_header_side_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 13);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
      }
    }

    function PreLoginLayoutComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "visible": a0
      };
    };

    var PreLoginLayoutComponent = /*#__PURE__*/function () {
      function PreLoginLayoutComponent(router, themeService, layout, cdr, jwtAuth) {
        var _this11 = this;

        _classCallCheck(this, PreLoginLayoutComponent);

        this.router = router;
        this.themeService = themeService;
        this.layout = layout;
        this.cdr = cdr;
        this.jwtAuth = jwtAuth;
        this.isModuleLoading = false;
        this.scrollConfig = {};
        this.layoutConf = {};
        this.adminContainerClasses = {}; // Check Auth Token is valid

        this.jwtAuth.checkTokenIsValid().subscribe(); // Close sidenav after route change in mobile

        this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
        })).subscribe(function (routeChange) {
          _this11.layout.adjustLayout({
            route: routeChange.url
          });

          _this11.scrollToTop();
        }); // Translator init
      }

      _createClass(PreLoginLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          // this.layoutConf = this.layout.layoutConf;
          this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
            _this12.layoutConf = layoutConf; // console.log(this.layoutConf);

            _this12.adminContainerClasses = _this12.updateAdminContainerClasses(_this12.layoutConf);

            _this12.cdr.markForCheck();
          }); // FOR MODULE LOADER FLAG

          this.moduleLoaderSub = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
              _this12.isModuleLoading = true;
            }

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
              _this12.isModuleLoading = false;
            }
          });
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.layout.adjustLayout(event);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          var _this13 = this;

          if (document) {
            setTimeout(function () {
              var element;

              if (_this13.layoutConf.topbarFixed) {
                element = document.querySelector('#rightside-content-hold');
              } else {
                element = document.querySelector('#content-wrapper');
              }

              element.scrollTop = 0;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.moduleLoaderSub) {
            this.moduleLoaderSub.unsubscribe();
          }

          if (this.layoutConfSub) {
            this.layoutConfSub.unsubscribe();
          }

          if (this.routerEventSub) {
            this.routerEventSub.unsubscribe();
          }
        }
      }, {
        key: "closeSidebar",
        value: function closeSidebar() {
          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }, {
        key: "sidebarMouseenter",
        value: function sidebarMouseenter(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'compact') {
            this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "sidebarMouseleave",
        value: function sidebarMouseleave(e) {
          // console.log(this.layoutConf);
          if (this.layoutConf.sidebarStyle === 'full' && this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
              sidebarStyle: 'compact'
            }, {
              transitionClass: true
            });
          }
        }
      }, {
        key: "updateAdminContainerClasses",
        value: function updateAdminContainerClasses(layoutConf) {
          return {
            'navigation-top': layoutConf.navigationPos === 'top',
            'sidebar-full': layoutConf.sidebarStyle === 'full',
            'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
            'compact-toggle-active': layoutConf.sidebarCompactToggle,
            'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
            'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
            'sidebar-closed': layoutConf.sidebarStyle === 'closed',
            'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
          };
        }
      }]);

      return PreLoginLayoutComponent;
    }();

    PreLoginLayoutComponent.ɵfac = function PreLoginLayoutComponent_Factory(t) {
      return new (t || PreLoginLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]));
    };

    PreLoginLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginLayoutComponent,
      selectors: [["app-pre-login-layout"]],
      hostBindings: function PreLoginLayoutComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PreLoginLayoutComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 18,
      vars: 20,
      consts: [[1, "app-admin-wrap", 3, "dir"], [3, "dir", "ngClass"], [3, "notificPanel", 4, "ngIf"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "content-wrapper", 1, "content-wrapper", "full-width", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", "p-0", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"]],
      template: function PreLoginLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreLoginLayoutComponent_app_pre_login_header_top_3_Template, 1, 1, "app-pre-login-header-top", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreLoginLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreLoginLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PreLoginLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PreLoginLayoutComponent_div_9_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-pre-login-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginLayoutComponent_Template_div_click_13_listener() {
            return ctx.closeSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-notifications", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side" && ctx.layoutConf.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r5);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_11__["PreLoginFooterComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"], _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_14__["PreLoginHeaderTopComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_15__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_16__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-layout',
          templateUrl: './pre-login-layout.template.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/marco-sidebar/marco-sidebar-helper.service.ts": function srcAppSharedComponentsMarcoSidebarMarcoSidebarHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidebarHelperService", function () {
      return marcoSidebarHelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var marcoSidebarHelperService = /*#__PURE__*/function () {
      function marcoSidebarHelperService() {
        _classCallCheck(this, marcoSidebarHelperService);

        this.sidebarList = [];
      }

      _createClass(marcoSidebarHelperService, [{
        key: "setSidebar",
        value: function setSidebar(name, sidebar) {
          this.sidebarList[name] = sidebar;
        }
      }, {
        key: "getSidebar",
        value: function getSidebar(name) {
          return this.sidebarList[name];
        }
      }, {
        key: "removeSidebar",
        value: function removeSidebar(name) {
          if (!this.sidebarList[name]) {
            console.warn("The sidebar with name '".concat(name, "' doesn't exist."));
          } // remove sidebar


          delete this.sidebarList[name];
        }
      }]);

      return marcoSidebarHelperService;
    }();

    marcoSidebarHelperService.ɵfac = function marcoSidebarHelperService_Factory(t) {
      return new (t || marcoSidebarHelperService)();
    };

    marcoSidebarHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: marcoSidebarHelperService,
      factory: marcoSidebarHelperService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidebarHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/marco-sidebar/marco-sidebar.component.ts": function srcAppSharedComponentsMarcoSidebarMarcoSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidebarComponent", function () {
      return marcoSidebarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidebarTogglerDirective", function () {
      return marcoSidebarTogglerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/shared/services/match-media.service */
    "./src/app/shared/services/match-media.service.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _marco_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./marco-sidebar-helper.service */
    "./src/app/shared/components/marco-sidebar/marco-sidebar-helper.service.ts");

    var _c0 = ["*"];

    var marcoSidebarComponent = /*#__PURE__*/function () {
      function marcoSidebarComponent(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
        _classCallCheck(this, marcoSidebarComponent);

        this.matchMediaService = matchMediaService;
        this.mediaObserver = mediaObserver;
        this.sidebarHelperService = sidebarHelperService;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.cdr = cdr;
        this.backdrop = null;
        this.lockedBreakpoint = "gt-sm";
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(marcoSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.sidebarHelperService.setSidebar(this.name, this);

          if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
            this.sidebarLockedOpen = true;
            this.opened = true;
          } else {
            this.sidebarLockedOpen = false;
            this.opened = false;
          }

          this.matchMediaService.onMediaChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
            // console.log("medua sub");
            if (_this14.mediaObserver.isActive(_this14.lockedBreakpoint)) {
              _this14.sidebarLockedOpen = true;
              _this14.opened = true;
            } else {
              _this14.sidebarLockedOpen = false;
              _this14.opened = false;
            }
          });
        }
      }, {
        key: "open",
        value: function open() {
          this.opened = true;

          if (!this.sidebarLockedOpen && !this.backdrop) {
            this.showBackdrop();
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.opened = false;
          this.hideBackdrop();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.opened) {
            this.close();
          } else {
            this.open();
          }
        }
      }, {
        key: "showBackdrop",
        value: function showBackdrop() {
          var _this15 = this;

          this.backdrop = this._renderer.createElement("div");
          this.backdrop.classList.add("marco-sidebar-overlay");

          this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop); // Close sidebar onclick


          this.backdrop.addEventListener("click", function () {
            _this15.close();
          });
          this.cdr.markForCheck();
        }
      }, {
        key: "hideBackdrop",
        value: function hideBackdrop() {
          if (this.backdrop) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;
          }

          this.cdr.markForCheck();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeAll.next();
          this.unsubscribeAll.complete();
          this.sidebarHelperService.removeSidebar(this.name);
        }
      }]);

      return marcoSidebarComponent;
    }();

    marcoSidebarComponent.ɵfac = function marcoSidebarComponent_Factory(t) {
      return new (t || marcoSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_marco_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["marcoSidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    marcoSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: marcoSidebarComponent,
      selectors: [["marco-sidebar"]],
      hostVars: 8,
      hostBindings: function marcoSidebarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("position-right", ctx.right)("open", ctx.opened)("sidebar-locked-open", ctx.sidebarLockedOpen)("is-over", ctx.isOver);
        }
      },
      inputs: {
        name: "name",
        right: "right"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function marcoSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21hcmNvLXNpZGViYXIvbWFyY28tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "marco-sidebar",
          templateUrl: "./marco-sidebar.component.html",
          styleUrls: ["./marco-sidebar.component.scss"]
        }]
      }], function () {
        return [{
          type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]
        }, {
          type: _marco_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["marcoSidebarHelperService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        right: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.position-right"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.open"]
        }],
        sidebarLockedOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.sidebar-locked-open"]
        }],
        isOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.is-over"]
        }]
      });
    })();

    var marcoSidebarTogglerDirective = /*#__PURE__*/function () {
      function marcoSidebarTogglerDirective(marcoSidebarHelperService) {
        _classCallCheck(this, marcoSidebarTogglerDirective);

        this.marcoSidebarHelperService = marcoSidebarHelperService;
      }

      _createClass(marcoSidebarTogglerDirective, [{
        key: "onClick",
        value: function onClick() {
          this.marcoSidebarHelperService.getSidebar(this.id).toggle();
        }
      }]);

      return marcoSidebarTogglerDirective;
    }();

    marcoSidebarTogglerDirective.ɵfac = function marcoSidebarTogglerDirective_Factory(t) {
      return new (t || marcoSidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_marco_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["marcoSidebarHelperService"]));
    };

    marcoSidebarTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: marcoSidebarTogglerDirective,
      selectors: [["", "marcoSidebarToggler", ""]],
      hostBindings: function marcoSidebarTogglerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function marcoSidebarTogglerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        id: ["marcoSidebarToggler", "id"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidebarTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[marcoSidebarToggler]"
        }]
      }], function () {
        return [{
          type: _marco_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["marcoSidebarHelperService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["marcoSidebarToggler"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/notifications/notifications.component.ts": function srcAppSharedComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function NotificationsComponent_mat_list_item_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", n_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r2.route || "/dashboard"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.time);
      }
    }

    function NotificationsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_5_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.clearAll($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(router) {
        _classCallCheck(this, NotificationsComponent);

        this.router = router; // Dummy notifications

        this.notifications = [{
          title: 'Peter Monson',
          message: 'Lets have a lunch tomorrow at 5pm',
          image: 'assets/images/face-1.jpg',
          time: '3 min ago',
          route: '/inbox',
          color: 'primary'
        }, {
          title: 'Marko Apostolski',
          message: 'Max call me and told me about your exam.',
          image: 'assets/images/face-3.jpg',
          time: '12 min ago',
          route: '/charts',
          color: 'warn'
        }, {
          title: 'Simon St Lagger',
          message: 'Dont forget to call me after you finish your call',
          image: 'assets/images/face-4.jpg',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          title: 'Simon St Lagger',
          message: 'Dont forget to call me after you finish your call',
          image: 'assets/images/face-5.jpg',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          title: 'Simon St Lagger',
          message: 'Dont forget to call me after you finish your call',
          image: 'assets/images/face-6.jpg',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          title: 'Simon St Lagger',
          message: 'Dont forget to call me after you finish your call',
          image: 'assets/images/face-7.jpg',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }];
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.router.events.subscribe(function (routeChange) {
            if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this16.notificPanel.close();
            }
          });
        }
      }, {
        key: "clearAll",
        value: function clearAll(e) {
          e.preventDefault();
          this.notifications = [];
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
      return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationsComponent,
      selectors: [["app-notifications"]],
      inputs: {
        notificPanel: "notificPanel"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "text-left", "mat-bg-primary", "p-16"], [1, "m-0"], ["role", "list", 1, "message-list"], ["class", "notific-item pb-24 pt-24 border-bottom", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-1", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", "pb-24", "pt-24", "border-bottom"], ["alt", "", 1, "profile-img", "rounded-circle", "height-40px", "width-40px", "mr-05", 3, "src"], [3, "routerLink"], [1, "mat-list-text"], [1, "fw-600"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-1"], ["href", "#", 3, "click"]],
      template: function NotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 10, 7, "mat-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_div_5_Template, 4, 0, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
        }
      },
      directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notifications',
          templateUrl: './notifications.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        notificPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/pre-login-footer/pre-login-footer.component.ts": function srcAppSharedComponentsPreLoginFooterPreLoginFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginFooterComponent", function () {
      return PreLoginFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var PreLoginFooterComponent = /*#__PURE__*/function () {
      function PreLoginFooterComponent() {
        _classCallCheck(this, PreLoginFooterComponent);
      }

      _createClass(PreLoginFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreLoginFooterComponent;
    }();

    PreLoginFooterComponent.ɵfac = function PreLoginFooterComponent_Factory(t) {
      return new (t || PreLoginFooterComponent)();
    };

    PreLoginFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginFooterComponent,
      selectors: [["app-pre-login-footer"]],
      decls: 44,
      vars: 0,
      consts: [["fxLayout", "row", 1, "prelogin-footer"], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "100px", "fxLayoutGap.sm", "20px", "fxLayoutGap.xs", "0", "fxLayout.xs", "column"], ["fxLayout", "row", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "20", "fxFlex.xl", "20", 1, "w-100"], ["src", "assets/images/arkenea/logo.webp", "alt", "", 1, "footer-logo"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "25", "fxFlex.xl", "25", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign.xs", "center center", "fxLayoutAlign", "start start"], [1, "icon-location"], ["fxLayout", "row", "fxLayoutGap", "20px", "fxLayout.xs", "column", "fxLayoutGap.xs", "0", 1, "w-100"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "55", "fxFlex.xl", "55", 1, "w-100"], [1, "m-0", "p-0"], [1, "m-0"], ["fxLayout", "row", 1, "prelogin-subfooter"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between center", 1, "container"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["mat-mini-fab", "", 1, "mr-10"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["mat-mini-fab", ""], ["aria-hidden", "true", 1, "fa", "fa-linkedin"]],
      template: function PreLoginFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 9050 N Capital of Texas Hwy, Building 3, Suite 130, Austin, TX 78759 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 512.492.3813 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " info@thepln.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "footer", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Copyright \xA9 2021 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " PLN LLC. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".prelogin-footer[_ngcontent-%COMP%] {\n  background-color: #000;\n  padding: 25px 0 15px 0;\n}\n\n.prelogin-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Lato', sans-serif !important;\n  color: #fff;\n  font-size: 16px;\n}\n\n.prelogin-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  font-size: 19px;\n  height: 19px;\n  width: 19px;\n  margin-top: 3px;\n}\n\n.prelogin-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .mat-icon.icon-location[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n}\n\n.prelogin-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.prelogin-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: 'Lato', sans-serif !important;\n  color: #fff;\n  text-transform: uppercase;\n  margin-right: 30px;\n}\n\n.prelogin-subfooter[_ngcontent-%COMP%] {\n  padding: 17px 0 20px 0;\n}\n\n.prelogin-subfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 16px;\n}\n\n.prelogin-subfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #222;\n}\n\n.prelogin-subfooter[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  background-color: #eee;\n  box-shadow: none;\n}\n\n.prelogin-subfooter[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #333;\n}\n\n@media only screen and (max-width: 599px) {\n  .prelogin-footer[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .prelogin-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 8px;\n    text-align: center;\n  }\n  .prelogin-subfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-bottom: 16px !important;\n  }\n  .prelogin-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-right: 0;\n    font-size: 13px;\n  }\n  .prelogin-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 45%;\n    margin-bottom: 10px;\n  }\n  .prelogin-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .prelogin-subfooter[_ngcontent-tkt-c156][_ngcontent-%COMP%] {\n    padding: 15px 5px;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1279px) {\n  .prelogin-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJlLWxvZ2luLWZvb3Rlci9DOlxcUHJhc2hhbnQtd29ya3NwYWNlXFxhcmstcGxuL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByZS1sb2dpbi1mb290ZXJcXHByZS1sb2dpbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZS1sb2dpbi1mb290ZXIvcHJlLWxvZ2luLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QixzQkFBc0I7QUNDMUI7O0FESEE7RUFPUSwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLGVBQWU7QUNBdkI7O0FEVEE7RUFpQlksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUNKM0I7O0FEakJBO0VBWWdCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUNTM0I7O0FEeEJBO0VBMEJZLHFCQUFxQjtBQ0VqQzs7QUQ1QkE7RUE0QmdCLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUNJbEM7O0FERUE7RUFDSSxzQkFBc0I7QUNDMUI7O0FERkE7RUFHUSxXQUFXO0VBQ1gsZUFBZTtBQ0d2Qjs7QURQQTtFQU1ZLFdBQVc7QUNLdkI7O0FEWEE7RUFVUSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FDS3hCOztBRGhCQTtFQWNRLGVBQWU7RUFDZixXQUFXO0FDTW5COztBREZBO0VBQ0k7SUFDSSxhQUFhO0VDS25CO0VESEU7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtFQ0t4QjtFREhFO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtFQ0twQztFREhFO0lBQ0ksZUFBZTtJQUNmLGVBQWU7RUNLckI7RURIRTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0VDS3pCO0VESEU7SUFDSSxlQUFlO0VDS3JCO0FBQ0Y7O0FERkE7RUFDSTtJQUNJLGlCQUFpQjtFQ0t2QjtBQUNGOztBREhBO0VBQ0k7SUFDSSxjQUFjO0VDTXBCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmUtbG9naW4tZm9vdGVyL3ByZS1sb2dpbi1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlbG9naW4tZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDI1cHggMCAxNXB4IDA7XHJcbiAgICAuZm9vdGVyLWxvZ297XHJcbiAgICAgICAgLy8gd2lkdGg6IDc3JTtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmOyAgICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgJi5pY29uLWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJlbG9naW4tc3ViZm9vdGVye1xyXG4gICAgcGFkZGluZzogMTdweCAwIDIwcHggMDtcclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWluaS1mYWJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZhIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5wcmVsb2dpbi1mb290ZXIgeyBcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnByZWxvZ2luLWZvb3RlciB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7ICBcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnByZWxvZ2luLXN1YmZvb3RlciBwIHsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcmVsb2dpbi1mb290ZXIgdWwgbGkgYXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLnByZWxvZ2luLWZvb3RlciAuZm9vdGVyLWxvZ297XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnByZWxvZ2luLWZvb3RlciBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KXtcclxuICAgIC5wcmVsb2dpbi1zdWJmb290ZXJbX25nY29udGVudC10a3QtYzE1Nl0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggNXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe1xyXG4gICAgLnByZWxvZ2luLWZvb3RlciB1bCBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIucHJlbG9naW4tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMjVweCAwIDE1cHggMDtcbn1cblxuLnByZWxvZ2luLWZvb3RlciBwIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJlbG9naW4tZm9vdGVyIHAgLm1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgd2lkdGg6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnByZWxvZ2luLWZvb3RlciBwIC5tYXQtaWNvbi5pY29uLWxvY2F0aW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG59XG5cbi5wcmVsb2dpbi1mb290ZXIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcmVsb2dpbi1mb290ZXIgdWwgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4ucHJlbG9naW4tc3ViZm9vdGVyIHtcbiAgcGFkZGluZzogMTdweCAwIDIwcHggMDtcbn1cblxuLnByZWxvZ2luLXN1YmZvb3RlciBwIHtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnByZWxvZ2luLXN1YmZvb3RlciBwIGEge1xuICBjb2xvcjogIzIyMjtcbn1cblxuLnByZWxvZ2luLXN1YmZvb3RlciAubWF0LW1pbmktZmFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnByZWxvZ2luLXN1YmZvb3RlciAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5wcmVsb2dpbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnByZWxvZ2luLWZvb3RlciB1bCBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJlbG9naW4tc3ViZm9vdGVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByZWxvZ2luLWZvb3RlciB1bCBsaSBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5wcmVsb2dpbi1mb290ZXIgLmZvb3Rlci1sb2dvIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLnByZWxvZ2luLWZvb3RlciBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5wcmVsb2dpbi1zdWJmb290ZXJbX25nY29udGVudC10a3QtYzE1Nl0ge1xuICAgIHBhZGRpbmc6IDE1cHggNXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLnByZWxvZ2luLWZvb3RlciB1bCBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-footer',
          templateUrl: './pre-login-footer.component.html',
          styleUrls: ['./pre-login-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/pre-login-header-top/pre-login-header-top.component.ts": function srcAppSharedComponentsPreLoginHeaderTopPreLoginHeaderTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginHeaderTopComponent", function () {
      return PreLoginHeaderTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0() {
      return ["/broker/signup"];
    };

    function PreLoginHeaderTopComponent_ul_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " What We Do ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New Construction Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Fix & Flip Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Community Development Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rental Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "How We Help ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "High Leverage Loans");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Plan. Build. Grow.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Finance Expertise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Who We Work With");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Builders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Flippers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Developers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Investors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Brokers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Lender Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function PreLoginHeaderTopComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreLoginHeaderTopComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleSidenav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PreLoginHeaderTopComponent = /*#__PURE__*/function () {
      function PreLoginHeaderTopComponent(layout, navService, themeService, jwtAuth) {
        _classCallCheck(this, PreLoginHeaderTopComponent);

        this.layout = layout;
        this.navService = navService;
        this.themeService = themeService;
        this.jwtAuth = jwtAuth;
        this.marcoThemes = []; // Dummy notifications

        this.notifications = [{
          message: 'New orders received',
          icon: 'assignment_ind',
          time: '3 min ago',
          route: '/inbox',
          color: 'primary'
        }, {
          message: 'New costumer has registered',
          icon: 'chat',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'Project has been appoved',
          icon: 'settings_backup_restore',
          time: '12 min ago',
          route: '/charts',
          color: 'warn'
        }, {
          message: 'Task has been finished',
          icon: 'account_box',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }, {
          message: 'New account added',
          icon: 'attach_file',
          time: '55 min ago',
          route: '/chat',
          color: 'accent'
        }];
      }

      _createClass(PreLoginHeaderTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.layoutConf = this.layout.layoutConf;
          this.marcoThemes = this.themeService.marcoThemes;
          this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
            res = res.filter(function (item) {
              return item.type !== 'icon' && item.type !== 'separator';
            });
            var limit = 4;
            var mainItems = res.slice(0, limit);

            if (res.length <= limit) {
              return _this17.menuItems = mainItems;
            }

            var subItems = res.slice(limit, res.length - 1);
            mainItems.push({
              name: 'Morence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            }, {
              name: 'Kurence',
              type: 'dropDown',
              tooltip: 'More',
              icon: 'more_horiz',
              sub: subItems
            });
            _this17.menuItems = mainItems;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.menuItemSub.unsubscribe();
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.layout.publishLayoutChange({
            matTheme: theme.name
          });
        }
      }, {
        key: "toggleNotific",
        value: function toggleNotific() {
          this.notificPanel.toggle();
        }
      }, {
        key: "toggleSidenav",
        value: function toggleSidenav() {
          if (this.layoutConf.sidebarStyle === 'closed') {
            return this.layout.publishLayoutChange({
              sidebarStyle: 'full'
            });
          }

          this.layout.publishLayoutChange({
            sidebarStyle: 'closed'
          });
        }
      }]);

      return PreLoginHeaderTopComponent;
    }();

    PreLoginHeaderTopComponent.ɵfac = function PreLoginHeaderTopComponent_Factory(t) {
      return new (t || PreLoginHeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
    };

    PreLoginHeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreLoginHeaderTopComponent,
      selectors: [["app-pre-login-header-top"]],
      inputs: {
        notificPanel: "notificPanel"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "header-topnav", "mat-elevation-z2", "landing--header--wrapper"], [1, "topnav"], [1, "topbar-branding"], ["src", "assets/images/arkenea/logo.webp", "alt", "", 1, "app-logo"], ["fxFlex", ""], ["fxLayout", "row", "fxLayout.xs", "row", "fxLayoutAlign", "space-between center", "class", "menu", 4, "ngIf"], ["mat-icon-button", "", "class", "mr-1", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "row", "fxLayoutAlign", "space-between center", 1, "menu"], ["mat-button", "", 1, "mat-button"], [1, "options"], ["mat-button", "", 1, "mat-button", "lender-login-btn"], ["mat-button", "", 1, "mat-button", "sign-up-btn", 3, "routerLink"], ["mat-icon-button", "", 1, "mr-1", 3, "click"]],
      template: function PreLoginHeaderTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PreLoginHeaderTopComponent_ul_5_Template, 43, 2, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PreLoginHeaderTopComponent_button_6_Template, 3, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      styles: [".landing--header--wrapper.header-topnav[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: none;\n  position: fixed;\n}\n\n.landing--header--wrapper.header-topnav.scrolled[_ngcontent-%COMP%] {\n  background-color: #333 !important;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%] {\n  float: left;\n  height: 80px;\n  padding: 8px 8px 0 8px;\n  margin: 0 8px;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   .topbar-branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: unset;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: 'Lato', sans-serif !important;\n  text-transform: uppercase;\n  font-size: 14px;\n  height: 42px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.lender-login-btn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: solid 2px #fff;\n  font-size: 17px;\n  text-transform: capitalize;\n  padding-left: 17px;\n  padding-right: 17px;\n  margin-left: 17px;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.sign-up-btn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #fff;\n  color: #000;\n  font-size: 17px;\n  text-transform: capitalize;\n  margin-left: 10px;\n  padding-left: 17px;\n  padding-right: 17px;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: unset;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 18px 0 rgba(255, 255, 255, 0.07);\n  background-color: #222;\n  padding: 15px;\n  position: absolute;\n  left: 15px;\n  top: 37px;\n  display: none;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  padding: 0;\n  height: auto;\n  white-space: nowrap;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.landing--header--wrapper.header-topnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .options[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJlLWxvZ2luLWhlYWRlci10b3AvQzpcXFByYXNoYW50LXdvcmtzcGFjZVxcYXJrLXBsbi9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcmUtbG9naW4taGVhZGVyLXRvcFxccHJlLWxvZ2luLWhlYWRlci10b3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZS1sb2dpbi1oZWFkZXItdG9wL3ByZS1sb2dpbi1oZWFkZXItdG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0FDQXZCOztBREpBO0VBTVksaUNBQWlDO0FDRTdDOztBRFJBO0VBU1ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtBQ0d6Qjs7QURmQTtFQWNnQixvQkFBb0I7QUNLcEM7O0FEbkJBO0VBbUJnQixXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNJbkM7O0FEN0JBO0VBMkJvQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUNNckM7O0FEdkNBO0VBcUNvQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDTXZDOztBRGxEQTtFQStDb0IsY0FBYztBQ09sQzs7QUR0REE7RUFvRGdCLGtCQUFrQjtBQ01sQzs7QUQxREE7RUFzRG9CLG9EQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7QUNRakM7O0FEcEVBO0VBOER3QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7QUNVM0M7O0FEM0VBO0VBbUU0QixnQkFBZ0I7QUNZNUM7O0FEL0VBO0VBMEV3QixjQUFjO0FDU3RDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJlLWxvZ2luLWhlYWRlci10b3AvcHJlLWxvZ2luLWhlYWRlci10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy0taGVhZGVyLS13cmFwcGVye1xyXG4gICAgJi5oZWFkZXItdG9wbmF2e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAmLnNjcm9sbGVke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3BiYXItYnJhbmRpbmd7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggMCA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsgXHJcbiAgICAgICAgICAgICAgICAmLmxlbmRlci1sb2dpbi1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4ICNmZmY7ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5zaWduLXVwLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAub3B0aW9uc3tcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDE4cHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGF7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDZweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIubGFuZGluZy0taGVhZGVyLS13cmFwcGVyLmhlYWRlci10b3BuYXYge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmxhbmRpbmctLWhlYWRlci0td3JhcHBlci5oZWFkZXItdG9wbmF2LnNjcm9sbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xufVxuXG4ubGFuZGluZy0taGVhZGVyLS13cmFwcGVyLmhlYWRlci10b3BuYXYgLnRvcGJhci1icmFuZGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHggMCA4cHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiAudG9wYmFyLWJyYW5kaW5nIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xufVxuXG4ubGFuZGluZy0taGVhZGVyLS13cmFwcGVyLmhlYWRlci10b3BuYXYgdWwgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiB1bCBhLmxlbmRlci1sb2dpbi1idG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctbGVmdDogMTdweDtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiB1bCBhLnNpZ24tdXAtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTdweDtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbn1cblxuLmxhbmRpbmctLWhlYWRlci0td3JhcHBlci5oZWFkZXItdG9wbmF2IHVsIGE6OmFmdGVyIHtcbiAgY29udGVudDogdW5zZXQ7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxhbmRpbmctLWhlYWRlci0td3JhcHBlci5oZWFkZXItdG9wbmF2IHVsIGxpIC5vcHRpb25zIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCAxOHB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDM3cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiB1bCBsaSAub3B0aW9ucyBhIHtcbiAgbWFyZ2luOiAwIDAgNnB4IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxhbmRpbmctLWhlYWRlci0td3JhcHBlci5oZWFkZXItdG9wbmF2IHVsIGxpIC5vcHRpb25zIGE6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYW5kaW5nLS1oZWFkZXItLXdyYXBwZXIuaGVhZGVyLXRvcG5hdiB1bCBsaTpob3ZlciAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreLoginHeaderTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pre-login-header-top',
          templateUrl: './pre-login-header-top.component.html',
          styleUrls: ['./pre-login-header-top.component.scss']
        }]
      }], function () {
        return [{
          type: _services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }, {
          type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
        }];
      }, {
        notificPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/shared-components.module.ts": function srcAppSharedComponentsSharedComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function () {
      return SharedComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../search/search.module */
    "./src/app/shared/search/search.module.ts");
    /* harmony import */


    var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pipes/shared-pipes.module */
    "./src/app/shared/pipes/shared-pipes.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../directives/shared-directives.module */
    "./src/app/shared/directives/shared-directives.module.ts");
    /* harmony import */


    var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header-side/header-side.component */
    "./src/app/shared/components/header-side/header-side.component.ts");
    /* harmony import */


    var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidebar-side/sidebar-side.component */
    "./src/app/shared/components/sidebar-side/sidebar-side.component.ts");
    /* harmony import */


    var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header-top/header-top.component */
    "./src/app/shared/components/header-top/header-top.component.ts");
    /* harmony import */


    var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sidebar-top/sidebar-top.component */
    "./src/app/shared/components/sidebar-top/sidebar-top.component.ts");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layouts/auth-layout/auth-layout.component */
    "./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./sidenav/sidenav.component */
    "./src/app/shared/components/sidenav/sidenav.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.component */
    "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../services/app-confirm/app-confirm.component */
    "./src/app/shared/services/app-confirm/app-confirm.component.ts");
    /* harmony import */


    var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../services/app-loader/app-loader.component */
    "./src/app/shared/services/app-loader/app-loader.component.ts");
    /* harmony import */


    var _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./button-loading/button-loading.component */
    "./src/app/shared/components/button-loading/button-loading.component.ts");
    /* harmony import */


    var _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./marco-sidebar/marco-sidebar.component */
    "./src/app/shared/components/marco-sidebar/marco-sidebar.component.ts");
    /* harmony import */


    var _layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./layouts/pre-login/pre-login-layout.component */
    "./src/app/shared/components/layouts/pre-login/pre-login-layout.component.ts");
    /* harmony import */


    var _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pre-login-header-top/pre-login-header-top.component */
    "./src/app/shared/components/pre-login-header-top/pre-login-header-top.component.ts");
    /* harmony import */


    var _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pre-login-footer/pre-login-footer.component */
    "./src/app/shared/components/pre-login-footer/pre-login-footer.component.ts");
    /* harmony import */


    var _layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./layouts/broker-layout/broker-layout.component */
    "./src/app/shared/components/layouts/broker-layout/broker-layout.component.ts");
    /* harmony import */


    var _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./broker-top-header/broker-top-header.component */
    "./src/app/shared/components/broker-top-header/broker-top-header.component.ts");
    /* harmony import */


    var _layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./layouts/broker-auth-layout/broker-auth-layout.component */
    "./src/app/shared/components/layouts/broker-auth-layout/broker-auth-layout.component.ts"); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
    // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
    // ALWAYS REQUIRED 


    var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_20__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_22__["ButtonLoadingComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarTogglerDirective"], _layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_24__["PreLoginLayoutComponent"], _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_25__["PreLoginHeaderTopComponent"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_26__["PreLoginFooterComponent"], _layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_27__["BrokerLayoutComponent"], _layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_29__["BrokerAuthLayoutComponent"], _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_28__["BrokerHeaderTopComponent"]];

    var SharedComponentsModule = function SharedComponentsModule() {
      _classCallCheck(this, SharedComponentsModule);
    };

    SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedComponentsModule
    });
    SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedComponentsModule_Factory(t) {
        return new (t || SharedComponentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
        declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_20__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_22__["ButtonLoadingComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarTogglerDirective"], _layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_24__["PreLoginLayoutComponent"], _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_25__["PreLoginHeaderTopComponent"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_26__["PreLoginFooterComponent"], _layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_27__["BrokerLayoutComponent"], _layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_29__["BrokerAuthLayoutComponent"], _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_28__["BrokerHeaderTopComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
        exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_20__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_22__["ButtonLoadingComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["marcoSidebarTogglerDirective"], _layouts_pre_login_pre_login_layout_component__WEBPACK_IMPORTED_MODULE_24__["PreLoginLayoutComponent"], _pre_login_header_top_pre_login_header_top_component__WEBPACK_IMPORTED_MODULE_25__["PreLoginHeaderTopComponent"], _pre_login_footer_pre_login_footer_component__WEBPACK_IMPORTED_MODULE_26__["PreLoginFooterComponent"], _layouts_broker_layout_broker_layout_component__WEBPACK_IMPORTED_MODULE_27__["BrokerLayoutComponent"], _layouts_broker_auth_layout_broker_auth_layout_component__WEBPACK_IMPORTED_MODULE_29__["BrokerAuthLayoutComponent"], _broker_top_header_broker_top_header_component__WEBPACK_IMPORTED_MODULE_28__["BrokerHeaderTopComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
          declarations: components,
          entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_20__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_21__["AppLoaderComponent"]],
          exports: components
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar-side/sidebar-side.component.ts": function srcAppSharedComponentsSidebarSideSidebarSideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function () {
      return SidebarSideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/services/layout.service */
    "./src/app/shared/services/layout.service.ts");
    /* harmony import */


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sidenav/sidenav.component */
    "./src/app/shared/components/sidenav/sidenav.component.ts");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function SidebarSideComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    function SidebarSideComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarSideComponent_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleCollapse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.layoutConf.sidebarCompactToggle));
      }
    }

    var SidebarSideComponent = /*#__PURE__*/function () {
      function SidebarSideComponent(navService, themeService, layout, jwtAuth) {
        _classCallCheck(this, SidebarSideComponent);

        this.navService = navService;
        this.themeService = themeService;
        this.layout = layout;
        this.jwtAuth = jwtAuth;
      }

      _createClass(SidebarSideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
          this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this18.menuItems = menuItem; //Checks item list has any icon type.

            _this18.hasIconTypeMenuItem = !!_this18.menuItems.filter(function (item) {
              return item.type === "icon";
            }).length;
          });
          this.layoutConf = this.layout.layoutConf;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
          }
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          if (this.layoutConf.sidebarCompactToggle) {
            this.layout.publishLayoutChange({
              sidebarCompactToggle: false
            });
          } else {
            this.layout.publishLayoutChange({
              // sidebarStyle: "compact",
              sidebarCompactToggle: true
            });
          }
        }
      }]);

      return SidebarSideComponent;
    }();

    SidebarSideComponent.ɵfac = function SidebarSideComponent_Factory(t) {
      return new (t || SidebarSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
    };

    SidebarSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarSideComponent,
      selectors: [["app-sidebar-side"]],
      decls: 17,
      vars: 7,
      consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-wrapper", 3, "perfectScrollbar"], [1, "sidebar-wrapper"], [1, "branding"], ["src", "assets/images/marco.png", "alt", "", 1, "app-logo"], [1, "app-logo-text"], ["style", "margin: auto", 4, "ngIf"], ["class", "sidebar-compact-switch", 3, "ngClass", "click", 4, "ngIf"], [1, "app-user"], [1, "app-user-photo"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "mat-elevation-z1"], [1, "app-user-name", "fw-400"], [1, "user-email"], [3, "items", "hasIconMenu", "iconMenuTitle"], [2, "margin", "auto"], [1, "sidebar-compact-switch", 3, "ngClass", "click"]],
      template: function SidebarSideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "marco");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarSideComponent_span_7_Template, 1, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarSideComponent_div_8_Template, 2, 3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-sidenav", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jwtAuth == null ? null : ctx.jwtAuth.user == null ? null : ctx.jwtAuth.user.displayName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jwtAuth == null ? null : ctx.jwtAuth.user == null ? null : ctx.jwtAuth.user.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems)("hasIconMenu", ctx.hasIconTypeMenuItem)("iconMenuTitle", ctx.iconTypeMenuTitle);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarSideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-sidebar-side",
          templateUrl: "./sidebar-side.component.html"
        }]
      }], function () {
        return [{
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }, {
          type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
        }, {
          type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
        }, {
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidebar-top/sidebar-top.component.ts": function srcAppSharedComponentsSidebarTopSidebarTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function () {
      return SidebarTopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidenav/sidenav.component */
    "./src/app/shared/components/sidenav/sidenav.component.ts"); // import PerfectScrollbar from 'perfect-scrollbar';


    var SidebarTopComponent = /*#__PURE__*/function () {
      function SidebarTopComponent(navService) {
        _classCallCheck(this, SidebarTopComponent);

        this.navService = navService;
      }

      _createClass(SidebarTopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
            _this19.menuItems = menuItem.filter(function (item) {
              return item.type !== 'icon' && item.type !== 'separator';
            });
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// setTimeout(() => {
          //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
          //     suppressScrollX: true
          //   })
          // })
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // if(this.sidebarPS) {
          //   this.sidebarPS.destroy();
          // }
          if (this.menuItemsSub) {
            this.menuItemsSub.unsubscribe();
          }
        }
      }]);

      return SidebarTopComponent;
    }();

    SidebarTopComponent.ɵfac = function SidebarTopComponent_Factory(t) {
      return new (t || SidebarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
    };

    SidebarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarTopComponent,
      selectors: [["app-sidebar-top"]],
      decls: 4,
      vars: 1,
      consts: [[1, "sidebar-panel", "cust--side--nav"], ["src", "assets/images/arkenea/logo.webp", "alt", "", 1, "app-logo-sidenav"], ["id", "sidebar-top-scroll-area", "fxLayout", "column", 1, "navigation-wrapper", 3, "perfectScrollbar"], [3, "items"]],
      template: function SidebarTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidenav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-top',
          templateUrl: './sidebar-top.component.html'
        }]
      }], function () {
        return [{
          type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/sidenav/sidenav.component.ts": function srcAppSharedComponentsSidenavSidenavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
      return SidenavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives/dropdown.directive */
    "./src/app/shared/directives/dropdown.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/dropdown-link.directive */
    "./src/app/shared/directives/dropdown-link.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/dropdown-anchor.directive */
    "./src/app/shared/directives/dropdown-anchor.directive.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function SidenavComponent_li_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        background: a0
      };
    };

    function SidenavComponent_li_2_div_2_a_1_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r10.color, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r10.color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r10.value);
      }
    }

    function SidenavComponent_li_2_div_2_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_2_div_2_a_1_span_6_Template, 2, 7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r1.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.badges);
      }
    }

    function SidenavComponent_li_2_div_2_a_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r13.color, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r13.color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r13.value);
      }
    }

    function SidenavComponent_li_2_div_2_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_2_div_2_a_2_span_6_Template, 2, 7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.badges);
      }
    }

    function SidenavComponent_li_2_div_2_a_3_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r16.color, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r16.color));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r16.value);
      }
    }

    function SidenavComponent_li_2_div_2_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_2_div_2_a_3_span_6_Template, 2, 7, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.badges);
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_li_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemLvL2_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r1.state ? "/" + item_r1.state : "", "/", itemLvL2_r19.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r19.name);
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_li_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemLvL2_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r19.name);
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemLvL3_r27 = ctx.$implicit;

        var itemLvL2_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r1.state ? "/" + item_r1.state : "", "", itemLvL2_r19.state ? "/" + itemLvL2_r19.state : "", "/", itemLvL3_r27.state, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL3_r27.name);
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_li_1_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_2_div_2_ul_4_li_1_ul_3_li_1_Template, 4, 4, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemLvL2_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r19.sub);
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_2_div_2_ul_4_li_1_a_1_Template, 4, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_2_div_2_ul_4_li_1_a_2_Template, 6, 1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_2_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itemLvL2_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r19.type !== "dropDown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r19.type === "dropDown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r19.type === "dropDown");
      }
    }

    function SidenavComponent_li_2_div_2_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_2_div_2_ul_4_li_1_Template, 4, 3, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.sub);
      }
    }

    function SidenavComponent_li_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_2_div_2_a_1_Template, 7, 4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_2_div_2_a_2_Template, 7, 4, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_2_div_2_a_3_Template, 9, 3, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_li_2_div_2_ul_4_Template, 2, 1, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "extLink");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "dropDown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "dropDown");
      }
    }

    function SidenavComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_2_div_1_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_2_div_2_Template, 5, 4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.type === "separator");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.disabled && item_r1.type !== "separator" && item_r1.type !== "icon");
      }
    }

    var SidenavComponent = /*#__PURE__*/function () {
      function SidenavComponent() {
        _classCallCheck(this, SidenavComponent);

        this.menuItems = [];
      }

      _createClass(SidenavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Only for demo purpose

      }, {
        key: "addMenuItem",
        value: function addMenuItem() {
          this.menuItems.push({
            name: 'ITEM',
            type: 'dropDown',
            tooltip: 'Item',
            icon: 'done',
            state: 'material',
            sub: [{
              name: 'SUBITEM',
              state: 'cards'
            }, {
              name: 'SUBITEM',
              state: 'buttons'
            }]
          });
        }
      }]);

      return SidenavComponent;
    }();

    SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
      return new (t || SidenavComponent)();
    };

    SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidenavComponent,
      selectors: [["app-sidenav"]],
      inputs: {
        menuItems: ["items", "menuItems"],
        hasIconTypeMenuItem: ["hasIconMenu", "hasIconTypeMenuItem"],
        iconTypeMenuTitle: ["iconMenuTitle", "iconTypeMenuTitle"]
      },
      decls: 3,
      vars: 1,
      consts: [[1, "sidenav-hold", "01"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], [1, "icon-name"], [1, "btn-icon", 3, "svgIcon"], [1, "item-name", "lvl1"], ["fxFlex", ""], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngStyle"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"]],
      template: function SidenavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_2_Template, 3, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        }
      },
      directives: [_directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidenav',
          templateUrl: './sidenav.template.html'
        }]
      }], function () {
        return [];
      }, {
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['items']
        }],
        hasIconTypeMenuItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['hasIconMenu']
        }],
        iconTypeMenuTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['iconMenuTitle']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/dropdown-anchor.directive.ts": function srcAppSharedDirectivesDropdownAnchorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function () {
      return DropdownAnchorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dropdown-link.directive */
    "./src/app/shared/directives/dropdown-link.directive.ts");

    var DropdownAnchorDirective = /*#__PURE__*/function () {
      function DropdownAnchorDirective(navlink) {
        _classCallCheck(this, DropdownAnchorDirective);

        this.navlink = navlink;
      }

      _createClass(DropdownAnchorDirective, [{
        key: "onClick",
        value: function onClick(e) {
          this.navlink.toggle();
        }
      }]);

      return DropdownAnchorDirective;
    }();

    DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) {
      return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]));
    };

    DropdownAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownAnchorDirective,
      selectors: [["", "appDropdownToggle", ""]],
      hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDropdownToggle]'
        }]
      }], function () {
        return [{
          type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]]
          }]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/dropdown-link.directive.ts": function srcAppSharedDirectivesDropdownLinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function () {
      return DropdownLinkDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dropdown.directive */
    "./src/app/shared/directives/dropdown.directive.ts");

    var DropdownLinkDirective = /*#__PURE__*/function () {
      function DropdownLinkDirective(nav) {
        _classCallCheck(this, DropdownLinkDirective);

        this.nav = nav;
      }

      _createClass(DropdownLinkDirective, [{
        key: "open",
        get: function get() {
          return this._open;
        },
        set: function set(value) {
          this._open = value;

          if (value) {
            this.nav.closeOtherLinks(this);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav.addLink(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.nav.removeGroup(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.open = !this.open;
        }
      }]);

      return DropdownLinkDirective;
    }();

    DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) {
      return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]));
    };

    DropdownLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownLinkDirective,
      selectors: [["", "appDropdownLink", ""]],
      hostVars: 2,
      hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
        }
      },
      inputs: {
        group: "group",
        open: "open"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDropdownLink]'
        }]
      }], function () {
        return [{
          type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]]
          }]
        }];
      }, {
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.open']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/dropdown.directive.ts": function srcAppSharedDirectivesDropdownDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function () {
      return AppDropdownDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppDropdownDirective = /*#__PURE__*/function () {
      function AppDropdownDirective(router) {
        _classCallCheck(this, AppDropdownDirective);

        this.router = router;
        this.navlinks = [];
      }

      _createClass(AppDropdownDirective, [{
        key: "closeOtherLinks",
        value: function closeOtherLinks(openLink) {
          this.navlinks.forEach(function (link) {
            if (link !== openLink) {
              link.open = false;
            }
          });
        }
      }, {
        key: "addLink",
        value: function addLink(link) {
          this.navlinks.push(link);
        }
      }, {
        key: "removeGroup",
        value: function removeGroup(link) {
          var index = this.navlinks.indexOf(link);

          if (index !== -1) {
            this.navlinks.splice(index, 1);
          }
        }
      }, {
        key: "getUrl",
        value: function getUrl() {
          return this.router.url;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (event) {
            _this20.navlinks.forEach(function (link) {
              if (link.group) {
                var routeUrl = _this20.getUrl();

                var currentUrl = routeUrl.split('/');

                if (currentUrl.indexOf(link.group) > 0) {
                  link.open = true;

                  _this20.closeOtherLinks(link);
                }
              }
            });
          });
        }
      }]);

      return AppDropdownDirective;
    }();

    AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) {
      return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AppDropdownDirective,
      selectors: [["", "appDropdown", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appDropdown]'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/font-size.directive.ts": function srcAppSharedDirectivesFontSizeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function () {
      return FontSizeDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FontSizeDirective = /*#__PURE__*/function () {
      function FontSizeDirective(fontSize, el) {
        _classCallCheck(this, FontSizeDirective);

        this.fontSize = fontSize;
        this.el = el;
      }

      _createClass(FontSizeDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.el.nativeElement.fontSize = this.fontSize;
        }
      }]);

      return FontSizeDirective;
    }();

    FontSizeDirective.ɵfac = function FontSizeDirective_Factory(t) {
      return new (t || FontSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('fontSize'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FontSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FontSizeDirective,
      selectors: [["", "fontSize", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontSizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[fontSize]'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['fontSize']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/marco-highlight.directive.ts": function srcAppSharedDirectivesMarcoHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoHighlightDirective", function () {
      return marcoHighlightDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highlight.js */
    "./node_modules/highlight.js/lib/index.js");
    /* harmony import */


    var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var marcoHighlightDirective = /*#__PURE__*/function () {
      function marcoHighlightDirective(el, cdr, _zone, http) {
        _classCallCheck(this, marcoHighlightDirective);

        this.el = el;
        this.cdr = cdr;
        this._zone = _zone;
        this.http = http;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(marcoHighlightDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          if (this.code) {
            this.highlightElement(this.code);
          }

          if (this.path) {
            this.highlightedCode = "Loading...";
            this.http.get(this.path, {
              responseType: "text"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll)).subscribe(function (response) {
              _this21.highlightElement(response, _this21.languages);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeAll.next();
          this.unsubscribeAll.complete();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes["code"] && changes["code"].currentValue && changes["code"].currentValue !== changes["code"].previousValue) {
            this.highlightElement(this.code); // console.log('hljs on change', changes)
          }
        }
      }, {
        key: "highlightElement",
        value: function highlightElement(code, languages) {
          var _this22 = this;

          this._zone.runOutsideAngular(function () {
            var res = highlight_js__WEBPACK_IMPORTED_MODULE_1__["highlightAuto"](code);
            _this22.highlightedCode = res.value; // this.cdr.detectChanges();
            // console.log(languages)
          });
        }
      }]);

      return marcoHighlightDirective;
    }();

    marcoHighlightDirective.ɵfac = function marcoHighlightDirective_Factory(t) {
      return new (t || marcoHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    marcoHighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: marcoHighlightDirective,
      selectors: [["", "marcoHighlight", ""]],
      hostVars: 3,
      hostBindings: function marcoHighlightDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hljs", true);
        }
      },
      inputs: {
        path: "path",
        code: ["marcoHighlight", "code"],
        languages: "languages"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoHighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          host: {
            "[class.hljs]": "true",
            "[innerHTML]": "highlightedCode"
          },
          selector: "[marcoHighlight]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, {
        path: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        code: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["marcoHighlight"]
        }],
        languages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/marco-side-nav-toggle.directive.ts": function srcAppSharedDirectivesMarcoSideNavToggleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSideNavToggleDirective", function () {
      return marcoSideNavToggleDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

    var marcoSideNavToggleDirective = /*#__PURE__*/function () {
      function marcoSideNavToggleDirective(mediaObserver, sideNav) {
        _classCallCheck(this, marcoSideNavToggleDirective);

        this.mediaObserver = mediaObserver;
        this.sideNav = sideNav;
      }

      _createClass(marcoSideNavToggleDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initSideNav();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
          }
        }
      }, {
        key: "updateSidenav",
        value: function updateSidenav() {
          var self = this;
          setTimeout(function () {
            self.sideNav.opened = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
          });
        }
      }, {
        key: "initSideNav",
        value: function initSideNav() {
          var _this23 = this;

          this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm'); // console.log(this.isMobile)

          this.updateSidenav();
          this.screenSizeWatcher = this.mediaObserver.media$.subscribe(function (change) {
            _this23.isMobile = change.mqAlias == 'xs' || change.mqAlias == 'sm';

            _this23.updateSidenav();
          });
        }
      }]);

      return marcoSideNavToggleDirective;
    }();

    marcoSideNavToggleDirective.ɵfac = function marcoSideNavToggleDirective_Factory(t) {
      return new (t || marcoSideNavToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], 11));
    };

    marcoSideNavToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: marcoSideNavToggleDirective,
      selectors: [["", "marcoSideNavToggle", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSideNavToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[marcoSideNavToggle]'
        }]
      }], function () {
        return [{
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]
        }, {
          type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/marco-sidenav-helper/marco-sidenav-helper.directive.ts": function srcAppSharedDirectivesMarcoSidenavHelperMarcoSidenavHelperDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidenavHelperDirective", function () {
      return marcoSidenavHelperDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidenavTogglerDirective", function () {
      return marcoSidenavTogglerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/shared/services/match-media.service */
    "./src/app/shared/services/match-media.service.ts");
    /* harmony import */


    var _marco_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./marco-sidenav-helper.service */
    "./src/app/shared/directives/marco-sidenav-helper/marco-sidenav-helper.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var marcoSidenavHelperDirective = /*#__PURE__*/function () {
      function marcoSidenavHelperDirective(matchMediaService, marcoSidenavHelperService, matSidenav, mediaObserver) {
        _classCallCheck(this, marcoSidenavHelperDirective);

        this.matchMediaService = matchMediaService;
        this.marcoSidenavHelperService = marcoSidenavHelperService;
        this.matSidenav = matSidenav;
        this.mediaObserver = mediaObserver; // Set the default value

        this.isOpen = true;
        this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(marcoSidenavHelperDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.marcoSidenavHelperService.setSidenav(this.id, this.matSidenav);

          if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
            this.isOpen = true;
            this.matSidenav.mode = "side";
            this.matSidenav.toggle(true);
          } else {
            this.isOpen = false;
            this.matSidenav.mode = "over";
            this.matSidenav.toggle(false);
          }

          this.matchMediaService.onMediaChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
            if (_this24.mediaObserver.isActive(_this24.isOpenBreakpoint)) {
              _this24.isOpen = true;
              _this24.matSidenav.mode = "side";

              _this24.matSidenav.toggle(true);
            } else {
              _this24.isOpen = false;
              _this24.matSidenav.mode = "over";

              _this24.matSidenav.toggle(false);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribeAll.next();
          this.unsubscribeAll.complete();
        }
      }]);

      return marcoSidenavHelperDirective;
    }();

    marcoSidenavHelperDirective.ɵfac = function marcoSidenavHelperDirective_Factory(t) {
      return new (t || marcoSidenavHelperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_marco_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["marcoSidenavHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]));
    };

    marcoSidenavHelperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: marcoSidenavHelperDirective,
      selectors: [["", "marcoSidenavHelper", ""]],
      hostVars: 2,
      hostBindings: function marcoSidenavHelperDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);
        }
      },
      inputs: {
        id: ["marcoSidenavHelper", "id"],
        isOpenBreakpoint: ["isOpen", "isOpenBreakpoint"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidenavHelperDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[marcoSidenavHelper]"
        }]
      }], function () {
        return [{
          type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]
        }, {
          type: _marco_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["marcoSidenavHelperService"]
        }, {
          type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]
        }];
      }, {
        isOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.is-open"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["marcoSidenavHelper"]
        }],
        isOpenBreakpoint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["isOpen"]
        }]
      });
    })();

    var marcoSidenavTogglerDirective = /*#__PURE__*/function () {
      function marcoSidenavTogglerDirective(marcoSidenavHelperService) {
        _classCallCheck(this, marcoSidenavTogglerDirective);

        this.marcoSidenavHelperService = marcoSidenavHelperService;
      }

      _createClass(marcoSidenavTogglerDirective, [{
        key: "onClick",
        value: function onClick() {
          // console.log(this.marcoSidenavHelperService.getSidenav(this.id))
          this.marcoSidenavHelperService.getSidenav(this.id).toggle();
        }
      }]);

      return marcoSidenavTogglerDirective;
    }();

    marcoSidenavTogglerDirective.ɵfac = function marcoSidenavTogglerDirective_Factory(t) {
      return new (t || marcoSidenavTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_marco_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["marcoSidenavHelperService"]));
    };

    marcoSidenavTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: marcoSidenavTogglerDirective,
      selectors: [["", "marcoSidenavToggler", ""]],
      hostBindings: function marcoSidenavTogglerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function marcoSidenavTogglerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        id: ["marcoSidenavToggler", "id"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidenavTogglerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[marcoSidenavToggler]"
        }]
      }], function () {
        return [{
          type: _marco_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["marcoSidenavHelperService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["marcoSidenavToggler"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["click"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/marco-sidenav-helper/marco-sidenav-helper.service.ts": function srcAppSharedDirectivesMarcoSidenavHelperMarcoSidenavHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "marcoSidenavHelperService", function () {
      return marcoSidenavHelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var marcoSidenavHelperService = /*#__PURE__*/function () {
      function marcoSidenavHelperService() {
        _classCallCheck(this, marcoSidenavHelperService);

        this.sidenavList = [];
      }

      _createClass(marcoSidenavHelperService, [{
        key: "setSidenav",
        value: function setSidenav(id, sidenav) {
          this.sidenavList[id] = sidenav;
        }
      }, {
        key: "getSidenav",
        value: function getSidenav(id) {
          return this.sidenavList[id];
        }
      }]);

      return marcoSidenavHelperService;
    }();

    marcoSidenavHelperService.ɵfac = function marcoSidenavHelperService_Factory(t) {
      return new (t || marcoSidenavHelperService)();
    };

    marcoSidenavHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: marcoSidenavHelperService,
      factory: marcoSidenavHelperService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](marcoSidenavHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/scroll-to.directive.ts": function srcAppSharedDirectivesScrollToDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function () {
      return ScrollToDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollToDirective = /*#__PURE__*/function () {
      function ScrollToDirective(elmID, el) {
        _classCallCheck(this, ScrollToDirective);

        this.elmID = elmID;
        this.el = el;
      }

      _createClass(ScrollToDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "currentYPosition",
        value: function currentYPosition() {
          // Firefox, Chrome, Opera, Safari
          if (self.pageYOffset) return self.pageYOffset; // Internet Explorer 6 - standards mode

          if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6, 7 and 8

          if (document.body.scrollTop) return document.body.scrollTop;
          return 0;
        }
      }, {
        key: "elmYPosition",
        value: function elmYPosition(eID) {
          var elm = document.getElementById(eID);
          var y = elm.offsetTop;
          var node = elm;

          while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
          }

          return y;
        }
      }, {
        key: "smoothScroll",
        value: function smoothScroll() {
          if (!this.elmID) return;
          var startY = this.currentYPosition();
          var stopY = this.elmYPosition(this.elmID);
          var distance = stopY > startY ? stopY - startY : startY - stopY;

          if (distance < 100) {
            scrollTo(0, stopY);
            return;
          }

          var speed = Math.round(distance / 50);
          if (speed >= 20) speed = 20;
          var step = Math.round(distance / 25);
          var leapY = stopY > startY ? startY + step : startY - step;
          var timer = 0;

          if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
              setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
              leapY += step;
              if (leapY > stopY) leapY = stopY;
              timer++;
            }

            return;
          }

          for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
          }

          return false;
        }
      }]);

      return ScrollToDirective;
    }();

    ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
      return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollToDirective,
      selectors: [["", "scrollTo", ""]],
      hostBindings: function ScrollToDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) {
            return ctx.smoothScroll($event);
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[scrollTo]'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['scrollTo']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        smoothScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/directives/shared-directives.module.ts": function srcAppSharedDirectivesSharedDirectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function () {
      return SharedDirectivesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _font_size_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./font-size.directive */
    "./src/app/shared/directives/font-size.directive.ts");
    /* harmony import */


    var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scroll-to.directive */
    "./src/app/shared/directives/scroll-to.directive.ts");
    /* harmony import */


    var _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dropdown.directive */
    "./src/app/shared/directives/dropdown.directive.ts");
    /* harmony import */


    var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dropdown-anchor.directive */
    "./src/app/shared/directives/dropdown-anchor.directive.ts");
    /* harmony import */


    var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdown-link.directive */
    "./src/app/shared/directives/dropdown-link.directive.ts");
    /* harmony import */


    var _marco_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./marco-side-nav-toggle.directive */
    "./src/app/shared/directives/marco-side-nav-toggle.directive.ts");
    /* harmony import */


    var _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./marco-sidenav-helper/marco-sidenav-helper.directive */
    "./src/app/shared/directives/marco-sidenav-helper/marco-sidenav-helper.directive.ts");
    /* harmony import */


    var _marco_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./marco-highlight.directive */
    "./src/app/shared/directives/marco-highlight.directive.ts");

    var directives = [_font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"], _marco_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["marcoSideNavToggleDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavHelperDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavTogglerDirective"], _marco_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["marcoHighlightDirective"]];

    var SharedDirectivesModule = function SharedDirectivesModule() {
      _classCallCheck(this, SharedDirectivesModule);
    };

    SharedDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedDirectivesModule
    });
    SharedDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedDirectivesModule_Factory(t) {
        return new (t || SharedDirectivesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedDirectivesModule, {
        declarations: [_font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"], _marco_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["marcoSideNavToggleDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavHelperDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavTogglerDirective"], _marco_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["marcoHighlightDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_font_size_directive__WEBPACK_IMPORTED_MODULE_2__["FontSizeDirective"], _scroll_to_directive__WEBPACK_IMPORTED_MODULE_3__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownLinkDirective"], _marco_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["marcoSideNavToggleDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavHelperDirective"], _marco_sidenav_helper_marco_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_8__["marcoSidenavTogglerDirective"], _marco_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["marcoHighlightDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: directives,
          exports: directives
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/auth.guard.ts": function srcAppSharedGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, jwtAuth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.jwtAuth = jwtAuth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.jwtAuth.isLoggedIn()) {
            return true;
          } else {
            this.router.navigate(["/sessions/signin"], {
              queryParams: {
                "return": state.url
              }
            });
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guards/user-role.guard.ts": function srcAppSharedGuardsUserRoleGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleGuard", function () {
      return UserRoleGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var UserRoleGuard = /*#__PURE__*/function () {
      function UserRoleGuard(router, jwtAuth, snack) {
        _classCallCheck(this, UserRoleGuard);

        this.router = router;
        this.jwtAuth = jwtAuth;
        this.snack = snack;
      }

      _createClass(UserRoleGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var user = this.jwtAuth.getUser();

          if (user && route.data && route.data.roles && route.data.roles.includes(user.role)) {
            return true;
          } else {
            this.snack.open('You do not have access to this page!', 'OK');
            return false;
          }
        }
      }]);

      return UserRoleGuard;
    }();

    UserRoleGuard.ɵfac = function UserRoleGuard_Factory(t) {
      return new (t || UserRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
    };

    UserRoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserRoleGuard,
      factory: UserRoleGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/url.helper.ts": function srcAppSharedHelpersUrlHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getQueryParam", function () {
      return getQueryParam;
    });

    function getQueryParam(prop) {
      var params = {};
      var search = decodeURIComponent(window.location.href.slice(window.location.href.indexOf('?') + 1));
      var definitions = search.split('&');
      definitions.forEach(function (val, key) {
        var parts = val.split('=', 2);
        params[parts[0]] = parts[1];
      });
      return prop && prop in params ? params[prop] : params;
    }
    /***/

  },

  /***/
  "./src/app/shared/inmemory-db/chat-db.ts": function srcAppSharedInmemoryDbChatDbTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDB", function () {
      return ChatDB;
    });

    var ChatDB = function ChatDB() {
      _classCallCheck(this, ChatDB);
    };

    ChatDB.user = [{
      id: "7863a6802ez0e277a0f98534",
      name: "John Doe",
      avatar: "assets/images/face-1.jpg",
      status: "online",
      chatInfo: [{
        chatId: "89564a680b3249760ea21fe77",
        contactId: "323sa680b3249760ea21rt47",
        contactName: "Dino Donel",
        unread: 4,
        message: "You did great with the last presentation, looking forward to working with you on the next project.",
        lastChatTime: "2017-06-12T02:10:18.931Z"
      }, {
        chatId: "3289564a680b2134760ea21fe7753",
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        contactName: "Tim French",
        unread: 0,
        message: "You did great with the last presentation, looking forward to working with you on the next project.",
        lastChatTime: "2019-03-10T02:10:18.931Z"
      }]
    }];
    ChatDB.contacts = [{
      id: "323sa680b3249760ea21rt47",
      name: "Dino Donel",
      avatar: "assets/images/faces/13.jpg",
      status: "online",
      message: "You did great with the last presentation, looking forward to working with you on the next project.",
      time: "11min ago",
      mood: ""
    }, {
      id: "14663a3406eb47ffa63d4fec9429cb71",
      name: "Tim French",
      avatar: "assets/images/faces/12.jpg",
      status: "online",
      message: "Yeah...the party was awesome.",
      time: "33 min ago",
      mood: ""
    }, {
      id: "43bd9bc59d164b5aea498e3ae1c24c3c",
      name: "Pero Trokadero",
      avatar: "assets/images/faces/3.jpg",
      status: "online",
      message: "Call me latter whenever you find time to talk",
      time: "54min ago",
      mood: ""
    }, {
      id: "3fc8e01f3ce649d1caf884fbf4f698e4",
      name: "Jasmin Sugare",
      avatar: "assets/images/faces/16.jpg",
      status: "offline",
      message: "It was a trap, we don't beleve that",
      time: "2 hours ago",
      mood: ""
    }, {
      id: "e929b1d790ab49968ed8e34648553df4",
      name: "Elena Ravnjanski",
      avatar: "assets/images/faces/10.jpg",
      status: "online",
      message: "Looking forward to seeing you, We will have wanderful time together",
      time: "3 hours ago",
      mood: ""
    }, {
      id: "d6caf04bba614632b5fecf91aebf4564",
      name: "Marko Apostolski",
      avatar: "assets/images/faces/9.jpg",
      status: "offline",
      message: "Marko is an awesome guy, he is really polite",
      time: "2 days ago",
      mood: ""
    }, {
      id: "be0fb188c8e242f097fafa24632107e4",
      name: "Laze Apostolski",
      avatar: "assets/images/faces/5.jpg",
      status: "offline",
      message: "What are your plans for tomorrow night? How about to go on a drink?",
      time: "2 days ago",
      mood: ""
    }, {
      id: "dea902191b964a68ba5f2d93cff37e13",
      name: "Eva Apostolska",
      avatar: "assets/images/faces/15.jpg",
      status: "online",
      message: "Trust me, she is wanderfull girl and very abicious",
      time: "1 week ago",
      mood: ""
    }, {
      id: "0bf58f5ccc4543a9f8747350b7bda3c7",
      name: "Sofija Apostolska",
      avatar: "assets/images/faces/4.jpg",
      status: "offline",
      message: "Call me tomorrow, I will find some time for you.",
      time: "1 week ago",
      mood: ""
    }, {
      id: "c5d7498bbcb84d81fc72168871ac6a6e",
      name: "Tope Marketing",
      avatar: "assets/images/faces/2.jpg",
      status: "offline",
      message: "You did great with the last presentation, looking forward to working with you on the next project.",
      time: "2 months ago",
      mood: ""
    }];
    ChatDB.chatCollection = [{
      id: "89564a680b3249760ea21fe77",
      chats: [{
        contactId: "323sa680b3249760ea21rt47",
        text: "Have you ever been in some new style course school?",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "What could happen if you attend on some new course",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "323sa680b3249760ea21rt47",
        text: "Yes",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Yeah...It happens to all of us",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "323sa680b3249760ea21rt47",
        text: "Have you ever been in some new style course school?",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "What could happen if you attend on some new course",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "323sa680b3249760ea21rt47",
        text: "Yes",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Yeah...It happens to all of us",
        time: "2020-02-10T10:23:12.291Z"
      }]
    }, {
      id: "3289564a680b2134760ea21fe7753",
      chats: [{
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        text: "Have you ever been in some new style course school?",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "What could happen if you attend on some new course",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "14663a3406eb47ffa63d4fec9429cb71",
        text: "Yes",
        time: "2020-02-10T10:23:12.291Z"
      }, {
        contactId: "7863a6802ez0e277a0f98534",
        text: "Yeah...It happens to all of us",
        time: "2020-02-10T10:23:12.291Z"
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/inmemory-db/inmemory-db.service.ts": function srcAppSharedInmemoryDbInmemoryDbServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var _chat_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chat-db */
    "./src/app/shared/inmemory-db/chat-db.ts");
    /* harmony import */


    var _invoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./invoices */
    "./src/app/shared/inmemory-db/invoices.ts");
    /* harmony import */


    var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo */
    "./src/app/shared/inmemory-db/todo.ts");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          return {
            'contacts': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].contacts,
            'chat-collections': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].chatCollection,
            'chat-user': _chat_db__WEBPACK_IMPORTED_MODULE_0__["ChatDB"].user,
            'invoices': _invoices__WEBPACK_IMPORTED_MODULE_1__["InvoiceDB"].invoices,
            'todoList': _todo__WEBPACK_IMPORTED_MODULE_2__["Todo"].todoList,
            'todoTag': _todo__WEBPACK_IMPORTED_MODULE_2__["TodoTag"].tag
          };
        }
      }]);

      return InMemoryDataService;
    }();
    /***/

  },

  /***/
  "./src/app/shared/inmemory-db/invoices.ts": function srcAppSharedInmemoryDbInvoicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceDB", function () {
      return InvoiceDB;
    });

    var InvoiceDB = function InvoiceDB() {
      _classCallCheck(this, InvoiceDB);
    };

    InvoiceDB.invoices = [{
      id: '5a9ae2106518248b68251fd1',
      orderNo: '232',
      status: 'pending',
      date: new Date(),
      currency: '$',
      vat: 10,
      buyer: {
        name: 'Schoen, Conn and Mills',
        address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170'
      },
      seller: {
        name: 'UI Lib',
        address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
      },
      item: [{
        name: 'Item 1',
        unit: 9,
        price: 200
      }, {
        name: 'Item 2',
        unit: 15,
        price: 300
      }]
    }, {
      id: '5a9ae2106518248b68251fd2',
      orderNo: '233',
      status: 'processing',
      date: new Date(),
      currency: '$',
      vat: 10,
      buyer: {
        name: 'New Age Inc.',
        address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153'
      },
      seller: {
        name: 'UI Lib',
        address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
      },
      item: [{
        name: 'Item 1',
        unit: 3,
        price: 2000
      }, {
        name: 'Item 2',
        unit: 2,
        price: 4000
      }]
    }, {
      id: '5a9ae2106518248b68251fd3',
      orderNo: '234',
      status: 'delivered',
      date: new Date(),
      currency: '$',
      vat: 10,
      buyer: {
        name: 'Predovic, Schowalter and Haag',
        address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999'
      },
      seller: {
        name: 'UI Lib',
        address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
      },
      item: [{
        name: 'Item 1',
        unit: 5,
        price: 1000
      }, {
        name: 'Item 2',
        unit: 2,
        price: 4000
      }]
    }, {
      id: '5a9ae2106518248b68251fd4',
      orderNo: '235',
      status: 'delivered',
      date: new Date(),
      currency: '$',
      vat: 10,
      buyer: {
        name: 'Hane PLC',
        address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131'
      },
      seller: {
        name: 'UI Lib',
        address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170'
      },
      item: [{
        name: 'Item 1',
        unit: 3,
        price: 4000
      }, {
        name: 'Item 2',
        unit: 1,
        price: 5000
      }]
    }];
    /***/
  },

  /***/
  "./src/app/shared/inmemory-db/todo.ts": function srcAppSharedInmemoryDbTodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoTag", function () {
      return TodoTag;
    });

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };

    Todo.todoList = [{
      id: 1,
      title: "Fix Responsiveness 💻",
      note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      important: true,
      starred: true,
      done: false,
      trashed: false,
      completed: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tag: [1, 2]
    }, {
      id: 2,
      title: "Code Reffactoring",
      note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      important: false,
      starred: false,
      done: true,
      trashed: false,
      completed: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tag: [2]
    }, {
      id: 3,
      title: "Resolving data issues",
      note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      important: false,
      starred: false,
      done: true,
      trashed: false,
      completed: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tag: [1]
    }, {
      id: 4,
      title: "On boarding process",
      note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      important: false,
      starred: false,
      done: false,
      trashed: false,
      completed: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),
      tag: [1, 2, 3]
    }]; // ============================================

    var TodoTag = function TodoTag() {
      _classCallCheck(this, TodoTag);
    };

    TodoTag.tag = [{
      id: 1,
      name: "Frontend"
    }, {
      id: 2,
      name: "Backend"
    }, {
      id: 3,
      name: "API"
    }, {
      id: 4,
      name: "Issue"
    }, {
      id: 5,
      name: "Mobile"
    }];
    /***/
  },

  /***/
  "./src/app/shared/interceptors/token.interceptor.ts": function srcAppSharedInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(jwtAuth) {
        _classCallCheck(this, TokenInterceptor);

        this.jwtAuth = jwtAuth;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
          var changedReq;

          if (token) {
            changedReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(token)
              }
            });
          } else {
            changedReq = req;
          }

          return next.handle(changedReq);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/excerpt.pipe.ts": function srcAppSharedPipesExcerptPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function () {
      return ExcerptPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExcerptPipe = /*#__PURE__*/function () {
      function ExcerptPipe() {
        _classCallCheck(this, ExcerptPipe);
      }

      _createClass(ExcerptPipe, [{
        key: "transform",
        value: function transform(text) {
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
          if (text.length <= limit) return text;
          return text.substring(0, limit) + '...';
        }
      }]);

      return ExcerptPipe;
    }();

    ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) {
      return new (t || ExcerptPipe)();
    };

    ExcerptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "excerpt",
      type: ExcerptPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'excerpt'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/get-value-by-key.pipe.ts": function srcAppSharedPipesGetValueByKeyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function () {
      return GetValueByKeyPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GetValueByKeyPipe = /*#__PURE__*/function () {
      function GetValueByKeyPipe() {
        _classCallCheck(this, GetValueByKeyPipe);
      }

      _createClass(GetValueByKeyPipe, [{
        key: "transform",
        value: function transform(value, id, property) {
          var filteredObj = value.find(function (item) {
            if (item.id !== undefined) {
              return item.id === id;
            }

            return false;
          });

          if (filteredObj) {
            return filteredObj[property];
          }
        }
      }]);

      return GetValueByKeyPipe;
    }();

    GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) {
      return new (t || GetValueByKeyPipe)();
    };

    GetValueByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "getValueByKey",
      type: GetValueByKeyPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetValueByKeyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "getValueByKey",
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/relative-time.pipe.ts": function srcAppSharedPipesRelativeTimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function () {
      return RelativeTimePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RelativeTimePipe = /*#__PURE__*/function () {
      function RelativeTimePipe() {
        _classCallCheck(this, RelativeTimePipe);
      }

      _createClass(RelativeTimePipe, [{
        key: "transform",
        value: function transform(value) {
          if (!(value instanceof Date)) value = new Date(value);
          var seconds = Math.floor((new Date().getTime() - value.getTime()) / 1000);
          var interval = Math.floor(seconds / 31536000);

          if (interval > 1) {
            return interval + " years ago";
          }

          interval = Math.floor(seconds / 2592000);

          if (interval > 1) {
            return interval + " months ago";
          }

          interval = Math.floor(seconds / 86400);

          if (interval > 1) {
            return interval + " days ago";
          }

          interval = Math.floor(seconds / 3600);

          if (interval > 1) {
            return interval + " hours ago";
          }

          interval = Math.floor(seconds / 60);

          if (interval > 1) {
            return interval + " minutes ago";
          }

          return Math.floor(seconds) + " seconds ago";
        }
      }]);

      return RelativeTimePipe;
    }();

    RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) {
      return new (t || RelativeTimePipe)();
    };

    RelativeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "relativeTime",
      type: RelativeTimePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'relativeTime'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/shared-pipes.module.ts": function srcAppSharedPipesSharedPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
      return SharedPipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./relative-time.pipe */
    "./src/app/shared/pipes/relative-time.pipe.ts");
    /* harmony import */


    var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./excerpt.pipe */
    "./src/app/shared/pipes/excerpt.pipe.ts");
    /* harmony import */


    var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./get-value-by-key.pipe */
    "./src/app/shared/pipes/get-value-by-key.pipe.ts");

    var pipes = [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]];

    var SharedPipesModule = function SharedPipesModule() {
      _classCallCheck(this, SharedPipesModule);
    };

    SharedPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedPipesModule
    });
    SharedPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedPipesModule_Factory(t) {
        return new (t || SharedPipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedPipesModule, {
        declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: pipes,
          exports: pipes
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/search/search-input-over/search-input-over.component.ts": function srcAppSharedSearchSearchInputOverSearchInputOverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchInputOverComponent", function () {
      return SearchInputOverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search.service */
    "./src/app/shared/search/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return {
        open: a0
      };
    };

    var SearchInputOverComponent = /*#__PURE__*/function () {
      function SearchInputOverComponent(searchService, router, route) {
        _classCallCheck(this, SearchInputOverComponent);

        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.placeholder = "Search here";
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
      }

      _createClass(SearchInputOverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.searchCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200)).subscribe(function (value) {
            _this25.search.emit(value);

            _this25.searchService.searchTerm.next(value);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.searchCtrlSub) {
            this.searchCtrlSub.unsubscribe();
          }
        }
      }, {
        key: "navigateToResult",
        value: function navigateToResult() {
          if (this.resultPage) {
            this.router.navigateByUrl(this.resultPage);
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.isOpen = true;
          this.navigateToResult();
        }
      }, {
        key: "close",
        value: function close() {
          this.isOpen = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isOpen = !this.isOpen;
        }
      }]);

      return SearchInputOverComponent;
    }();

    SearchInputOverComponent.ɵfac = function SearchInputOverComponent_Factory(t) {
      return new (t || SearchInputOverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    SearchInputOverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchInputOverComponent,
      selectors: [["marco-search-input-over"]],
      inputs: {
        resultPage: "resultPage",
        placeholder: "placeholder"
      },
      outputs: {
        search: "search"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "search-bar-wide", 3, "ngClass"], ["mat-icon-button", "", 1, "search-icon-btn", "ml-05", "mr-05", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", "width", "18px", "height", "18px"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"], ["type", "text", 1, "default-bg", 3, "formControl", "placeholder"], [1, "search-close", "text-muted", 3, "click"]],
      template: function SearchInputOverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_button_click_1_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputOverComponent_Template_mat_icon_click_7_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isOpen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchCtrl)("placeholder", ctx.placeholder);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      styles: [".search-bar-wide.open[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  z-index: 999;\n}\n\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-icon-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.search-bar-wide.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.search-bar-wide.open[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: none;\n  height: 100%;\n  width: 100%;\n}\n\n.search-bar-wide[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  font-weight: 700;\n  padding-left: 15px;\n}\n\n.search-bar-wide[_ngcontent-%COMP%]   .search-close[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 20px;\n  right: 15px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtaW5wdXQtb3Zlci9DOlxcUHJhc2hhbnQtd29ya3NwYWNlXFxhcmstcGxuL3NyY1xcYXBwXFxzaGFyZWRcXHNlYXJjaFxcc2VhcmNoLWlucHV0LW92ZXJcXHNlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc2VhcmNoL3NlYXJjaC1pbnB1dC1vdmVyL3NlYXJjaC1pbnB1dC1vdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FDQXBCOztBRFBBO0VBU1ksYUFBYTtBQ0V6Qjs7QURYQTtFQVlZLGFBQWE7QUNHekI7O0FEZkE7RUFlWSxjQUFjO0FDSTFCOztBRG5CQTtFQW1CUSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUNJbkI7O0FEekJBO0VBdUJnQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNNbEM7O0FEbkNBO0VBaUNRLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0FDTXZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlYXJjaC9zZWFyY2gtaW5wdXQtb3Zlci9zZWFyY2gtaW5wdXQtb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyLXdpZGUgeyAgICBcbiAgICAmLm9wZW4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAuc2VhcmNoLWljb24tYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1jbG9zZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAuc2VhcmNoLWNsb3NlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSIsIi5zZWFyY2gtYmFyLXdpZGUub3BlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5zZWFyY2gtYmFyLXdpZGUub3BlbiAuc2VhcmNoLWljb24tYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlYXJjaC1iYXItd2lkZS5vcGVuIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZWFyY2gtYmFyLXdpZGUub3BlbiAuc2VhcmNoLWNsb3NlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtYmFyLXdpZGUgZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1iYXItd2lkZSBkaXYgaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnNlYXJjaC1iYXItd2lkZSAuc2VhcmNoLWNsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputOverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "marco-search-input-over",
          templateUrl: "./search-input-over.component.html",
          styleUrls: ["./search-input-over.component.scss"]
        }]
      }], function () {
        return [{
          type: _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        resultPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['resultPage']
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['placeholder']
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["search"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/search/search.module.ts": function srcAppSharedSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchModule", function () {
      return SearchModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search-input-over/search-input-over.component */
    "./src/app/shared/search/search-input-over/search-input-over.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var SearchModule = function SearchModule() {
      _classCallCheck(this, SearchModule);
    };

    SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SearchModule
    });
    SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SearchModule_Factory(t) {
        return new (t || SearchModule)();
      },
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, {
        declarations: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]],
          exports: [_search_input_over_search_input_over_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputOverComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/search/search.service.ts": function srcAppSharedSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/BehaviorSubject */
    "./node_modules/rxjs-compat/_esm2015/BehaviorSubject.js");

    var SearchService = function SearchService() {
      _classCallCheck(this, SearchService);

      this.searchTerm = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
      this.searchTerm$ = this.searchTerm.asObservable();
    };

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)();
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-confirm/app-confirm.component.ts": function srcAppSharedServicesAppConfirmAppConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function () {
      return AppComfirmComponent;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var AppComfirmComponent = function AppComfirmComponent(dialogRef, data) {
      _classCallCheck(this, AppComfirmComponent);

      this.dialogRef = dialogRef;
      this.data = data;
    };

    AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) {
      return new (t || AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
    };

    AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComfirmComponent,
      selectors: [["app-confirm"]],
      decls: 11,
      vars: 2,
      consts: [["matDialogTitle", "", 1, "mb-05"], ["mat-dialog-content", "", 1, "mb-1"], ["mat-dialog-actions", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-raised-button", "", 3, "click"]],
      template: function AppComfirmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_5_listener() {
            return ctx.dialogRef.close(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() {
            return ctx.dialogRef.close(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-confirm',
          template: "<h1 matDialogTitle class=\"mb-05\">{{ data.title }}</h1>\n    <div mat-dialog-content class=\"mb-1\">{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-raised-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">OK</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-raised-button \n    (click)=\"dialogRef.close(false)\">Cancel</button>\n    </div>"
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-confirm/app-confirm.service.ts": function srcAppSharedServicesAppConfirmAppConfirmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfirmService", function () {
      return AppConfirmService;
    });
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-confirm.component */
    "./src/app/shared/services/app-confirm/app-confirm.component.ts");

    var AppConfirmService = /*#__PURE__*/function () {
      function AppConfirmService(dialog) {
        _classCallCheck(this, AppConfirmService);

        this.dialog = dialog;
      }

      _createClass(AppConfirmService, [{
        key: "confirm",
        value: function confirm() {
          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          data.title = data.title || 'Confirm';
          data.message = data.message || 'Are you sure?';
          var dialogRef;
          dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
            width: '380px',
            disableClose: true,
            data: {
              title: data.title,
              message: data.message
            }
          });
          return dialogRef.afterClosed();
        }
      }]);

      return AppConfirmService;
    }();

    AppConfirmService.ɵfac = function AppConfirmService_Factory(t) {
      return new (t || AppConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]));
    };

    AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AppConfirmService,
      factory: AppConfirmService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppConfirmService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-loader/app-loader.component.ts": function srcAppSharedServicesAppLoaderAppLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function () {
      return AppLoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var AppLoaderComponent = /*#__PURE__*/function () {
      function AppLoaderComponent(dialogRef) {
        _classCallCheck(this, AppLoaderComponent);

        this.dialogRef = dialogRef;
      }

      _createClass(AppLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppLoaderComponent;
    }();

    AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) {
      return new (t || AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    AppLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppLoaderComponent,
      selectors: [["app-app-loader"]],
      decls: 5,
      vars: 3,
      consts: [[1, "text-center"], [1, "m-0", "pb-1", 2, "white-space", "pre-wrap", "line-height", "1.4"], ["mat-dialog-content", ""]],
      template: function AppLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "auto");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
      styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  min-height: 122px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL2FwcC1sb2FkZXIvYXBwLWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlcnZpY2VzL2FwcC1sb2FkZXIvYXBwLWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDEyMnB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-app-loader',
          templateUrl: './app-loader.component.html',
          styleUrls: ['./app-loader.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/app-loader/app-loader.service.ts": function srcAppSharedServicesAppLoaderAppLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoaderService", function () {
      return AppLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-loader.component */
    "./src/app/shared/services/app-loader/app-loader.component.ts");

    var AppLoaderService = /*#__PURE__*/function () {
      function AppLoaderService(dialog) {
        _classCallCheck(this, AppLoaderService);

        this.dialog = dialog;
      }

      _createClass(AppLoaderService, [{
        key: "open",
        value: function open() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Please wait';
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            width: '200px'
          };
          this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], {
            disableClose: true,
            backdropClass: 'light-backdrop'
          });
          this.dialogRef.updateSize(config.width);
          this.dialogRef.componentInstance.title = title;
          return this.dialogRef.afterClosed();
        }
      }, {
        key: "close",
        value: function close() {
          if (this.dialogRef) this.dialogRef.close();
        }
      }]);

      return AppLoaderService;
    }();

    AppLoaderService.ɵfac = function AppLoaderService_Factory(t) {
      return new (t || AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppLoaderService,
      factory: AppLoaderService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth/jwt-auth.service.ts": function srcAppSharedServicesAuthJwtAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtAuthService", function () {
      return JwtAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../local-store.service */
    "./src/app/shared/services/local-store.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // ================= only for demo purpose ===========


    var DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjhkNDc4MDc4NmM3MjE3MjBkYzU1NzMiLCJlbWFpbCI6InJhZmkuYm9ncmFAZ21haWwuY29tIiwicm9sZSI6IlNBIiwiYWN0aXZlIjp0cnVlLCJpYXQiOjE1ODc3MTc2NTgsImV4cCI6MTU4ODMyMjQ1OH0.dXw0ySun5ex98dOzTEk0lkmXJvxg3Qgz4ed";
    var DEMO_USER = {
      id: "5b700c45639d2c0c54b354ba",
      displayName: "Marko Apostolski",
      emailAddress: "markoapostolski@gmail.com",
      role: "SA"
    }; // ================= you will get those data from server =======

    var JwtAuthService = /*#__PURE__*/function () {
      function JwtAuthService(ls, http, router) {
        _classCallCheck(this, JwtAuthService);

        this.ls = ls;
        this.http = http;
        this.router = router;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.user);
        this.JWT_TOKEN = "JWT_TOKEN";
        this.APP_USER = "marco_USER";
      }

      _createClass(JwtAuthService, [{
        key: "signin",
        value: function signin(username, password) {
          var _this26 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
            token: DEMO_TOKEN,
            user: DEMO_USER
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this26.setUserAndToken(res.token, res.user, !!res);

            _this26.signingIn = false;
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
          })); // FOLLOWING CODE SENDS SIGNIN REQUEST TO SERVER
          // this.signingIn = true;
          // return this.http.post(`${environment.apiURL}/auth/local`, { username, password })
          //   .pipe(
          //     map((res: any) => {
          //       this.setUserAndToken(res.token, res.user, !!res);
          //       this.signingIn = false;
          //       return res;
          //     }),
          //     catchError((error) => {
          //       return throwError(error);
          //     })
          //   );
        }
        /*
          checkTokenIsValid is called inside constructor of
          shared/components/layouts/admin-layout/admin-layout.component.ts
        */

      }, {
        key: "checkTokenIsValid",
        value: function checkTokenIsValid() {
          var _this27 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(DEMO_USER).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) {
            _this27.setUserAndToken(_this27.getJwtToken(), profile, true);

            _this27.signingIn = false;
            return profile;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
          }));
          /*
            The following code get user data and jwt token is assigned to
            Request header using token.interceptor
            This checks if the existing token is valid when app is reloaded
          */
          // return this.http.get(`${environment.apiURL}/api/users/profile`)
          //   .pipe(
          //     map((profile: User) => {
          //       this.setUserAndToken(this.getJwtToken(), profile, true);
          //       return profile;
          //     }),
          //     catchError((error) => {
          //       return of(error);
          //     })
          //   );
        }
      }, {
        key: "signout",
        value: function signout() {
          this.setUserAndToken(null, null, false);
          this.router.navigateByUrl("sessions/signin");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return !!this.getJwtToken();
        }
      }, {
        key: "getJwtToken",
        value: function getJwtToken() {
          return this.ls.getItem(this.JWT_TOKEN);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.ls.getItem(this.APP_USER);
        }
      }, {
        key: "setUserAndToken",
        value: function setUserAndToken(token, user, isAuthenticated) {
          this.isAuthenticated = isAuthenticated;
          this.token = token;
          this.user = user;
          this.user$.next(user);
          this.ls.setItem(this.JWT_TOKEN, token);
          this.ls.setItem(this.APP_USER, user);
        }
      }]);

      return JwtAuthService;
    }();

    JwtAuthService.ɵfac = function JwtAuthService_Factory(t) {
      return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    JwtAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtAuthService,
      factory: JwtAuthService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/error-handler.service.ts": function srcAppSharedServicesErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
      return ErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorHandlerService = /*#__PURE__*/function (_angular_core__WEBPAC) {
      _inherits(ErrorHandlerService, _angular_core__WEBPAC);

      var _super = _createSuper(ErrorHandlerService);

      function ErrorHandlerService(injector) {
        var _this28;

        _classCallCheck(this, ErrorHandlerService);

        _this28 = _super.call(this);
        _this28.injector = injector;
        _this28.errorCount = 0;
        return _this28;
      } // https://github.com/angular/angular/issues/17010


      _createClass(ErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          var increment = 5;
          var max = 50; // Prevents change detection

          var debugCtx = error['ngDebugContext'];
          var changeDetectorRef = debugCtx && debugCtx.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]);
          if (changeDetectorRef) changeDetectorRef.detach();
          this.errorCount = this.errorCount + 1;

          if (this.errorCount % increment === 0) {
            console.log(' ');
            console.log("errorHandler() was called ".concat(this.errorCount, " times."));
            console.log(' ');

            _get(_getPrototypeOf(ErrorHandlerService.prototype), "handleError", this).call(this, error);

            if (this.errorCount === max) {
              console.log(' ');
              console.log("Preventing recursive error after ".concat(this.errorCount, " recursive errors."));
              console.log(' ');
              var appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
              appRef.tick();
            }
          } else if (this.errorCount === 1) {
            _get(_getPrototypeOf(ErrorHandlerService.prototype), "handleError", this).call(this, error);
          }
        }
      }]);

      return ErrorHandlerService;
    }(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);

    ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
      return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorHandlerService,
      factory: ErrorHandlerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/layout.service.ts": function srcAppSharedServicesLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../helpers/url.helper */
    "./src/app/shared/helpers/url.helper.ts");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme.service */
    "./src/app/shared/services/theme.service.ts");

    var LayoutService = /*#__PURE__*/function () {
      function LayoutService(themeService) {
        _classCallCheck(this, LayoutService);

        this.themeService = themeService;
        this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
        this.layoutConf$ = this.layoutConfSubject.asObservable();
        this.fullWidthRoutes = ["shop"];
        this.setAppLayout( //******** SET YOUR LAYOUT OPTIONS HERE *********
        {
          navigationPos: "side",
          sidebarStyle: "full",
          sidebarColor: "slate",
          sidebarCompactToggle: false,
          dir: "ltr",
          useBreadcrumb: true,
          topbarFixed: false,
          footerFixed: false,
          topbarColor: "white",
          footerColor: "slate",
          matTheme: "marco-blue",
          breadcrumb: "simple",
          perfectScrollbar: true
        });
      }

      _createClass(LayoutService, [{
        key: "setAppLayout",
        value: function setAppLayout(layoutConf) {
          this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
          this.applyMatTheme(this.layoutConf.matTheme); //******* Only for demo purpose ***

          this.setLayoutFromQuery(); //**********************
        }
      }, {
        key: "publishLayoutChange",
        value: function publishLayoutChange(lc) {
          var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
            this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
          }

          this.layoutConf = Object.assign(this.layoutConf, lc);
          this.layoutConfSubject.next(this.layoutConf);
        }
      }, {
        key: "applyMatTheme",
        value: function applyMatTheme(theme) {
          this.themeService.applyMatTheme(this.layoutConf.matTheme);
        }
      }, {
        key: "setLayoutFromQuery",
        value: function setLayoutFromQuery() {
          var layoutConfString = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])("layout");
          var prevTheme = this.layoutConf.matTheme;

          try {
            this.layoutConf = JSON.parse(layoutConfString);
            this.themeService.changeTheme(prevTheme, this.layoutConf.matTheme);
          } catch (e) {}
        }
      }, {
        key: "adjustLayout",
        value: function adjustLayout() {
          var _this29 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var sidebarStyle;
          this.isMobile = this.isSm();
          this.currentRoute = options.route || this.currentRoute;
          sidebarStyle = this.isMobile ? "closed" : "full";

          if (this.currentRoute) {
            this.fullWidthRoutes.forEach(function (route) {
              if (_this29.currentRoute.indexOf(route) !== -1) {// sidebarStyle = "closed";
              }
            });
          }

          this.publishLayoutChange({
            isMobile: this.isMobile,
            sidebarStyle: sidebarStyle
          });
        }
      }, {
        key: "isSm",
        value: function isSm() {
          return window.matchMedia("(max-width: 959px)").matches;
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ɵfac = function LayoutService_Factory(t) {
      return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]));
    };

    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutService,
      factory: LayoutService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/local-store.service.ts": function srcAppSharedServicesLocalStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStoreService", function () {
      return LocalStoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalStoreService = /*#__PURE__*/function () {
      function LocalStoreService() {
        _classCallCheck(this, LocalStoreService);

        this.ls = window.localStorage;
      }

      _createClass(LocalStoreService, [{
        key: "setItem",
        value: function setItem(key, value) {
          value = JSON.stringify(value);
          this.ls.setItem(key, value);
          return true;
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          var value = this.ls.getItem(key);

          try {
            return JSON.parse(value);
          } catch (e) {
            return null;
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.ls.clear();
        }
      }]);

      return LocalStoreService;
    }();

    LocalStoreService.ɵfac = function LocalStoreService_Factory(t) {
      return new (t || LocalStoreService)();
    };

    LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LocalStoreService,
      factory: LocalStoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/match-media.service.ts": function srcAppSharedServicesMatchMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchMediaService", function () {
      return MatchMediaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MatchMediaService = /*#__PURE__*/function () {
      function MatchMediaService(mediaObserver) {
        _classCallCheck(this, MatchMediaService);

        this.mediaObserver = mediaObserver;
        this.onMediaChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.activeMediaQuery = '';
        this.init();
      }

      _createClass(MatchMediaService, [{
        key: "init",
        value: function init() {
          var _this30 = this;

          this.mediaObserver.media$.subscribe(function (change) {
            if (_this30.activeMediaQuery !== change.mqAlias) {
              _this30.activeMediaQuery = change.mqAlias;

              _this30.onMediaChange.next(change.mqAlias);
            }
          });
        }
      }]);

      return MatchMediaService;
    }();

    MatchMediaService.ɵfac = function MatchMediaService_Factory(t) {
      return new (t || MatchMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]));
    };

    MatchMediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatchMediaService,
      factory: MatchMediaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/navigation.service.ts": function srcAppSharedServicesNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NavigationService = function NavigationService() {
      _classCallCheck(this, NavigationService);

      this.iconMenu = [{
        name: " What We Do ",
        type: "dropDown",
        icon: "whatshot",
        state: "dashboard",
        sub: [{
          name: "New Construction Loans",
          state: "default"
        }, {
          name: " Fix & Flip Loans",
          state: "default"
        }, {
          name: "Community Development Loans",
          state: "default"
        }, {
          name: "Rental Loans",
          state: "default"
        }]
      }, {
        name: " How We Help  ",
        type: "dropDown",
        icon: "widgets",
        state: "dashboard",
        sub: [{
          name: "High Leverage Loans",
          state: "default"
        }, {
          name: "  Plan. Build. Grow.",
          state: "default"
        }, {
          name: "Finance Expertise",
          state: "default"
        }]
      }, {
        name: " Who We Work With  ",
        type: "dropDown",
        icon: "people",
        state: "dashboard",
        sub: [{
          name: "Builders",
          state: "default"
        }, {
          name: " Flippers",
          state: "default"
        }, {
          name: "Developers",
          state: "default"
        }, {
          name: " Investors",
          state: "default"
        }, {
          name: "Brokers",
          state: "default"
        }]
      }, {
        name: "Lender Login",
        type: "link",
        icon: "directions",
        state: "pricing"
      }, {
        name: " Sign Up ",
        type: "link",
        icon: "assignment_turned_in",
        state: "pricing"
      }]; // Icon menu TITLE at the very top of navigation.
      // This title will appear if any icon type item is present in menu.

      this.iconTypeMenuTitle = "Frequently Accessed"; // sets iconMenu as default;

      this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu); // navigation component has subscribed to this Observable

      this.menuItems$ = this.menuItems.asObservable();
    };

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)();
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/route-parts.service.ts": function srcAppSharedServicesRoutePartsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutePartsService", function () {
      return RoutePartsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RoutePartsService = /*#__PURE__*/function () {
      function RoutePartsService(router) {
        _classCallCheck(this, RoutePartsService);

        this.router = router;
      }

      _createClass(RoutePartsService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateRouteParts",
        value: function generateRouteParts(snapshot) {
          var routeParts = [];

          if (snapshot) {
            if (snapshot.firstChild) {
              routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }

            if (snapshot.data['title'] && snapshot.url.length) {
              // console.log(snapshot.data['title'], snapshot.url)
              routeParts.push({
                title: snapshot.data['title'],
                breadcrumb: snapshot.data['breadcrumb'],
                url: snapshot.url[0].path,
                urlSegments: snapshot.url,
                params: snapshot.params
              });
            }
          }

          return routeParts;
        }
      }]);

      return RoutePartsService;
    }();

    RoutePartsService.ɵfac = function RoutePartsService_Factory(t) {
      return new (t || RoutePartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RoutePartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoutePartsService,
      factory: RoutePartsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutePartsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/theme.service.ts": function srcAppSharedServicesThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../helpers/url.helper */
    "./src/app/shared/helpers/url.helper.ts");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService(document, rendererFactory) {
        _classCallCheck(this, ThemeService);

        this.document = document;
        this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.darkThemes = [{
          "name": "marco-dark",
          "baseColor": "#000000",
          "isActive": false
        }];
        this.marcoThemes = [{
          "name": "marco-dark",
          "baseColor": "#000000",
          "isActive": false
        }, {
          "name": "marco-blue",
          "baseColor": "#6589a9",
          "isActive": true
        }, {
          "name": "marco-pink",
          "baseColor": "#e91e63",
          "isActive": true
        }, {
          "name": "marco-green",
          "baseColor": "#4caf50",
          "isActive": true
        }, {
          "name": "marco-orange",
          "baseColor": "#ff9800",
          "isActive": true
        }, {
          "name": "marco-light-purple",
          "baseColor": "#7367f0",
          "isActive": false
        }, {
          "name": "marco-indigo",
          "baseColor": "#3f51b5",
          "isActive": false
        }, {
          "name": "marco-red",
          "baseColor": "#f44336",
          "isActive": false
        }, {
          "name": "marco-teal",
          "baseColor": "#00bcd4",
          "isActive": false
        }, {
          "name": "marco-amber",
          "baseColor": "#ffc107",
          "isActive": false
        }];
        this.renderer = rendererFactory.createRenderer(null, null);
      } // Invoked in AppComponent and apply 'activatedTheme' on startup


      _createClass(ThemeService, [{
        key: "applyMatTheme",
        value: function applyMatTheme(themeName) {
          this.activatedTheme = this.marcoThemes.find(function (t) {
            return t.name === themeName;
          });
          this.flipActiveFlag(themeName); // *********** ONLY FOR DEMO **********

          this.setThemeFromQuery(); // ************************************
          // this.changeTheme(themeName);

          this.renderer.addClass(this.document.body, themeName);
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(prevTheme, themeName) {
          this.renderer.removeClass(this.document.body, prevTheme);
          this.renderer.addClass(this.document.body, themeName);
          this.flipActiveFlag(themeName);
          this.onThemeChange.emit(this.activatedTheme);
        }
      }, {
        key: "flipActiveFlag",
        value: function flipActiveFlag(themeName) {
          var _this31 = this;

          this.marcoThemes.forEach(function (t) {
            t.isActive = false;

            if (t.name === themeName) {
              t.isActive = true;
              _this31.activatedTheme = t;
            }
          });
        } // *********** ONLY FOR DEMO **********

      }, {
        key: "setThemeFromQuery",
        value: function setThemeFromQuery() {
          var themeStr = Object(_helpers_url_helper__WEBPACK_IMPORTED_MODULE_2__["getQueryParam"])('theme');

          try {
            this.activatedTheme = JSON.parse(themeStr);
            console.log(this.activatedTheme);
            this.flipActiveFlag(this.activatedTheme.name);
          } catch (e) {}
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]));
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared-material.module.ts": function srcAppSharedSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function () {
      return SharedMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/fesm2015/material-moment-adapter.js");

    var SharedMaterialModule = function SharedMaterialModule() {
      _classCallCheck(this, SharedMaterialModule);
    };

    SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedMaterialModule
    });
    SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedMaterialModule_Factory(t) {
        return new (t || SharedMaterialModule)();
      },
      providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]],
      imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
        exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]],
          providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts": function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/theme.service */
    "./src/app/shared/services/theme.service.ts");
    /* harmony import */


    var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/navigation.service */
    "./src/app/shared/services/navigation.service.ts");
    /* harmony import */


    var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/route-parts.service */
    "./src/app/shared/services/route-parts.service.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/shared/guards/auth.guard.ts");
    /* harmony import */


    var _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guards/user-role.guard */
    "./src/app/shared/guards/user-role.guard.ts");
    /* harmony import */


    var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/app-confirm/app-confirm.service */
    "./src/app/shared/services/app-confirm/app-confirm.service.ts");
    /* harmony import */


    var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/app-loader/app-loader.service */
    "./src/app/shared/services/app-loader/app-loader.service.ts");
    /* harmony import */


    var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/shared-components.module */
    "./src/app/shared/components/shared-components.module.ts");
    /* harmony import */


    var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/shared-pipes.module */
    "./src/app/shared/pipes/shared-pipes.module.ts");
    /* harmony import */


    var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/shared-directives.module */
    "./src/app/shared/directives/shared-directives.module.ts"); // SERVICES


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]],
        exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]],
          providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]],
          exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/config.ts": function srcConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });

    var config = {
      apiUrl: 'http://ui-lib-demo-api.herokuapp.com',
      authRoles: {
        sa: ['SA'],
        admin: ['SA', 'Admin'],
        editor: ['SA', 'Admin', 'Editor'],
        user: ['SA', 'Admin', 'Editor', 'User'],
        guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access

      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! config */
    "./src/config.ts"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular.json`.


    var environment = {
      production: false,
      apiURL: config__WEBPACK_IMPORTED_MODULE_0__["config"].apiUrl
    };
    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /**
     * Only for the demo purpose
     */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production && document) {
      var script = document.createElement('script');
      script.innerHTML = "\n    !function(f,b,e,v,n,t,s)\n    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n    n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n    n.queue=[];t=b.createElement(e);t.async=!0;\n    t.src=v;s=b.getElementsByTagName(e)[0];\n    s.parentNode.insertBefore(t,s)}(window, document,'script',\n    'https://connect.facebook.net/en_US/fbevents.js');\n    fbq('init', '2268386293237836');\n    fbq('track', 'PageView');";
      document.head.appendChild(script);
    }
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Prashant-workspace\ark-pln\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map