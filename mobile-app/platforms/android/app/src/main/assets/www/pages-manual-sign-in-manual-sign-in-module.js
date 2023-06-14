(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manual-sign-in-manual-sign-in-module"],{

/***/ "./src/app/pages/manual-sign-in/manual-sign-in.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/manual-sign-in/manual-sign-in.module.ts ***!
  \***************************************************************/
/*! exports provided: ManualSignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualSignInPageModule", function() { return ManualSignInPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manual_sign_in_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manual-sign-in.page */ "./src/app/pages/manual-sign-in/manual-sign-in.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _manual_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["ManualSignInPage"]
    }
];
var ManualSignInPageModule = /** @class */ (function () {
    function ManualSignInPageModule() {
    }
    ManualSignInPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_manual_sign_in_page__WEBPACK_IMPORTED_MODULE_5__["ManualSignInPage"]]
        })
    ], ManualSignInPageModule);
    return ManualSignInPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manual-sign-in/manual-sign-in.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/manual-sign-in/manual-sign-in.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Sign in visitor</ion-text>\n        </ion-text>\n    </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"padding-bottom: 50px;\">\n  <form [formGroup]=\"service.form\" (submit)=\"signIn()\">\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">First Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">Last Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">Mobile Number</ion-label>\n      <ion-input type=\"tel\" formControlName=\"mobile\"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">Company Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"company_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\">Address</ion-label>\n      <ion-input type=\"text\" formControlName=\"address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input> \n    </ion-item>\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">ID Number</ion-label>\n      <ion-input type=\"text\" formControlName=\"id_number\"></ion-input>\n    </ion-item>\n    <ion-item >\n      <ion-label position=\"floating\" color=\"secondary\">Vehicle Registration</ion-label>\n      <ion-input type=\"text\" formControlName=\"vehicle_reg\"></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-top: 25px\">\n      <ion-label color=\"secondary\">Person Visited</ion-label>\n      <ion-select ok-text=\"Done\" cancel-text=\"Cancel\" formControlName=\"person_visited\">\n        <ion-select-option *ngFor=\"let employee of employee\" value=\"{{employee._id}}\">{{employee.first_name}} {{employee.last_name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style=\"margin-top: 25px\">\n      <ion-label color=\"secondary\">Purpose of visit</ion-label>\n      <ion-select ok-text=\"Done\" cancel-text=\"Cancel\" formControlName=\"purpose_of_visit\">\n        <ion-select-option value=\"Business\">Business</ion-select-option>\n        <ion-select-option value=\"Personal\">Personal</ion-select-option>\n        <ion-select-option value=\"Delivery\">Delivery</ion-select-option>\n        <ion-select-option value=\"Work\">Work</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-row style=\"padding:10px; margin-top: 20px; margin-bottom: 50px;\">\n      <ion-col no-padding>\n        <ion-button type=\"submit\" expand=\"clear\" color=\"primary\" style=\"width: 100%;\" icon-start [disabled]=\"service.form.invalid\">\n          Done\n        </ion-button>\n      </ion-col>\n      <ion-col text-right no-padding>\n        <ion-button expand=\"clear\" color=\"danger\" style=\"width: 100%;\" icon-start (click)=\"onClear()\">\n          Clear\n        </ion-button>\n      </ion-col>    \n    </ion-row>\n    <!-- <ion-button expand=\"clear\" type=\"submit\" color=\"secondary\" [disabled]=\"!visitorsForm.valid\">Sign in</ion-button> -->\n  </form>\n  \n</ion-content>\n<popmenu></popmenu>"

/***/ }),

/***/ "./src/app/pages/manual-sign-in/manual-sign-in.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/manual-sign-in/manual-sign-in.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW11a2EvRG9jdW1lbnRzL0RldmVsb3BtZW50UHJvamVjdHMvYm9va2luZy1tYXRlL21vYmlsZS1hcHAvc3JjL2FwcC9wYWdlcy9tYW51YWwtc2lnbi1pbi9tYW51YWwtc2lnbi1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbnVhbC1zaWduLWluL21hbnVhbC1zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0FDQVI7QURHSTtFQUNJLGdCQUFBO0VBQ0EsaURBQUE7QUNEUjtBREtRO0VBQ0ksZ0JBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnVhbC1zaWduLWluL21hbnVhbC1zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAmLm5vLXJhZGl1cyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manual-sign-in/manual-sign-in.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/manual-sign-in/manual-sign-in.page.ts ***!
  \*************************************************************/
/*! exports provided: ManualSignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualSignInPage", function() { return ManualSignInPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/visitors.service */ "./src/app/services/visitors.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var TOKEN_KEY = 'access_token';
var ManualSignInPage = /** @class */ (function () {
    function ManualSignInPage(service, employeeService, navCtrl, menuCtrl, popoverCtrl, alertCtrl, loadingCtrl, modalCtrl, toastCtrl, spinner, helper, storage) {
        this.service = service;
        this.employeeService = employeeService;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.spinner = spinner;
        this.helper = helper;
        this.storage = storage;
        this.visitorInfo = null;
    }
    ManualSignInPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStaff()];
                    case 1:
                        _a.sent();
                        this.spinner.show();
                        return [4 /*yield*/, this.getEmployee()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualSignInPage.prototype.getStaff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(TOKEN_KEY)
                            .then(function (token) {
                            if (token) {
                                var decoded = _this.helper.decodeToken(token);
                                _this.staff = decoded;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualSignInPage.prototype.getEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.employeeService.allEmployees(this.staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return _this.spinner.hide(); })).subscribe(function (res) {
                            _this.employee = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualSignInPage.prototype.executeSignIn = function () {
        if (this.service.form.valid) {
            this.service.visitorSignin(this.service.form.value, this.staff).subscribe();
            this.service.form.reset();
            this.service.initializeFormGroup();
        }
    };
    ManualSignInPage.prototype.onClear = function () {
        this.service.form.reset();
        this.service.initializeFormGroup();
    };
    ManualSignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmation',
                            message: 'Sign in the visitor?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }, {
                                    text: 'Confirm',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var loader;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    this.executeSignIn();
                                                    return [4 /*yield*/, this.loadingCtrl.create({
                                                            duration: 2000
                                                        })];
                                                case 1:
                                                    loader = _a.sent();
                                                    loader.present();
                                                    loader.onWillDismiss().then(function (l) { return __awaiter(_this, void 0, void 0, function () {
                                                        var toast;
                                                        return __generator(this, function (_a) {
                                                            switch (_a.label) {
                                                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                                                        showCloseButton: true,
                                                                        message: 'Visitor signed in successfully',
                                                                        duration: 3000,
                                                                        position: 'bottom'
                                                                    })];
                                                                case 1:
                                                                    toast = _a.sent();
                                                                    toast.present();
                                                                    return [2 /*return*/];
                                                            }
                                                        });
                                                    }); });
                                                    this.ngOnInit();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualSignInPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-sign-in',
            template: __webpack_require__(/*! ./manual-sign-in.page.html */ "./src/app/pages/manual-sign-in/manual-sign-in.page.html"),
            styles: [__webpack_require__(/*! ./manual-sign-in.page.scss */ "./src/app/pages/manual-sign-in/manual-sign-in.page.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_1__["VisitorsService"],
            src_app_services_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ManualSignInPage);
    return ManualSignInPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manual-sign-in-manual-sign-in-module.js.map