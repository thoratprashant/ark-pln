function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-loan-processor-loan-processor-module"], {
  /***/
  "./src/app/views/loan-processor/dashboard-day-one/dashboard-day-one.component.ts": function srcAppViewsLoanProcessorDashboardDayOneDashboardDayOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardDayOneComponent", function () {
      return DashboardDayOneComponent;
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


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var DashboardDayOneComponent = /*#__PURE__*/function () {
      function DashboardDayOneComponent() {
        _classCallCheck(this, DashboardDayOneComponent);
      }

      _createClass(DashboardDayOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardDayOneComponent;
    }();

    DashboardDayOneComponent.ɵfac = function DashboardDayOneComponent_Factory(t) {
      return new (t || DashboardDayOneComponent)();
    };

    DashboardDayOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardDayOneComponent,
      selectors: [["app-dashboard-day-one"]],
      decls: 13,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start start", 1, "lp--day--one", "w-100"], ["fxLayout", "column", "fxFlex", "100", "fxLayoutAlign", "start center", "fxLayoutAlign.xs", "center center", 1, "w-100", "text-center"], [1, "clr-222", "mb-5"], [1, "clr-222", "mb-0"], ["fxLayout", "column", "fxFlex", "100", 1, "mt-25", "w-100"], ["fxLayout", "row", "fxFlex", "100"], [1, "mb-20"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "start center", "fxLayoutGap", "30px", 1, "inner--box", "m-0", "w-100", "text-center"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "round--box"]],
      template: function DashboardDayOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome John!, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You can view the count data of the requests raised to you on this dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pre-Approved Loan Applications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"]],
      styles: [".lp--day--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.lp--day--one[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 30px;\n  border-radius: 5px;\n  box-shadow: -1.4px 1.4px 13px 0 rgba(88, 92, 101, 0.3) !important;\n  background-color: #fff;\n}\n\n.lp--day--one[_ngcontent-%COMP%]   .mat-card.inner--box[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.lp--day--one[_ngcontent-%COMP%]   .mat-card.inner--box[_ngcontent-%COMP%]   .round--box[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin-right: 22px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9hbi1wcm9jZXNzb3IvZGFzaGJvYXJkLWRheS1vbmUvQzpcXFByYXNoYW50LXdvcmtzcGFjZVxcYXJrLXBsbi9zcmNcXGFwcFxcdmlld3NcXGxvYW4tcHJvY2Vzc29yXFxkYXNoYm9hcmQtZGF5LW9uZVxcZGFzaGJvYXJkLWRheS1vbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xvYW4tcHJvY2Vzc29yL2Rhc2hib2FyZC1kYXktb25lL2Rhc2hib2FyZC1kYXktb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZUFBZTtFQUNmLGdCQUFnQjtBQ0F4Qjs7QURIQTtFQU1RLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUVBQWlFO0VBQ2pFLHNCQUFzQjtBQ0M5Qjs7QURWQTtFQVdZLGFBQWE7QUNHekI7O0FEZEE7RUFhZ0IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDS2xDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9hbi1wcm9jZXNzb3IvZGFzaGJvYXJkLWRheS1vbmUvZGFzaGJvYXJkLWRheS1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubHAtLWRheS0tb25le1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmR7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTEuNHB4IDEuNHB4IDEzcHggMCByZ2JhKDg4LCA5MiwgMTAxLCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAmLmlubmVyLS1ib3h7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgIC5yb3VuZC0tYm94e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubHAtLWRheS0tb25lIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubHAtLWRheS0tb25lIC5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogLTEuNHB4IDEuNHB4IDEzcHggMCByZ2JhKDg4LCA5MiwgMTAxLCAwLjMpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5scC0tZGF5LS1vbmUgLm1hdC1jYXJkLmlubmVyLS1ib3gge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4ubHAtLWRheS0tb25lIC5tYXQtY2FyZC5pbm5lci0tYm94IC5yb3VuZC0tYm94IHtcbiAgd2lkdGg6IDk2cHg7XG4gIGhlaWdodDogOTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardDayOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard-day-one',
          templateUrl: './dashboard-day-one.component.html',
          styleUrls: ['./dashboard-day-one.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/loan-processor/loan-processor.module.ts": function srcAppViewsLoanProcessorLoanProcessorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanProcessorModule", function () {
      return LoanProcessorModule;
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


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
    /* harmony import */


    var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! app/shared/pipes/shared-pipes.module */
    "./src/app/shared/pipes/shared-pipes.module.ts");
    /* harmony import */


    var _loan_processor_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./loan-processor.routing */
    "./src/app/views/loan-processor/loan-processor.routing.ts");
    /* harmony import */


    var _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dashboard-day-one/dashboard-day-one.component */
    "./src/app/views/loan-processor/dashboard-day-one/dashboard-day-one.component.ts"); // import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';


    var LoanProcessorModule = function LoanProcessorModule() {
      _classCallCheck(this, LoanProcessorModule);
    };

    LoanProcessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoanProcessorModule
    });
    LoanProcessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function LoanProcessorModule_Factory(t) {
        return new (t || LoanProcessorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_loan_processor_routing__WEBPACK_IMPORTED_MODULE_25__["LoanProcessorRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoanProcessorModule, {
        declarations: [_dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_26__["DashboardDayOneComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoanProcessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_loan_processor_routing__WEBPACK_IMPORTED_MODULE_25__["LoanProcessorRoutes"])],
          declarations: [_dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_26__["DashboardDayOneComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/loan-processor/loan-processor.routing.ts": function srcAppViewsLoanProcessorLoanProcessorRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanProcessorRoutes", function () {
      return LoanProcessorRoutes;
    });
    /* harmony import */


    var _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard-day-one/dashboard-day-one.component */
    "./src/app/views/loan-processor/dashboard-day-one/dashboard-day-one.component.ts");

    var LoanProcessorRoutes = [{
      path: "",
      children: [{
        path: "day-one",
        component: _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_0__["DashboardDayOneComponent"],
        data: {
          title: "Day One"
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-loan-processor-loan-processor-module-es5.js.map