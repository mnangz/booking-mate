(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-in-booking-sign-in-booking-module"],{

/***/ "./src/app/pages/sign-in-booking/sign-in-booking.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sign-in-booking/sign-in-booking.module.ts ***!
  \*****************************************************************/
/*! exports provided: SignInBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInBookingPageModule", function() { return SignInBookingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_in_booking_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-booking.page */ "./src/app/pages/sign-in-booking/sign-in-booking.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _sign_in_booking_page__WEBPACK_IMPORTED_MODULE_5__["SignInBookingPage"]
    }
];
var SignInBookingPageModule = /** @class */ (function () {
    function SignInBookingPageModule() {
    }
    SignInBookingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_in_booking_page__WEBPACK_IMPORTED_MODULE_5__["SignInBookingPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], SignInBookingPageModule);
    return SignInBookingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sign-in-booking/sign-in-booking.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sign-in-booking/sign-in-booking.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Bookings</ion-text>\n        </ion-text>\n    </ion-title>\n    \n  </ion-toolbar>\n  <ion-toolbar color=\"dark\">\n    <ion-searchbar (ionInput)=\"filterList($event.target.value)\"></ion-searchbar>\n    <!-- <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing Bookings...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <div class=\"wrap\" style=\"height: 100%; flex-direction: column;\" *ngIf=\"empty\">\n    <ion-text style=\"text-align: center; margin-bottom: 60px; font-size: 20px; color: blue;\">No bookings found,...pull to refresh</ion-text>\n  </div> -->\n\n  <ion-card *ngFor=\"let booking of bookings\">\n    <ion-card-content no-padding>\n      <ion-card-title style=\"padding-bottom: 5px; font-size: 18px; background-color:#2f32a0; color: white; padding: 5px;\">\n        {{booking.first_name}} {{booking.last_name}}\n      </ion-card-title>\n      <p style=\"font-size: 12px; padding: 6px;\">\n        <strong>Booking #:</strong> {{booking.booking_ref_no}} <br><strong>Date: </strong>{{booking.visit_date | date: 'dd/MM/yyyy'}} <br><strong>Pupose of Visit: </strong>{{booking.purpose_of_visit}}\n      </p>\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <ion-button expand=\"clear\" size=\"small\" color=\"primary\" style=\"width: 100%;\" icon-start (click)=\"presentBooking(booking)\">\n          <ion-icon name='information'></ion-icon>\n          &nbsp; Info\n        </ion-button>\n      </ion-col>\n      <ion-col text-right no-padding>\n        <ion-button expand=\"clear\" size=\"small\" color=\"primary\" style=\"width: 100%;\" icon-start (click)=\"signIn(booking)\">\n          <ion-icon name='log-in'></ion-icon>\n          &nbsp; Sign In\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  \n  \n</ion-content>\n\n<ngx-spinner></ngx-spinner>\n\n<popmenu></popmenu>\n\n  "

/***/ }),

/***/ "./src/app/pages/sign-in-booking/sign-in-booking.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sign-in-booking/sign-in-booking.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW11a2EvRG9jdW1lbnRzL0RldmVsb3BtZW50UHJvamVjdHMvYm9va2luZy1tYXRlL21vYmlsZS1hcHAvc3JjL2FwcC9wYWdlcy9zaWduLWluLWJvb2tpbmcvc2lnbi1pbi1ib29raW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi1pbi1ib29raW5nL3NpZ24taW4tYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRFI7QURLUTtFQUNJLGdCQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLWluLWJvb2tpbmcvc2lnbi1pbi1ib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAmLm5vLXJhZGl1cyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sign-in-booking/sign-in-booking.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/sign-in-booking/sign-in-booking.page.ts ***!
  \***************************************************************/
/*! exports provided: SignInBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInBookingPage", function() { return SignInBookingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/visitors.service */ "./src/app/services/visitors.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







// Modals



var TOKEN_KEY = 'access_token';
var SignInBookingPage = /** @class */ (function () {
    function SignInBookingPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, loadingCtrl, modalCtrl, toastCtrl, service, visitorsService, spinner, helper, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.visitorsService = visitorsService;
        this.spinner = spinner;
        this.helper = helper;
        this.storage = storage;
        this.searchKey = '';
        this.loading = false;
        this.empty = true;
    }
    SignInBookingPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStaff()];
                    case 1:
                        _a.sent();
                        this.spinner.show();
                        return [4 /*yield*/, this.getBookings()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInBookingPage.prototype.getStaff = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(TOKEN_KEY)
                            .then(function (token) {
                            if (token) {
                                var decoded = _this.helper.decodeToken(token);
                                _this.staff = decoded;
                                console.log(_this.staff);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInBookingPage.prototype.getBookings = function () {
        var _this = this;
        this.service.allBookings(this.staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { return _this.spinner.hide(); })).subscribe(function (res) {
            _this.bookings = res;
            if (_this.bookings) {
                _this.empty = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignInBookingPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getBookings();
            event.target.complete();
        }, 2000);
    };
    SignInBookingPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    SignInBookingPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignInBookingPage.prototype.filterList = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var searchTerm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = evt;
                        if (!!searchTerm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getBookings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.bookings = this.bookings.filter(function (currentVisitor) {
                            if (currentVisitor.first_name && searchTerm) {
                                return (currentVisitor.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                            }
                            if (currentVisitor.last_name && searchTerm) {
                                return (currentVisitor.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                            }
                            if (currentVisitor.booking_ref_no && searchTerm) {
                                return (currentVisitor.booking_ref_no.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SignInBookingPage.prototype.presentBooking = function (booking) {
        return __awaiter(this, void 0, void 0, function () {
            var myBooking, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myBooking = JSON.stringify(booking);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_8__["ImagePage"],
                                componentProps: { value: myBooking }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignInBookingPage.prototype.signIn = function (booking) {
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
                                                    this.service.removeBooking(booking._id).subscribe();
                                                    this.visitorsService.visitorSignin(booking, this.staff).subscribe();
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
    SignInBookingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in-booking',
            template: __webpack_require__(/*! ./sign-in-booking.page.html */ "./src/app/pages/sign-in-booking/sign-in-booking.page.html"),
            styles: [__webpack_require__(/*! ./sign-in-booking.page.scss */ "./src/app/pages/sign-in-booking/sign-in-booking.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            src_app_services_booking_service__WEBPACK_IMPORTED_MODULE_2__["BookingService"],
            src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_3__["VisitorsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], SignInBookingPage);
    return SignInBookingPage;
}());



/***/ }),

/***/ "./src/app/services/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TOKEN_KEY = 'access_token';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BookingService = /** @class */ (function () {
    function BookingService(http, helper, storage, plt) {
        this.http = http;
        this.helper = helper;
        this.storage = storage;
        this.plt = plt;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            id_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            vehicle_reg: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            purpose_of_visit: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            person_visited: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            visit_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            booking_ref_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            date_booking_made: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
        });
        // this.plt.ready().then(() => {
        //   this.getStaff();
        // });
    }
    // async getStaff() {
    //   await this.storage.get(TOKEN_KEY)
    //     .then((token) => {
    //       if (token) {
    //         let decoded = this.helper.decodeToken(token);
    //         this.company_id = decoded.company;
    //         this.staff_id = decoded.id;
    //       }
    //     });
    // }
    BookingService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    BookingService.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    BookingService.prototype.allBookings = function (staff) {
        return this.http.get(this.url + "/api/bookings/" + staff.company, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    BookingService.prototype.makeBooking = function (credentials) {
        return this.http.post(this.url + "/api/booking/" + this.company_id + "/create/" + this.staff_id, credentials, httpOptions);
    };
    BookingService.prototype.sendMail = function (credentials) {
        console.log('in send mail function');
        return this.http.post(this.url + "/api/sendmail", credentials);
    };
    BookingService.prototype.removeBooking = function (id) {
        return this.http.delete(this.url + "/api/booking/delete/" + id, id);
    };
    BookingService.prototype.getBooking = function (id) {
        return this.http.get(this.url + "/api/booking/" + id, id);
    };
    BookingService.prototype.update = function (credentials) {
        return this.http.patch(this.url + "/api/booking/edit", credentials);
    };
    BookingService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            _id: null,
            first_name: '',
            last_name: '',
            mobile: '',
            email: '',
            company_name: '',
            address: '',
            id_number: '',
            vehicle_reg: '',
            purpose_of_visit: '',
            person_visited: '',
            notes: '',
            visit_date: '',
            booking_ref_no: '',
            barcode: '',
            __v: null,
            date_booking_made: null,
        });
    };
    BookingService.prototype.populateForm = function (booking) {
        this.form.setValue(booking);
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]])
    ], BookingService);
    return BookingService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-in-booking-sign-in-booking-module.js.map