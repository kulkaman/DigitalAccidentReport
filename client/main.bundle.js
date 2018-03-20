webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n<!-- <link rel=\"stylesheet\" href=\"/path/to/css/material-icons.min.css\">\\ -->\n\n <div class=\"container starter-template \" style=\"background-color: #E9E9E9 \">\n<nav class=\"navbar navbar-default navbar-inverse navbar-fixed-top\" >\n\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" style=\"color:white;\" href = \"https://invulnerable-moliere-46227.herokuapp.com/\">Digital Accident Reporting</a>\n\t <a href=\"tel:18628034850\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVGhD5dlLqE1RHMfx4y2FFEkmHikJKQMlZeSVRx4TA48BJh4DI4pEJqKMZKAM5FlCRErMJAYkJcVIyQRRXpHX9zc4ddr91jl739Y5+3/zq8/kdu7Zv733unevtXajQqbgME5gsX7QH7MJX/G3xWkMQr/IABzEH7SeRJPuTvgMxwW4E2i1DmGjIXMdrnjRR0xEyGjIuNIp1xAuK+HKdqLfC5OheA1XtJPnGIwQ2QZXsqytCJFHcAXLeozaMxmuXFXjUGs2wBWrahZqzXG4YlXV/ky5BFesigeoPXfgypX1CTNRe+7BFSzjPeYjRC7DlezkJaYhTE7CFW3nLEYiVHbAlU25Aq1XwmUuXOGUOQgZTfg+w5V2Qt6NZs7DlXbGI2yWw5V21iNshuAtXPEiPXdCZw9ccUd3MGxGQRsKrniRHobDEDYH4Io7+mzYjEDZtfsvLEHYrIUr7nyAVphhcxuuuPMEupMhMwGaorvizi1oSylk1sCVTtFksi+79GOxG2egnU4dN/tFOQVXOuUcqpzMCrxD8XteYRGyRTvzD1E8UDtXUWatsgv6z+e+Q37jCLLtYmp35A3cwVJeYDpSqfK80pRoDLJkHr7DHSjlC/ZhNJrR2D8G9/l2dGEmIUtWo91QSNEJ3cUNuL+HsvSgnoos2YLU67he0BDPdmeqzJK74T6yZS/cQXplIbJlO+oaZjuRNRvxA+5g3bQA2aMt07LL5By0Odi16KFZdQbQFxfR9cmpphL70a2hdhQ93VPTm6ucd+cnNC+rJbpyq/AMrlxZesk6G7VnIJZB0/tvcGWdp9iMMO/vW6PtpqU4hJvQ8NO2kujVnbZttcCagf8tjcY/2tImBsXPeGQAAAAASUVORK5CYII=\" style=\"text-align: right; height: 35px; width: 30px; padding-top: 10px; position: absolute; right: 30px;\" ></a> \n\t <!-- <a href=\"tel:18628034850\"><img src=\"./../app/icon_contact.svg\" class=\"navbar-phone\" ></a>  -->\n                <!-- class=\"img-responsive navbar-brand\"  -->\n            </div>\n    </nav>\n\t    </div>\n\t\n        <div class=\"container starter-template\" style=\"background-color: #E9E9E9 \">\n\t\t <!-- <a href=\"tel:1-862-803-4850\">Call me</a>\n\t\t <div id=\"box28\"> <a href=\"tel:1-862-803-4850\">Please call</a> </div>   -->\n            <p class=\"lead\" align=\"center\" style=\"text-align: center; padding-top: 30px;\">Report Car Incident<br> </p>\n\n            <form class=\"form-horizontal\">\n            \n            <div *ngIf=\"mobileSource\">\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Rental Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Rental Number\" [(ngModel)]=\"raNumber\" name=\"raNumber\" maxlength=\"10\">\n                    </div>\n                </div>\n                <!-- <div class=\"form-group cust-form-label\">\n                    <label class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label\">MVA Number</label>\n                    <div class=\"col-xs-9 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"23456789\" [(ngModel)]=\"mvaNumber\" name=\"mvaNumber\">\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-3 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n                </div> -->\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Last Name\" [(ngModel)]=\"lastName\" name=\"lastName\" maxlength=\"30\">\n                    </div>\n                </div>\n                </div>\n                \n                 <div *ngIf=\"desktopSource\">\n                 <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Rental Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Rental Number\" [(ngModel)]=\"raNumber\" name=\"raNumber\" maxlength=\"10\">\n                    </div>\n                </div>\n                <!-- <div class=\"form-group cust-form-label\">\n                    <label class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label\">MVA Number</label>\n                    <div class=\"col-xs-9 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"23456789\" [(ngModel)]=\"mvaNumber\" name=\"mvaNumber\">\n\t                </div>\n\t\t\t\t\t<div class=\"col-xs-3 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n                </div> -->\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Last Name\" [(ngModel)]=\"lastName\" name=\"lastName\" maxlength=\"30\">\n                    </div>\n                </div>\n                </div>\n                <div class=\"form-group cust-form-label\">\n                    <label class=\"col-sm-3 col-md-3 col-lg-3 control-label\">Claim Number</label>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter Claim Number\" [(ngModel)]=\"claimNumber\" name=\"claimNumber\">\n                    </div>\n                </div>\n                <div class=\"form-group\" style=\"margin: 6px\">\n                \n                    <div id=\"bloc1\" class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\">\n                        <button type=\"submit\" class=\"btn btn-primary btn-block btn-sm\" (click)=\"checkClaim('new')\" routerLink=\"/new\">\n                        <div id=\"bloc2\" *ngIf=\"loadingResultsNewFetched\">\n                        <span class=\"glyphicon glyphicon-refresh spinning\"></span>\n                     </div>   \n                        Report Car Incident</button>\n\t\t\t\t\t \n\t\t\t\t\t </div>\n                    <div id=\"bloc1\" class=\"col-sm-4 col-md-4 col-lg-4 \">\n                        <button type=\"submit\" class=\"btn btn-default btn-block\" (click)=\"checkClaim('about')\" routerLink=\"/about\">\n                        <div id=\"bloc2\" *ngIf=\"loadingResultsViewFetched\">\n                        <span class=\"glyphicon glyphicon-refresh spinning\"></span>\n                     </div>\n                        View / Edit Claim</button>\n                    </div>\n                </div>\n\n            </form>\n        </div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("./src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(postsService, router) {
        this.title = 'app works!';
        this.validRaNoClaim = false;
        this.mobileSource = true;
        this.postsService = postsService;
        this.router = router;
        console.log("router value in app " + this.router);
        this.openScanner = false;
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            this.mobileSource = true;
            this.desktopSource = false;
        }
        else {
            this.desktopSource = true;
            this.mobileSource = false;
        }
    }
    Object.defineProperty(AppComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.decodedOutput = function (result) {
        console.log("Scanner output :" + result);
        this.openScanner = false;
        this.raNumber = "1233444";
        this.lastName = "Mandar";
        this.claimNumber = "xxx";
    };
    AppComponent.prototype.checkClaim = function (path) {
        if (path == 'new')
            this.loadingResultsNewFetched = true;
        else
            this.loadingResultsViewFetched = true;
        // this.postsService.raNumberInput = this.raNumber;
        // this.postsService.lastNameInput = this.lastName ;
        // this.postsService.claimNumberInput = this.claimNumber ;
        this.blankFields = false;
        // var raNumber = this.raNumber;
        // this.postsService.getPosts(this.raNumber, this.lastName, this.claimNumber).subscribe(posts => {
        //     this.posts = posts;
        //     this.postsService.posts = this.posts;
        //    console.log("IN check claim" + this.posts[0].rentalAgreementNumber);
        if (path == 'new' || this.posts[0].claimNumber != null) {
            this.loadingResultsNewFetched = false;
            this.loadingResultsViewFetched = false;
        }
        else {
            this.validRaNoClaim = true;
            this.posts[0].firstName = "JOHN";
            this.posts[0].lastName = "LEWIS";
            //          this.router.navigate([path]);
            this.loadingResultsViewFetched = false;
        }
        //}
        //, err => {this.lookupFailed = true;
        //      this.router.navigate([path]);}
        //  );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "raNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "lastName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AppComponent.prototype, "claimNumber", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            /*      styleUrls: ['./css/bootstrap.min.css',
                              './css/jumbotron.css',
                              './css/bootstrap.css',
                              './css/bootstrap-theme.css',
                              './css/bootstrap-theme.min.css',
                              './css/damage.css']
             ,*/
            styles: [__webpack_require__("./src/app/css/damage.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__ = __webpack_require__("./node_modules/angular2-signaturepad/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__ = __webpack_require__("./node_modules/angular2-ui-switch/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__ = __webpack_require__("./node_modules/ng2-img-map/ng2-img-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_component__ = __webpack_require__("./src/app/components/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_component__ = __webpack_require__("./src/app/components/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_claimAck_component__ = __webpack_require__("./src/app/components/claimAck.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/*import { Flashlight } from '@ionic-native/flashlight';*/
/*import { QrScannerComponent,QrScannerModule } from 'angular2-qrscanner';*/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ng2_img_map__["ImgMapComponent"],
                __WEBPACK_IMPORTED_MODULE_11__components_claimAck_component__["a" /* ClaimAckComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__["PdfViewerComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_component__ = __webpack_require__("./src/app/components/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_component__ = __webpack_require__("./src/app/components/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_claimAck_component__ = __webpack_require__("./src/app/components/claimAck.component.ts");




var appRoutes = [
    {
        path: 'new',
        component: __WEBPACK_IMPORTED_MODULE_1__components_user_component__["a" /* UserComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__components_about_component__["a" /* AboutComponent */]
    },
    {
        path: 'claimAck',
        component: __WEBPACK_IMPORTED_MODULE_3__components_claimAck_component__["a" /* ClaimAckComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/app.routing.js.map

/***/ }),

/***/ "./src/app/components/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\r\n\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<!-- <div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\tname=\"incidentCity\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\tname=\"incidentState\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\tname=\"incidentZipCode\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\tname=\"policyNumber\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\" [(ngModel)]=\"damageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"damageDescription\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\tname=\"partyName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\tname=\"partyAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\tname=\"partyContact\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"partyDamageDescription\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Add\r\n\t\t\t\t\t\tDamage Photos</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<!-- <form class=\"form-horizontal\"> -->\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos()\">Add Photo</button>\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera5\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera5')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos2()\">Add Photo</button>\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos2\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera6\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera6')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n<!-- </div> -->\r\n\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"retreivePhotos()\">\r\n\t\t\t\t\t\t\tView\r\n\t\t\t\t\t\t\tExisting Photos</button>\r\n\r\n\r\n\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,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\" id=\"photo-id\"/> -->\r\n\t\t\t\t\t\t<div *ngIf=\"cameraImages\">\r\n\t\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" /> -->\r\n<br/>\r\n\t \t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"mobileSource\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img \r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera2}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera3}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera4}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t<!-- \t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\" [zoom]=\"0.45\"> </pdf-viewer> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"desktopSource\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img \r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera2}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera3}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera4}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t<!--\t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\"> </pdf-viewer>-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\r\n\t\t<br />\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\tdata-toggle=\"modal\" (click)=\"updateClaim()\">Update Claim\r\n\t\t\t\tDetails</button>\r\n\t\t</div>\r\n\t\t<br />\r\n\r\n\t\t<div *ngIf=\"updateClaimSuccess\" class=\"alert alert-success box-msg\"\r\n\t\t\trole=\"alert\">Claim details updated successfully</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* unused harmony export Claim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad__ = __webpack_require__("./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.readOnlyMode = true;
        this.page = 1;
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
        };
    }
    // ngAfterViewInit() {
    //     console.log("Child :" + this.posts);
    // /*    Webcam.set({
    //         width: 100,
    //         height: 100,
    //         image_format: 'jpeg',
    //         jpeg_quality: 90
    //     });
    //     Webcam.attach('#camera5');
    //     Webcam.attach('#camera6');*/
    //   }
    AboutComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    AboutComponent.prototype.toggleRenter = function () {
        this.operatorNotRenter = !this.operatorNotRenter;
    };
    AboutComponent.prototype.addPhotos = function () {
        this.additonalPhotos = true;
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#camera5');
        //Webcam.attach('#camera5');
    };
    AboutComponent.prototype.addPhotos2 = function () {
        this.additonalPhotos2 = true;
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#camera6');
        // Webcam.attach('#camera6');
    };
    AboutComponent.prototype.retreivePhotos = function () {
        this.cameraImages = true;
        /*this.postsService.retreivePhotosDetails(this.claimNumber).subscribe(
                function(response) {
                    
                    console.log("retrieved photo " + response);
                    response => response.json();
                    this.successClaim = true;
                   // this.claimNumber = response;
                    console.log("regular response with Claim: " + response);
                    },
                function(error) { this.failureClaim = true;console.log("Error happened" + error)},
                function() { console.log("the subscription is completed")}
                
                  
            
            );*/
    };
    AboutComponent.prototype.take_snapshot = function (camerID) {
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
            //  Webcam.off("off");
        });
    };
    AboutComponent.prototype.editClaim = function () {
        console.log("Edit Claim called");
        this.readOnlyMode = false;
        this.editMode = true;
        console.log("Edit mode value " + this.readOnlyMode);
    };
    AboutComponent.prototype.addSignature = function () {
        this.addSignatureInd = true;
    };
    AboutComponent.prototype.updateClaim = function () {
        this.updateClaimSuccess = true;
        this._newClaim = new Claim();
        this._newClaim.claimNumber = this.postsService.claimNumberInput;
        console.log("Claim Number to be updated " + this._newClaim.claimNumber);
        this._newClaim.incidentCity = this.incidentCity;
        this._newClaim.incidentState = this.incidentState;
        this._newClaim.zipCode = this.incidentZipCode;
        this._newClaim.policeRpt = this.incidentPoliceRpt;
        this._newClaim.insuranceName = this.insuranceName;
        this._newClaim.insuranceAddress = this.insuranceAddress;
        this._newClaim.operatorName = this.operatorName;
        this._newClaim.operatorContact = this.operatorContact;
        this._newClaim.operatorEmail = this.operatorEmail;
        this._newClaim.operatorAddress = this.operatorAddress;
        this._newClaim.operatorZipCode = this.operatorZipCode;
        this._newClaim.operatorLicenseNumber = this.operatorLicenseNumber;
        this._newClaim.damageDescription = this.damageDescription;
        this._newClaim.damageSeverity = this.damageSeverity;
        this._newClaim.propertyName = this.partyName;
        this._newClaim.propertyAddress = this.partyAddress;
        this._newClaim.propertyPhone = this.partyContact;
        this._newClaim.propertyDamageDescription = this.partyDamageDescription;
        this._newClaim.drivableCarInd = this.drivableCarInd;
        this._newClaim.propertyLicensePlate = this.partyLicensePlate;
        this._newClaim.policyNumber = this.policyNumber;
        //this._newClaim.claimNumber  = "1770338417" ;
        console.log("Claim to be updated :" + this._newClaim.claimNumber + " with city: " + this._newClaim.incidentCity);
        this.postsService.updateClaimDetails(this._newClaim).subscribe(function (response) {
            console.log("regular response" + response);
            (function (response) { return response.json(); });
            this.successClaim = true;
            // this.claimNumber = response;
            console.log("regular response with Claim: " + response);
        }, function (error) { this.failureClaim = true; console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad__["SignaturePad"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad__["SignaturePad"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_signaturepad_signature_pad__["SignaturePad"]) === 'function' && _a) || Object)
    ], AboutComponent.prototype, "signaturePad", void 0);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about',
            template: __webpack_require__("./src/app/components/about.component.html"),
            //   styleUrls: ['../css/bootstrap.min.css', 
            //               '../css/jumbotron.css', 
            //               '../css/bootstrap.css', '../css/bootstrap-theme.css', '../css/bootstrap-theme.min.css']
            styles: [__webpack_require__("./src/app/css/damage.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
var Claim = (function () {
    function Claim() {
    }
    return Claim;
}());
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/about.component.js.map

/***/ }),

/***/ "./src/app/components/claimAck.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Claim Number # {{claimNumber}}</h3>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Your claim is reported with Incident Reporting team.</h5>\r\n\t\t<h5 class=\"text-center\">You can typically expect to hear from us in a 30 day\r\n\t\t\ttime-frame from the date of the incident.</h5><br />\r\n\t\t\t<h5 class=\"text-center\">\t\r\n\t\t\tIn the interim, please contact your Insurance Company or Credit\r\n\t\t\tCard Company to establish a claim with them.You do not need any\r\n\t\t\tpaperwork from us to begin this process.</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">\r\n\t\t\tIf you have any queries, you can mail us at <span style=\"color: #169a5a\">help@xyz.com</span>\r\n\t\t</h5>\r\n\t\t<br />\r\n\t\t<h3 class=\"text-center\">Thank You!</h3>\r\n\t\t<br />\r\n\t\t<div>\r\n\t\t\t<img src=\"../../assets/icon_96.jpg\" class=\"img-responsive center-block\"\r\n\t\t\t\twidth=\"35%\" height=\"35%\">\r\n\t\t</div>\r\n\t\t<br />"

/***/ }),

/***/ "./src/app/components/claimAck.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaimAckComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("./src/app/services/posts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClaimAckComponent = (function () {
    function ClaimAckComponent(postsService) {
        console.log("claim value in claimAck" + this.claimNumber);
        // this.claimNumber = postsService.claimNumberOutput;
        this.claimNumber = "345760";
        console.log("claim value after claimAck" + postsService.claimNumberOutput);
    }
    ClaimAckComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__("./src/app/components/claimAck.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], ClaimAckComponent);
    return ClaimAckComponent;
    var _a;
}());
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/claimAck.component.js.map

/***/ }),

/***/ "./src/app/components/user.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\t<div *ngIf=\"claimCreation\">\r\n\t\t<form class=\"form-horizontal bg-primarya\">\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label text-white\">Renter\r\n\t\t\t\t\tName</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">John Smith</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Vehicle\r\n\t\t\t\t\tMake/Model</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">HONDA CIVIC 4DR</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tOut Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2018-03-16</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tIn Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2018-03-20</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t\t<br />\r\n\r\n\t\t<p align=\"justify\">To report new incident/accident, you need to\r\n\t\t\tsubmit maximum number of information given in the fields below.</p>\r\n\t\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\" >&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\r\n\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Was anyone injured ?</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"liabilityInjuryInd\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"liabilityInjuryInd\">\r\n\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"liabilityInjuryInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Party Injured</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Name\" [(ngModel)]=\"liabilityContact\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"liabilityContact\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"liabilityInjuryInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Contact Info</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Contact Number\" [(ngModel)]=\"liabilityContact\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"liabilityContact\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentCity\" maxlength=\"30\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentState\" maxlength=\"2\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentZipCode\" maxlength=\"12\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"15\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"im.insuranceName\"\r\n\t\t\t\t\t\t\t\t\tname=\"im.insuranceName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceAddress\" maxlength=\"60\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\t\tname=\"policyNumber\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageDescription\" name=\"damageDescription\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"100\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \"></label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t<!-- <input type=\"radio\" [(ngModel)]=\"drivableCarInd\" uncheck name=\"drivableCarInd\"> -->\r\n\r\n\t\t\t\t\t\t\t\t<input class=\"form-check-input\" [(ngModel)]=\"drivableCarInd\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"exampleRadios1\">\r\n\t\t\t\t\t\t\t\t\t\tNew Vehicle Needed ?\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf = \"drivableCarInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">\r\n\t\t\t\t\t\t\t\tContact Roadside Assistance\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" href=\"tel:18628034850\"><a href=\"tel:18628034850\">Call</a></button>\t\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6  control-label\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"tel:18628034850\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVGhD5dlLqE1RHMfx4y2FFEkmHikJKQMlZeSVRx4TA48BJh4DI4pEJqKMZKAM5FlCRErMJAYkJcVIyQRRXpHX9zc4ddr91jl739Y5+3/zq8/kdu7Zv733unevtXajQqbgME5gsX7QH7MJX/G3xWkMQr/IABzEH7SeRJPuTvgMxwW4E2i1DmGjIXMdrnjRR0xEyGjIuNIp1xAuK+HKdqLfC5OheA1XtJPnGIwQ2QZXsqytCJFHcAXLeozaMxmuXFXjUGs2wBWrahZqzXG4YlXV/ky5BFesigeoPXfgypX1CTNRe+7BFSzjPeYjRC7DlezkJaYhTE7CFW3nLEYiVHbAlU25Aq1XwmUuXOGUOQgZTfg+w5V2Qt6NZs7DlXbGI2yWw5V21iNshuAtXPEiPXdCZw9ccUd3MGxGQRsKrniRHobDEDYH4Io7+mzYjEDZtfsvLEHYrIUr7nyAVphhcxuuuPMEupMhMwGaorvizi1oSylk1sCVTtFksi+79GOxG2egnU4dN/tFOQVXOuUcqpzMCrxD8XteYRGyRTvzD1E8UDtXUWatsgv6z+e+Q37jCLLtYmp35A3cwVJeYDpSqfK80pRoDLJkHr7DHSjlC/ZhNJrR2D8G9/l2dGEmIUtWo91QSNEJ3cUNuL+HsvSgnoos2YLU67he0BDPdmeqzJK74T6yZS/cQXplIbJlO+oaZjuRNRvxA+5g3bQA2aMt07LL5By0Odi16KFZdQbQFxfR9cmpphL70a2hdhQ93VPTm6ucd+cnNC+rJbpyq/AMrlxZesk6G7VnIJZB0/tvcGWdp9iMMO/vW6PtpqU4hJvQ8NO2kujVnbZttcCagf8tjcY/2tImBsXPeGQAAAAASUVORK5CYII=\" style=\"text-align: right; height: 35px; width: 30px; padding-top: 10px; position: absolute; right: 30px;\" ></a>  -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyAddress\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyContact\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyDamageDescription\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t <div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse5\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Select\r\n\t\t\t\t\t\t\tDamage Area</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse5\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div *ngIf=\"initialImageDS\">\r\n\t\t\t\t\t\t\t<p>Please click on front, back or side of the vehicle image\r\n\t\t\t\t\t\t\t\tto view enlarged image of the vehicle to mark the damage area</p>\r\n\t\t\t\t\t\t\t<div ng-app=\"app\">\r\n\t\t\t\t\t\t\t\t<div ng-controller=\"imgMapCtrl\">\r\n\t\t\t\t\t\t\t\t\t <!-- <img class=\"rwdimgmap\" src=\"https://github.com/kulkaman/cardamage1/blob/master/client/app/images/damage_car.svg\" -->\r\n\t\t\t\t\t\t\t\t\t \t  <img class=\"rwdimgmap\" src=\"../../assets/damage_car.svg\"\r\n\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\talt=\"Responsive image\" border=\"0\" usemap=\"#auto\" />\r\n\t\t\t\t\t\t\t\t\t<map name=\"auto\" id=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,0,342,50\" (click)=\"rearCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Rear End\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,51,342, 230\" (click)=\"sideCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Side Damage\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,320,342, 100\" (click)=\"frontCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Front End\" />\r\n\t\t\t\t\t\t\t\t\t</map>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"frontCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t <img-map src=\"../../assets/CarFront.jpg\" style=\"height:346px\" \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"rearCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../../assets/CarRear.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"sideCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"../../assets/CarSide.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div> \r\n\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Damage\r\n\t\t\t\t\t\t\tPhotos</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div style=\"text-align:center;\"><button type=\"submit\" style=\"text-align:center;\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\t(click)=\"getRoverPhoto()\" disabled>Retrieve Damage Report</button></div>\r\n\t\t\t\t\t <div *ngIf=\"roverImage\">\r\n\t\t\t\t<!-- \t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\" [zoom]=\"0.45\"> </pdf-viewer>-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera1\" ></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera3\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera3')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera4\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera4')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div id = \"bloc1\" class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\"\r\n\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t(click)=\"createClaim(im)\">\r\n\t\t\t\t\t<div id=\"bloc2\" *ngIf=\"loadingNewClaim\">\r\n                        <span class=\"glyphicon glyphicon-refresh spinning\"></span>\r\n                     </div>\r\n\t\t\t\t\tCreate Claim</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* unused harmony export Claim */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("./src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__("./node_modules/angular2-signaturepad/signature-pad.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*import { Flashlight } from '@ionic-native/flashlight';*/
var UserComponent = (function () {
    function UserComponent(postsService, router) {
        this.claimCreation = true;
        this.initialImageDS = true;
        this.im = {
            insuranceName: ""
        };
        this.markers = [];
        this.signaturePadOptions = {
            'minWidth': 5,
            'canvasWidth': 100,
            'canvasHeight': 30
        };
        this.posts = postsService.posts;
        this._newClaim = new Claim();
        this.router = router;
        console.log("router value in claim " + this.router);
        /*    this.flashlight.switchOn();*/
        this.postsService = postsService;
        if (this.posts) {
            console.log("Inside post service");
            this.firstName = this.posts[0].firstName;
            this.lastName = this.posts[0].lastName;
            this.makeModelDesc = this.posts[0].makeModelDesc;
            this.coDate = this.posts[0].coDate;
            this.ciDate = this.posts[0].ciDate;
            //this.renterFirstName = this.posts[0].firstName;
            //this.renterLastName = this.posts[0].lastName;
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
            //this.pdfSrc = "http://localhost:8080/SpringMVC/pdf/"+this.rentalAgreementNumber+"_file.pdf";
            if (this.rentalAgreementNumber == null || this.rentalAgreementNumber == "undefined")
                this.rentalAgreementNumber = "367326223";
            this.pdfSrc = "https://97665b1e.ngrok.io/SpringMVC/pdf/" + this.rentalAgreementNumber + "_file.pdf";
        }
        if (this.coDate == null) {
            this.makeModelDesc = "HONDA CIVIC 4DR";
            this.coDate = "2018-02-01";
            this.ciDate = "2018-02-08";
            this.firstName = "JOHN";
            this.rentalAgreementNumber = this.postsService.raNumberInput;
            this.lastName = this.postsService.lastNameInput;
        }
        this.whatTime = new Date().toString();
    }
    Object.defineProperty(UserComponent.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.onChange = function (marker) {
        console.log('onChange - Marker', marker);
    };
    UserComponent.prototype.onMark = function (marker) {
        console.log('onMark - Marker', marker);
        console.log('onMark - Markers', this.markers);
    };
    UserComponent.prototype.selectMarker = function (index) {
        this.imgMap.markerActive = index;
        this.imgMap.draw();
    };
    UserComponent.prototype.removeMarker = function (index) {
        this.markers.splice(index, 1);
        if (index === this.imgMap.markerActive) {
            this.imgMap.markerActive = null;
        }
        else if (index < this.imgMap.markerActive) {
            this.imgMap.markerActive--;
        }
        this.imgMap.draw();
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        Webcam.set({
            width: 100,
            height: 100,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        Webcam.attach('#camera1');
        Webcam.attach('#camera2');
        Webcam.attach('#camera3');
        Webcam.attach('#camera4');
        console.log("Above post service" + this.posts);
    };
    /*constructor(public http:Http){}*/
    UserComponent.prototype.take_snapshot = function (camerID) {
        var that = this;
        that.cam1Id = "Hi";
        // take snapshot and get image data
        Webcam.snap(function (data_uri) {
            // display results in page
            document.getElementById(camerID).innerHTML =
                '<img src="' + data_uri + '"/>';
            if (!that._newClaim) {
                console.log("Inside take_snapshot - setting claim");
                that._newClaim = new Claim();
            }
            that._newClaim[camerID] = data_uri.replace(/^data\:image\/\w+\;base64\,/, '');
        });
    };
    UserComponent.prototype.toggleRenter = function () {
        this.operatorNotRenter = !this.operatorNotRenter;
    };
    UserComponent.prototype.toggleIncidentDetails = function () {
        this.incidentDetails = !this.incidentDetails;
    };
    UserComponent.prototype.toggleInsuranceDetails = function () {
        this.insuranceDetails = !this.insuranceDetails;
    };
    UserComponent.prototype.getRoverPhoto = function () {
        this.roverImage = true;
    };
    UserComponent.prototype.createClaim = function (im) {
        this.loadingNewClaim = true;
        this.successClaim = true;
        var foo = JSON.stringify(im);
        localStorage.setItem('fnol', foo);
        // var getFoo = localStorage.getItem("fnol");
        // console.log("getFoo", getFoo,"parsed",JSON.parse(getFoo))
        // console.log( this.incidentCity + " " + this.incidentState);
        //this.router.navigate(['/about',im]);
        //this._newClaim = new Claim();
        // if (this.rentalAgreementNumber == null){
        //     this.rentalAgreementNumber = "367326223";
        //     this.firstName = "John";
        //     this.lastName = "Smith";
        //     console.log("RA was null");
        // }
        // else{
        //     this.rentalAgreementNumber = this.postsService.raNumberInput;
        //     this.lastName = this.postsService.lastNameInput;
        //     console.log("RA was not null");
        // }
        // console.log("Incident "+this.incidentCity+ "cam1Id "+this.cam1Id);
        // this._newClaim.incidentCity  = this.incidentCity ;
        // this._newClaim.incidentState  = this.incidentState;
        // this._newClaim.zipCode  = this.incidentZipCode ;
        // this._newClaim.policeRpt  = this.incidentPoliceRpt ;
        // this._newClaim.damageDescription = this.damageDescription;
        // this._newClaim.rentalAgreementNumber = this.rentalAgreementNumber;
        // this._newClaim.insuranceName = this.insuranceName;
        // this._newClaim.insuranceAddress = this.insuranceAddress;
        // this._newClaim.operatorName = this.operatorName;
        // this._newClaim.operatorContact = this.operatorContact;
        // this._newClaim.operatorEmail = this.operatorEmail;
        // this._newClaim.operatorAddress = this.operatorAddress;
        // this._newClaim.operatorZipCode = this.operatorZipCode;
        // this._newClaim.operatorLicenseNumber = this.operatorLicenseNumber;
        // this._newClaim.propertyName = this.partyName;
        // this._newClaim.propertyAddress = this.partyAddress;
        // this._newClaim.propertyPhone = this.partyContact;
        // this._newClaim.propertyDamageDescription = this.partyDamageDescription;
        // this._newClaim.drivableCarInd = this.drivableCarInd;
        // this._newClaim.propertyLicensePlate  = this.partyLicensePlate;
        // this._newClaim.policyNumber  = this.policyNumber;
        // this._newClaim.lastName = this.lastName;
        // this._newClaim.firstName = this.firstName;
        // this._newClaim.damageSeverity = this.damageSeverity;
        // //this._newClaim.camera1 = this.cam1Id;
        // console.log("RA : "+ this._newClaim.rentalAgreementNumber + " and LN: "+this._newClaim.lastName);
        // this.postsService.getClaimNumberPosts(this._newClaim).subscribe(posts => {
        //     this.posts = posts;
        //     this.postsService.posts = this.posts;
        //     this.claimNumber = posts;
        //     this.postsService.claimNumberOutput = this.claimNumber ;
        //     console.log("IN check claim" + this.posts);
        //     this.loadingNewClaim = false;
        this.router.navigate(['claimAck', im]);
        // }
        // );
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.frontCarClicked = function () {
        console.log("I was called");
        this.initialImageDS = false;
        this.frontCar = true;
    };
    UserComponent.prototype.rearCarClicked = function () {
        console.log("I was called too");
        this.initialImageDS = false;
        this.rearCar = true;
    };
    UserComponent.prototype.sideCarClicked = function () {
        console.log("I was called too");
        this.initialImageDS = false;
        this.sideCar = true;
    };
    UserComponent.prototype.reselectDamageArea = function () {
        console.log("I was called too");
        this.initialImageDS = true;
        this.frontCar = false;
        this.sideCar = false;
        this.rearCar = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('imgMap'), 
        __metadata('design:type', String)
    ], UserComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]) === 'function' && _a) || Object)
    ], UserComponent.prototype, "signaturePad", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user',
            template: __webpack_require__("./src/app/components/user.component.html"),
            /*    styleUrls: [ '../css/bootstrap.min.css',
                            '../css/jumbotron.css',
                            '../css/bootstrap.css',
                            '../css/bootstrap-theme.css',
                            '../css/bootstrap-theme.min.css',
                            '../css/damage.css']*/
            styles: [__webpack_require__("./src/app/css/damage.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b, _c;
}());
var Claim = (function () {
    function Claim() {
    }
    return Claim;
}());
// const fnol = {
//     firstName: "abc",
//     lastName: "abc",
//     rentalAgreementNumber: string;
//     damageDescription: string;
//     incidentCity: string;
//     incidentState: string;
//     zipCode: string;
// policeRpt: string;
// insuranceName: string;
// insuranceAddress: string;
// operatorName: string;
// operatorContact: string;
// operatorEmail: string;
// operatorAddress: string;
// operatorZipCode: string;
// operatorLicenseNumber: string;
// propertyName: string;
// propertyAddress: string;
// propertyPhone: string;
// propertyDamageDescription: string;
// drivableCarInd: string;
// propertyLicensePlate: string;
// policyNumber: string;
// claimNumber: string;
// damageSeverity: string;
// camera1: string;
// camera2: string;
// camera3: string;
// camera4: string;
// }
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/user.component.js.map

/***/ }),

/***/ "./src/app/css/damage.css":
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t\nbody {\n  padding-top: 50px;\n}\n\n.navbar-default {\n    /* background-color:  #d4002a; \n    border-color: #d4002a;*/\n    background-image: none;\t\n    background-color: #169a5a;\n    border-color: #169a5a;\n}\n\n.navbar-brand {\n    color:  #ffbbbc;\n\tbackground-image: none;\t\n\t\n}\n\n.navbar-phone {\n    text-align: right; \n    height: 40px; \n    width: 30px; \n    padding-top: 10px; \n    position: absolute; \n    right: 30px;\t\n\t\n}\n\n.starter-template {\n padding: 10px 15px;\n}\n\n.cust-form-label{\n    text-align: left;\n}\n\n.lead {\n    \n    font-size: 20px;\n    font-weight: 400;\n    \n}\n\n.cust-submit-section{\n    padding-bottom: 12px;\n    margin-right: -15px;\n    margin-left: -15px;\n\n}\n\n.btn-primary {\n    /* background-color:  #d4002a;\n    border-color: #d4002a; */\n    background-color: #169a5a;\n    border-color: #169a5a;\n\tbackground-image: none;\t\n\t\n}\n\n.panel-default {\n\tpadding: 10px 15px;\n}\n\n.panel-group .panel-heading a {\n    display: block;\n    position: relative;\n\ttext-decoration: none;\n}\n\n.panel-group .panel-heading a :visited{\n\ttext-decoration: none;\n}\n\n.panel-group .panel-heading a:before {\n\t/* content: url('../app/images/icon_collapse.svg') ;   */\n\tcontent: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2216px%22 height%3D%222px%22 viewBox%3D%220 0 16 2%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 45.2 (43514) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3ERectangle 4%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%2202_report_new_incident_black%22 transform%3D%22translate(-37.000000%2C -472.000000)%22 fill%3D%22%23169a5a%22%3E            %3Cg id%3D%22Group-2%22 transform%3D%22translate(10.000000%2C 447.000000)%22%3E                %3Crect id%3D%22Rectangle-4%22 x%3D%2227.5%22 y%3D%2225.7578125%22 width%3D%2215%22 height%3D%221%22%3E%3C%2Frect%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\n  text-align:center;\n}\n\n.panel-group .panel-heading a.collapsed:before {\n    content: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2216px%22 height%3D%2216px%22 viewBox%3D%220 0 16 16%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 45.2 (43514) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Eicon_expand%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%2202_report_new_incident_black%22 transform%3D%22translate(-30.000000%2C -998.000000)%22 fill%3D%22%23169a5a%22%3E            %3Cg id%3D%22expandable%22 transform%3D%22translate(10.000000%2C 980.000000)%22%3E                %3Cg id%3D%22icon_expand%22 transform%3D%22translate(20.000000%2C 18.000000)%22%3E                    %3Crect id%3D%22Rectangle-4%22 x%3D%220.5%22 y%3D%227.2109375%22 width%3D%2215%22 height%3D%221%22%3E%3C%2Frect%3E                    %3Crect id%3D%22Rectangle-4%22 transform%3D%22translate(8.000000%2C 7.710938) scale(1%2C -1) rotate(90.000000) translate(-8.000000%2C -7.710938) %22 x%3D%220.5%22 y%3D%227.2109375%22 width%3D%2215%22 height%3D%221%22%3E%3C%2Frect%3E                %3C%2Fg%3E            %3C%2Fg%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\");\ntext-align:center;\n}\n\n/* .panel-title1 {\ntext-align:center;\n} */\n\n.bg-primarya{\n    /* background-color: #c61729; */\n    background-color:#169a5a;\n\tpadding: 10px 15px;\n\tcolor: white;\n\tfont-family: Calibri\n}\n\n.imageMap {\nheight : 346px !important ;\n}\n\n.pdf {\nheight : 346px;\nwidth : 346px;\n}\n\n.imageMap1 {\nheight : 210px !important ;\n}\n\n#modal-background{\n   width: 100%;\n   height: 100%;\n   background-color: #000000;\n   position: fixed;\n   top: 0; left: 0;\n   display: none;\n   z-index: 99;\n}\n\n#modal-content{\n   background-color: #FFFFFF;\n   width: 500px;\n   height: 500px;\n   position: absolute;\n   left: 50%;\n   top: 50%;\n   margin-left: -250px;\n   margin-top: -250px;\n   z-index: 100;\n}\n\n@media screen and (max-width: 995px OR max-height: 700px) {\n  background-color: #4286f4;\n}\n\n.glyphicon.spinning {\n    animation: spin 1s infinite linear;\n    -webkit-animation: spin2 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\n}\n\n@keyframes spin {\n    from { -webkit-transform: scale(1) rotate(0deg); transform: scale(1) rotate(0deg); }\n    to { -webkit-transform: scale(1) rotate(360deg); transform: scale(1) rotate(360deg); }\n}\n\n@-webkit-keyframes spin2 {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n}\n\n/* \n.glyphicon-refresh-animate {\n    -animation: spin 1s infinite linear;\n    -webkit-animation: spin2 1s infinite linear;\n}\n\n@-webkit-keyframes spin2 {\n    from { -webkit-transform: rotate(0deg);}\n    to { -webkit-transform: rotate(360deg);}\n}\n\n@keyframes spin {\n    from { transform: scale(1) rotate(0deg);}\n    to { transform: scale(1) rotate(360deg);}\n} */\n\n#bloc1, #bloc2\n{\n    display:inline;\n}\n\n/*! ========================================================================\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\n * http://www.bootstraptoggle.com\n * ========================================================================\n * Copyright 2014 Min Hur, The New York Times Company\n * Licensed under MIT\n * ======================================================================== */\n\n.checkbox label .toggle1,.checkbox-inline .toggle{margin-left:-20px;margin-right:5px}\n\n.toggle1{position:relative;overflow:hidden}\n\n.toggle1 input[type=checkbox]{display:none}\n\n.toggle1-group{position:absolute;width:200%;top:0;bottom:0;left:0;transition:left .35s;-webkit-transition:left .35s;-moz-user-select:none;-webkit-user-select:none}\n\n.toggle1.off .toggle-group{left:-100%}\n\n.toggle1-on{position:absolute;top:0;bottom:0;left:0;right:50%;margin:0;border:0;border-radius:0}\n\n.toggle1-off{position:absolute;top:0;bottom:0;left:50%;right:0;margin:0;border:0;border-radius:0}\n\n.toggle1-handle{position:relative;margin:0 auto;padding-top:0;padding-bottom:0;height:100%;width:0;border-width:0 1px}\n\n.toggle1.btn{min-width:59px;min-height:34px}\n\n.toggle1-on.btn{padding-right:24px}\n\n.toggle1-off.btn{padding-left:24px}\n\n.toggle1.btn-lg{min-width:79px;min-height:45px}\n\n.toggle1-on.btn-lg{padding-right:31px}\n\n.toggle1-off.btn-lg{padding-left:31px}\n\n.toggle1-handle.btn-lg{width:40px}\n\n.toggle1.btn-sm{min-width:50px;min-height:30px}\n\n.toggle1-on.btn-sm{padding-right:20px}\n\n.toggle1-off.btn-sm{padding-left:20px}\n\n.toggle1.btn-xs{min-width:35px;min-height:22px}\n\n.toggle1-on.btn-xs{padding-right:12px}\n\n.toggle1-off.btn-xs{padding-left:12px}"

/***/ }),

/***/ "./src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
        console.log('PostsService Initialized...');
    }
    Object.defineProperty(PostsService.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        set: function (postObject) {
            this._posts = postObject;
        },
        enumerable: true,
        configurable: true
    });
    PostsService.prototype.getPosts = function (raNumber, lastName, claimNumber) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        if (claimNumber == null) {
            claimNumber = "NA";
        }
        console.log("claim number value " + claimNumber);
        var abc = PostsService.url + '/SpringMVC/rest/radetails/' + raNumber + '/' + lastName + '/' + claimNumber + '/';
        console.log("Final URL" + abc);
        return this.http.get(abc)
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.getClaimNumberPosts = function (newClaim) {
        console.log("Called from Client" + newClaim.incidentCity + "brand is " + newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc " + newClaim.damageDescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(PostsService.url + '/SpringMVC/rest/radetails/', newClaim, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleErrorObservable);
        // .subscribe();
    };
    PostsService.prototype.retreivePhotosDetails = function (claimNumber) {
        var data = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        return this.http.get(PostsService.url + '/SpringMVC/rest/radetails/update/')
            .map(function (res) { return res.json(); });
    };
    PostsService.prototype.updateClaimDetails = function (newClaim) {
        console.log("Called from Client from update" + newClaim.incidentCity + "brand is " + newClaim.rentalAgreementNumber + " policy " + newClaim.policyNumber + " desc " + newClaim.damageDescription);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("loc: " + PostsService.url);
        return this.http.post(PostsService.url + '/SpringMVC/rest/radetails/update', newClaim, options)
            .map(function (res) { return res.json(); });
        //.catch(this.handleErrorObservable);
        // .subscribe();
    };
    PostsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Response :" + body);
        return body;
    };
    PostsService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.message || error);
    };
    //public static url='http://localhost:8080';
    PostsService.url = 'https://97665b1e.ngrok.io';
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/posts.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Documents/FNOL enterprise/AccidentReport/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map