function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-signup-signup-module"], {
  /***/
  "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts": function srcAppViewsAuthSignupBrokerBrokerSignUpBrokerSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrokerSignUpComponent", function () {
      return BrokerSignUpComponent;
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


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BrokerSignUpComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Basic Information");
      }
    }

    function BrokerSignUpComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Verification");
      }
    }

    function BrokerSignUpComponent_ng_template_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Partner with the PLN");
      }
    }

    var _c0 = function _c0() {
      return ["/broker/signup-successful"];
    };

    var BrokerSignUpComponent = /*#__PURE__*/function () {
      function BrokerSignUpComponent(_formBuilder) {
        _classCallCheck(this, BrokerSignUpComponent);

        this._formBuilder = _formBuilder;
      }

      _createClass(BrokerSignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('load signup');
          this.firstFormGroup = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({});
          this.thirdFormGroup = this._formBuilder.group({});
        }
      }]);

      return BrokerSignUpComponent;
    }();

    BrokerSignUpComponent.ɵfac = function BrokerSignUpComponent_Factory(t) {
      return new (t || BrokerSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    BrokerSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrokerSignUpComponent,
      selectors: [["app-broker-sign-up"]],
      decls: 132,
      vars: 7,
      consts: [[1, "auth--data--wrapper", "page-login", "page-wrap"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 1, "signup--wrapper", "w-100"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "99", "fxFlex.sm", "62", "fxFlex.md", "46", "fxFlex.lg", "40", "fxFlex.xl", "30", 1, "relative"], ["labelPosition", "bottom", "linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "signIn-wrapper", "signup--step--one"], ["mode", "determinate", 1, "session-progress"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "start"], [1, "full-width"], ["formControlName", "firstName", "matInput", "", "type", "text", "name", "first_name", "placeholder", "First Name *"], ["formControlName", "lastName", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *"], ["formControlName", "phoneNumber", "matInput", "", "type", "number", "name", "phone", "placeholder", "Phone Number *"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email *"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "or"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "full-width"], ["mat-mini-fab", "", 1, "mr-10"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["mat-mini-fab", ""], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["mat-raised-button", "", "matStepperNext", "", 1, "primary-btn"], ["matInput", "", "type", "text", "name", "first_name", "value", "Abhi", "placeholder", "User / Vendor name *", "disabled", ""], ["value", "Golhar", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *", "disabled", ""], ["value", "123-456-7890", "matInput", "", "type", "text", "name", "phone", "placeholder", "Phone Number *", "disabled", ""], ["matInput", "", "value", "abhi@abhigolhar.com", "type", "email", "name", "email", "placeholder", "Email *", "disabled", ""], ["fxLayout", "column", 1, "otp--section", "full-width"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutGap.xs", "5px", 1, "enter--otp"], ["matInput", "", "value", "1", "type", "text"], ["matInput", "", "value", "2", "type", "text"], ["matInput", "", "value", "3", "type", "text"], ["matInput", "", "value", "4", "type", "text"], ["matInput", "", "value", "5", "type", "text"], ["matInput", "", "value", "6", "type", "text"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "clr-6589a9", "resend--code"], ["fxLayout", "column", 1, "cyp--section", "full-width"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Choose a Password"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Confirm Password"], ["mat-raised-button", "", 1, "primary-btn", 3, "routerLink"], [1, "privacy--policy--sec"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "clr-222"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "clr-222"], [1, "clr-6589a9"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", 1, "primary-btn"]],
      template: function BrokerSignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BrokerSignUpComponent_ng_template_7_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Welcome to The PLN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Verify Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BrokerSignUpComponent_ng_template_42_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Partner with the PLN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Change Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Please enter the OTP we sent to your email address for verification.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Resend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Verify Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-step");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, BrokerSignUpComponent_ng_template_85_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "mat-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Partner with the PLN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Change Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Create Your Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Setup Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Privacy Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "By clicking OK you agree with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Terms & Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " of our website. You can change the cookies preferences or withdraw consent related to cookies , please update your cookies preferences.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Ok ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: [".auth--data--wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 30px 1rem;\n  height: calc(100vh - 67px);\n  overflow: auto;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-stepper-horizontal {\n  background-color: transparent;\n  width: 100%;\n  position: relative;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-horizontal-content-container {\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-card-content {\n  padding: 1rem;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-hint {\n  color: #6589a9;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-form-field-hint-spacer {\n  display: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #222;\n  margin: 5px 0 25px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  background-color: #eee;\n  box-shadow: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #333;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #222;\n  line-height: 19px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-infix {\n  width: auto;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .resend--code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -7px;\n  font-weight: 500;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 30px 0 15px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1.4px 1.4px 20px 7px rgba(88, 92, 101, 0.15);\n  background-color: #fff;\n  padding: 20px;\n  position: absolute;\n  right: -375px;\n  width: 484px;\n  bottom: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 599px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    padding: 15px;\n    position: relative;\n    width: 93%;\n    margin-top: 20px;\n    right: 0;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -135px;\n    width: 195px;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1279px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -269px;\n    width: 327px;\n  }\n}\n\n@media only screen and (min-width: 1280px) and (max-width: 1440px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -386px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvYnJva2VyL2Jyb2tlci1zaWduLXVwL0M6XFxQcmFzaGFudC13b3Jrc3BhY2VcXGFyay1wbG4vc3JjXFxhcHBcXHZpZXdzXFxhdXRoXFxzaWdudXBcXGJyb2tlclxcYnJva2VyLXNpZ24tdXBcXGJyb2tlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hdXRoL3NpZ251cC9icm9rZXIvYnJva2VyLXNpZ24tdXAvYnJva2VyLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixjQUFjO0FDQ2xCOztBRExBO0VBT1EsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7QUNFMUI7O0FEWEE7RUFZUSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7QUNHbEI7O0FEakJBO0VBaUJRLGFBQWE7QUNJckI7O0FEckJBO0VBb0JRLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FDS3RCOztBRDdCQTtFQTBCWSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FDTzNCOztBRHBDQTtFQWdDWSxhQUFhO0FDUXpCOztBRHhDQTtFQXNDUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ00zQjs7QUQ5Q0E7RUEyQ1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FDTzVCOztBRHJEQTtFQWlEUSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FDUXhCOztBRDFEQTtFQXFEWSxlQUFlO0VBQ2YsV0FBVztBQ1N2Qjs7QUQvREE7RUF5RFksZ0JBQWdCO0FDVTVCOztBRG5FQTtFQTZEZ0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNVaEM7O0FENUVBO0VBdUV3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNTMUM7O0FEbkZBO0VBNkV3QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQ1V0Qzs7QUQzRkE7RUFzRmdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FDU2hDOztBRGpHQTtFQTRGWSxrQkFBa0I7QUNTOUI7O0FEckdBO0VBOEZnQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQ1dyQzs7QUQzR0E7RUFzR1Esa0JBQWtCO0VBQ2xCLHlEQUF5RDtFQUN6RCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7QUNTakI7O0FEdEhBO0VBK0dZLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDVy9COztBRDVIQTtFQW1IZ0IsZ0JBQWdCO0FDYWhDOztBRGhJQTtFQXVIWSxlQUFlO0VBQ2YsbUJBQW1CO0FDYS9COztBRFJBO0VBQ0k7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsUUFBUTtFQ1dkO0FBQ0Y7O0FEVEE7RUFDSTtJQUNJLGFBQWE7SUFDYixZQUFZO0VDWWxCO0FBQ0Y7O0FEVkE7RUFDSTtJQUNJLGFBQWE7SUFDYixZQUFZO0VDYWxCO0FBQ0Y7O0FEWEE7RUFDSTtJQUNJLGFBQ0o7RUNhRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvYnJva2VyL2Jyb2tlci1zaWduLXVwL2Jyb2tlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtLWRhdGEtLXdyYXBwZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDMwcHggMXJlbTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY3cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIDo6bmctZGVlcHtcclxuICAgIC5tYXQtc3RlcHBlci1ob3Jpem9udGFse1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICAgICAgY29sb3I6ICM2NTg5YTk7XHJcbiAgICAgICAgLm1hdC1oaW50e1xyXG4gICAgICAgICAgICBjb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1oaW50LXNwYWNlcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5zaWdudXAtLXN0ZXAtLW9uZXtcclxuICAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAub3J7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMCAyNXB4IDA7XHJcbiAgICAgICB9XHJcbiAgICAgICAubWF0LW1pbmktZmFie1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaW1hcnktYnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm90cC0tc2VjdGlvbntcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW50ZXItLW90cHtcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcHtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXNlbmQtLWNvZGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3lwLS1zZWN0aW9ue1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDE1cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLnByaXZhY3ktLXBvbGljeS0tc2Vje1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMS40cHggMS40cHggMjBweCA3cHggcmdiYSg4OCwgOTIsIDEwMSwgMC4xNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTM3NXB4O1xyXG4gICAgICAgIHdpZHRoOiA0ODRweDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMgeyBcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAgICAgd2lkdGg6IDkzJTsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTc5cHgpe1xyXG4gICAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2Vje1xyXG4gICAgICAgIHJpZ2h0OiAtMTM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpe1xyXG4gICAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2Vje1xyXG4gICAgICAgIHJpZ2h0OiAtMjY5cHg7XHJcbiAgICAgICAgd2lkdGg6IDMyN3B4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuICAgIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlY3tcclxuICAgICAgICByaWdodDogLTM4NnB4XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTUwcHgpe31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KXt9IiwiLmF1dGgtLWRhdGEtLXdyYXBwZXIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMzBweCAxcmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2N3B4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciA6Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU4OWE5O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlciAubWF0LWhpbnQge1xuICBjb2xvcjogIzY1ODlhOTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1oaW50LXNwYWNlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogNXB4IDAgMjVweCAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm1hdC1taW5pLWZhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLnByaW1hcnktYnRuIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5lbnRlci0tb3RwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5lbnRlci0tb3RwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU4OWE5O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm90cC0tc2VjdGlvbiAucmVzZW5kLS1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLmN5cC0tc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5jeXAtLXNlY3Rpb24gaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMzBweCAwIDE1cHggMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAtMS40cHggMS40cHggMjBweCA3cHggcmdiYSg4OCwgOTIsIDEwMSwgMC4xNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zNzVweDtcbiAgd2lkdGg6IDQ4NHB4O1xuICBib3R0b206IDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIGgyIC5mYSB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NzlweCkge1xuICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICAgIHJpZ2h0OiAtMTM1cHg7XG4gICAgd2lkdGg6IDE5NXB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHtcbiAgICByaWdodDogLTI2OXB4O1xuICAgIHdpZHRoOiAzMjdweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICAgIHJpZ2h0OiAtMzg2cHg7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-broker-sign-up',
          templateUrl: './broker-sign-up.component.html',
          styleUrls: ['./broker-sign-up.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/auth/signup/signup.module.ts": function srcAppViewsAuthSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupModule", function () {
      return SignupModule;
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


    var _signup_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup.routing */
    "./src/app/views/auth/signup/signup.routing.ts");
    /* harmony import */


    var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./broker/broker-sign-up/broker-sign-up.component */
    "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts"); // import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';


    var SignupModule = function SignupModule() {
      _classCallCheck(this, SignupModule);
    };

    SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SignupModule
    });
    SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SignupModule_Factory(t) {
        return new (t || SignupModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_signup_routing__WEBPACK_IMPORTED_MODULE_7__["SignupRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignupModule, {
        declarations: [_broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_signup_routing__WEBPACK_IMPORTED_MODULE_7__["SignupRoutes"])],
          declarations: [_broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/views/auth/signup/signup.routing.ts": function srcAppViewsAuthSignupSignupRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupRoutes", function () {
      return SignupRoutes;
    });
    /* harmony import */


    var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./broker/broker-sign-up/broker-sign-up.component */
    "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts");

    var SignupRoutes = [{
      path: "",
      children: [{
        path: "",
        component: _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__["BrokerSignUpComponent"],
        data: {
          title: "Broker Signup"
        }
      }]
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-auth-signup-signup-module-es5.js.map