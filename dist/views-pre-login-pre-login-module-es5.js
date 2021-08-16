function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pre-login-pre-login-module"], {
  /***/
  "./src/app/views/pre-login/landing/landing.component.ts": function srcAppViewsPreLoginLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LandingComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tdata_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", tdata_r2.iconName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tdata_r2.heading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tdata_r2.info);
      }
    }

    function LandingComponent_div_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cfData_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cfData_r3.comment, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", " ", cfData_r3.clientImg, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cfData_r3.clientName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cfData_r3.clientAdd, "");
      }
    }

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          console.log(window.scrollY);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tdatas = [{
            iconName: 'fa-thumbs-o-up',
            heading: 'Greater Profits',
            info: 'With industry leading leverage options, you risk less of your own money and get to realize more of the profits.'
          }, {
            iconName: 'fa-check-square-o',
            heading: 'Housing Shortage, Solved',
            info: 'The only way to solve a housing shortage is to bring on new inventory. With products designed specifically for builders and investors, you can do just that.'
          }, {
            iconName: 'fa-handshake-o',
            heading: 'Relationships > Deals',
            info: 'Deals pay the bills, but relationships solidify careers. By placing an emphasis on the relationship, more deals get done.'
          }];
          this.cfDatas = [{
            comment: "Working with the team at PLN was delightful. They we re professional, prompt and delivered on every item promised. I would highly recommend them to anyone seeking financing for investment properties.",
            clientImg: "assets/images/arkenea/face-1.jpg",
            clientName: "Christian Covarrubias",
            clientAdd: "Atlanta, GA"
          }, {
            comment: "What sets PLN apart from other hard money lenders, is their ability to speak to our client’s with us on the telephone, get the correct forms and directions in a timely manner and walk us through what we do not understand.",
            clientImg: "assets/images/arkenea/face-1.jpg",
            clientName: "Brenda Nichols & Isidore Francois",
            clientAdd: "New York City, NY"
          }, {
            comment: "Working with the team at Baker Collins & Co. was delightful. They were professional, prompt and deli   vered on every item promised. I look forward to working with them in future and would highly recommend them to anyone seeking financing for investment properties.",
            clientImg: "assets/images/arkenea/face-1.jpg",
            clientName: "Christian Covarrubias",
            clientAdd: "Atlanta, GA"
          }];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var content = document.querySelector('.app-admin-container');
          var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(content, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return content;
          }));
          scroll$.subscribe(function (element) {
            console.log('32131');
          });
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      hostBindings: function LandingComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LandingComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 69,
      vars: 2,
      consts: [["id", "mainDIV", "fxLayout", "row wrap", 1, "section-one", "bg-img", "mb-130", 2, "background-image", "url('assets/images/arkenea/banner1.webp')"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "100", "fxFlex.xl", "100"], [1, "main-heading"], [1, "main-desc"], ["mat-raised-button", "", 1, "primary-black-btn"], ["fxLayout", "row", 1, "section-two", "mb-130"], [1, "container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "start start", "fxFlex", "100", "fxLayoutGap", "30px"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "section-three", "mb-30", "left-right-box-img", 2, "background-image", "url('assets/images/arkenea/right1.webp')"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxFlex", "100", 1, ""], ["fxLayout", "column", "fxLayoutAlign.xs", "center center", "fxLayoutAlign", "start start", "fxFlex.xs", "100", "fxFlex.sm", "55", "fxFlex.md", "58", "fxFlex.lg", "57", "fxFlex.xl", "80", 1, "details-box"], ["fxLayout", "row", 1, "section-three", "mb-30", "left-right-box-img", "left", 2, "background-image", "url('assets/images/arkenea/left1.webp')"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "100", 1, ""], ["fxLayout", "column", "fxLayoutAlign.xs", "center center", "fxLayoutAlign", "start start", "fxFlex.xs", "100", "fxFlex.sm", "71", "fxFlex.md", "58", "fxFlex.lg", "57", "fxFlex.xl", "80", 1, "details-box"], ["fxLayout", "row", 1, "section-three", "mb-30", "left-right-box-img", 2, "background-image", "url('assets/images/arkenea/right2.webp')"], ["fxLayout", "column", "fxLayoutAlign.xs", "center center", "fxLayoutAlign", "start start", "fxFlex.xs", "100", "fxFlex.sm", "66", "fxFlex.md", "58", "fxFlex.lg", "57", "fxFlex.xl", "80", 1, "details-box"], ["fxLayout", "row", 1, "section-four", "mb-130", "bg-img", 2, "background-image", "url('assets/images/arkenea/banner2.webp')"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "100", 1, ""], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "100", "fxFlex.sm", "55", "fxFlex.md", "50", "fxFlex.lg", "47", "fxFlex.xl", "47"], [1, "main-heading", "mb-0"], ["fxLayout", "row", 1, "section-five", "mb-130"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxFlex", "100"], [1, "main-heading", "m-0"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign.xs", "center center", "fxLayoutAlign", "start start", "fxFlex", "100", "fxLayoutGap", "30px"], ["fxLayout", "row wrap", 1, "section-six", "bg-img", 2, "background-image", "url('assets/images/arkenea/banner3.webp')"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "thumbnail-round"], ["aria-hidden", "true"], [1, "m-0"], ["fxLayout", "column", 1, "client--feedback--wrapper"], [1, "feedback--box", "relative"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "exclamatory--sec"], ["aria-hidden", "true", 1, "fa", "fa-quote-left"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "client--details"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "profile--pic"], ["alt", "", 1, "app-logo", 3, "src"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Build to Scale");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Funding projects for builders and real estate investors in select markets throughout the country ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " with an emphasis on their growth.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LandingComponent_div_13_Template, 7, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Less Risk. More Profit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "By investing more of your time, energy and money into a project as compared to its down payment, you get the peace of mind that your deal is well capitalized and realize much more return on your investment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Learn More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Capitalize on the Housing Shortage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "One of the unexpected consequences of one of the most aggressive real estate markets in our history is the emergence of a housing crisis triggered by a housing shortage. If buyers have less homes to buy, our clients are able to capitalize by bringing fresh new inventory to the respective markets and capitalizing on the shortage while also solving for the problem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Relationships > Deals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Deals are important and they make up the lifeblood of each of our businesses, but relationships matter most. As the expert in your market, we want to partner with you by providing the financing your deal requires to help grow your business.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Our Ideal Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Surround Yourself");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Connect with members");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "What Our Clients Are Saying...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, LandingComponent_div_60_Template, 14, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Let\u2019s Talk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "The Private Lender Network is in search of the nation\u2019s most ambitious and experienced real estate private lenders who are ready to take their operations to the next level and become the leaders in their market. Are you ready to join the industry\u2019s elite?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Let\u2019s Talk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tdatas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cfDatas);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".bg-img[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.left-right-box-img[_ngcontent-%COMP%] {\n  background-size: auto;\n  background-repeat: no-repeat;\n  background-position: right;\n  height: 600px;\n}\n\n.left-right-box-img.left[_ngcontent-%COMP%] {\n  background-position: left;\n}\n\n.mb-130[_ngcontent-%COMP%] {\n  margin-bottom: 130px;\n}\n\n.mb-30[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.main-heading[_ngcontent-%COMP%] {\n  font-size: 54px;\n  font-family: 'Playfair Display', serif;\n  color: #222;\n}\n\n.main-desc[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: 'Lato', sans-serif;\n  text-align: center;\n  color: #888;\n}\n\n.section-one[_ngcontent-%COMP%] {\n  height: calc(100vh - 1px);\n}\n\n.section-one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  color: #fff;\n}\n\n.section-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  color: #fff;\n}\n\n.section-two[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.section-two[_ngcontent-%COMP%]   .thumbnail-round[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background-color: #6589a9;\n  border-radius: 50%;\n}\n\n.section-two[_ngcontent-%COMP%]   .thumbnail-round[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 35px;\n}\n\n.section-two[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-family: 'Playfair Display', serif;\n  margin: 25px 0;\n  color: #222;\n}\n\n.section-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Lato', sans-serif !important;\n  color: #888;\n}\n\n.section-three[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%] {\n  padding: 30px 50px;\n  box-shadow: 0px 7px 18px 0 rgba(0, 0, 0, 0.09);\n  background-color: #fff;\n}\n\n.section-three[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 28px 0;\n}\n\n.section-three[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Lato', sans-serif !important;\n  color: #888;\n  margin-bottom: 35px;\n}\n\n.section-four[_ngcontent-%COMP%] {\n  height: 859px;\n}\n\n.section-four[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 70px;\n}\n\n.section-four[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 36px 0;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%] {\n  border: solid 1px #ddd;\n  border-radius: 10px;\n  background-color: #fff;\n  padding: 30px 30px 60px 30px;\n  margin-top: 20px;\n  min-height: 235px;\n  text-align: center;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #888;\n  font-family: 'Lato', sans-serif !important;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%]   .exclamatory--sec[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  background-color: #222;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -19px;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%]   .exclamatory--sec[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 17px;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .client--details[_ngcontent-%COMP%]   .profile--pic[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin-top: 40px;\n  margin-bottom: 22px;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .client--details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #222;\n  font-family: 'Lato', sans-serif !important;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .client--details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 12px;\n  font-weight: 500;\n  font-family: 'Lato', sans-serif !important;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]:hover   .feedback--box[_ngcontent-%COMP%] {\n  border-color: #6589a9;\n}\n\n.section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]:hover   .exclamatory--sec[_ngcontent-%COMP%] {\n  background-color: #6589a9 !important;\n}\n\n.section-six[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.section-six[_ngcontent-%COMP%]   .main-desc[_ngcontent-%COMP%], .section-six[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.section-six[_ngcontent-%COMP%]   .main-desc[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  padding: 0 15%;\n}\n\n.primary-black-btn[_ngcontent-%COMP%] {\n  background-color: #000;\n  font-family: 'Lato', sans-serif !important;\n  font-size: 18px;\n  line-height: 17px;\n  padding: 17px 19px;\n  color: #fff;\n}\n\n@media only screen and (max-width: 599px) {\n  .section-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 85%;\n    margin-bottom: 20px;\n  }\n  .section-one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .section-two[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin: 10px 0;\n  }\n  .section-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .section-four[_ngcontent-%COMP%] {\n    height: 533px;\n  }\n  .section-four[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .main-desc[_ngcontent-%COMP%] {\n    font-size: 13px !important;\n  }\n  .section-one[_ngcontent-%COMP%] {\n    height: calc(100vh - 330px);\n  }\n  .mb-130[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n  }\n  .section-six[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .section-two[_ngcontent-%COMP%]   .thumbnail-round[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .section-two[_ngcontent-%COMP%]   .thumbnail-round[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .left-right-box-img[_ngcontent-%COMP%] {\n    background-image: none !important;\n    height: auto;\n  }\n  .section-three[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .section-three[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 15px 0;\n    text-align: center;\n  }\n  .section-five[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0 22px;\n  }\n  .section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%] {\n    padding: 15px 15px 30px 15px;\n    min-height: unset;\n  }\n  .section-six[_ngcontent-%COMP%]   .main-desc[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    padding: 0 1%;\n  }\n  .primary-black-btn[_ngcontent-%COMP%] {\n    font-size: 13px;\n    line-height: 13px;\n    padding: 12px 14px;\n  }\n  .section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .feedback--box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .section-five[_ngcontent-%COMP%]   .client--feedback--wrapper[_ngcontent-%COMP%]   .client--details[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .section-one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .section-two[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin: 20px 0;\n  }\n  .section-two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .section-four[_ngcontent-%COMP%] {\n    height: 533px;\n  }\n  .section-four[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  .main-desc[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .section-one[_ngcontent-%COMP%] {\n    height: calc(100vh - 502px);\n  }\n  .mb-130[_ngcontent-%COMP%] {\n    margin-bottom: 90px;\n  }\n  .section-six[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1279px) {\n  .section-four[_ngcontent-%COMP%] {\n    height: 641px;\n  }\n  .main-desc[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .section-four[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJlLWxvZ2luL2xhbmRpbmcvQzpcXFByYXNoYW50LXdvcmtzcGFjZVxcYXJrLXBsbi9zcmNcXGFwcFxcdmlld3NcXHByZS1sb2dpblxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJlLWxvZ2luL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUNDdkI7O0FEQ0E7RUFDSSxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixhQUFhO0FDRWpCOztBRE5BO0VBTVEseUJBQXlCO0FDSWpDOztBRERBO0VBQVEsb0JBQW9CO0FDSzVCOztBREpBO0VBQU8sbUJBQW1CO0FDUTFCOztBRFBBO0VBQ0ksZUFBZTtFQUNmLHNDQUF1QztFQUN2QyxXQUFXO0FDVWY7O0FEUkE7RUFDSSxlQUFlO0VBQ2YsK0JBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FDV2Y7O0FEUkE7RUFDSSx5QkFBeUI7QUNXN0I7O0FEWkE7RUFHUSxtQkFBbUI7RUFDbkIsV0FBVztBQ2FuQjs7QURqQkE7RUFPUSxtQkFBbUI7RUFDbkIsV0FBVztBQ2NuQjs7QURYQTtFQUNJLGtCQUFrQjtBQ2N0Qjs7QURmQTtFQUdRLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQ2dCMUI7O0FEdEJBO0VBUVksV0FBVztFQUNYLGVBQWU7QUNrQjNCOztBRDNCQTtFQWFRLGVBQWU7RUFDZixzQ0FBdUM7RUFDdkMsY0FBYztFQUNkLFdBQVc7QUNrQm5COztBRGxDQTtFQW1CUSxlQUFlO0VBQ2YsMENBQTBDO0VBQzFDLFdBQVc7QUNtQm5COztBRGhCQTtFQUVRLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFDOUMsc0JBQXNCO0FDa0I5Qjs7QUR0QkE7RUFNWSxrQkFBaUI7QUNvQjdCOztBRDFCQTtFQVVZLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLG1CQUFtQjtBQ29CL0I7O0FEZkE7RUFDSSxhQUFhO0FDa0JqQjs7QURuQkE7RUFHUSxnQkFBZ0I7QUNvQnhCOztBRHZCQTtFQU1RLGNBQWM7QUNxQnRCOztBRGpCQTtFQUdZLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ2tCOUI7O0FEM0JBO0VBV2dCLGVBQWU7RUFDZixXQUFXO0VBQ1gsMENBQTBDO0FDb0IxRDs7QURqQ0E7RUFnQmdCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtBQ3FCN0I7O0FEN0NBO0VBMEJvQixXQUFXO0VBQ1gsZUFBZTtBQ3VCbkM7O0FEbERBO0VBaUNnQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ3FCbkM7O0FEM0RBO0VBeUNnQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwwQ0FBMEM7QUNzQjFEOztBRGxFQTtFQStDZ0IsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMENBQTBDO0FDdUIxRDs7QUR6RUE7RUF3RGdCLHFCQUFxQjtBQ3FCckM7O0FEN0VBO0VBMkRnQixvQ0FBb0M7QUNzQnBEOztBRGhCQTtFQUNJLGFBQWE7QUNtQmpCOztBRHBCQTs7RUFJUSxXQUFXO0FDcUJuQjs7QUR6QkE7RUFPUSxjQUFjO0VBQ2QsY0FBYztBQ3NCdEI7O0FEakJBO0VBQ0ksc0JBQXNCO0VBQ3RCLDBDQUEwQztFQUMxQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FDb0JmOztBRGhCQTtFQUNJO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtFQ21CekI7RURqQkU7SUFDSSxtQkFBbUI7RUNtQnpCO0VEakJFO0lBQ0ksZUFBZTtJQUNmLGNBQWM7RUNtQnBCO0VEakJFO0lBQ0ksMEJBQTBCO0VDbUJoQztFRGpCRTtJQUNJLGFBQWE7RUNtQm5CO0VEakJFO0lBQ0ksY0FBYztFQ21CcEI7RURqQkU7SUFDSSxlQUFlO0VDbUJyQjtFRGpCRTtJQUNJLDBCQUEwQjtFQ21CaEM7RURqQkU7SUFDSSwyQkFBMkI7RUNtQmpDO0VEakJFO0lBQ0ksbUJBQW1CO0VDbUJ6QjtFRGpCRTtJQUNJLGFBQWE7RUNtQm5CO0VEakJFO0lBQ0ksV0FBVztJQUNYLFlBQVk7RUNtQmxCO0VEakJFO0lBQ0ksZUFBZTtFQ21CckI7RURqQkU7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtFQ21CbEI7RURqQkU7SUFDSSxhQUFjO0VDbUJwQjtFRGpCRTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7RUNtQnhCO0VEakJFO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7RUNtQnJCO0VEakJFO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtFQ21CdkI7RURqQkU7SUFDSSxjQUFjO0lBQ2QsYUFBYTtFQ21CbkI7RURqQkU7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQ21CeEI7RURqQkU7SUFDSSxlQUFlO0VDbUJyQjtFRGpCRTtJQUNJLGVBQWU7RUNtQnJCO0FBQ0Y7O0FEakJBO0VBQ0k7SUFDSSxVQUFVO0VDb0JoQjtFRGxCRTtJQUNJLGVBQWU7SUFDZixjQUFjO0VDb0JwQjtFRGxCRTtJQUNJLGVBQWU7RUNvQnJCO0VEbEJFO0lBQ0ksYUFBYTtFQ29CbkI7RURsQkU7SUFDSSxjQUFjO0VDb0JwQjtFRGxCRTtJQUNJLGVBQWU7RUNvQnJCO0VEbEJFO0lBQ0ksZUFBZTtFQ29CckI7RURsQkU7SUFDSSwyQkFBMkI7RUNvQmpDO0VEbEJFO0lBQ0ksbUJBQW1CO0VDb0J6QjtFRGxCRTtJQUNJLGFBQWE7RUNvQm5CO0FBQ0Y7O0FEbEJBO0VBQ0k7SUFDSSxhQUFhO0VDcUJuQjtFRG5CRTtJQUNJLGVBQWU7RUNxQnJCO0VEbkJFO0lBQ0ksZUFBZTtFQ3FCckI7RURuQkU7SUFDSSxjQUFjO0VDcUJwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHJlLWxvZ2luL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxufVxyXG4ubGVmdC1yaWdodC1ib3gtaW1ne1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICYubGVmdHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcbi5tYi0xMzB7bWFyZ2luLWJvdHRvbTogMTMwcHg7fVxyXG4ubWItMzB7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcbi5tYWluLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZiA7XHJcbiAgICBjb2xvcjogIzIyMjtcclxufVxyXG4ubWFpbi1kZXNje1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLnNlY3Rpb24tb25lIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDFweCk7IFxyXG4gICAgaDF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDsgIFxyXG4gICAgICAgIGNvbG9yOiAjZmZmOyAgICAgXHJcbiAgICB9XHJcbiAgICBweyAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufVxyXG4uc2VjdGlvbi10d297XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAudGh1bWJuYWlsLXJvdW5ke1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU4OWE5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWYgO1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgfVxyXG59XHJcbi5zZWN0aW9uLXRocmVle1xyXG4gICAgLmRldGFpbHMtYm94e1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggN3B4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaDF7IFxyXG4gICAgICAgICAgICBtYXJnaW46MCAwIDI4cHggMDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tZm91cntcclxuICAgIGhlaWdodDogODU5cHg7XHJcbiAgICBoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46IDM2cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tZml2ZXtcclxuICAgIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVye1xyXG4gICAgICAgIC5mZWVkYmFjay0tYm94e1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggNjBweCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyMzVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4Y2xhbWF0b3J5LS1zZWN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTE5cHg7XHJcbiAgICAgICAgICAgICAgICAuZmF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGllbnQtLWRldGFpbHN7XHJcbiAgICAgICAgICAgIC5wcm9maWxlLS1waWN7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNThweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAuZmVlZGJhY2stLWJveHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXhjbGFtYXRvcnktLXNlY3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NTg5YTkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tc2l4e1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC5tYWluLWRlc2MsXHJcbiAgICAubWFpbi1oZWFkaW5ne1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLm1haW4tZGVzY3tcclxuICAgICAgICBtYXJnaW46IDQwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1JTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4ucHJpbWFyeS1ibGFjay1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAxN3B4IDE5cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5zZWN0aW9uLW9uZSBwIHsgXHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tb25lIGgxIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXR3byBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tdHdvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tZm91ciAge1xyXG4gICAgICAgIGhlaWdodDogNTMzcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1mb3VyIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLm1haW4taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tZGVzYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1vbmUgIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XHJcbiAgICB9XHJcbiAgICAubWItMTMwICB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXNpeCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXR3byAudGh1bWJuYWlsLXJvdW5kIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi10d28gLnRodW1ibmFpbC1yb3VuZCAuZmEgeyBcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1yaWdodC1ib3gtaW1nICB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi10aHJlZSAuZGV0YWlscy1ib3gge1xyXG4gICAgICAgIHBhZGRpbmc6ICAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tdGhyZWUgLmRldGFpbHMtYm94IGgxIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tZml2ZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMnB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tZml2ZSAuY2xpZW50LS1mZWVkYmFjay0td3JhcHBlciAuZmVlZGJhY2stLWJveCB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAzMHB4IDE1cHg7IFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tc2l4IC5tYWluLWRlc2Mge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMSU7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeS1ibGFjay1idG4geyBcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNHB4OyBcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLWZpdmUgLmNsaWVudC0tZmVlZGJhY2stLXdyYXBwZXIgLmZlZWRiYWNrLS1ib3ggcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tZml2ZSAuY2xpZW50LS1mZWVkYmFjay0td3JhcHBlciAuY2xpZW50LS1kZXRhaWxzIGg1IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KXtcclxuICAgIC5zZWN0aW9uLW9uZSBwIHsgXHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXR3byBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4OyBcclxuICAgICAgICBtYXJnaW46IDIwcHggMDsgXHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi10d28gcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tZm91ciAge1xyXG4gICAgICAgIGhlaWdodDogNTMzcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1mb3VyIHAge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLm1haW4taGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLm1haW4tZGVzYyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24tb25lICB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTAycHgpO1xyXG4gICAgfVxyXG4gICAgLm1iLTEzMCAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1zaXgge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCl7XHJcbiAgICAuc2VjdGlvbi1mb3VyICB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NDFweDtcclxuICAgIH1cclxuICAgIC5tYWluLWRlc2Mge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5tYWluLWhlYWRpbmcgIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1mb3VyIHAge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KXt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MXB4KSBhbmQgKG1heC13aWR0aDogMTU1MHB4KXt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4NTBweCl7fSIsIi5iZy1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdC1yaWdodC1ib3gtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgaGVpZ2h0OiA2MDBweDtcbn1cblxuLmxlZnQtcmlnaHQtYm94LWltZy5sZWZ0IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbn1cblxuLm1iLTEzMCB7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xufVxuXG4ubWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWFpbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA1NHB4O1xuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5tYWluLWRlc2Mge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5zZWN0aW9uLW9uZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDFweCk7XG59XG5cbi5zZWN0aW9uLW9uZSBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VjdGlvbi1vbmUgcCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VjdGlvbi10d28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXR3byAudGh1bWJuYWlsLXJvdW5kIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1ODlhOTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VjdGlvbi10d28gLnRodW1ibmFpbC1yb3VuZCAuZmEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2VjdGlvbi10d28gaDEge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xuICBtYXJnaW46IDI1cHggMDtcbiAgY29sb3I6ICMyMjI7XG59XG5cbi5zZWN0aW9uLXR3byBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODg4O1xufVxuXG4uc2VjdGlvbi10aHJlZSAuZGV0YWlscy1ib3gge1xuICBwYWRkaW5nOiAzMHB4IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zZWN0aW9uLXRocmVlIC5kZXRhaWxzLWJveCBoMSB7XG4gIG1hcmdpbjogMCAwIDI4cHggMDtcbn1cblxuLnNlY3Rpb24tdGhyZWUgLmRldGFpbHMtYm94IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4ODg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5zZWN0aW9uLWZvdXIge1xuICBoZWlnaHQ6IDg1OXB4O1xufVxuXG4uc2VjdGlvbi1mb3VyIGgxIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLnNlY3Rpb24tZm91ciBwIHtcbiAgbWFyZ2luOiAzNnB4IDA7XG59XG5cbi5zZWN0aW9uLWZpdmUgLmNsaWVudC0tZmVlZGJhY2stLXdyYXBwZXIgLmZlZWRiYWNrLS1ib3gge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4IDMwcHggNjBweCAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAyMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5mZWVkYmFjay0tYm94IHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uLWZpdmUgLmNsaWVudC0tZmVlZGJhY2stLXdyYXBwZXIgLmZlZWRiYWNrLS1ib3ggLmV4Y2xhbWF0b3J5LS1zZWMge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xOXB4O1xufVxuXG4uc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5mZWVkYmFjay0tYm94IC5leGNsYW1hdG9yeS0tc2VjIC5mYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5zZWN0aW9uLWZpdmUgLmNsaWVudC0tZmVlZGJhY2stLXdyYXBwZXIgLmNsaWVudC0tZGV0YWlscyAucHJvZmlsZS0tcGljIHtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuXG4uc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5jbGllbnQtLWRldGFpbHMgaDUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uLWZpdmUgLmNsaWVudC0tZmVlZGJhY2stLXdyYXBwZXIgLmNsaWVudC0tZGV0YWlscyBwIHtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyOmhvdmVyIC5mZWVkYmFjay0tYm94IHtcbiAgYm9yZGVyLWNvbG9yOiAjNjU4OWE5O1xufVxuXG4uc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyOmhvdmVyIC5leGNsYW1hdG9yeS0tc2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1ODlhOSAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbi1zaXgge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uc2VjdGlvbi1zaXggLm1haW4tZGVzYyxcbi5zZWN0aW9uLXNpeCAubWFpbi1oZWFkaW5nIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWN0aW9uLXNpeCAubWFpbi1kZXNjIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIHBhZGRpbmc6IDAgMTUlO1xufVxuXG4ucHJpbWFyeS1ibGFjay1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHBhZGRpbmc6IDE3cHggMTlweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLnNlY3Rpb24tb25lIHAge1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAuc2VjdGlvbi1vbmUgaDEge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnNlY3Rpb24tdHdvIGgxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgLnNlY3Rpb24tdHdvIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWN0aW9uLWZvdXIge1xuICAgIGhlaWdodDogNTMzcHg7XG4gIH1cbiAgLnNlY3Rpb24tZm91ciBwIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuICAubWFpbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLm1haW4tZGVzYyB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24tb25lIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XG4gIH1cbiAgLm1iLTEzMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgfVxuICAuc2VjdGlvbi1zaXgge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgLnNlY3Rpb24tdHdvIC50aHVtYm5haWwtcm91bmQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAuc2VjdGlvbi10d28gLnRodW1ibmFpbC1yb3VuZCAuZmEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICAubGVmdC1yaWdodC1ib3gtaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5zZWN0aW9uLXRocmVlIC5kZXRhaWxzLWJveCB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAuc2VjdGlvbi10aHJlZSAuZGV0YWlscy1ib3ggaDEge1xuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNlY3Rpb24tZml2ZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMjJweDtcbiAgfVxuICAuc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5mZWVkYmFjay0tYm94IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMzBweCAxNXB4O1xuICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICB9XG4gIC5zZWN0aW9uLXNpeCAubWFpbi1kZXNjIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nOiAwIDElO1xuICB9XG4gIC5wcmltYXJ5LWJsYWNrLWJ0biB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbiAgfVxuICAuc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5mZWVkYmFjay0tYm94IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc2VjdGlvbi1maXZlIC5jbGllbnQtLWZlZWRiYWNrLS13cmFwcGVyIC5jbGllbnQtLWRldGFpbHMgaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgLnNlY3Rpb24tb25lIHAge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgLnNlY3Rpb24tdHdvIGgxIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbiAgLnNlY3Rpb24tdHdvIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc2VjdGlvbi1mb3VyIHtcbiAgICBoZWlnaHQ6IDUzM3B4O1xuICB9XG4gIC5zZWN0aW9uLWZvdXIgcCB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgLm1haW4taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIC5tYWluLWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuc2VjdGlvbi1vbmUge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwMnB4KTtcbiAgfVxuICAubWItMTMwIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICB9XG4gIC5zZWN0aW9uLXNpeCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5zZWN0aW9uLWZvdXIge1xuICAgIGhlaWdodDogNjQxcHg7XG4gIH1cbiAgLm1haW4tZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5tYWluLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICAuc2VjdGlvbi1mb3VyIHAge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', []]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/views/pre-login/pre-login.module.ts": function srcAppViewsPreLoginPreLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginModule", function () {
      return PreLoginModule;
    });
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _pre_login_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pre-login.routing */
    "./src/app/views/pre-login/pre-login.routing.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/views/pre-login/landing/landing.component.ts");

    var PreLoginModule = function PreLoginModule() {
      _classCallCheck(this, PreLoginModule);
    };

    PreLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PreLoginModule
    });
    PreLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PreLoginModule_Factory(t) {
        return new (t || PreLoginModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_pre_login_routing__WEBPACK_IMPORTED_MODULE_7__["PreLoginRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PreLoginModule, {
        declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PreLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_pre_login_routing__WEBPACK_IMPORTED_MODULE_7__["PreLoginRoutes"])],
          declarations: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/pre-login/pre-login.routing.ts": function srcAppViewsPreLoginPreLoginRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreLoginRoutes", function () {
      return PreLoginRoutes;
    });
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/views/pre-login/landing/landing.component.ts");

    var PreLoginRoutes = [{
      path: "",
      children: [{
        path: "",
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"],
        data: {
          title: "Home"
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-pre-login-pre-login-module-es5.js.map