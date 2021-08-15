(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"],{

/***/ "./src/app/views/sessions/broker/broker-sign-up/broker-sign-up.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/sessions/broker/broker-sign-up/broker-sign-up.component.ts ***!
  \**********************************************************************************/
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
function BrokerSignUpComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Verification");
} }
function BrokerSignUpComponent_ng_template_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Partner with the PLN");
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
BrokerSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrokerSignUpComponent, selectors: [["app-broker-sign-up"]], decls: 132, vars: 7, consts: [[1, "auth--data--wrapper", "page-login", "page-wrap"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center center", 1, "signup--wrapper", "w-100"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center center", "fxFlex.xs", "99", "fxFlex.sm", "62", "fxFlex.md", "46", "fxFlex.lg", "40", "fxFlex.xl", "30", 1, "relative"], ["labelPosition", "bottom", "linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "signIn-wrapper", "signup--step--one"], ["mode", "determinate", 1, "session-progress"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxLayoutAlign", "start"], [1, "full-width"], ["formControlName", "firstName", "matInput", "", "type", "text", "name", "first_name", "placeholder", "First Name *"], ["formControlName", "lastName", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *"], ["formControlName", "phoneNumber", "matInput", "", "type", "number", "name", "phone", "placeholder", "Phone Number *"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email *"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "or"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "full-width"], ["mat-mini-fab", "", 1, "mr-10"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["mat-mini-fab", ""], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], ["mat-raised-button", "", "matStepperNext", "", 1, "primary-btn"], ["matInput", "", "type", "text", "name", "first_name", "value", "Abhi", "placeholder", "User / Vendor name *", "disabled", ""], ["value", "Golhar", "matInput", "", "type", "text", "name", "last_name", "placeholder", "Last Name *", "disabled", ""], ["value", "123-456-7890", "matInput", "", "type", "text", "name", "phone", "placeholder", "Phone Number *", "disabled", ""], ["matInput", "", "value", "abhi@abhigolhar.com", "type", "email", "name", "email", "placeholder", "Email *", "disabled", ""], ["fxLayout", "column", 1, "otp--section", "full-width"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutGap.xs", "5px", 1, "enter--otp"], ["matInput", "", "value", "1", "type", "text"], ["matInput", "", "value", "2", "type", "text"], ["matInput", "", "value", "3", "type", "text"], ["matInput", "", "value", "4", "type", "text"], ["matInput", "", "value", "5", "type", "text"], ["matInput", "", "value", "6", "type", "text"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "clr-6589a9", "resend--code"], ["fxLayout", "column", 1, "cyp--section", "full-width"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Choose a Password"], ["matInput", "", "type", "password", "name", "cyp", "placeholder", "Confirm Password"], ["mat-raised-button", "", 1, "primary-btn", 3, "routerLink"], [1, "privacy--policy--sec"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "clr-222"], ["aria-hidden", "true", 1, "fa", "fa-lock"], [1, "clr-222"], [1, "clr-6589a9"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", 1, "primary-btn"]], template: function BrokerSignUpComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: [".auth--data--wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  padding: 30px 1rem;\n  height: calc(100vh - 67px);\n  overflow: auto;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-stepper-horizontal {\n  background-color: transparent;\n  width: 100%;\n  position: relative;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-horizontal-content-container {\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-card-content {\n  padding: 1rem;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-hint {\n  color: #6589a9;\n  font-weight: 500;\n  cursor: pointer;\n  z-index: 999999;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper .mat-form-field-hint-spacer {\n  display: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 30px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #222;\n  margin: 5px 0 25px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  background-color: #eee;\n  box-shadow: none;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #333;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .primary-btn[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #222;\n  line-height: 19px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-infix {\n  width: auto;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .enter--otp[_ngcontent-%COMP%]     .mat-form-field-hint-wrapper {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 7px;\n  font-size: 12px;\n  color: #6589a9;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .otp--section[_ngcontent-%COMP%]   .resend--code[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: -7px;\n  font-weight: 500;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .signup--step--one[_ngcontent-%COMP%]   .cyp--section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  margin: 30px 0 15px 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: -1.4px 1.4px 20px 7px rgba(88, 92, 101, 0.15);\n  background-color: #fff;\n  padding: 20px;\n  position: absolute;\n  right: -375px;\n  width: 484px;\n  bottom: 0;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n\n.auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 17px;\n}\n\n@media only screen and (max-width: 599px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    padding: 15px;\n    position: relative;\n    width: 93%;\n    margin-top: 20px;\n    right: 0;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 979px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -135px;\n    width: 195px;\n  }\n}\n\n@media only screen and (min-width: 980px) and (max-width: 1279px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -269px;\n    width: 327px;\n  }\n}\n\n@media only screen and (min-width: 1280px) and (max-width: 1440px) {\n  .auth--data--wrapper[_ngcontent-%COMP%]   .privacy--policy--sec[_ngcontent-%COMP%] {\n    right: -386px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2Vzc2lvbnMvYnJva2VyL2Jyb2tlci1zaWduLXVwL0M6XFxQcmFzaGFudC13b3Jrc3BhY2VcXGFyay1wbG4vc3JjXFxhcHBcXHZpZXdzXFxzZXNzaW9uc1xcYnJva2VyXFxicm9rZXItc2lnbi11cFxcYnJva2VyLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Nlc3Npb25zL2Jyb2tlci9icm9rZXItc2lnbi11cC9icm9rZXItc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7QUNDbEI7O0FETEE7RUFPUSw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLGtCQUFrQjtBQ0UxQjs7QURYQTtFQVlRLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtBQ0dsQjs7QURqQkE7RUFpQlEsYUFBYTtBQ0lyQjs7QURyQkE7RUFvQlEsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUNLdEI7O0FEN0JBO0VBMEJZLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUNPM0I7O0FEcENBO0VBZ0NZLGFBQWE7QUNRekI7O0FEeENBO0VBc0NRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDTTNCOztBRDlDQTtFQTJDUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7QUNPNUI7O0FEckRBO0VBaURRLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUNReEI7O0FEMURBO0VBcURZLGVBQWU7RUFDZixXQUFXO0FDU3ZCOztBRC9EQTtFQXlEWSxnQkFBZ0I7QUNVNUI7O0FEbkVBO0VBNkRnQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQ1VoQzs7QUQ1RUE7RUF1RXdCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQ1MxQzs7QURuRkE7RUE2RXdCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FDVXRDOztBRDNGQTtFQXNGZ0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUNTaEM7O0FEakdBO0VBNEZZLGtCQUFrQjtBQ1M5Qjs7QURyR0E7RUE4RmdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FDV3JDOztBRDNHQTtFQXNHUSxrQkFBa0I7RUFDbEIseURBQXlEO0VBQ3pELHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztBQ1NqQjs7QUR0SEE7RUErR1ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNXL0I7O0FENUhBO0VBbUhnQixnQkFBZ0I7QUNhaEM7O0FEaElBO0VBdUhZLGVBQWU7RUFDZixtQkFBbUI7QUNhL0I7O0FEUkE7RUFDSTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixRQUFRO0VDV2Q7QUFDRjs7QURUQTtFQUNJO0lBQ0ksYUFBYTtJQUNiLFlBQVk7RUNZbEI7QUFDRjs7QURWQTtFQUNJO0lBQ0ksYUFBYTtJQUNiLFlBQVk7RUNhbEI7QUFDRjs7QURYQTtFQUNJO0lBQ0ksYUFDSjtFQ2FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zZXNzaW9ucy9icm9rZXIvYnJva2VyLXNpZ24tdXAvYnJva2VyLXNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC0tZGF0YS0td3JhcHBlcntcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMzBweCAxcmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjdweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgOjpuZy1kZWVwe1xyXG4gICAgLm1hdC1zdGVwcGVyLWhvcml6b250YWx7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAgICBjb2xvcjogIzY1ODlhOTtcclxuICAgICAgICAubWF0LWhpbnR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjU4OWE5O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWhpbnQtc3BhY2Vye1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnNpZ251cC0tc3RlcC0tb25le1xyXG4gICAgICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgIH1cclxuICAgICAgIC5vcntcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDI1cHggMDtcclxuICAgICAgIH1cclxuICAgICAgIC5tYXQtbWluaS1mYWJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpbWFyeS1idG57XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAub3RwLS1zZWN0aW9ue1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5lbnRlci0tb3Rwe1xyXG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwe1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjU4OWE5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlc2VuZC0tY29kZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jeXAtLXNlY3Rpb257XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAucHJpdmFjeS0tcG9saWN5LS1zZWN7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0xLjRweCAxLjRweCAyMHB4IDdweCByZ2JhKDg4LCA5MiwgMTAxLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMzc1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7IFxyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICB3aWR0aDogOTMlOyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NzlweCl7XHJcbiAgICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWN7XHJcbiAgICAgICAgcmlnaHQ6IC0xMzVweDtcclxuICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCl7XHJcbiAgICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWN7XHJcbiAgICAgICAgcmlnaHQ6IC0yNjlweDtcclxuICAgICAgICB3aWR0aDogMzI3cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2Vje1xyXG4gICAgICAgIHJpZ2h0OiAtMzg2cHhcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkgYW5kIChtYXgtd2lkdGg6IDE1NTBweCl7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODUwcHgpe30iLCIuYXV0aC0tZGF0YS0td3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAzMHB4IDFyZW07XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY3cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTg5YTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaGludC13cmFwcGVyIC5tYXQtaGludCB7XG4gIGNvbG9yOiAjNjU4OWE5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWhpbnQtc3BhY2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIGgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm9yIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzIyMjtcbiAgbWFyZ2luOiA1cHggMCAyNXB4IDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAubWF0LW1pbmktZmFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5mYSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAucHJpbWFyeS1idG4ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLm90cC0tc2VjdGlvbiBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gLmVudGVyLS1vdHAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnNpZ251cC0tc3RlcC0tb25lIC5vdHAtLXNlY3Rpb24gLmVudGVyLS1vdHAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTg5YTk7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAub3RwLS1zZWN0aW9uIC5yZXNlbmQtLWNvZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hdXRoLS1kYXRhLS13cmFwcGVyIC5zaWdudXAtLXN0ZXAtLW9uZSAuY3lwLS1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAuc2lnbnVwLS1zdGVwLS1vbmUgLmN5cC0tc2VjdGlvbiBoNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAzMHB4IDAgMTVweCAwO1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IC0xLjRweCAxLjRweCAyMHB4IDdweCByZ2JhKDg4LCA5MiwgMTAxLCAwLjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTM3NXB4O1xuICB3aWR0aDogNDg0cHg7XG4gIGJvdHRvbTogMDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMgaDIgLmZhIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmF1dGgtLWRhdGEtLXdyYXBwZXIgLnByaXZhY3ktLXBvbGljeS0tc2VjIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogOTMlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk3OXB4KSB7XG4gIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7XG4gICAgcmlnaHQ6IC0xMzVweDtcbiAgICB3aWR0aDogMTk1cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkgYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAuYXV0aC0tZGF0YS0td3JhcHBlciAucHJpdmFjeS0tcG9saWN5LS1zZWMge1xuICAgIHJpZ2h0OiAtMjY5cHg7XG4gICAgd2lkdGg6IDMyN3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5hdXRoLS1kYXRhLS13cmFwcGVyIC5wcml2YWN5LS1wb2xpY3ktLXNlYyB7XG4gICAgcmlnaHQ6IC0zODZweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrokerSignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-broker-sign-up',
                templateUrl: './broker-sign-up.component.html',
                styleUrls: ['./broker-sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/sessions/sessions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _sessions_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sessions.routing */ "./src/app/views/sessions/sessions.routing.ts");
/* harmony import */ var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./broker/broker-sign-up/broker-sign-up.component */ "./src/app/views/sessions/broker/broker-sign-up/broker-sign-up.component.ts");







// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';




class SessionsModule {
}
SessionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SessionsModule });
SessionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SessionsModule_Factory(t) { return new (t || SessionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_7__["SessionsRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionsModule, { declarations: [_broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_7__["SessionsRoutes"])
                ],
                declarations: [
                    _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_8__["BrokerSignUpComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/sessions/sessions.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/sessions/sessions.routing.ts ***!
  \****************************************************/
/*! exports provided: SessionsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function() { return SessionsRoutes; });
/* harmony import */ var _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker/broker-sign-up/broker-sign-up.component */ "./src/app/views/sessions/broker/broker-sign-up/broker-sign-up.component.ts");

const SessionsRoutes = [
    {
        path: "",
        children: [
            {
                path: "signup",
                component: _broker_broker_sign_up_broker_sign_up_component__WEBPACK_IMPORTED_MODULE_0__["BrokerSignUpComponent"],
                data: { title: "Broker Signup" }
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=views-sessions-sessions-module-es2015.js.map