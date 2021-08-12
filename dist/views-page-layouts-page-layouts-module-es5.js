function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-page-layouts-page-layouts-module"], {
  /***/
  "./src/app/views/page-layouts/full-width-card-tab/full-width-card-tab.component.ts": function srcAppViewsPageLayoutsFullWidthCardTabFullWidthCardTabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullWidthCardTabComponent", function () {
      return FullWidthCardTabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/marco-sidebar/marco-sidebar.component */
    "./src/app/shared/components/marco-sidebar/marco-sidebar.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var FullWidthCardTabComponent = /*#__PURE__*/function () {
      function FullWidthCardTabComponent() {
        _classCallCheck(this, FullWidthCardTabComponent);
      }

      _createClass(FullWidthCardTabComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FullWidthCardTabComponent;
    }();

    FullWidthCardTabComponent.ɵfac = function FullWidthCardTabComponent_Factory(t) {
      return new (t || FullWidthCardTabComponent)();
    };

    FullWidthCardTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullWidthCardTabComponent,
      selectors: [["app-full-width-card-tab"]],
      decls: 126,
      vars: 0,
      consts: [[1, "page-layout", "overflow-hidden", "pb-8"], [1, "content"], [1, "content-body"], [1, "content-card", "default-bg"], ["label", "First"], [1, "p-24", "height-100vh-280px", 3, "perfectScrollbar"], [1, "no-shadow"], [1, "card-header", "px-24", "py-8", "border-bottom"], ["fxHide", "", "fxShow.lt-md", "", "mat-icon-button", "", "marcoSidebarToggler", "layout-left-sidebar-card", 1, "mr-8"], [1, "card-body", "p-24"], ["src", "../../../../assets/images/backgrounds/nature.jpg", "alt", ""], ["label", "Second"], ["label", "Third"]],
      template: function FullWidthCardTabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Demo Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pellentesque habitant morbi tristique senectus et netus et ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "malesuada fames");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio. Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Header Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Header Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Header Level 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Header Level 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-tab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Demo Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Pellentesque habitant morbi tristique senectus et netus et ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "malesuada fames");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio. Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Header Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Header Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Header Level 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Header Level 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-tab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Demo Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Pellentesque habitant morbi tristique senectus et netus et ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "malesuada fames");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio. Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Header Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Header Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Header Level 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Header Level 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["marcoSidebarTogglerDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UtbGF5b3V0cy9mdWxsLXdpZHRoLWNhcmQtdGFiL2Z1bGwtd2lkdGgtY2FyZC10YWIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullWidthCardTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-width-card-tab',
          templateUrl: './full-width-card-tab.component.html',
          styleUrls: ['./full-width-card-tab.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/page-layouts/full-width-card/full-width-card.component.ts": function srcAppViewsPageLayoutsFullWidthCardFullWidthCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullWidthCardComponent", function () {
      return FullWidthCardComponent;
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


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/components/marco-sidebar/marco-sidebar.component */
    "./src/app/shared/components/marco-sidebar/marco-sidebar.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var FullWidthCardComponent = /*#__PURE__*/function () {
      function FullWidthCardComponent() {
        _classCallCheck(this, FullWidthCardComponent);
      }

      _createClass(FullWidthCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FullWidthCardComponent;
    }();

    FullWidthCardComponent.ɵfac = function FullWidthCardComponent_Factory(t) {
      return new (t || FullWidthCardComponent)();
    };

    FullWidthCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullWidthCardComponent,
      selectors: [["app-full-width-card"]],
      decls: 39,
      vars: 0,
      consts: [[1, "page-layout", "overflow-hidden", "pb-8"], [1, "content"], [1, "content-body"], [1, "no-shadow"], [1, "card-header", "px-24", "py-8", "border-bottom"], ["fxHide", "", "fxShow.lt-md", "", "mat-icon-button", "", "marcoSidebarToggler", "layout-left-sidebar-card", 1, "mr-8"], [1, "card-body", "p-24"], ["src", "../../../../assets/images/backgrounds/nature.jpg", "alt", ""]],
      template: function FullWidthCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Demo Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pellentesque habitant morbi tristique senectus et netus et ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "malesuada fames");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio. Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Header Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Header Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Header Level 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Header Level 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["marcoSidebarTogglerDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UtbGF5b3V0cy9mdWxsLXdpZHRoLWNhcmQvZnVsbC13aWR0aC1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullWidthCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-width-card',
          templateUrl: './full-width-card.component.html',
          styleUrls: ['./full-width-card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/page-layouts/left-sidebar-card/left-sidebar-card.component.ts": function srcAppViewsPageLayoutsLeftSidebarCardLeftSidebarCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftSidebarCardComponent", function () {
      return LeftSidebarCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/components/marco-sidebar/marco-sidebar.component */
    "./src/app/shared/components/marco-sidebar/marco-sidebar.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var LeftSidebarCardComponent = /*#__PURE__*/function () {
      function LeftSidebarCardComponent() {
        _classCallCheck(this, LeftSidebarCardComponent);

        this.events = [];
      }

      _createClass(LeftSidebarCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeftSidebarCardComponent;
    }();

    LeftSidebarCardComponent.ɵfac = function LeftSidebarCardComponent_Factory(t) {
      return new (t || LeftSidebarCardComponent)();
    };

    LeftSidebarCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftSidebarCardComponent,
      selectors: [["app-left-sidebar-card"]],
      decls: 59,
      vars: 1,
      consts: [[1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], ["name", "layout-left-sidebar-card", 1, "default-bg-mobile"], [1, "px-24", "py-36"], [1, "page-layout", "overflow-hidden", "pb-8"], ["mat-button", "", 1, "py-20", 3, "click"], [1, "content"], [1, "content-body"], [1, "no-shadow"], [1, "card-header", "px-24", "py-8", "border-bottom"], ["fxHide", "", "fxShow.lt-md", "", "mat-icon-button", "", "marcoSidebarToggler", "layout-left-sidebar-card", 1, "mr-8"], [1, "card-body", "p-24"], ["src", "../../../../assets/images/backgrounds/nature.jpg", "alt", ""]],
      template: function LeftSidebarCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function LeftSidebarCardComponent_Template_mat_sidenav_openedChange_1_listener($event) {
            return ctx.opened = $event;
          })("opened", function LeftSidebarCardComponent_Template_mat_sidenav_opened_1_listener() {
            return ctx.events.push("open!");
          })("closed", function LeftSidebarCardComponent_Template_mat_sidenav_closed_1_listener() {
            return ctx.events.push("close!");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "marco-sidebar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Demo Sidebar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Item 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Item 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Item 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSidebarCardComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Demo Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Pellentesque habitant morbi tristique senectus et netus et ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "malesuada fames");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae sagittis odio. Suspendisse ullamcorper nunc non pellentesque laoreet. Curabitur eu tortor id quam pretium mattis. Proin ut quam velit. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Header Level 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Header Level 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Header Level 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Header Level 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam commodi omnis consequuntur sint quos deleniti, accusantium iusto earum quia pariatur, quasi ea expedita fuga libero! Porro nisi dicta nemo laudantium. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.opened);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"], _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["marcoSidebarComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _shared_components_marco_sidebar_marco_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["marcoSidebarTogglerDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UtbGF5b3V0cy9sZWZ0LXNpZGViYXItY2FyZC9sZWZ0LXNpZGViYXItY2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSidebarCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-left-sidebar-card',
          templateUrl: './left-sidebar-card.component.html',
          styleUrls: ['./left-sidebar-card.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/page-layouts/page-layouts-routing.module.ts": function srcAppViewsPageLayoutsPageLayoutsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsRoutingModule", function () {
      return PageLayoutsRoutingModule;
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


    var _left_sidebar_card_left_sidebar_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./left-sidebar-card/left-sidebar-card.component */
    "./src/app/views/page-layouts/left-sidebar-card/left-sidebar-card.component.ts");
    /* harmony import */


    var _full_width_card_full_width_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./full-width-card/full-width-card.component */
    "./src/app/views/page-layouts/full-width-card/full-width-card.component.ts");
    /* harmony import */


    var _full_width_card_tab_full_width_card_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./full-width-card-tab/full-width-card-tab.component */
    "./src/app/views/page-layouts/full-width-card-tab/full-width-card-tab.component.ts");

    var routes = [{
      path: 'full-width-card',
      component: _full_width_card_full_width_card_component__WEBPACK_IMPORTED_MODULE_3__["FullWidthCardComponent"]
    }, {
      path: 'full-width-card-tab',
      component: _full_width_card_tab_full_width_card_tab_component__WEBPACK_IMPORTED_MODULE_4__["FullWidthCardTabComponent"]
    }, {
      path: 'left-sidebar-card',
      component: _left_sidebar_card_left_sidebar_card_component__WEBPACK_IMPORTED_MODULE_2__["LeftSidebarCardComponent"]
    }];

    var PageLayoutsRoutingModule = function PageLayoutsRoutingModule() {
      _classCallCheck(this, PageLayoutsRoutingModule);
    };

    PageLayoutsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutsRoutingModule
    });
    PageLayoutsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutsRoutingModule_Factory(t) {
        return new (t || PageLayoutsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/page-layouts/page-layouts.module.ts": function srcAppViewsPageLayoutsPageLayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function () {
      return PageLayoutsModule;
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


    var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page-layouts-routing.module */
    "./src/app/views/page-layouts/page-layouts-routing.module.ts");
    /* harmony import */


    var _left_sidebar_card_left_sidebar_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./left-sidebar-card/left-sidebar-card.component */
    "./src/app/views/page-layouts/left-sidebar-card/left-sidebar-card.component.ts");
    /* harmony import */


    var app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! app/shared/directives/shared-directives.module */
    "./src/app/shared/directives/shared-directives.module.ts");
    /* harmony import */


    var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! app/shared/shared-material.module */
    "./src/app/shared/shared-material.module.ts");
    /* harmony import */


    var app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! app/shared/components/shared-components.module */
    "./src/app/shared/components/shared-components.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _full_width_card_full_width_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./full-width-card/full-width-card.component */
    "./src/app/views/page-layouts/full-width-card/full-width-card.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _full_width_card_tab_full_width_card_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./full-width-card-tab/full-width-card-tab.component */
    "./src/app/views/page-layouts/full-width-card-tab/full-width-card-tab.component.ts");

    var PageLayoutsModule = function PageLayoutsModule() {
      _classCallCheck(this, PageLayoutsModule);
    };

    PageLayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageLayoutsModule
    });
    PageLayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageLayoutsModule_Factory(t) {
        return new (t || PageLayoutsModule)();
      },
      imports: [[app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__["SharedDirectivesModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsModule, {
        declarations: [_left_sidebar_card_left_sidebar_card_component__WEBPACK_IMPORTED_MODULE_3__["LeftSidebarCardComponent"], _full_width_card_full_width_card_component__WEBPACK_IMPORTED_MODULE_8__["FullWidthCardComponent"], _full_width_card_tab_full_width_card_tab_component__WEBPACK_IMPORTED_MODULE_10__["FullWidthCardTabComponent"]],
        imports: [app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__["SharedDirectivesModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_left_sidebar_card_left_sidebar_card_component__WEBPACK_IMPORTED_MODULE_3__["LeftSidebarCardComponent"], _full_width_card_full_width_card_component__WEBPACK_IMPORTED_MODULE_8__["FullWidthCardComponent"], _full_width_card_tab_full_width_card_tab_component__WEBPACK_IMPORTED_MODULE_10__["FullWidthCardTabComponent"]],
          imports: [app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_4__["SharedDirectivesModule"], app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=views-page-layouts-page-layouts-module-es5.js.map