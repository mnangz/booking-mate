(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
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
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_5__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_5__["HomeResultsPage"]],
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text color=\"light\">\n          <ion-text color=\"light\" class=\"fw700\">Booking Mate</ion-text>\n        </ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let company of company\" style=\"text-align: center;\">\n    <img src=\"{{company.company_logo}}\" style=\"height: 80px; margin-top: 50px;\">\n  </div>\n  \n  <div class=\"wrap\" style=\"height: 70%; flex-direction: column;\" *ngIf=\"staff\">\n    <ion-text style=\"text-align: center; margin-bottom: 60px; font-size: 20px;\">Hi, {{staff.first_name}}</ion-text>\n    <button class=\"htbutton\" (click) =\"scanCode()\">\n      <ion-ripple-effect></ion-ripple-effect>\n      <ion-icon name=\"md-barcode\" slot=\"middle\" size=\"large\"></ion-icon><br><br>\n      <span>Scan badge</span>\n   </button>\n   <ion-text style=\"margin-top: 25px; font-size: 14px;\">Please ensure camera lens is clean</ion-text>\n  </div>\n  \n  \n  <popmenu></popmenu>\n</ion-content>\n\n<!-- <barcode-scanner-livestream\n      type=\"code_128\"\n      (valueChanges)=\"onValueChanges($event)\"\n      (started)=\"(onStarted)\"\n    ></barcode-scanner-livestream>\n    <div [hidden]=\"!barcodeValue\">\n      {{ barcodeValue }}\n    </div> -->\n  "

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\nhtml, body {\n  height: 80%;\n}\n.wrap {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.htbutton {\n  min-width: 220px;\n  min-height: 220px;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 1.3px;\n  font-weight: 700;\n  color: #ffffff;\n  background: #2f32a0;\n  background: linear-gradient(90deg, rgb(47, 50, 160) 0%, rgb(47, 49, 197) 100%);\n  border: none;\n  border-radius: 50%;\n  box-shadow: 12px 12px 24px rgba(79, 125, 209, 0.64);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 10px;\n}\nhtbutton::before {\n  content: \"\";\n  border-radius: 1000px;\n  min-width: 312px;\n  min-height: 72px;\n  border: 6px solid #00FFCB;\n  box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: all 0.3s ease-in-out 0s;\n}\n.htbutton:hover, .htbutton:focus {\n  color: #e7e7eb;\n  -webkit-transform: translateY(-6px);\n          transform: translateY(-6px);\n}\nhtbutton:hover::before, htbutton:focus::before {\n  opacity: 1;\n}\nhtbutton::after {\n  content: \"\";\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  border: 6px solid #00FFCB;\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: ring 1.5s infinite;\n          animation: ring 1.5s infinite;\n}\nhtbutton:hover::after, htbutton:focus::after {\n  -webkit-animation: none;\n          animation: none;\n  display: none;\n}\n@-webkit-keyframes ring {\n  0% {\n    width: 30px;\n    height: 30px;\n    opacity: 1;\n  }\n  100% {\n    width: 300px;\n    height: 300px;\n    opacity: 0;\n  }\n}\n@keyframes ring {\n  0% {\n    width: 30px;\n    height: 30px;\n    opacity: 1;\n  }\n  100% {\n    width: 300px;\n    height: 300px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW11a2EvRG9jdW1lbnRzL0RldmVsb3BtZW50UHJvamVjdHMvYm9va2luZy1tYXRlL21vYmlsZS1hcHAvc3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL2hvbWUtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQ0FBQTtBQ0FSO0FER0k7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0FDRFI7QURLUTtFQUNJLGdCQUFBO0FDSFo7QURRQTtFQUNJLFdBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTEo7QURRRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDRiw4RUFBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0xKO0FEUUU7RUFDQSxXQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDTEo7QURRRTtFQUNFLFVBQUE7QUNMSjtBRFFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFBYSxZQUFBO0VBQ2IsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNKSjtBRE9FO0VBQ0UsdUJBQUE7VUFBQSxlQUFBO0VBQ0EsYUFBQTtBQ0pKO0FET0U7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQ0pKO0VETUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUNKSjtBQUNGO0FETkU7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQ0pKO0VETUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUNKSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS1yZXN1bHRzL2hvbWUtcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgJi5uby1yYWRpdXMge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gIH1cbiAgXG4gIC53cmFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuaHRidXR0b24ge1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQ6ICMyZjMyYTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg0Nyw1MCwxNjAsMSkgMCUsIHJnYmEoNDcsNDksMTk3LDEpIDEwMCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDI0cHggcmdiYSg3OSwgMTI1LCAyMDksIDAuNjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgXG4gIGh0YnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gICAgbWluLXdpZHRoOiBjYWxjKDMwMHB4ICsgMTJweCk7XG4gICAgbWluLWhlaWdodDogY2FsYyg2MHB4ICsgMTJweCk7XG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwRkZDQjtcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsMjU1LDIwMywuNjQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB9XG4gIFxuICAuaHRidXR0b246aG92ZXIsIC5odGJ1dHRvbjpmb2N1cyB7XG4gICAgY29sb3I6ICNlN2U3ZWI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICB9XG4gIFxuICBodGJ1dHRvbjpob3Zlcjo6YmVmb3JlLCBodGJ1dHRvbjpmb2N1czo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIFxuICBodGJ1dHRvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYW5pbWF0aW9uOiByaW5nIDEuNXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIGh0YnV0dG9uOmhvdmVyOjphZnRlciwgaHRidXR0b246Zm9jdXM6OmFmdGVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByaW5nIHtcbiAgICAwJSB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY2FyZC5uby1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi53cmFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmh0YnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMyZjMyYTA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiKDQ3LCA1MCwgMTYwKSAwJSwgcmdiKDQ3LCA0OSwgMTk3KSAxMDAlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDEycHggMTJweCAyNHB4IHJnYmEoNzksIDEyNSwgMjA5LCAwLjY0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5odGJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICBtaW4td2lkdGg6IDMxMnB4O1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xuICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsIDI1NSwgMjAzLCAwLjY0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5odGJ1dHRvbjpob3ZlciwgLmh0YnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6ICNlN2U3ZWI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbn1cblxuaHRidXR0b246aG92ZXI6OmJlZm9yZSwgaHRidXR0b246Zm9jdXM6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmh0YnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICMwMEZGQ0I7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IHJpbmcgMS41cyBpbmZpbml0ZTtcbn1cblxuaHRidXR0b246aG92ZXI6OmFmdGVyLCBodGJ1dHRvbjpmb2N1czo6YWZ0ZXIge1xuICBhbmltYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgcmluZyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _modal_scanned_scanned_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/scanned/scanned.page */ "./src/app/pages/modal/scanned/scanned.page.ts");
/* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
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
var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, loadingCtrl, barcodeScanner, helper, storage, companyService, plt) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.barcodeScanner = barcodeScanner;
        this.helper = helper;
        this.storage = storage;
        this.companyService = companyService;
        this.plt = plt;
        this.scannedCode = null;
        this.qrOptions = { prompt: 'Scan the QR Code to sign visitor in', resultDisplayDuration: 1500, showTorchButton: true, disableSuccessBeep: false };
    }
    HomeResultsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStaff()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getCompanyInfo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_4__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.getStaff = function () {
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
    HomeResultsPage.prototype.getCompanyInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.companyService.getCompany(this.staff)
                            .subscribe(function (res) {
                            _this.company = res;
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
    HomeResultsPage.prototype.scanCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.barcodeScanner.scan(this.qrOptions)
                            .then(function (barcodeData) {
                            _this.scannedCode = JSON.parse(barcodeData.text);
                        })
                            .catch(function (err) {
                            console.log('Error', err);
                        })];
                    case 1:
                        _a.sent();
                        this.presentVisitor(this.scannedCode);
                        return [2 /*return*/];
                }
            });
        });
    };
    // async openDetailsWithService() {
    //   await this.dataService.setData(7, this.scannedCode);
    //   this.router.navigateByUrl('/manual-sign-in/7');
    // }
    HomeResultsPage.prototype.presentVisitor = function (visitor) {
        return __awaiter(this, void 0, void 0, function () {
            var myVisitor, modal, loader;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myVisitor = JSON.stringify(visitor);
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modal_scanned_scanned_page__WEBPACK_IMPORTED_MODULE_6__["ScannedPage"],
                                componentProps: { value: myVisitor }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                duration: 2000
                            })];
                    case 2:
                        loader = _a.sent();
                        loader.present();
                        loader.onWillDismiss().then(function (l) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, modal.present()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_services_company_service__WEBPACK_IMPORTED_MODULE_7__["CompanyService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        // this.authService.onTokenChange()
        //   .subscribe((token: NbAuthJWTToken) => {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            isActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            staff: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            visitors: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            bookings: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            company_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            company_phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            company_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            company_logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            company_color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            __v: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
        });
        //     if (token.isValid()) {
        //       this.staff = token.getPayload();
        //       this.id = this.staff.company;
        //     }
        //   });
    }
    CompanyService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CompanyService.prototype.insertCompanyInfo = function (credentials) {
        return this.http.post(this.url + "/api/company/", credentials, httpOptions);
    };
    CompanyService.prototype.getCompany = function (staff) {
        return this.http.get(this.url + "/api/company/" + staff.company, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    CompanyService.prototype.changeCompanyInfo = function (credentials) {
        return this.http.patch(this.url + "/api/company/edit/" + this.id, credentials);
    };
    CompanyService.prototype.initializeFormGroup = function () {
        this.form.setValue({
            _id: null,
            isActive: null,
            staff: null,
            visitors: null,
            bookings: null,
            company_id: '',
            company_name: '',
            compamny_email: '',
            compamny_phone_no: '',
            compamny_address: '',
            compamny_logo: '',
            company_color: '',
            __v: null,
        });
    };
    CompanyService.prototype.populateForm = function (company) {
        this.form.patchValue(company);
    };
    CompanyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map