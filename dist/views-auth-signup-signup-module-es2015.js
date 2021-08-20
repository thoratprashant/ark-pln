(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-auth-signup-signup-module"],{

/***/ "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BrokerSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerSignUpComponent", function() { return BrokerSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function BrokerSignUpComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Basic Information");
} }
function BrokerSignUpComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Verification");
} }
function BrokerSignUpComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Set Password");
} }
const _c0 = function () { return ["/broker/signup-successful"]; };
class BrokerSignUpComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        console.log('load signup');
        this.firstFormGroup = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phoneNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.secondFormGroup = this._formBuilder.group({});
        this.thirdFormGroup = this._formBuilder.group({});
    }
}
BrokerSignUpComponent.ɵfac = function BrokerSignUpComponent_Factory(t) { return new (t || BrokerSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BrokerSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrokerSignUpComponent, selectors: [["app-broker-sign-up"]], decls: 136, vars: 7, consts: [[1, "auth--data--wrapper", "page-login", "page-wrap"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 1, "signup--wrapper", "w-100"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "99", "fxFlex.sm", "62", "fxFlex.md", "46", "fxFlex.lg", "40", "fxFlex.xl", "30", 1, "relative"], ["labelPosition", "bottom", "linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "signIn-wrapper", "signup--step--one"], ["mode", "determinate", 1, "session-progress"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "start"], [1, "full-width"], ["formControlName", "firstName", "matInput", "", "type", "text", "name", "first_name", "placeholder", "First Name *"], ["formControlName", "lastName", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *"], ["formControlName", "phoneNumber", "matInput", "", "type", "number", "name", "phone", "placeholder", "Phone Number *"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email *"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "or"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "full-width"], ["mat-mini-fab", "", 1, "mr-10"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["mat-mini-fab", ""], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["mat-raised-button", "", "matStepperNext", "", 1, "primary-btn"], ["matInput", "", "type", "text", "name", "first_name", "value", "Abhi", "placeholder", "User / Vendor name *", "disabled", ""], ["value", "Golhar", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *", "disabled", ""], ["value", "123-456-7890", "matInput", "", "type", "text", "name", "phone", "placeholder", "Phone Number *", "disabled", ""], ["matInput", "", "value", "abhi@abhigolhar.com", "type", "email", "name", "email", "placeholder", "Email *", "disabled", ""], ["fxLayout", "column", 1, "otp--section", "full-width"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutGap.xs", "5px", 1, "enter--otp"], ["matInput", "", "value", "1", "type", "text"], ["matInput", "", "value", "2", "type", "text"], ["matInput", "", "value", "3", "type", "text"], ["matInput", "", "value", "4", "type", "text"], ["matInput", "", "value", "5", "type", "text"], ["matInput", "", "value", "6", "type", "text"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "clr-6589a9", "resend--code"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "mb-15"], [1, "clr-222", "fnt-14", "mb-30"], ["fxLayout", "column", 1, "cyp--section", "full-width"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Choose a Password"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Confirm Password"], ["mat-raised-button", "", 1, "primary-btn", 3, "routerLink"], [1, "privacy--policy--sec"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "clr-222"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "clr-222"], [1, "clr-6589a9"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", 1, "primary-btn"]], template: function BrokerSignUpComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "error here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Verify Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BrokerSignUpComponent_ng_template_44_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Partner with the PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Change Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Please enter the OTP we sent to your email address for verification.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Verify Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, BrokerSignUpComponent_ng_template_87_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Partner with the PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Fill the form to streamline your process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Change Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Create Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Setup Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h2", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "By clicking OK you agree with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Terms & Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " of our website. You can change the cookies preferences or withdraw consent related to cookies , please update your cookies preferences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Ok ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: [".auth--data--wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 30px 1rem;\n  height: calc(100vh - 67px);\n  overflow: auto;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-stepper-horizontal {\n  background-color: transparent;\n  width: 100%;\n  position: relative;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-horizontal-content-container {\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-card-content {\n  padding: 1rem;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-hint {\n  color: #6589a9;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-form-field-hint-spacer {\n  display: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #222;\n  margin: 5px 0 25px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  background-color: #eee;\n  box-shadow: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #333;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #222;\n  line-height: 19px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-infix {\n  width: auto;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .resend--code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -7px;\n  font-weight: 500;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 30px 0 15px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1.4px 1.4px 20px 7px rgba(88, 92, 101, 0.15);\n  background-color: #fff;\n  padding: 20px;\n  position: absolute;\n  right: -375px;\n  width: 484px;\n  bottom: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 599px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    padding: 15px;\n    position: relative;\n    width: 93%;\n    margin-top: 20px;\n    right: 0;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -135px;\n    width: 195px;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1279px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -269px;\n    width: 327px;\n  }\n}\n\n@media only screen and (min-width: 1280px) and (max-width: 1440px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -386px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvYnJva2VyL2Jyb2tlci1zaWduLXVwL0M6XFxQcmFzaGFudC13b3Jrc3BhY2VcXGFyay1wbG4vc3JjXFxhcHBcXHZpZXdzXFxhdXRoXFxzaWdudXBcXGJyb2tlclxcYnJva2VyLXNpZ24tdXBcXGJyb2tlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hdXRoL3NpZ251cC9icm9rZXIvYnJva2VyLXNpZ24tdXAvYnJva2VyLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixjQUFjO0FDQ2xCOztBRExBO0VBT1EsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxrQkFBa0I7QUNFMUI7O0FEWEE7RUFZUSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7QUNHbEI7O0FEakJBO0VBaUJRLGFBQWE7QUNJckI7O0FEckJBO0VBcUJRLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FDSXRCOztBRDdCQTtFQTJCWSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FDTTNCOztBRHBDQTtFQWlDWSxhQUFhO0FDT3pCOztBRHhDQTtFQXdDUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ0kzQjs7QUQ5Q0E7RUE2Q1EsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FDSzVCOztBRHJEQTtFQW1EUSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FDTXhCOztBRDFEQTtFQXVEWSxlQUFlO0VBQ2YsV0FBVztBQ092Qjs7QUQvREE7RUEyRFksZ0JBQWdCO0FDUTVCOztBRG5FQTtFQStEZ0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNRaEM7O0FENUVBO0VBeUV3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNPMUM7O0FEbkZBO0VBK0V3QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQ1F0Qzs7QUQzRkE7RUF3RmdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FDT2hDOztBRGpHQTtFQThGWSxrQkFBa0I7QUNPOUI7O0FEckdBO0VBZ0dnQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQ1NyQzs7QUQzR0E7RUF3R1Esa0JBQWtCO0VBQ2xCLHlEQUF5RDtFQUN6RCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7QUNPakI7O0FEdEhBO0VBaUhZLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDUy9COztBRDVIQTtFQXFIZ0IsZ0JBQWdCO0FDV2hDOztBRGhJQTtFQXlIWSxlQUFlO0VBQ2YsbUJBQW1CO0FDVy9COztBRExBO0VBQ0k7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsUUFBUTtFQ1FkO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLGFBQWE7SUFDYixZQUFZO0VDU2xCO0FBQ0Y7O0FEUEE7RUFDSTtJQUNJLGFBQWE7SUFDYixZQUFZO0VDVWxCO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLGFBQ0o7RUNVRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvYnJva2VyL2Jyb2tlci1zaWduLXVwL2Jyb2tlci1zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtLWRhdGEtLXdyYXBwZXJ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDMwcHggMXJlbTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY3cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgIDo6bmctZGVlcHtcclxuICAgIC5tYXQtc3RlcHBlci1ob3Jpem9udGFse1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgICAgIGNvbG9yOiAjNjU4OWE5O1xyXG4gICAgICAgIC5tYXQtaGludHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NTg5YTk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtaGludC1zcGFjZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICBcclxuICAgfVxyXG4gICAuc2lnbnVwLS1zdGVwLS1vbmV7XHJcbiAgICAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgfVxyXG4gICAgICAgLm9ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMjVweCAwO1xyXG4gICAgICAgfVxyXG4gICAgICAgLm1hdC1taW5pLWZhYntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmltYXJ5LWJ0bntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5vdHAtLXNlY3Rpb257XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmVudGVyLS1vdHB7XHJcbiAgICAgICAgICAgICAgICA6Om5nLWRlZXB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NTg5YTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVzZW5kLS1jb2Rle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmN5cC0tc2VjdGlvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoNXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMCAxNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC5wcml2YWN5LS1wb2xpY3ktLXNlY3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTEuNHB4IDEuNHB4IDIwcHggN3B4IHJnYmEoODgsIDkyLCAxMDEsIDAuMTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0zNzVweDtcclxuICAgICAgICB3aWR0aDogNDg0cHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICB3aWR0aDogOTMlOyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NzlweCl7XHJcbiAgICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWN7XHJcbiAgICAgICAgcmlnaHQ6IC0xMzVweDtcclxuICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCl7XHJcbiAgICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWN7XHJcbiAgICAgICAgcmlnaHQ6IC0yNjlweDtcclxuICAgICAgICB3aWR0aDogMzI3cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2Vje1xyXG4gICAgICAgIHJpZ2h0OiAtMzg2cHhcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkgYW5kIChtYXgtd2lkdGg6IDE1NTBweCl7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODUwcHgpe30iLCIuYXV0aC0tZGF0YS0td3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAzMHB4IDFyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY3cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTg5YTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIC5tYXQtaGludCB7XG4gIGNvbG9yOiAjNjU4OWE5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWhpbnQtc3BhY2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiA1cHggMCAyNXB4IDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAubWF0LW1pbmktZmFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5mYSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAucHJpbWFyeS1idG4ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm90cC0tc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gLmVudGVyLS1vdHAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gLmVudGVyLS1vdHAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTg5YTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5yZXNlbmQtLWNvZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAuY3lwLS1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLmN5cC0tc2VjdGlvbiBoNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IC0xLjRweCAxLjRweCAyMHB4IDdweCByZ2JhKDg4LCA5MiwgMTAxLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTM3NXB4O1xuICB3aWR0aDogNDg0cHg7XG4gIGJvdHRvbTogMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMgaDIgLmZhIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTMlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7XG4gICAgcmlnaHQ6IC0xMzVweDtcbiAgICB3aWR0aDogMTk1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICAgIHJpZ2h0OiAtMjY5cHg7XG4gICAgd2lkdGg6IDMyN3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7XG4gICAgcmlnaHQ6IC0zODZweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-broker-sign-up',
                templateUrl: './broker-sign-up.component.html',
                styleUrls: ['./broker-sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/auth/signup/loan-processor/lp-sign-up/lp-sign-up.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/auth/signup/loan-processor/lp-sign-up/lp-sign-up.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LpSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LpSignUpComponent", function() { return LpSignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













function LpSignUpComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Basic Information");
} }
function LpSignUpComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Verification");
} }
function LpSignUpComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Set Password");
} }
const _c0 = function () { return ["/broker/signup-successful"]; };
class LpSignUpComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.secondFormGroup = this._formBuilder.group({});
        this.thirdFormGroup = this._formBuilder.group({});
    }
}
LpSignUpComponent.ɵfac = function LpSignUpComponent_Factory(t) { return new (t || LpSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LpSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LpSignUpComponent, selectors: [["app-lp-sign-up"]], decls: 89, vars: 7, consts: [[1, "auth--data--wrapper", "page-login", "page-wrap"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 1, "signup--wrapper", "w-100"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "99", "fxFlex.sm", "62", "fxFlex.md", "46", "fxFlex.lg", "40", "fxFlex.xl", "30", 1, "relative"], ["labelPosition", "bottom", "linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "signIn-wrapper", "signup--step--one"], ["mode", "determinate", 1, "session-progress"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "start"], [1, "full-width"], ["formControlName", "firstName", "matInput", "", "type", "text", "name", "first_name", "placeholder", "First Name *"], ["formControlName", "lastName", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email *"], ["fxLayout", "row", "fxLayoutAlign", "start start", 1, "pb-1"], [1, "fnt-12", "clr-222", "text-center"], ["name", "axs"], ["mat-raised-button", "", "matStepperNext", "", 1, "primary-btn"], ["fxLayout", "column", 1, "otp--section", "full-width"], [1, "mt-0"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutGap.xs", "5px", 1, "enter--otp"], ["matInput", "", "value", "1", "type", "text"], ["matInput", "", "value", "2", "type", "text"], ["matInput", "", "value", "3", "type", "text"], ["matInput", "", "value", "4", "type", "text"], ["matInput", "", "value", "5", "type", "text"], ["matInput", "", "value", "6", "type", "text"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "clr-6589a9", "resend--code"], ["mat-raised-button", "", "matStepperNext", "", 1, "primary-btn", "mt-25"], ["fxLayout", "column", 1, "cyp--section", "full-width"], [1, "mt-0", "text-center"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Choose a Password"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Confirm Password"], ["mat-raised-button", "", 1, "primary-btn", 3, "routerLink"]], template: function LpSignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LpSignUpComponent_ng_template_7_Template, 1, 0, "ng-template", 7);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "error here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Note: you'll need to contact ThePLN tech team if you want to change your email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " I agree with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Terms & Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Privacy policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " of the PLN website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Verify Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, LpSignUpComponent_ng_template_42_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Please enter the OTP we sent to your email address for verification.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "error here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Verify Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, LpSignUpComponent_ng_template_72_Template, 1, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Create Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "error here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Setup Account ");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], styles: [".auth--data--wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 30px 1rem;\n  height: calc(100vh - 67px);\n  overflow: auto;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-stepper-horizontal {\n  background-color: transparent;\n  width: 100%;\n  position: relative;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-horizontal-content-container {\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-card-content {\n  padding: 1rem;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-hint {\n  color: #6589a9;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-form-field-hint-spacer {\n  display: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-checkbox .mat-checkbox-layout {\n  white-space: normal;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-checkbox .mat-checkbox-layout .mat-checkbox-inner-container {\n  margin: 2px 8px 0 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-checkbox .mat-checkbox-layout .mat-checkbox-label {\n  color: #222;\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-checkbox .mat-checkbox-layout .mat-checkbox-label a {\n  color: #6589a9;\n  font-weight: 500;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #222;\n  margin: 5px 0 25px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  background-color: #eee;\n  box-shadow: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #333;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #222;\n  line-height: 19px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-infix {\n  width: auto;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .resend--code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -7px;\n  font-weight: 500;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 30px 0 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvbG9hbi1wcm9jZXNzb3IvbHAtc2lnbi11cC9DOlxcUHJhc2hhbnQtd29ya3NwYWNlXFxhcmstcGxuL3NyY1xcYXBwXFx2aWV3c1xcYXV0aFxcc2lnbnVwXFxsb2FuLXByb2Nlc3NvclxcbHAtc2lnbi11cFxcbHAtc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYXV0aC9zaWdudXAvbG9hbi1wcm9jZXNzb3IvbHAtc2lnbi11cC9scC1zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztBQ0NsQjs7QURMQTtFQU9RLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0FDRTFCOztBRFhBO0VBWVEsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FDR2xCOztBRGpCQTtFQWlCUSxhQUFhO0FDSXJCOztBRHJCQTtFQXFCUSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQ0l0Qjs7QUQ3QkE7RUEyQlksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQ00zQjs7QURwQ0E7RUFpQ1ksYUFBYTtBQ096Qjs7QUR4Q0E7RUFzQ1ksbUJBQW1CO0FDTS9COztBRDVDQTtFQXdDZ0IsbUJBQW1CO0FDUW5DOztBRGhEQTtFQTJDZ0IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUNTakM7O0FEdERBO0VBK0NvQixjQUFjO0VBQ2QsZ0JBQWdCO0FDV3BDOztBRDNEQTtFQXlEUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ00zQjs7QURqRUE7RUE4RFEsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsb0JBQW9CO0FDTzVCOztBRHhFQTtFQW9FUSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FDUXhCOztBRDdFQTtFQXdFWSxlQUFlO0VBQ2YsV0FBVztBQ1N2Qjs7QURsRkE7RUE0RVksZ0JBQWdCO0FDVTVCOztBRHRGQTtFQWdGZ0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNVaEM7O0FEL0ZBO0VBMEZ3QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNTMUM7O0FEdEdBO0VBZ0d3QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQ1V0Qzs7QUQ5R0E7RUF5R2dCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FDU2hDOztBRHBIQTtFQWdIZ0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUNRckMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdXRoL3NpZ251cC9sb2FuLXByb2Nlc3Nvci9scC1zaWduLXVwL2xwLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC0tZGF0YS0td3JhcHBlcntcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMzBweCAxcmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjdweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgOjpuZy1kZWVwe1xyXG4gICAgLm1hdC1zdGVwcGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICAgICAgY29sb3I6ICM2NTg5YTk7XHJcbiAgICAgICAgLm1hdC1oaW50e1xyXG4gICAgICAgICAgICBjb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1oaW50LXNwYWNlcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgLm1hdC1jaGVja2JveCB7XHJcbiAgICAgICAgLm1hdC1jaGVja2JveC1sYXlvdXR7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHggOHB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0LWNoZWNrYm94LWxhYmVse1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NTg5YTk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICB9XHJcbiAgIC5zaWdudXAtLXN0ZXAtLW9uZXtcclxuICAgICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICAub3J7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMCAyNXB4IDA7XHJcbiAgICAgICB9XHJcbiAgICAgICAubWF0LW1pbmktZmFie1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaW1hcnktYnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLm90cC0tc2VjdGlvbntcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW50ZXItLW90cHtcclxuICAgICAgICAgICAgICAgIDo6bmctZGVlcHtcclxuICAgICAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXNlbmQtLWNvZGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3lwLS1zZWN0aW9ueyBcclxuICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbiBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NzlweCl7XHJcbiAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCl7XHJcbiAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkgYW5kIChtYXgtd2lkdGg6IDE1NTBweCl7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODUwcHgpe30iLCIuYXV0aC0tZGF0YS0td3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAzMHB4IDFyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY3cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTg5YTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIC5tYXQtaGludCB7XG4gIGNvbG9yOiAjNjU4OWE5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWhpbnQtc3BhY2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciA6Om5nLWRlZXAgLm1hdC1jaGVja2JveCAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnB4IDhweCAwIDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWNoZWNrYm94IC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3ggLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCBhIHtcbiAgY29sb3I6ICM2NTg5YTk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSBoMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyMjI7XG4gIG1hcmdpbjogNXB4IDAgMjVweCAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm1hdC1taW5pLWZhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAuZmEge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLnByaW1hcnktYnRuIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5lbnRlci0tb3RwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5lbnRlci0tb3RwIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU4OWE5O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm90cC0tc2VjdGlvbiAucmVzZW5kLS1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLmN5cC0tc2VjdGlvbiBoNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LpSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lp-sign-up',
                templateUrl: './lp-sign-up.component.html',
                styleUrls: ['./lp-sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/views/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _signup_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.routing */ "./src/app/views/auth/signup/signup.routing.ts");
/* harmony import */ var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./broker/broker-sign-up/broker-sign-up.component */ "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts");
/* harmony import */ var _loan_processor_lp_sign_up_lp_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loan-processor/lp-sign-up/lp-sign-up.component */ "./src/app/views/auth/signup/loan-processor/lp-sign-up/lp-sign-up.component.ts");







// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';





class SignupModule {
}
SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SignupModule });
SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_signup_routing__WEBPACK_IMPORTED_MODULE_7__["SignupRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignupModule, { declarations: [_broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"], _loan_processor_lp_sign_up_lp_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["LpSignUpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_signup_routing__WEBPACK_IMPORTED_MODULE_7__["SignupRoutes"])
                ],
                declarations: [
                    _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"], _loan_processor_lp_sign_up_lp_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["LpSignUpComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/auth/signup/signup.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/signup/signup.routing.ts ***!
  \*****************************************************/
/*! exports provided: SignupRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutes", function() { return SignupRoutes; });
/* harmony import */ var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker/broker-sign-up/broker-sign-up.component */ "./src/app/views/auth/signup/broker/broker-sign-up/broker-sign-up.component.ts");
/* harmony import */ var _loan_processor_lp_sign_up_lp_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-processor/lp-sign-up/lp-sign-up.component */ "./src/app/views/auth/signup/loan-processor/lp-sign-up/lp-sign-up.component.ts");


const SignupRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__["BrokerSignUpComponent"],
                data: { title: "Broker Signup" }
            },
            {
                path: "loan-processor",
                component: _loan_processor_lp_sign_up_lp_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["LpSignUpComponent"],
                data: { title: "LP Signup" }
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-auth-signup-signup-module-es2015.js.map