(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visitor-sign-out-visitor-sign-out-module"],{

/***/ "./src/app/pages/visitor-sign-out/visitor-sign-out.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visitor-sign-out/visitor-sign-out.module.ts ***!
  \*******************************************************************/
/*! exports provided: VisitorSignOutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorSignOutPageModule", function() { return VisitorSignOutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _visitor_sign_out_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-sign-out.page */ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.ts");
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
        component: _visitor_sign_out_page__WEBPACK_IMPORTED_MODULE_5__["VisitorSignOutPage"]
    }
];
var VisitorSignOutPageModule = /** @class */ (function () {
    function VisitorSignOutPageModule() {
    }
    VisitorSignOutPageModule = __decorate([
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
            declarations: [_visitor_sign_out_page__WEBPACK_IMPORTED_MODULE_5__["VisitorSignOutPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], VisitorSignOutPageModule);
    return VisitorSignOutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visitor-sign-out/visitor-sign-out.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Visitors</ion-text>\n        </ion-text>\n    </ion-title>\n    \n  </ion-toolbar>\n  <ion-toolbar color=\"dark\">\n    <ion-searchbar (ionInput)=\"filterList($event.target.value)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" style=\"color: darkblue;\">\n    <ion-refresher-content\n      \n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing Visitors...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor=\"let visitor of visitors\">\n\n    <ion-card-content no-padding>\n      <ion-card-title style=\"padding-bottom: 5px; font-size: 18px; background-color:#2f32a0; color: white; padding: 5px;\">\n        {{visitor.first_name}} {{visitor.last_name}}\n      </ion-card-title>\n      <p style=\"font-size: 13px; padding: 6px;\">\n        <strong>Date: </strong>{{visitor.createdAt | date: 'dd/MM/yyyy'}} <br> <strong>Sign in Time:</strong> {{visitor.createdAt | date: 'shortTime'}} \n        <br> <strong>Pupose of Visit: </strong>{{visitor.purpose_of_visit}}\n      </p>\n      <!-- <p style=\"font-size: 13px; padding: 6px;\" >\n        <strong>Visitor Seen: </strong>\n      <span [ngClass]=\"{\n        'yes' : visitor.visitor_seen == true,\n        'no' : visitor.visitor_seen == false\n     }\"> {{visitor.visitor_seen? 'Yes' : \"No\"}}</span> \n      </p> -->\n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col no-padding>\n        <ion-button expand=\"clear\" size=\"small\" color=\"primary\" style=\"width: 100%;\" icon-start (click)=\"presentVisitor(visitor)\">\n          <ion-icon name='information'></ion-icon>\n          &nbsp; Info\n        </ion-button>\n      </ion-col>\n      <ion-col text-right no-padding>\n        <ion-button expand=\"clear\" size=\"small\" color=\"primary\" style=\"width: 100%;\" icon-start (click)=\"signOut(visitor._id)\">\n          <ion-icon name='log-out'></ion-icon>\n          &nbsp; Sign Out\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n  \n  \n</ion-content>\n\n<ngx-spinner></ngx-spinner>\n\n<popmenu></popmenu>"

/***/ }),

/***/ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visitor-sign-out/visitor-sign-out.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n.yes {\n  color: #0bda0b;\n}\n.no {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW11a2EvRG9jdW1lbnRzL0RldmVsb3BtZW50UHJvamVjdHMvYm9va2luZy1tYXRlL21vYmlsZS1hcHAvc3JjL2FwcC9wYWdlcy92aXNpdG9yLXNpZ24tb3V0L3Zpc2l0b3Itc2lnbi1vdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXNpdG9yLXNpZ24tb3V0L3Zpc2l0b3Itc2lnbi1vdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxpREFBQTtBQ0RSO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FEUUE7RUFDSSxjQUFBO0FDTEo7QURRRTtFQUNFLFVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc2l0b3Itc2lnbi1vdXQvdmlzaXRvci1zaWduLW91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgJi5uby1yYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnllcyB7XG4gICAgY29sb3I6ICMwYmRhMGI7XG4gIH1cbiAgXG4gIC5ubyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfSIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNhcmQubm8tcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnllcyB7XG4gIGNvbG9yOiAjMGJkYTBiO1xufVxuXG4ubm8ge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/visitor-sign-out/visitor-sign-out.page.ts ***!
  \*****************************************************************/
/*! exports provided: VisitorSignOutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorSignOutPage", function() { return VisitorSignOutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/visitors.service */ "./src/app/services/visitors.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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



;
var TOKEN_KEY = 'access_token';
var VisitorSignOutPage = /** @class */ (function () {
    function VisitorSignOutPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, loadingCtrl, modalCtrl, toastCtrl, service, spinner, helper, storage) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.spinner = spinner;
        this.helper = helper;
        this.storage = storage;
        this.searchKey = '';
    }
    VisitorSignOutPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStaff()];
                    case 1:
                        _a.sent();
                        this.spinner.show();
                        return [4 /*yield*/, this.getVisitors()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorSignOutPage.prototype.getStaff = function () {
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
    VisitorSignOutPage.prototype.getVisitors = function () {
        var _this = this;
        this.service.visitorsCurrentlySignedIn(this.staff).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return _this.spinner.hide(); })).subscribe(function (res) {
            _this.visitors = res;
        }, function (err) {
            console.log(err);
        });
    };
    VisitorSignOutPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getVisitors();
            event.target.complete();
        }, 2000);
    };
    VisitorSignOutPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    VisitorSignOutPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitorSignOutPage.prototype.filterList = function (evt) {
        return __awaiter(this, void 0, void 0, function () {
            var searchTerm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = evt;
                        if (!!searchTerm) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getVisitors()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                    case 2:
                        this.visitors = this.visitors.filter(function (currentVisitor) {
                            if (currentVisitor.first_name && searchTerm) {
                                return (currentVisitor.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                            }
                            if (currentVisitor.last_name && searchTerm) {
                                return (currentVisitor.last_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VisitorSignOutPage.prototype.presentVisitor = function (visitor) {
        return __awaiter(this, void 0, void 0, function () {
            var myVisitor, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myVisitor = JSON.stringify(visitor);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_7__["ImagePage"],
                                componentProps: { value: myVisitor }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VisitorSignOutPage.prototype.signOut = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirmation',
                            message: 'Sign out the visitor?',
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
                                                    this.service.visitorSignOut(id).subscribe();
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
                                                                        message: 'Visitor signed out successfully',
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
    VisitorSignOutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visitor-sign-out',
            template: __webpack_require__(/*! ./visitor-sign-out.page.html */ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.html"),
            styles: [__webpack_require__(/*! ./visitor-sign-out.page.scss */ "./src/app/pages/visitor-sign-out/visitor-sign-out.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_visitors_service__WEBPACK_IMPORTED_MODULE_3__["VisitorsService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], VisitorSignOutPage);
    return VisitorSignOutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-visitor-sign-out-visitor-sign-out-module.js.map