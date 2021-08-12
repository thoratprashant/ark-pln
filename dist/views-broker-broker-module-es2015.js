(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-broker-broker-module"],{

/***/ "./src/app/views/broker/broker.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/broker/broker.module.ts ***!
  \***********************************************/
/*! exports provided: BrokerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerModule", function() { return BrokerModule; });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared-material.module */ "./src/app/shared/shared-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _broker_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./broker.routing */ "./src/app/views/broker/broker.routing.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js");
/* harmony import */ var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/broker/profile/profile.component.ts");





























// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
class BrokerModule {
}
BrokerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BrokerModule });
BrokerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function BrokerModule_Factory(t) { return new (t || BrokerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__["FileUploadModule"],
            app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_25__["SharedPipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_broker_routing__WEBPACK_IMPORTED_MODULE_7__["BrokerRoutes"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrokerModule, { declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__["FileUploadModule"],
        app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_25__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrokerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_22__["NgxDatatableModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_23__["ChartsModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__["FileUploadModule"],
                    app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_25__["SharedPipesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_broker_routing__WEBPACK_IMPORTED_MODULE_7__["BrokerRoutes"])
                ],
                declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/broker/broker.routing.ts":
/*!************************************************!*\
  !*** ./src/app/views/broker/broker.routing.ts ***!
  \************************************************/
/*! exports provided: BrokerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokerRoutes", function() { return BrokerRoutes; });
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/views/broker/profile/profile.component.ts");

const BrokerRoutes = [
    {
        path: "",
        children: [
            {
                path: "profile",
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"],
                data: { title: "Broker profile" }
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/views/broker/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/broker/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "./src/app/shared/services/auth/jwt-auth.service.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");















class ProfileComponent {
    constructor(router, jwtAuth) {
        this.router = router;
        this.jwtAuth = jwtAuth;
        this.hide = true;
        this.addFriend = false;
        this.activeView = "overview";
        // Doughnut
        this.doughnutChartColors = [
            {
                backgroundColor: ["#fff", "rgba(0, 0, 0, .24)"],
            },
        ];
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
                position: "bottom",
            },
            elements: {
                arc: {
                    borderWidth: 0,
                },
            },
            tooltips: {
                enabled: false,
            },
        };
    }
    ngOnInit() {
        this.activeView = this.router.snapshot.params["view"];
        this.user = this.jwtAuth.user$;
        this.countryTrafficStats = [
            {
                "id": 1,
                "name": "Marko Apostolski",
                "img": "assets/images/face-1.jpg",
                "mutualFriends": "5 Mutual friends",
                "picked": false
            },
            {
                "id": 1,
                "name": "Sofija Apostolska",
                "img": "assets/images/images/face-2.jpg",
                "mutualFriends": "5 Mutual friends",
                "picked": false
            },
            {
                "id": 1,
                "name": "Elena Ravnjanski",
                "img": "assets/images/images/face-3.jpg",
                "mutualFriends": "7 Mutual friends",
                "picked": false
            },
        ];
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 126, vars: 12, consts: [[1, "profile-wrapper"], [1, "profile-header", "h-18"], ["src", " assets/images/arkenea/banner-prof.png", "alt", "", 1, "banner"], [1, "container"], ["fxHide", "", "fxShow.gt-sm", "", 1, "propic", "text-center"], [1, "big"], [1, "fw-700", "mt-8"], [1, "line-wrapper"], ["fxLayout", "row wrap", "fxLayoutAlign", "end end", 1, "line"], ["mat-flat-button", ""], [1, "mr-1", "mat-color-primary"], [1, "container", "main-profile-wrapper"], [1, "tabs"], ["label", "Personal Information"], ["fxLayout", "row wrap", 1, "main"], ["fxFlex", "100", "fxFlex.gt-sm", "100", "fxFlex.sm", "50", 1, "column"], [1, "default"], [1, "card-title"], [1, "fw-500"], [1, "user-info"], [1, "icon-bg-wrap", "mr-8"], [1, "icon-circle", "w-2.5", "h-2.5", "rounded-circle", "mat-bg-primary"], ["fxFlex", "100", "fxFlex.gt-sm", "33.33", "fxFlex.sm", "50", 1, "column"], ["label", "Organization Information"], ["label", "Change Password"], [1, "large-box", "mat-elevation-z4"], ["role", "list"], [1, "header"], ["role", "listitem"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "float-end", ""]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Abhi Golhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Personal Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Abhi Golhar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 123-456-7890 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " abhi@abhigolhar.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "add_location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Chicago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Organization Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " 00389 (70)258 778 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "add_location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Mk 1000, Skopje ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " www.yourwebsite.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " admin@admin.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-list", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Enter Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_104_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Enter New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_112_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "mat-list-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Confirm New password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_120_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"]], styles: [".large-box[_ngcontent-%COMP%] {\n  margin: 16px 0px 16px 0px;\n  padding: 16px;\n  border-radius: 8px;\n  height: auto;\n  width: 100%;\n  border-bottom: 1px solid #bbbbbb;\n  font-size: 24px;\n  background-color: white;\n}\n\n.banner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.mat-tab[_ngcontent-%COMP%] {\n  display: flex;\n  border-top: 1px solid #bbbb;\n  margin-top: 20px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  box-sizing: border-box;\n  width: 132%;\n}\n\n.header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.personal-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.company-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb;\n  width: 100%;\n  display: flex;\n  margin-bottom: 30px;\n  padding: 12px 0px 21px 0px;\n}\n\n.big[_ngcontent-%COMP%] {\n  font-size: 61px;\n  border-radius: 50%;\n  background-color: #6589a9;\n  width: 135px;\n  height: 135px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  margin: -140px 0px 0px 0px;\n  position: absolute;\n  color: #eeeeee;\n  border: solid 3px #eee;\n  align-items: center;\n}\n\n.big-header[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  padding-bottom: 20px;\n  font-family: bold;\n  border-bottom: 1px solid #eeee;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.3fr 1fr;\n  gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnJva2VyL3Byb2ZpbGUvQzpcXFByYXNoYW50LXdvcmtzcGFjZVxcYXJrLXBsbi9zcmNcXGFwcFxcdmlld3NcXGJyb2tlclxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvYnJva2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWM7RUFDZCx1QkFBc0I7QUNBMUI7O0FER0E7RUFDSSxhQUFhO0VBQ2IsdUJBQXVCO0FDQTNCOztBRElBO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUNEcEI7O0FEdUJBO0VBQ0ksb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztBQ3BCZjs7QUR5QkE7RUFDSSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGFBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQXlCO0FDdEI3Qjs7QUR5QkE7RUFDSSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGFBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQXlCO0FDdEI3Qjs7QUR5QkE7RUFDSSxnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLGFBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQXlCO0FDdEI3Qjs7QUQ0Q0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixtQkFBbUI7QUN6Q3ZCOztBRDZDQTtFQUNJLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDhCQUE2QjtBQzFDakM7O0FEOENBO0VBQ0ksYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0FDM0NiIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYnJva2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXJnZS1ib3h7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMTZweCAwcHggMTZweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9ICAgXHJcblxyXG4uYmFubmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLm1hdC10YWJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmJiO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLy8gLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0sIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24sIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4vLyAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS4yOTtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgICAgY29sb3I6ICM4ODg7XHJcbiAgICBcclxuLy8gfVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEzMiU7XHJcbn1cclxuXHJcblxyXG5cclxuLmhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzoxMnB4IDBweCAyMXB4IDBweDtcclxufVxyXG5cclxuLnBlcnNvbmFsLWhlYWRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzoxMnB4IDBweCAyMXB4IDBweDtcclxufVxyXG5cclxuLmNvbXBhbnktaGVhZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiYmI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOjEycHggMHB4IDIxcHggMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC5tYXQtaWNvbntcclxuLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAvKiBmaWxsOiBjdXJyZW50Q29sb3I7ICovXHJcbi8vICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICB3aWR0aDogMzBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM2NTg5YTk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBmb250LXNpemU6IDMwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XHJcbiAgIFxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi5iaWd7XHJcbiAgICBmb250LXNpemU6IDYxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjU4OWE5O1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgaGVpZ2h0OiAxMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogLTE0MHB4IDBweCAwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNlZWVlZWU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjZWVlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4uYmlnLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBib2xkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkI2VlZWU7XHJcbiAgICBcclxufVxyXG5cclxuLnVzZXItaW5mb3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcclxuICAgIGdhcDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG4iLCIubGFyZ2UtYm94IHtcbiAgbWFyZ2luOiAxNnB4IDBweCAxNnB4IDBweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LXRhYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiYjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTMyJTtcbn1cblxuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMTJweCAwcHggMjFweCAwcHg7XG59XG5cbi5wZXJzb25hbC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDEycHggMHB4IDIxcHggMHB4O1xufVxuXG4uY29tcGFueS1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDEycHggMHB4IDIxcHggMHB4O1xufVxuXG4uYmlnIHtcbiAgZm9udC1zaXplOiA2MXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NTg5YTk7XG4gIHdpZHRoOiAxMzVweDtcbiAgaGVpZ2h0OiAxMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAtMTQwcHggMHB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlcjogc29saWQgM3B4ICNlZWU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaWctaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBib2xkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWU7XG59XG5cbi51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-broker-broker-module-es2015.js.map