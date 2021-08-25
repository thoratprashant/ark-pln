function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cmp-cmp-module"], {
  /***/
  "./src/app/views/cmp/cmp-profile/cmp-profile.component.ts": function srcAppViewsCmpCmpProfileCmpProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmpProfileComponent", function () {
      return CmpProfileComponent;
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


    var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/shared/services/auth/jwt-auth.service */
    "./src/app/shared/services/auth/jwt-auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function CmpProfileComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CmpProfileComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.editPerInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CmpProfileComponent_mat_card_content_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "person");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Abhi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Golhar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "abhi@abhigolhar.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CmpProfileComponent_mat_card_content_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "error here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "error here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Please contact with Admin if you want to change your email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CmpProfileComponent_mat_card_content_22_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.savePerInfo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CmpProfileComponent = /*#__PURE__*/function () {
      function CmpProfileComponent(router, jwtAuth) {
        _classCallCheck(this, CmpProfileComponent);

        this.router = router;
        this.jwtAuth = jwtAuth;
        this.hide = true;
        this.addFriend = false;
        this.activeView = "overview";
        this.basicInfoStep1 = true;
        this.basicInfoStep2 = false;
        this.editPerInfoButton = true;
        this.editOrgInfoButton = true;
        this.binfo = "Basic Information";
        this.oinfo = "Organization Information"; // Doughnut

        this.doughnutChartColors = [{
          backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"]
        }];
        this.total1 = 500;
        this.data1 = 200;
        this.doughnutChartData1 = [this.data1, this.total1 - this.data1];
        this.total2 = 1000;
        this.data2 = 400;
        this.doughnutChartData2 = [this.data2, this.total2 - this.data2];
        this.doughnutChartType = "doughnut";
        this.doughnutOptions = {
          cutoutPercentage: 85,
          responsive: true,
          maintainAspectRatio: true,
          legend: {
            display: false,
            position: "bottom"
          },
          elements: {
            arc: {
              borderWidth: 0
            }
          },
          tooltips: {
            enabled: false
          }
        };
      }

      _createClass(CmpProfileComponent, [{
        key: "editPerInfo",
        value: function editPerInfo() {
          this.basicInfoStep1 = false;
          this.basicInfoStep2 = true;
          this.editPerInfoButton = false;
          this.binfo = "Edit Personal Information";
        }
      }, {
        key: "savePerInfo",
        value: function savePerInfo() {
          this.basicInfoStep1 = true;
          this.basicInfoStep2 = false;
          this.editPerInfoButton = true;
          this.binfo = "Basic Information";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activeView = this.router.snapshot.params["view"];
          this.user = this.jwtAuth.user$;
          this.countryTrafficStats = [{
            "id": 1,
            "name": "Marko Apostolski",
            "img": "assets/images/face-1.jpg",
            "mutualFriends": "5 Mutual friends",
            "picked": false
          }, {
            "id": 1,
            "name": "Elena Ravnjanski",
            "img": "assets/images/images/face-3.jpg",
            "mutualFriends": "7 Mutual friends",
            "picked": false
          }];
        }
      }]);

      return CmpProfileComponent;
    }();

    CmpProfileComponent.ɵfac = function CmpProfileComponent_Factory(t) {
      return new (t || CmpProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]));
    };

    CmpProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CmpProfileComponent,
      selectors: [["app-cmp-profile"]],
      decls: 63,
      vars: 16,
      consts: [[1, "profile-wrapper"], [1, "container", "profile-header", "h-18", 2, "background-image", "url('assets/images/arkenea/banner-prof.png')"], [1, "propic", "text-center"], [1, "big"], [1, "fw-700", "mt-8"], [1, "container", "line-wrapper"], [1, "container"], ["fxLayout", "row wrap", "fxLayoutAlign", "end end", 1, "line"], [1, "container", "main-profile-wrapper"], [1, "tabs"], ["label", "Personal Information"], ["fxLayout", "row wrap", 1, "main"], ["fxFlex", "100", 1, "column"], [1, "default", "m-0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "card-title"], [1, "fw-500"], ["mat-raised-button", "", "class", "primary-btn fs-0", 3, "click", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "30px", "class", "w-100", 4, "ngIf"], ["fxLayout", "column", "class", "w-100", 4, "ngIf"], ["label", "Change Password"], [1, "card-title"], ["fxLayout", "column", 1, "w-100"], ["fxLayout", "row wrap", "fxFlex", "100"], ["fxFlex.xs", "100", "fxFlex.sm", "50", "fxFlex.md", "46", "fxFlex.lg", "40", "fxFlex.xl", "30", 1, "cardWrap"], ["appearance", "fill", 1, "full-width"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", 1, "primary-btn"], ["mat-raised-button", "", 1, "primary-btn", "fs-0", 3, "click"], [1, "mat-color-primary"], ["fxLayout", "column", "fxLayoutGap", "30px", 1, "w-100"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign.xs", "start start", "fxLayoutAlign", "start center", "fxLayoutGap", "30px", "fxFlex", "100"], ["fxLayout", "row", "fxFlex.xs", "100", "fxFlex.sm", "30", "fxFlex.md", "30", "fxFlex.lg", "30", "fxFlex.xl", "30", 1, "w-100"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "info--wrapper", "w-100"], ["fxLayout", "row", "fxFlex.xs", "65px", "fxFlex.sm", "65px", "fxFlex.md", "65px", "fxFlex.lg", "65px", "fxFlex.xl", "65px"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "rounded-circle"], [1, ""], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "30", "fxFlex.xl", "30"], [1, "fnt-14", "clr-222", "mb-3"], [1, "m-0", "clr-bbb", "fnt-12"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "30", "fxFlex.xl", "70"], [1, "fnt-14", "m-0", "clr-222"], ["fxLayout", "row", "fxFlex.xs", "100", "fxFlex.sm", "70", "fxFlex.md", "70", "fxFlex.lg", "70", "fxFlex.xl", "70", 1, "w-100"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "100", "fxFlex.lg", "100", "fxFlex.xl", "100"], ["fxLayout", "row", "fxFlex", "100"], ["fxLayout", "column", "fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "70", "fxFlex.lg", "55", "fxFlex.xl", "55"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlex", "100", "fxLayoutGap", "30px", "fxLayoutGap.xs", "0"], ["fxLayout", "column w-100", "fxFlex.xs", "100", "fxFlex.sm", "50", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50"], ["matInput", "", "type", "text", "placeholder", "", "value", "Abhi"], ["matInput", "", "type", "text", "placeholder", "", "value", "Golhar"], ["fxFlex", "100"], ["matInput", "", "type", "text", "placeholder", "", "value", "abhi@abhigolhar.com", "disabled", ""], [1, "fnt-12", "clr-222", "note"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", 1, "primary-btn", "mt-20", "mb-20", 3, "click"]],
      template: function CmpProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abhi Golhar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-tab", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CmpProfileComponent_button_20_Template, 4, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CmpProfileComponent_mat_card_content_21_Template, 29, 0, "mat-card-content", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CmpProfileComponent_mat_card_content_22_Template, 28, 0, "mat-card-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-tab", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-t", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enter Current Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CmpProfileComponent_Template_button_click_37_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "error here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Enter New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CmpProfileComponent_Template_button_click_46_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "error here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CmpProfileComponent_Template_button_click_55_listener() {
            return ctx.hide = !ctx.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "error here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Reset Password ");

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

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.binfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editPerInfoButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoStep1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.basicInfoStep2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"]],
      styles: [".large-box[_ngcontent-%COMP%] {\n  margin: 16px 0px 16px 0px;\n  padding: 16px;\n  border-radius: 8px;\n  height: auto;\n  width: 100%;\n  border-bottom: 1px solid #bbbbbb;\n  font-size: 24px;\n  background-color: white;\n}\n\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-tab[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #bbbb;\n  margin-top: 20px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 132%;\n}\n\n.header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.personal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.company-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 61px;\n  border-radius: 50%;\n  background-color: #6589a9;\n  width: 135px;\n  height: 135px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: -140px 0px 0px 0px;\n  position: absolute;\n  color: #eeeeee;\n  border: solid 3px #eee;\n  align-items: center;\n}\n\n.big-header[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding-bottom: 20px;\n  font-family: bold;\n  border-bottom: 1px solid #eeee;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.3fr 1fr;\n  gap: 14px;\n}\n\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n}\n\n.mat-tab-label[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 55px !important;\n  cursor: pointer;\n  box-sizing: border-box;\n  opacity: .6;\n  min-width: 160px;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  position: relative;\n}\n\n.main-profile-wrapper[_ngcontent-%COMP%]   .mat-tab-labels[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #dadada;\n  padding-top: 8px;\n  background-color: #000;\n}\n\n.mat-input-wrapper[_ngcontent-%COMP%] {\n  min-width: 535px !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.profile-wrapper[_ngcontent-%COMP%]   .profile-header[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  position: relative;\n}\n\n.main-profile-wrapper[_ngcontent-%COMP%]   .info--wrapper[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-right: 5px;\n}\n\n.main-profile-wrapper[_ngcontent-%COMP%]   .rounded-circle[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #6589a9;\n  flex-shrink: 0;\n}\n\n.main-profile-wrapper[_ngcontent-%COMP%]   .rounded-circle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 35px;\n  width: 35px;\n  height: 35px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  font-family: Roboto;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.29;\n  letter-spacing: normal;\n  text-align: left;\n  color: #888;\n}\n\n.container[_ngcontent-%COMP%]   .cardWrap[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n  .card-title {\n  border-bottom: 1px solid #ddd !important;\n}\n\n  .primary-btn .mat-icon {\n  margin-right: 7px !important;\n  color: #eee !important;\n}\n\n.note[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n@media only screen and (max-width: 599px) {\n    .main-profile-wrapper .mat-tab-header {\n    margin-top: 0;\n  }\n    .line-wrapper .line {\n    height: auto;\n    padding: 10px 5px 10px 0;\n  }\n    .profile-header {\n    height: 11rem !important;\n  }\n    .profile-header .propic .big {\n    font-size: 25px;\n    width: 60px;\n    height: 60px;\n    margin: -39px auto 0px auto;\n    position: relative;\n  }\n    .profile-header .propic {\n    text-align: center;\n    bottom: 35px;\n    left: 39%;\n  }\n    .profile-header .propic h2 {\n    color: #fff;\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY21wL2NtcC1wcm9maWxlL0M6XFxQcmFzaGFudC13b3Jrc3BhY2VcXGFyay1wbG4vc3JjXFxhcHBcXHZpZXdzXFxjbXBcXGNtcC1wcm9maWxlXFxjbXAtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY21wL2NtcC1wcm9maWxlL2NtcC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsZUFBYztFQUNkLHVCQUFzQjtBQ0MxQjs7QURFQTtFQUNJLGFBQWE7RUFDYix1QkFBdUI7QUNDM0I7O0FER0E7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQ0FwQjs7QURHQTtFQUNJLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7QUNBZjs7QURLQTtFQUNJLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsYUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBeUI7QUNGN0I7O0FES0E7RUFDSSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGFBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQXlCO0FDRjdCOztBREtBO0VBQ0ksZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUF5QjtBQ0Y3Qjs7QURLQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQ0Z2Qjs7QURNQTtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDhCQUE2QjtBQ0hqQzs7QURPQTtFQUNJLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsU0FBUztBQ0piOztBRFNBO0VBQ0ksaURBQWlEO0VBQ2pELGVBQWU7RUFDZixnQkFBZ0I7QUNOcEI7O0FEU0E7RUFDSSxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQ050Qjs7QURTQTtFQUNJLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ04xQjs7QURVQTtFQUNJLDJCQUEwQjtBQ1A5Qjs7QURVQTtFQUNJLFlBQVc7QUNQZjs7QURVQTtFQUVRLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxrQkFBa0I7QUNSMUI7O0FEWUE7RUFHWSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUNYOUI7O0FES0E7RUFVUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQ1h0Qjs7QURIQTtFQWdCWSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUNUeEI7O0FEZUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztBQ1pmOztBRGVBO0VBSWdCLFdBQVc7QUNmM0I7O0FEb0JBO0VBRVEsd0NBQXdDO0FDbEJoRDs7QURnQkE7RUFNWSw0QkFBNEI7RUFDNUIsc0JBQXNCO0FDbEJsQzs7QURzQkE7RUFDSSxpQkFBaUI7QUNuQnJCOztBRHNCQTtFQUNHO0lBRVMsYUFBYTtFQ3BCdkI7RURrQkM7SUFNYSxZQUFZO0lBQ1osd0JBQXdCO0VDckJ0QztFRGNDO0lBV1Msd0JBQXdCO0VDdEJsQztFRFdDO0lBY1MsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtFQ3RCNUI7RURJQztJQXFCUyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7RUN0Qm5CO0VEREM7SUEwQlMsV0FBVztJQUNYLGVBQWU7RUN0QnpCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jbXAvY21wLXByb2ZpbGUvY21wLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFyZ2UtYm94eyBcclxuICAgIG1hcmdpbjogMTZweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9ICAgXHJcblxyXG4uYmFubmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1hdC10YWJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmJiO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufSBcclxuXHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMzIlO1xyXG59XHJcblxyXG5cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6MTJweCAwcHggMjFweCAwcHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1oZWFkZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6MTJweCAwcHggMjFweCAwcHg7XHJcbn1cclxuXHJcbi5jb21wYW55LWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzoxMnB4IDBweCAyMXB4IDBweDtcclxufSBcclxuXHJcbi5iaWd7XHJcbiAgICBmb250LXNpemU6IDYxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU4OWE5O1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogLTE0MHB4IDBweCAwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjZWVlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uYmlnLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkI2VlZWU7XHJcbiAgICBcclxufVxyXG5cclxuLnVzZXItaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XHJcbiAgICBnYXA6IDE0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcGFkZGluZzogMCA1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFpbi1wcm9maWxlLXdyYXBwZXIgLm1hdC10YWItbGFiZWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RhZGFkYTtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbiBcclxuXHJcbi5tYXQtaW5wdXQtd3JhcHBlcntcclxuICAgIG1pbi13aWR0aDo1MzVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5tYXQtaWNvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ucHJvZmlsZS13cmFwcGVye1xyXG4gICAgLnByb2ZpbGUtaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5tYWluLXByb2ZpbGUtd3JhcHBlcntcclxuICAgIC5pbmZvLS13cmFwcGVye1xyXG4gICAgICAgIGg1e1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3VuZGVkLWNpcmNsZXtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU4OWE5O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yOTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgICAuY2FyZFdyYXB7XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkeyBcclxuICAgICAgICAgICAgLm1hdC1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDsgICAgIFxyXG4gICAgfVxyXG4gICAgLnByaW1hcnktYnRue1xyXG4gICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5vdGV7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICA6Om5nLWRlZXB7XHJcbiAgICAgICAgLm1haW4tcHJvZmlsZS13cmFwcGVyIC5tYXQtdGFiLWhlYWRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgIC5saW5le1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZS1oZWFkZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUtaGVhZGVyIC5wcm9waWMgLmJpZyAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7ICBcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDsgIFxyXG4gICAgICAgICAgICBtYXJnaW46IC0zOXB4IGF1dG8gMHB4IGF1dG87ICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlLWhlYWRlciAucHJvcGljIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICAgICAgYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAzOSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9maWxlLWhlYWRlciAucHJvcGljIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi5sYXJnZS1ib3gge1xuICBtYXJnaW46IDE2cHggMHB4IDE2cHggMHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtdGFiIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmJiO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMzIlO1xufVxuXG4uaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiYmI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAxMnB4IDBweCAyMXB4IDBweDtcbn1cblxuLnBlcnNvbmFsLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTJweCAwcHggMjFweCAwcHg7XG59XG5cbi5jb21wYW55LWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTJweCAwcHggMjFweCAwcHg7XG59XG5cbi5iaWcge1xuICBmb250LXNpemU6IDYxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1ODlhOTtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDEzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IC0xNDBweCAwcHggMHB4IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2VlZWVlZTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2VlZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJpZy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IGJvbGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyO1xuICBnYXA6IDE0cHg7XG59XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwIDU1cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAuNjtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1haW4tcHJvZmlsZS13cmFwcGVyIC5tYXQtdGFiLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGFkYWRhO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4ubWF0LWlucHV0LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDUzNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLXByb2ZpbGUtd3JhcHBlciAuaW5mby0td3JhcHBlciBoNSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5tYWluLXByb2ZpbGUtd3JhcHBlciAucm91bmRlZC1jaXJjbGUge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTg5YTk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubWFpbi1wcm9maWxlLXdyYXBwZXIgLnJvdW5kZWQtY2lyY2xlIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yOTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5jb250YWluZXIgLmNhcmRXcmFwIC5tYXQtZm9ybS1maWVsZCAubWF0LWljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5jYXJkLXRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5wcmltYXJ5LWJ0biAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4ubm90ZSB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIDo6bmctZGVlcCAubWFpbi1wcm9maWxlLXdyYXBwZXIgLm1hdC10YWItaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIDo6bmctZGVlcCAubGluZS13cmFwcGVyIC5saW5lIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCAwO1xuICB9XG4gIDo6bmctZGVlcCAucHJvZmlsZS1oZWFkZXIge1xuICAgIGhlaWdodDogMTFyZW0gIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLnByb2ZpbGUtaGVhZGVyIC5wcm9waWMgLmJpZyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IC0zOXB4IGF1dG8gMHB4IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIDo6bmctZGVlcCAucHJvZmlsZS1oZWFkZXIgLnByb3BpYyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvdHRvbTogMzVweDtcbiAgICBsZWZ0OiAzOSU7XG4gIH1cbiAgOjpuZy1kZWVwIC5wcm9maWxlLWhlYWRlciAucHJvcGljIGgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CmpProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cmp-profile',
          templateUrl: './cmp-profile.component.html',
          styleUrls: ['./cmp-profile.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/cmp/cmp.module.ts": function srcAppViewsCmpCmpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmpModule", function () {
      return CmpModule;
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


    var _cmp_routing__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./cmp.routing */
    "./src/app/views/cmp/cmp.routing.ts");
    /* harmony import */


    var _cmp_profile_cmp_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./cmp-profile/cmp-profile.component */
    "./src/app/views/cmp/cmp-profile/cmp-profile.component.ts");
    /* harmony import */


    var _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./dashboard-day-one/dashboard-day-one.component */
    "./src/app/views/cmp/dashboard-day-one/dashboard-day-one.component.ts"); // import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';


    var CmpModule = function CmpModule() {
      _classCallCheck(this, CmpModule);
    };

    CmpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CmpModule
    });
    CmpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CmpModule_Factory(t) {
        return new (t || CmpModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_cmp_routing__WEBPACK_IMPORTED_MODULE_25__["CmpRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CmpModule, {
        declarations: [_cmp_profile_cmp_profile_component__WEBPACK_IMPORTED_MODULE_26__["CmpProfileComponent"], _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_27__["DashboardDayOneComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CmpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_21__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_22__["ChartsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_23__["FileUploadModule"], app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_24__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_cmp_routing__WEBPACK_IMPORTED_MODULE_25__["CmpRoutes"])],
          declarations: [_cmp_profile_cmp_profile_component__WEBPACK_IMPORTED_MODULE_26__["CmpProfileComponent"], _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_27__["DashboardDayOneComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/cmp/cmp.routing.ts": function srcAppViewsCmpCmpRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmpRoutes", function () {
      return CmpRoutes;
    });
    /* harmony import */


    var _cmp_profile_cmp_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./cmp-profile/cmp-profile.component */
    "./src/app/views/cmp/cmp-profile/cmp-profile.component.ts");
    /* harmony import */


    var _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard-day-one/dashboard-day-one.component */
    "./src/app/views/cmp/dashboard-day-one/dashboard-day-one.component.ts");

    var CmpRoutes = [{
      path: "",
      children: [{
        path: "profile",
        component: _cmp_profile_cmp_profile_component__WEBPACK_IMPORTED_MODULE_0__["CmpProfileComponent"],
        data: {
          title: "Profile"
        }
      }, {
        path: "day-one",
        component: _dashboard_day_one_dashboard_day_one_component__WEBPACK_IMPORTED_MODULE_1__["DashboardDayOneComponent"],
        data: {
          title: "Day One"
        }
      }]
    }];
    /***/
  },

  /***/
  "./src/app/views/cmp/dashboard-day-one/dashboard-day-one.component.ts": function srcAppViewsCmpDashboardDayOneDashboardDayOneComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

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
      decls: 8,
      vars: 0,
      consts: [["fxLayout", "column", "fxLayoutAlign", "start center", 1, "cmp--day--one", "w-100"], [1, "m-0", "clr-222"], [1, "clr-888"], ["src", "assets/images/arkenea/signup-successful.webp", "alt", ""], ["mat-raised-button", "", 1, "primary-btn", "mt-30"]],
      template: function DashboardDayOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, David");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your account has been created successfully and is pending approval.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Let's Go! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".cmp--day--one[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1.4px 1.4px 13px 0 rgba(88, 92, 101, 0.3);\n  background-color: #fff;\n  height: calc(100vh - 135px);\n  padding: 50px 10px;\n}\n\n.cmp--day--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cmp--day--one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 15px 0 80px 0;\n  text-align: center;\n}\n\n@media only screen and (max-width: 599px) {\n  .cmp--day--one[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 15px;\n  }\n  .cmp--day--one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    text-align: center;\n  }\n}\n\n@media screen and (orientation: landscape) and (max-width: 850px) {\n  .cmp--day--one[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 15px;\n  }\n  .cmp--day--one[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY21wL2Rhc2hib2FyZC1kYXktb25lL0M6XFxQcmFzaGFudC13b3Jrc3BhY2VcXGFyay1wbG4vc3JjXFxhcHBcXHZpZXdzXFxjbXBcXGRhc2hib2FyZC1kYXktb25lXFxkYXNoYm9hcmQtZGF5LW9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvY21wL2Rhc2hib2FyZC1kYXktb25lL2Rhc2hib2FyZC1kYXktb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHNEQUFzRDtFQUN0RCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQ0N0Qjs7QUROQTtFQU9RLGVBQWU7QUNHdkI7O0FEVkE7RUFVUSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQ0kxQjs7QURBQTtFQUNJO0lBQ0ksWUFBWTtJQUNaLGFBQWE7RUNHbkI7RURMRTtJQUlRLGNBQWM7SUFDZCxrQkFBa0I7RUNJNUI7QUFDRjs7QUREQTtFQUNJO0lBQ0ksWUFBWTtJQUNaLGFBQWE7RUNJbkI7RURORTtJQUlRLGNBQWM7SUFDZCxrQkFBa0I7RUNLNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NtcC9kYXNoYm9hcmQtZGF5LW9uZS9kYXNoYm9hcmQtZGF5LW9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbXAtLWRheS0tb25le1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcclxuICAgIGJveC1zaGFkb3c6IC0xLjRweCAxLjRweCAxM3B4IDAgcmdiYSg4OCwgOTIsIDEwMSwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzVweCk7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMCA4MHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuY21wLS1kYXktLW9uZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBweyBcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4NTBweCl7XHJcbiAgICAuY21wLS1kYXktLW9uZXtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBweyBcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY21wLS1kYXktLW9uZSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogLTEuNHB4IDEuNHB4IDEzcHggMCByZ2JhKDg4LCA5MiwgMTAxLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzVweCk7XG4gIHBhZGRpbmc6IDUwcHggMTBweDtcbn1cblxuLmNtcC0tZGF5LS1vbmUgaDEge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jbXAtLWRheS0tb25lIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMTVweCAwIDgwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5jbXAtLWRheS0tb25lIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuY21wLS1kYXktLW9uZSBwIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuY21wLS1kYXktLW9uZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmNtcC0tZGF5LS1vbmUgcCB7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"]
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

  }
}]);
//# sourceMappingURL=views-cmp-cmp-module-es5.js.map