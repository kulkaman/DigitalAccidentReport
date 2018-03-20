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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_component__ = __webpack_require__("./src/app/components/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_component__ = __webpack_require__("./src/app/components/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_claimAck_component__ = __webpack_require__("./src/app/components/claimAck.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_component__["a" /* UserComponent */],
                // ImgMapComponent,
                __WEBPACK_IMPORTED_MODULE_10__components_claimAck_component__["a" /* ClaimAckComponent */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_pdf_viewer__["PdfViewerComponent"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\r\n\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<!-- <div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\tname=\"incidentCity\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\tname=\"incidentState\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\tname=\"incidentZipCode\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\tname=\"insuranceAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\tname=\"policyNumber\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\" [(ngModel)]=\"damageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"damageDescription\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\tname=\"partyName\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\tname=\"partyAddress\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\tname=\"partyContact\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\tname=\"partyDamageDescription\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Add\r\n\t\t\t\t\t\tDamage Photos</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<!-- <form class=\"form-horizontal\"> -->\r\n\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t<br />\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos()\">Add Photo</button>\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera5\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera5')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sm btn-primary\"\r\n\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"addPhotos2()\">Add Photo</button>\r\n\t\t\t\t\t<!-- <div *ngIf=\"additonalPhotos2\"> -->\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t<div id=\"camera6\"></div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera6')\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</form>\r\n<!-- </div> -->\r\n\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\r\n\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\t\t\tdata-toggle=\"modal\" (click)=\"retreivePhotos()\">\r\n\t\t\t\t\t\t\tView\r\n\t\t\t\t\t\t\tExisting Photos</button>\r\n\r\n\r\n\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5xDAxRlCChGQeuay7+QRySHAPsMc+1XNKuPt+mxzuqRs5b5E6LyRgGsjULJluWO/KtyMmvlkrM95lC71WcKNluqf77j+QrIn1XUWkAUQqCwGRkt+WP61rT6fknOR6GqbadhsHOfbvW8WuxDXmZ7ahdPICZYvTiI//ABVOxcSgD7XOq552BFyfwXP61fm04SgMMbx94evvVmC0CIgAzycnvmtLroRyp7kej6dFaXAnLzvLg/62dmB/AnFXb+5zgK3amGI5BAPIqKdDsJIxzWbd3dlxSjojk9SklXW90U0lvKkQYSxNhhgnpVFrJWwDNKykjjdxWlfw7tcAOVBhAJGOPmPrVfRLddTm2T3AtAZQm90OApYDd74GT26D8OqC0IldGbaWsMoG/e7IMMSxwTkg/qKuizhltJFit/MkOAAAWPUVo6BololndSXF4IXlbPlSI2V78EZGOe+OhqC7tba0dD9pWWFiPMCAqR+eKrmTdrkcrtdozTHHCSqqqr1AAFFQm5C4VnQkDBOaKqyepSm1pY9b8Hz+ZYzQ4wUbIX0B/wDrg1qaiAQPXnmuX0e/itNTR0R4Y7mMLhzwWzxjHXv+f1ro76UPBnJzXnyg4OzNY1FU95FR0BUgkYNZtwMZB9cCrH2jLdBVeUecSo6ngUkBDbx5YuCQQePer8NvwHGcMTkehqKG3dFCkhipPQYzmtC3wCMDI6lc1XkAwQARhj0Has3VZlgRdoG/gj8q0b5mSMjt2P41zd+7SMzdR+nWmkBhXMV3rGttHbxl5PJzhByACcn8qpa5p97oOpTWF6HhuYcb42yCMgEZH0NdP4NvYdP8YedNMIYvspVjz/eBxxn0ql8U75tf8canqcEayWU5TbIXEbHaiqSVJ4yRnr3rtio21MXz30vY5BpC3VifxpbiUG12erAfrU16IzodlbpNapdRzySSPvHKsqYBI64Kt9M+5qC91DT/ALDb28bBnjkZ2lOCTkAAAjsMH861suhk73/zIhKsZKkgYNFVZZfPctGSV9uaKXK2UpJI9a1Nhc6dZXWxUlEm4OPTGQP1rSvbvMbKMs/TavNS+Hvg/wCLVtY4tSiklhT7sAkj2n1z83Nd7YfCXUWgGYYbc44V36fkDXLU5ZaJ3Jp3he55YZJEQsYJjx1GP8aZBqSht/lkgEAKW5/H0r1y4/Z+8T6lH5iyW0FjkiSZEd+n8P3QO/rXMaR8NYrufUXhkOq6XaGWA6nbyqkZuI1jZo0XDNIcSYAAG4qcNgZpRpOWyNXVjFXkzmU1jICrarn3f/61WEvJN26MRg+hQkfzFe/y/ArwRcy6TNp8+uXUV8YxLDYW3mtb5yWyGGSdqynGOPKbNdv4d+CXg8X2i/2ZBf8AnyfvZ5LmFZWVRG4bMb/Iw3p3HGSCp6jZYWbehk8XRVmfJYhu7oSITGqsONqc5yPUntn9Kry+CtTuoCsFyMN2dAP1Ar6t8UfD7wloF3NbjTnuxCRbnUWtJjBau+8QNceTtG2SVCgb7xyQAcKG7r4L+EPDHiDw1qlpe6dpM3iTRL+S2vYbWIFHQuBC6GT5iGJZRk5O3Na/VakXZkLGUmrpHwMfg/rV1I26dQHTBccgYOfb3qhcfAG+gRs3O5Sc58rH9a/XnSfBVlawLbLbJDGo+VEUYX8BW7a+D9NmtGs7qytL6z4zbXMStExByCUYY49cf0rWNOS0uRKvGT1ifivc/Ci6skC+axA6/LisSfwV9kYh8jHTIr9ZvjJ+x3p2t6NPr3gux8i7iDSXOkxP5iOvcw553Dk7OhB4AICt8W+JfhYSjgR4PbjGKxm6kHqdMFTqK6PmdvDOCdkjKvooor06/wDAl9bXLIke9R0OcUVj7aR0ezR9O+FPEOla54sk0eST7NaTQFLG/l4ikuiRsDZx8uM9x2yRV3XvE+mWXgXTLu3hW71GRmtNQ8iY7bWQAkH7hKMxQqY3AZTuBwvzH5Mj1W51bW7fTbicWWkG6WLNyXSIgtjDsoJCgdcAn0BNeh+C/hjPpng9/E1tffbpLCZ5p7CIPIqAyrhd2PmbDhgcYZVkztKqJeuNGPK01qeRKrLmTufUnjSx8UjwNBoKW9rbWkukpchJJf3lw7YxtIfBwS5baM89cEY+Y/hrB4o1XUUXS9CgvY7e7EE+g7wsMTb1VJkVZFfeGkPzAHgZOQDj3X4TftFWHizQ7zQ7vVYvD0tvAfsPm3CiMvggo2/oGGc54B257msPwR8OtYvPHvh/xF4b0O4uCkrJfS212jRHcp2EOoKgAFSdxzjjHIrpv7qutUclvefZkXwM8da3afEi2tLS222tpPe3X9mxymREDWVxJiPsRlWAxgA54O4mtPw/rviLT9ftmhil8PXukuZRqMEXmQQHbki7ViQEYSkl2bZtVsKMfN3/AIn8EWPw6+Iuk+M4ItP0DU7uAxxabPduyyTsczbnVQqDYzx7QNoJb7275fnL9vrxhZ3uoeH9Ct9Ihs9bvw+oXmokbpZrZm2wYYKBtO2TjlsIvzcnN80U9BKEp6XNbxX+3JZ3tzJLpPh2zm1C6hhW7luGPkLMlws7NGik713xRFC7EphgB8xLeufsd+O/hnq+p/areS/s/GFtYJbS22pzxyi7VCmDb7VUyOpjRgpG4dV3bcj89/DkcdhcKEQOVPVhnP1r7M+GfwY0P4kfDXV57eyFj4isrcXljqEDFAJUBKxvj+FsYyOR1Ga5JYu8uXoewsvSp899T9A7Syt7mFbq3YT2smSssfzKemfx56dani8OXDTpfWsxMKKyNFGcrICevXO4Y479fWvBv2QPHuoeJvChuZBFc3y6dPbXenIxIku4WEsMm3cdrSozKSMAskmAAK9t8R+NrPwZqmg6nBKyaDrkAaVZv9VkgFGyAdjZbBP5jit723PPaO18LyT23ku7bi2VPI2nDFe5/HrXmHx+/ZxtPFqXXiTw3ahdTIMl5YRLj7R3MkY/v+oH3uSPm+96VDqsdp4cvNYltrg2tsvnsYnzkKQcpn72VPt09+G/Dz4p6V4tu5rKOG+sbmEt8t/D5Zf7vIOTkcn8qbSkrMcJuD5on54X/gKP7S26M5/3aK/Q/wAUfAXwn4v1mbVbiCe3uZ+ZfsjqqO3diCp5PfHXr1JJK4nhnc9FYpWPkuf9lnwPeawLyZLkSxyLLsRkVAR6jbyTjpXT237PPw9hk+Twjpqs0hlaSWASSu5JJJJyepPH4AAV00eqWwl+WXnqGCkk/pWlbX8MWSZG3MeSVPf0NVH3djieu5FY+CdC0homtNGsLPyzkNDborA/UDrXV2flGMMcRL1d+/0Fc3ca3bRxBi7BMgYx6nrXJeKPjHpGhwTRbmkULtBU4Dfj/nqKOZLcLNnsV5eWttaiFkUbIyAp/gDYPPqa/Ib9ugTXP7T+uuCz28Fjam3UnO1fJQH6ZkLt/wACr6r+Iv7VV/fLLDpKFDnmaTgn8q+F/inq974m8f395eztPdz2ibpH54DEY/KoVZO6RvTpPmVzjdJ1OSK5w4jH+71r6F+Avx28YeAfGL+HI72y06wMc5uLXU4wA5RGfy8no5K7VA5JIHevne10uO2uxNK4UKRlm4HXFfbPgF/h58WfGnh7xM9sV8VxqIb15MxQXM0aonzAfKxKOPm6n5gynGW55SgpXPWjCpKHKeqfsX+IYPDPxa8e6feTpZWmoz2WpWTMrBHjkWaT5cjkLuYFv+mZB5r6wls9K8Z+AIPDWpNGIbmB4IZflKrNyVZSONwbkY/rXxz4g1hdN+Mj3Ok2aW8I0i3tBuAUIA8wKgAY7/hx616foGv3wsjEbwqnmK/lq2ADXXTqc0Vc8jEUnCo7H0r8I2kg+D+l6Xqexr+KNrW5jlIbJBIGfUFQPrWCbay8Oa/arGRZhFESRR8A56EAcccjj0riNH8RRnR1eKYMQT5kbNlgf8+1Gr+NoY7JryWKQm2Kn5RzkEnHb0rpTOSx7t4I8TvrukSTweddqk7xNIAF+ZcZGDzn+tFeQ+BPG134e8OQ26lIpJXe5mWTORJIxc/luxj2orRPyJt5nzbb/FFY73fO8xijy5VWIBHQLx+H5Utx8YLeGIo3mGQE79xwCT1/oPoK8auvFcUSEeSTwF69T3rAvtf+0NkJtySevXvXhubPSUFc9Q1v4ySvI32UvFk5+8ec/wCFec614kvdYkZ5pSV7DNYP20uSxPX361G96E+U8ge/SsW2zdWWwtyhcEg4yOleTePbE2uuQXBUgSRFMkehz/jXpd7qvlofmGMZzXnfxD1CK60kP5g86KQMo/n/ADNaU07iUkpJs4LUjJJdRxgFVJyT/wDX7V9U/BTxJqWhaHoelSz6XquhyzPIXtpS02ny5IG8MqkBsYypZcHkg4r5RW+S4X5mwcd69W+Guq6DpujhYJZ49Yc4kVpB5bjPBA6jHHX0rSafJax305Rc7n1R4q1xbi/tmQK0sal2kzyMdvpyDUtt4ukhCrJK2VXoOmMV5LZ+ONPWQRS3LSTG3ZWJ6FjtJI/DH6VoxeNtOnut6sWBQpt+qkD9adKLjFI4sVNTqNo9k0f4xXeiOUt7GzvYp1JCXPmgkdx8rj+VTXPxf1bWry1srTTtP0uWZgGEfmSbvRfnc4+o55ryK212FJI3jyWtrcqCehPA/wAau6Traf2rp8jo3mGeOUZPO1QePx/pXXFvZs8+y7Hqz/ETV2lkxMCwYh2WcgFu5+YZorzSN/twMyNtLH5uep9aK1THoeeTOVx369fpVWb72c+1FFeSdciiZGTBHUms++unjgdweQeKKKaM3ued694hvUJCyYHPSvP9Vv59QmljmlYooDYHckgf1oorvopGM/8AIyoZ3HG4kehrZ0rUZLWfzAiPjPysDj8cHn+VFFdaSuZNvlep7r8Ntdk8X6ao1O2tZ/szlIj5WCo4GPyA/IV2Nz4a0yG0NzDZrbzKdytEzLg/TOKKK7oJSWpw3ak7GTotzLHOtvvLph+W6nHT+ddYrtHqUKgnCIoGfpRRXmySTZ3XOnt3yhyozk8880UUUjdbH//Z\" id=\"photo-id\"/> -->\r\n\t\t\t\t\t\t<div *ngIf=\"cameraImages\">\r\n\t\t\t\t\t\t\t<!-- <img src=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" /> -->\r\n<br/>\r\n\t \t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div *ngIf=\"mobileSource\">\r\n\t\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img \r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera2}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera3}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"50%\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera4}}\" id=\"photo-id\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t<!-- \t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\" [zoom]=\"0.45\"> </pdf-viewer> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"desktopSource\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img \r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera1}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera2}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera3}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td width=\"200px\" height=\"200px\"><img\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"data:image/jpeg;base64,{{camera4}}\" id=\"photo-id\" width=\"200px\" height=\"200px\"/></td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t<!--\t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\"> </pdf-viewer>-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"panel panel-default\">\r\n\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\r\n\t\t<br />\r\n\t\t<div class=\"text-center\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\tdata-toggle=\"modal\" (click)=\"updateClaim()\">Update Claim\r\n\t\t\t\tDetails</button>\r\n\t\t</div>\r\n\t\t<br />\r\n\r\n\t\t<div *ngIf=\"updateClaimSuccess\" class=\"alert alert-success box-msg\"\r\n\t\t\trole=\"alert\">Claim details updated successfully</div>\r\n\t</div>\r\n\r\n</div>"

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

module.exports = "<h3 class=\"text-center\">Claim Number # {{claimNumber}}</h3>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">Your claim is reported with Incident Reporting team.</h5>\r\n\t\t<h5 class=\"text-center\">You can typically expect to hear from us in a 30 day\r\n\t\t\ttime-frame from the date of the incident.</h5><br />\r\n\t\t\t<h5 class=\"text-center\">\t\r\n\t\t\tIn the interim, please contact your Insurance Company or Credit\r\n\t\t\tCard Company to establish a claim with them.You do not need any\r\n\t\t\tpaperwork from us to begin this process.</h5>\r\n\t\t<br />\r\n\t\t<h5 class=\"text-center\">\r\n\t\t\tIf you have any queries, you can mail us at <span style=\"color: #169a5a\">help@xyz.com</span>\r\n\t\t</h5>\r\n\t\t<br />\r\n\t\t<h3 class=\"text-center\">Thank You!</h3>\r\n\t\t<br />\r\n\t\t<div>\r\n\t\t\t<img src=\"../app/images/Avis.png\" class=\"img-responsive center-block\"width=\"50%\" height=\"50%\">\r\n\t\t\t<img src=\"../images/Avis.png\" class=\"img-responsive center-block\"\r\n\t\t\t\twidth=\"50%\" height=\"50%\">\r\n\t\t</div>\r\n"

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

module.exports = "\r\n\r\n<div class=\"container starter-template\"\r\n\tstyle=\"background-color: #E9E9E9\">\r\n\t<div *ngIf=\"claimCreation\">\r\n\t\t<form class=\"form-horizontal bg-primarya\">\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label text-white\">Renter\r\n\t\t\t\t\tName</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">John Smith</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Vehicle\r\n\t\t\t\t\tMake/Model</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">HONDA CIVIC 4DR</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tOut Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2018-03-16</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Check\r\n\t\t\t\t\tIn Date</label>\r\n\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">2018-03-20</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t\t<br />\r\n\r\n\t\t<p align=\"justify\">To report new incident/accident, you need to\r\n\t\t\tsubmit maximum number of information given in the fields below.</p>\r\n\t\t<div class=\"panel-group\" id=\"accordion\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse1\" class=\"collapsed\" >&nbsp;&nbsp;&nbsp;Incident\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\r\n\t\t\t\t<div id=\"collapse1\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tDate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input id=\"incidentDate\" class=\"form-control\" type=\"date\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"MM/DD/YYYY\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Incident\r\n\t\t\t\t\t\t\t\tTime</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\r\n\t\t\t\t\t\t\t\t<input id=\"incidentTime\" type=\"time\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"08:40 AM\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Was anyone injured ?</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"liabilityInjuryInd\"\r\n\t\t\t\t\t\t\t\t\t\tname=\"liabilityInjuryInd\">\r\n\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"liabilityInjuryInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Party Injured</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Name\" [(ngModel)]=\"liabilityContact\"\r\n\t\t\t\t\t\t\t\t\t\t\tname=\"liabilityContact\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"liabilityInjuryInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Contact Info</label>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <label class=\"custom-control custom-checkbox\">  -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Contact Number\" [(ngModel)]=\"liabilityContact\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"liabilityContact\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- </label> -->\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">City</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Location of Incident\" [(ngModel)]=\"incidentCity\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentCity\" maxlength=\"30\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">State</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident State\" [(ngModel)]=\"incidentState\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentState\" maxlength=\"2\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Zip\r\n\t\t\t\t\t\t\t\tCode</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Incident Zip Code\" [(ngModel)]=\"incidentZipCode\"\r\n\t\t\t\t\t\t\t\t\tname=\"incidentZipCode\" maxlength=\"12\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Police\r\n\t\t\t\t\t\t\t\tReport #</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Police Dept/Report #\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"incidentPoliceRpt\" name=\"incidentPoliceRpt\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"15\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse2\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Insurance\r\n\t\t\t\t\t\t\tDetails</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse2\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Name\" [(ngModel)]=\"insuranceName\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Insurance Address\" [(ngModel)]=\"insuranceAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"insuranceAddress\" maxlength=\"60\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Policy\r\n\t\t\t\t\t\t\t\tNumber</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Policy Number\" [(ngModel)]=\"policyNumber\"\r\n\t\t\t\t\t\t\t\t\tname=\"policyNumber\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse3\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Car\r\n\t\t\t\t\t\t\tDamage Details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse3\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageDescription\" name=\"damageDescription\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"100\"></textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tSeverity</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6 btn dropdown-toggle\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"sel1\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"damageSeverity\" name=\"damageSeverity\">\r\n\t\t\t\t\t\t\t\t\t<option>Light</option>\r\n\t\t\t\t\t\t\t\t\t<option>Moderate</option>\r\n\t\t\t\t\t\t\t\t\t<option>Heavy</option>\r\n\t\t\t\t\t\t\t\t\t<option>Rolled</option>\r\n\t\t\t\t\t\t\t\t\t<option>Burned</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \"></label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n\t\t\t\t\t\t\t\t<!-- <input type=\"radio\" [(ngModel)]=\"drivableCarInd\" uncheck name=\"drivableCarInd\"> -->\r\n\r\n\t\t\t\t\t\t\t\t<input class=\"form-check-input\" [(ngModel)]=\"drivableCarInd\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"exampleRadios1\">\r\n\t\t\t\t\t\t\t\t\t\tNew Vehicle Needed ?\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf = \"drivableCarInd\" class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">\r\n\t\t\t\t\t\t\t\tContact Roadside Assistance\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-link\" href=\"tel:18628034850\"><a href=\"tel:18628034850\">Call</a></button>\t\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-6 col-md-6 col-lg-6  control-label\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<!-- <a href=\"tel:18628034850\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKCSURBVGhD5dlLqE1RHMfx4y2FFEkmHikJKQMlZeSVRx4TA48BJh4DI4pEJqKMZKAM5FlCRErMJAYkJcVIyQRRXpHX9zc4ddr91jl739Y5+3/zq8/kdu7Zv733unevtXajQqbgME5gsX7QH7MJX/G3xWkMQr/IABzEH7SeRJPuTvgMxwW4E2i1DmGjIXMdrnjRR0xEyGjIuNIp1xAuK+HKdqLfC5OheA1XtJPnGIwQ2QZXsqytCJFHcAXLeozaMxmuXFXjUGs2wBWrahZqzXG4YlXV/ky5BFesigeoPXfgypX1CTNRe+7BFSzjPeYjRC7DlezkJaYhTE7CFW3nLEYiVHbAlU25Aq1XwmUuXOGUOQgZTfg+w5V2Qt6NZs7DlXbGI2yWw5V21iNshuAtXPEiPXdCZw9ccUd3MGxGQRsKrniRHobDEDYH4Io7+mzYjEDZtfsvLEHYrIUr7nyAVphhcxuuuPMEupMhMwGaorvizi1oSylk1sCVTtFksi+79GOxG2egnU4dN/tFOQVXOuUcqpzMCrxD8XteYRGyRTvzD1E8UDtXUWatsgv6z+e+Q37jCLLtYmp35A3cwVJeYDpSqfK80pRoDLJkHr7DHSjlC/ZhNJrR2D8G9/l2dGEmIUtWo91QSNEJ3cUNuL+HsvSgnoos2YLU67he0BDPdmeqzJK74T6yZS/cQXplIbJlO+oaZjuRNRvxA+5g3bQA2aMt07LL5By0Odi16KFZdQbQFxfR9cmpphL70a2hdhQ93VPTm6ucd+cnNC+rJbpyq/AMrlxZesk6G7VnIJZB0/tvcGWdp9iMMO/vW6PtpqU4hJvQ8NO2kujVnbZttcCagf8tjcY/2tImBsXPeGQAAAAASUVORK5CYII=\" style=\"text-align: right; height: 35px; width: 30px; padding-top: 10px; position: absolute; right: 30px;\" ></a>  -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse4\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Property\r\n\t\t\t\t\t\t\tDamage details</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Name</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party/Property Owner\" [(ngModel)]=\"partyName\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyName\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Address</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Party Address\" [(ngModel)]=\"partyAddress\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyAddress\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Phone</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Property Owner Contact\" [(ngModel)]=\"partyContact\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyContact\" maxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">Damage\r\n\t\t\t\t\t\t\t\tDescription</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Damage Description\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyDamageDescription\"\r\n\t\t\t\t\t\t\t\t\tname=\"partyDamageDescription\" maxlength=\"100\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group cust-form-label\">\r\n\t\t\t\t\t\t\t<label class=\"col-sm-3 col-md-3 col-lg-3 control-label \">License\r\n\t\t\t\t\t\t\t\tPlate</label>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Vehicle License Plate\"\r\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"partyLicensePlate\" name=\"partyLicensePlate\"\r\n\t\t\t\t\t\t\t\t\tmaxlength=\"20\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse5\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Select\r\n\t\t\t\t\t\t\tDamage Area</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse5\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div *ngIf=\"initialImageDS\">\r\n\t\t\t\t\t\t\t<p>Please click on front, back or side of the vehicle image\r\n\t\t\t\t\t\t\t\tto view enlarged image of the vehicle to mark the damage area</p>\r\n\t\t\t\t\t\t\t<div ng-app=\"app\">\r\n\t\t\t\t\t\t\t\t<div ng-controller=\"imgMapCtrl\">\r\n\t\t\t\t\t\t\t\t\t <!-- <img class=\"rwdimgmap\" src=\"https://github.com/kulkaman/cardamage1/blob/master/client/app/images/damage_car.svg\" -->\r\n\t\t\t\t\t\t\t\t\t \t  <img class=\"rwdimgmap\" src=\"damage_car.svg\"\r\n\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\talt=\"Responsive image\" border=\"0\" usemap=\"#auto\" />\r\n\t\t\t\t\t\t\t\t\t<map name=\"auto\" id=\"auto\">\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,0,342,50\" (click)=\"rearCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Rear End\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,51,342, 230\" (click)=\"sideCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Side Damage\" />\r\n\t\t\t\t\t\t\t\t\t\t<area ng2-repeat=\"part in auto_parts\" shape=\"rect\"\r\n\t\t\t\t\t\t\t\t\t\t\tcoords=\"0,320,342, 100\" (click)=\"frontCarClicked()\"\r\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Front End\" />\r\n\t\t\t\t\t\t\t\t\t</map>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"frontCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<!-- <img-map src=\"../app/images/CarFront.jpg\" style=\"height:346px\" -->\r\n\t\t\t\t\t\t\t\t<img-map src=\"/9j/4AAQSkZJRgABAQEAYABgAAD/4QAWRXhpZgAASUkqAAgAAAAAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAHoApgBASIA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBAgMEBQcI/8QAXhAAAQIFAQQECAgICgcGBQUBAQIDAAQFBhEhBxIxQRNRYXEUFRYiMoGR8AgjJEJiY6GxMzRScoLB0dIXJSY2Q0RVkqLxU5OUo7LC4TVFVmRz0xg3dHWzRmWDhJVU/9oACAEBAAA/APf4QhCEIQhCEIQhCEIQhFqlBKSpRAAGSTyjmTVyUKSBM1Wqcxjj0k0hP3mOPMbTbKlfwly09WoHxTvSdX5OeuOTMba7FZVuoqrr5+qlnOzrA645b+3+0WzhmWqj+eBSygA6jrWOuOa98IqkpXiXoU44kjzSt5CM8O/rjnTHwjckeD26kJI0Ls4Oz6PbGmr4QNefIMrQJMg45rXkHHUR1/Z7LFbYdok3pLW8gZxgs095fVwyT2+/C4X9temVbzFCnNzHzKSrs6x3/wDTlYK9tsm8bsjUG8gHHgSEcMZ9L1xkxtxmBkNTqc4PpsI006198E2/tuXjpJydTgDP8YNDJ06ld/vwoqzNszwHS1R/kT/GQznTt7PfTFBs62tqUFLrAJxrmpL1OnZ2e+kZEbJ9pisIXcTASRglU89j5vUnsPvwqNje0JSE71yyXAAjwt8dXUnsi1Oxe/ylJNxyYPzgZx/s6k9h9sE7D71c3Vu3HJb+m8OnePV2dhgjYXeO6jNxSmgGQX3vo9nYYtRsMvLdTvXHKDQAjp3s8uodhgjYjfTSUpauOSCcAkGafSc6Z4J7DFzexnaEkJPlJJg8wZx/s6k9nKK/wQ7Rm0pWm45VS+CgJ14HiNc7vZ78sadmW1Vkp6OtJUMAndqLg107Oz/LTFvkLthSQPGjxAAyU1PiRj9kYV2ZtkbAxMzznAEN1NAz6Ouqx1H34ay7Y2yNEpV43VjAJbqDZB0Tr+E7Pflou0za2wMLbuMgAE9Gsqz6PUo6+/dqOfwpsI3nGbrSlIG8Q09y3dff/Lcp18bR7fWkut1Z9KAApM7LOqSeGvnAHjn3Okga+EJW2x8qoUkojGShS0DlrqT2+zvxvy3wjUnHhFuA5xgtTg7OtPbHSY+EPQlgdPRqgjOMBtba+rrI6xHSZ2+We6ElTdTaKhnzmEnq6lHrjpy22ixJkD+OFMk8A7LODq6knrjrS+0qy5obzdzUwdjkwEH2KxHYlrgos6oJlavIPqIyA1MoUT7DHRBBGQcgxWEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIwTU1LyUuuYmnm2WUDKnHFBKQO0mPJrh290iRmDL0ORdqbnJ1SujbPDhzPHq5RF07Z79nUibk6FKqlCsIBRKuLG8cDGd7tPs5csDd67W6/UHJKTacYmGkJW40zKIQUJJGCd/J119nLlseRm2GrY8NrE40hWN4KqG4M6ckEdsXN7BrnqBSqr3BLq0wQtbrp4Dr05R0ZT4OjKdZq4F8tGpfHDHWrsjryvwfbbaSPCKjU3lDHorSgaYxpjsEdeW2I2TLnKpKZe1B+MmVcsdWOoR05fZVZEtgt29Lkjh0i1r6utR6h7I6cvY9qyhyxblLQRz8FQfvEdFijUqVOZemSbJ4fFsJT9wjdAAAAAAHACLoQhCEIQhCEIQhCEIQhCLVJSsYUkEdojRfodImdX6VIun6yXQr7xHMfsS1JhWXbdphPHIlkg/YO72RzXdk9jvcaAyg8i24tOOHUrsEct/YfZbiVBuWm2MkEdHMq0I4cc9Q9kcmY+D3bqvxSqVNnhgLUlYGMdg6o5Ex8HNrQS1wZTgZD0t1Y6ldkc87C7tph3qXX2AOpt51onGMcNOUUFpbZKSlHg9WnXkpGMIn+k6hwWT2n301lXttcoc6zJTzDr8wpBdSh6SSorQN0KI3MZAz9sZztpvyT3pmdoMoJUL3TvSzjYB83TeKu/l/0lVubfKPPvIl65KLpritA6hXSNZ04nQp48xHq8rNy89LNzMq+2+w4N5DjagpKh3iNiEIQhCEIQhCEIQhCEIQhCEIQhCEI59Xq0lQ6Y/Uag+lmVYTvLWfuHWT1R89zVTunbZci5GnEytEl1BZBPxbScgpUsggqWdcJ7OwkegeRFEsKhsNUqTRNXBOKTLS0w+kKV0hwCsDgAkDe06omSBTrEsvedVuydOl8rUB5zigPtUpXDtIEW2hS5qUkHqjVB/G9UcEzNg/0WgCGh2ITgd+TziSQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCERq8KXNzdPZqVLH8b0tzwqUGvxuPTZOOS05T34PKMjiaffFmhTZzKVBkLbURq2riMjkpKhqOsERCm7IoV/wBDcaqsmJGvSKjKTL8sAhSXEgYVjgoEYV64gNNqNzbFrmTTqlvTVGfOgTno3U6ZW3k4SoDiI+haTV5Kt0xio099L8q+kKQtJ+w9R7I34QhCEIQhCEIQhCEIQhCEIQhCEIR87bSrhnNoN7StoUFYcl2HtxRSThboI3lHB9FI+4+r2u1LZkLQt9ilSKcNtpy44RgurwN5au049gA5Ry6EBcd0TdyKUpUjKBUlTUngcfhXR3nzQepPbFKjm57yYpAJNMo6kTc5j0XZjiy2exPpkdYTEzhCEIQi0qCRlRAHWYxmZYT6T7Y71iMTlTkGRl2dlmx1rdSP1xpuXTb7Silyt09JHXMo/bGuu9bXaIC7gpqSTjWZSNfbGuraHaKTjygklHqSveP2Rr/wkWscFFRW4CMjo5dxXq0Tx9+uLv4SLcJIQ5PrI5Jp75/5IqNoFLV+Dp9bc5eZS3uP93th5dMlRCbduQkaH+K1jq6++KeWyj6Nq3MRpj5CBnPer74qLxnSCBZtxEjGnRsDq63RBV3VPGEWTXyrGfOMsBy59N2/ZDysrOP5jVvhn8LLf+7DysrOP5jVvhn8LLf+7DysrOP5jVvhn8LLf+7FRd1SAwuybgCuPmmWUOXPpu2BvCdSPOs64s4GgaYP3OxYm917p37VuVGOPyEK17MKOYvF8tHRVvXKk9tLcP3RadoFLQT0shW2gNMrpb2v+GKHaRbiCUuOT7ahxSunvgj/AARUbSbVKgFVJTYPznGHEj7Uxkb2i2gtOTX5JGmcOL3T9sbTd7Ws7+DuGmK7plP7Y2W7moLpIbrMgojjiYT+2NpupyLoJbnJdYGNUupPH1xmTNS6vRfaPcsRelaV53VBWOo5i+EIQhCIbTEm2bxmaQTimVYqm5Pqaf06VvuV6YH50K6fJq55a5U6U+aCJKpjkjKsNPepR3SepXZHWum2pG7KC/S55PmrGW3B6TSx6Kh2gx4lszuGd2e3tMWZXVFErMPbiFH0UO4ASpP0V/fjtj6JhCEIQhCEIQhCEIQhCEIQhCEIQjzra1fAtS2zKyjgFUqALbIyMto0C1+rOB290cnYpZJo1EFwT7Z8YT6QUJXxbbwPtVjPs9Xfvi7pKXYVQJSqy7E/NuJl33ivzZJpWd9xauCTughIJBKiIuF723SaEmUoHSTxlZfo5WWk5dawd0YSMgY6tc9cadrVt+mUhDbdu1ydn5hRmJx8y6W0reXjOq1A4HAZ5COyLhud5QSzaDrY5mYnWx1dWeuAnr4dVpRqRLjA1cm1L19QHbFVS99vHe8OokuCB5qWHF44Z4nvjXep11gjwq8ZKW6w3JJHV1qjTdbU2kqm9pQSANS2WEevnGk47boJEztMm3CcAhFQbBxpp5o0jAHrECipd21Z86ZInX1ch+SItSnZ3oAavNEAEYVOL5jq7RGRKbBLmBbFUdOg8+RmFZ4Y9L1eyMjSrNIJYsOfcBOP+zBqf0iI2256kbpEts5nVY66eyOrrPviNtuqrbOZbZ7OJ0GT0bCDy7ffEZ/KCtoUejsab0xgiYZGeHb74jTq181uiU/w2asydEsAN4tzCFlvrKgOQ/VG1JXPclSl25iSt6TfYcGUvIqSFII05gdv2RmNUvXGlt0/OM61DTu9HvivjG91A4t+mIIGm9Pk59iYGdvg4ApFISeszayP+GHhN84GadRM6cJhz18u+KGZvtWN2nUNGg4vuHvHARy526Ljpsz4LPzlpyr+AejdmlpURprgxg8vKiVboqNoE6cKkeeP28OyNqn3Hc1WWtFOftWdW2AVol5palJBxr2f5R0vCb5wM06iZ04TDnr5d8U8NvlIGaPR15/Jm1jGnamKmoXwlP8A2FSln6M8ofemLRVb0Bwq2pInjlNQGO7VPHj9kVNbu5IJVabZCeO5PoJPdpGnU75qlFkVT1SthyXl0gkqM81k8MJAOCpR5ARfI3pVqjJtzbVl1XoXMFG+42lR4a7pII9cZV3RNBOH7LrGBjRLTSxk44edGq7X6Yo4mbIqnDBCqc2rHDTj7/druVe0lp3X7NnEhOMBVF56aaDtEaipnZ2teHrZca1wFLpLiR36J4RYDsrUgfJ0MApzoxMN6eoCKpTszyS1WVSuRnSoPtgDT8pXd7OyMzUpZDpAYvWYScAAJrh7McTG4ij04ebJ7QKgjJG6PGDTmvrGsbrVv1Z3zpS+JxxGObTLnryAIyGkXg0R0N0SzoH+np4ye/dV3xTwe+md3dnqLM4Gu+wtGfYefv2V8Nvpo+fSKM+PqppaM/3h3wFw3MyrdmbPdXw86WnG1D7cRxLnrcxU6Z0S7brcpUJdaX5R0MhwIdSQRqlXA6gxvG+Lbq9GMlX+kkvCmeimZecYWgAkYUnexjnxzFbIuiVdlUUGbqLL09KHoZaY3wUzzIA3HEK4KVukBQGoUFaRHNtlkeOKR4/kGvlskB04SNVtZBJ01ynGe6OvsivcXZbCZaadCqlT0padJ0LqMDdcx28D2jtj0WEIQhCEIQhCEIQhCEIQhCEIQjUqFQlqXT5ifm3EtS0u2XHFq5ADMfO9tyk3th2mv1mfb3aVKlK1Nk53GxgtNaHiSCT1+ceoD2Kqz8/Wasu27fd8EaYAFRqDafxdJAw01y6Qjn80duI7VNt2l0qmiQlZJrochS99O+pxQIO8on0lZAOTzEc6oXdTZCeNMp0tMVSppAKpOnNhRbBxgrUSENjh6Sh3GMKHb8qGFIlKJR2z819xybdHfu7iftMPJ66n8eGXo6hOBvJkac01r2FW+YCxytBExc9yPkgZzP8AR5/uJGPVF38HdvL3TMNz8yoc36g+v7CvHKMjWzu0WiFC35IqHArQVfeTG61aFuMEFqhU5BHApl0jH2Rvs0uQl0gMyUugJ4brQGIzpYZQQUtISR1JAi8JAxgDQYHZF0IQhFCARgjIMRWbs1luccqFvzr1Fnlq3nPB0hbDp0z0jJ80nTiMK7eEYvHt0UlO7V7aNQbT/WqK6lee9pwpUO3BVF38I9AbwJtNUklH5s1S5hBz1ehFP4TLTznw+Z5f93zH/t9sUG0y0iAfGL6R1qkJhI+1vtik/f1JfpKlW9PylSqTzgYlpZteVdKo4G+nikDUnONAY5FZsFSqBLBMozWp0TiZypNzCghU+QCCkLOiQCQQk+b5oBxFJt+QqFONMa2ZVFxZSUpYelWGWkk6aub+AO0ZOnCNyVsVxq0aWylxqVuKntAszjA9FfHo1HQrRjCTniBnjG3KbRKCilS71Zn5enT68oeklr3nW3EndWN0ZJGQcHHCL/4TLS0/jB854YkJg5/3fbFf4S7Tz/2hMf8A+fMdn1faIododFcz4DL1ioK5JlKU+rPrKAPWTiKCq3dWSEU6iN0aXVj5VVnErdweO6w2o6j6SxG1TbOk5eeRU6pMPVeqpHmzU3ghrrDTY81sdwz2xJoQhCLC02RgoSfVFhlmFcWGz3oEaj1CpMx+GpsovTHnMp/ZGm5ZttOjC6DTiP8A6dP7O6NNezu0ljHiOVRqD8WCjGO4xZ/B1biAQyxOS+eHQVB9vd4cML7BFqbDl2ifB69ccuknO6iqOKHAD5+eqLvJKrMH5HelaR2TCGHx/ib98xQUi9WMlq7JGZ6kzVKA+1Dg+6KCcvySG/MUqiVJGdUyU04w5jsDiSk+tQjapt2UypzqadOsPU2pnVMjUEBC1Y5oOSlwdqSY3qjb1KqlN8XzMk2WASpsIG4W1ZzvII1Sc65EcSlVKcotWatmuuKmW30nxdPuD8YSBq059YB/eGvXHjdfkJzZBtPYqlPbWqkzRUtCAcBTRKA41x4p4j9E930VT5+WqlOl5+UcDkvMNhxtQ5gjPtjbhCEIQhCEIQhCEIQhCEIQhCEeE7bLufnZ+Xsykb7rq1pVMobOq15TuN/aCYl9MpZ2c2HI0SnBDteqC0toONHJhQG8o/QQkexI64mNv0RigUdqRZJWvVbzqvSddPpLPaTHGq9QnK/WHbco0wWGmADVJ9s+cyDqGW/rFDUn5o7SMd6k0iQolORJU6XSwwjXCeKjzUo8STzJ1jowhCEIQhCEIQhCEIQiGPyzE1talVOS7fSSlJcdbcCcK3luJTqeeAD7YmcIRDLYYYZvm8ktMoGZmXcLgAyVKZSVDPeAcdsTOEIQhCEIQhCEIQhCEcutUOn1+QVJVGWDzRO8k5IUhQ4KSoapUOREcWiVCeolVbtutvqmS4lSqdUV4BmUJxlC/rUgj84ajmB2K9RWK/SXZF5xbSioLZfb0Wy4nVK0nrB/ZEOqdL/hGsWdo9SQGa9TnOjWcehMIAKVpz8xYwc9Sj1RENh92vSM3M2ZVl9G80omWSvilQwFo9uoHfHu0IQhCEIQhCEIQhCEIQhCEIRHryuaXtK2JurPYK0J3WUZHnuHRI9seSbFrZmK5W5u9qugunfV4M4r57pxvrHYOA0+6PSrdULkuSduZR3pKXK5CmdRSk4edH5yxug/ko7Y6901o0KhuTTTfSzTi0sSrX5byzuoHdk5PYDF1s0QUGiNSil9LMqy7NPni88rVaz3n7AI7MIQhCEIQhCEIQhCODcNfVSEysrJypnKtPrLcpKhW7vY1UtR+ahIOSe0DiRHPFBuSopDlVuZyWJ16ClspbQjs31byj36eqKpsKTJKpir12YXnOV1FwdXIEdUcueospZNckLjllTBkd0ydQW/MLc6JpZTuOZUThKVAZ7FE8omJrdJGM1OSGRkfKEaj2xaq4KKhG+qryAT+UZlGPvjVmbtt2UYdedrlOCW0lSgJpBOAM6DOpiM0C0Ga1KO1+r+Gsz9TdMyUMzTjXRtnHRoISeISEx1vIOWaT8lrVdllZyCmoLXj+9mMa6LddMAcpdwJqCUjJlqmyPP7A4jBSe0gx17errVfkVvpaXLzDLqpeblXPSl3k+kgnnxBBGhBB5x2YQhCEIQhCEIQhCEcW5aP47o62Gl9FNtKD0o8OLTyTlJHrGD2ExS2K14/oTE4tBbmRlqZaIwW3U6LT7fsIjj3Fm3bnkbmb0kpjdkKoBwCVK+JeP5qiUk/kr7I842z23NUCuyl60YlpReR4QUD0HQRur9YGD3CPWbMuWWuy1pKrS6tXEAOozkocGigfXEhhCEIQhCEIQhCEIQhCEIQhHzftSrj987QZS1qW7vS0s8GEhJOFvFQ31ack8Pb6vWq1Li3bSptrUQ9DNzu5IS6kcW04+Ne/RTvK78RK6bIS9KpkrTpRG5LyzSWW09SUjA+6Iygm476UvANNoeUpIOi5pQBP8AdT9qomMIQhCEIQhCEIQhCERCnJFQ2nVqbUpRFMkmJFsckqc+Nc9eOiiXwjC6y2+ypp5CXG1gpUhYyFA8iDxiB3rZNvs2rNTNNtmlImZZbUwOgkGwsoQ4lSwMAHVIUMc+EZJ6V2fyVuO1eVpFAKSwVsFqUZ31qI81KRjOScDEb9r2ZRZS2KQ3N0Omqm2pZouLVKoKgvdBJJIznMS4AAYAwBFYREJYGQ2pTrKQQ1VaciZJ5F1lfRn17i0f3eyJfCEIQhCEIQhCEIQhENINt3\r\n\t\t\t\t\t\t\t\t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\r\n\t\t\t\t\t\t\t\tZBNy6jhMw0T2LEZUqSr0VA9xi6EIQjg3DaFDudncqkg26seg+nzHUdoWNRwERKuUGqyEsyJ8vVSTlCDK1KVTu1CSIxg4GjidNRzHEGO3YN3M3TS32lTLD1Qp7nQTKmchLmnmuJB1AUOR4EEcomEIRD7+mfCaIq25VRXUq1iVbbQMlDSiA66epKUbxz14ESxppLLSGkDCEJCUjsEcm6aP4/teo0saOPskNEHGHB5yDnsUEmOancvrZshRyhc/JBRHNt4Dh3pWPaI8bvmUrc/O2/edGk5lc24whMz0DZWpqZaUEnO73H2ezb2V09mh3E/cN4ImpOefBEo7ONKSgqWBvrKjoFHhg44n1fQDLzUwyl5lxDjaxlK0KBCh1gjjHn1tXRSbelp+jTbyzMytRmG0sssqWrcK8pOEjQa/ZHa8tw/pIW9XJvhqJXo069qyIePbqmT8ktTok4HnTc6hOPUnJgBfcz5xVRJEH5vxj5HD83tink7csxrNXe82DxTJyjaPtVvQXYck+FKqNYrk4DqoOVBaE6diN2PCLpk6Rce02QoVqSiEy7S0srdSpSy6oLSVqKiSSABjOeRj2HaTs1lr1lkzcspMtWGB8W5wS8BqEL9Y0PuPObX2n1+wZzycvGTmHWWcJSVD45tOAMpJOFo44+/HD3GgXJSLmkBO0eeamWSBvbp85BPJSeIPfHYhCI1ei6Oi3nTWJMziFKS2yw2MuOOqICUo6lZxryxmORQrLnpmQlVXdUHagtlIDUkV/FNAYwF4/CrHDeMTdhhqWZS0y2httIwlKRgARFrhIqt3UKiBWUMqVUZhIPJGjYPeo5/Ril44qNXty38Eom53wuYHLoZcdJg97nRD1xL4Rwq1a8jW3W5lSn5SfZGGp2VcLbqB1Z5jsORHFeVdNJWU+U9DmkcAKix0Kx3qQrB9kc9y+qvLKxMztjtjQZVXSjXnoUd8ab+0qaRnNesdskabtRcfxw081IzHJodzzFIo8vTmLppIQ3kl1mjTbylqUreKlciSSc8I6CbmrMxoi46q4lQ0MnarueXDeB+7/o8Y1d9XnT1+OcNGqI2x1c1JHvx4RUJqjyUkMbRHCAOLku1nh9YO+LvF1Vf0NBvN7mfCK2y3yHDDnHsi3ydqRXvCzqurho5c2mO7eMVTalQUf5kIOB/WLhcV1aDCeyLxZNQzhNl28kHmuqvnHDh8X74i9FkVQOgptS0WgRjK3nnN3h9EZ+zhGRNj1nA/iOzEEjB+TPK5j6QjO3ZVaAz4DZqCcHIprpI0H0+yMjVmV1C94OWu1oB5lHJzw61+/3Zk2dX0pATVKEgDkmiJIH+OMiLRuJJA8fUtKQeCaK3pw+l2ReLTuIboFyyqcEcKQzoNM4i/wAk6+FgpuvdA6qXL68OOnZF4tKtDhd82O6Rl/3YG0auc5vCojPIS0uAO4bnYIuTaVW4KvKr4wB5jTCSOH1fZFfJGp8ryrQ5aJY0HZ8XDyRqSgQu8a4QeQLSftCMxTyLnP8AxhcHD/To/dinkXOaZu+4OGvx6P3YGzJw8bvuDHP49A/5Yqmz5xJBF3V7PP45B105FPvmK+SVU/8AGdb9QZ/9uHklVNf5Z1vXsZ/9uHkjVCc+WVazw9FjQdnxcUVadW3d1N41UDGPOZYV/wAkW+SFYxjyxqfZ8ml9P8HYIoLRrI4XfOd5kpcn/g7ItNo1oLCk3W4cf6Smy6vUPNixVoV5SU5uhskYyFUmXIzp2dkWi0a/wNwyJGmUmjM45dvvj2YTZdfUnCqzRj1ZobenD6XZFi7GrSx50/b68cEmhpA5dS+yMJsOsZSVKtd0DGi6ORrprovsi3yGq6SPkNnrzjKlU10Hl1L7Iw+QdWUkBVGs7GNR4K8OrqX74jF5BVNASfJy01kjghyYbKTkc9cxTyEqIGlp28DgZU3VZlB/R8w44CMfkbU0qB8kZMaf0NwPpAOn0Brx9+FTbNVQd4WhUM8Mt3Qrh68RQUOtoHm23cjZAGOiuRs+rzlCKqlK2hQ3pC/UJTphuoyy+r6wdsUL1aaGE/whNc8ql5R3q6lH2Q8cVxpSQmp3mg6Y6W3Eu6du6mHlZVGloDt0TjRxkiZtV8A6jqx7/ZxJO4GaVXZiuSdx0NqYmWNyZS9SJthDuoIcUPyhgjPVn1SJG0iaWR0dw2K4DzVPuNY9oMbLN5V2bCegqtjne+cipqcA5ZwMZ1josJuis7ubppMs0rGRTJcOLwepS1KHDniO5R7akaM65Mt9LMTzw+OnJle+6vhpnkNOAwI7cIiNn/xdVrjt85CJSd8Ll04wAzMDpMDsDnSiFvLFKuut0M4S24sVCWGfmr0WB3KBPriUvMtTDKmXkJcbWMKSoZBEQurWfP02UmnrLnVU59xPnSZOWF9ZSDo2vHAjTPER0rIFJ8nWvFcuWCgluYbd1eQ8NFhw8SrIiTwhHIrty0i2pPwqrz7Mo2fRC1ecs9SU8VHujwu6Np1b2gTnk7aMjNIlpg7p6P8ADPJyMlRGjaNddR2nXT0jZrs0YsqT8Km1pfrL6AHnU53GxgeYj2ann2R6HHFuK1qPdUj4JWJND6BqhforbPWlQ1EeMVjYhXbfnvGVn1RxZT6KS4Wn0DTQLBwRp2Rhldq9/Wk4mUuajmaQjdSVvtFlzGBrvjzTx5iJVS/hA23NhKahIz0ksgHICXU506jnn1RIGdsdivoChWQjPALaWknh2doiN3htStczlDqEjPeH+BzRcclmcgqSU43tcDIyCMx2qBtntauzapdan6eQ30iVzYSlKhoNCCeuJlI3HRam8GZGqSkw4RkIbeBJHdEOprVx1e56zXKNN01mTdcEm0qaYW4vda0JSAoDG8Ve/Dn1+mXNJ3FTn2rpQ9cc2yZSWaZpyA02zvoU84oKUrAGBrxOg7pR5GzzxHhl53A6cYIacZYBOmvmNg/bzjUqWziXnqc+y1X7gbmlow1MLqby+jV17u8AeHA/ZEfkqFakrNN067rfRLVA+YiYmZh1+Wme1C3FnBP5Kte/ETSWsOz2MOMWzSNRofBEKyPWI6MtblDkwPBaNTmMcOilUJx7BHRQhDad1CUpHUkYi+EIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCMbjTbow4hCx1KTmOc/blCms+EUWnPZ/wBJKoV2cxHOfsCznApTls0gaecRKoTp6hEKnqBak3NuUy0KCmaqKRuLmpeaeZlZXlla0LGSOO6nJPZEkp2zpmSpsuwu4LgVNIQEuzDdTeT0h5ndKiB6hG15GzzKsyl5XC0eI6Vxl4Z7ltmIvblMuWbrs+/N3QhFySSPA5lt6nILbjG+VtuJCVJylQPHiDvJ5Ru1Fq5aRc1FrlYmqY9KIc8BdVKMrbXuukAb28ojAUB7Ynk5U5CQGZycl5fIyOlcCcj1xCLj2xWxb023Khx2oOrRvnwPdUE68CSRrHAtDanaxma1U56f8AVPzaXWpVwElKQ2lO9poScaxJXdsdjsjPjgL6g20pWeHUO2OBUvhA21LoIp8nPTrhxu5SGknhzUc8+qIlM7WL9u9RlrapBlELON+Xa6ZYB3fnqwkaE8v+m3R9idfr02mo3jV3EOLwpaErLryuGhUThPDlnu6vZLetaj2tIiUo8k3LN4G+oarcIGMqUdTHahCEYXmGZhvcfabdQfmrSFD7Yi9R2aWfVNZihSqV8ltAtkf3cdUcB/YXZrv4JudYGQcImFcu/uHsiLXfYdjbPaQqpPNTE3NrHRykq8+Sla9BvEDknQ+oRZsKspSlPXVPNANLQWZRsghKgcby8HloAO6J/fdOorNECEyDaaq+sNU7wVIbeL54bpTrgcSeAA1josOS9iWTJtzhU4qWaQ1utarmHlfNQDqVKUTFbXos20t6uVkpNangOkCdUyzWcpYR2DiTzJJ6sSiEa05JStQlVys5LtTDCxhTbqQoH1GIubXqdEV0tsVPo2eJp08VOMHholXpI0B6x2Rnlb1lmpxNPr8s5RJ5R3UCZUCy8fq3R5p48Dg9kSkEEZByDFYQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEItJABJIAHEmIxNXpLvPLk7dlHK3OoO6rwZQDDR+m6fNHcMnsjXRbFUrg37qqPSNHB8WyJLbA7FHO8v14HZEok5KWp8qiWk5dthhAwlttISB6o2YRGbmo804tiuUdP8cyAPRpzgTLROVMq7DxHUQIsmHJO/LKm2ZVakGYbKChei2Hk6hKhyKVAZ7o49l0ejVWQVMVNk1CvMKDNRNRw4606B6ODoE8040IMQbbdYqZUsXRS5dCJdvdbm2W0hKU4I3V44Y0wfVGSzbGsbaLRk1Rhh+SnEbqJyVl3iEoXgEEDkDjI/6RKZfYXZjIw41OPDIIBmVDGMdXcI79O2ZWfS90y9Dl1KTwU7lZ5dfcIlLLDMu2G2WkNIHBKEhI9gjLCEIQhCOJc1yyFp0N+rVJwpZbISlA9J1Z4ISOZP7TwEeC0Cj1rbPeKq1VypqjMKAIGd1KBuqDSO3rPbnqA98qVRptq0QPOp6KWYSGmGGU5UtXBLbaeajwA/VkxyKRTnZd6Yu26FtMz5aV0bSl5ap0vx6MHgVHAK18zoNBrzmqC9fjnjqrrm5KVT51HalnlNOMjiH1EfPVyBBAHEZjfE1dttAJnJfyipyR+MSqA3OIH0m87rnekg/RjtUe5KTXUEyE4hTiThxhwFDrZ6lIVhQPeI7EIRrTknK1CVXKzku1MS7gwtp1AUlXeDEWVatToA6S06kGpdI/7Knyp2WPYhed9r1Ep+jGzJ3pKpmm5CvSj1DqC9EtzZBadPU28PNX3aHsiUAgjIOQYrCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEWkgAkkADiTEWnr2l/DV06gyT9bqCdFIlcBlo/WPHzU9wyeyNfyUqtfw7dtT6RnORSqepTUsOxavTd9eE/RiVycnLU+VRKycu1Ly7YwhppASlI7AI2IQjj1m5KTb6EmoziG3F/gmEgrddPUlAypR7hHHEzdlxKIlpdNvU4/wBPNJDs44Potg7rfPVRUfoiNB2hvWEvxzSVzs5KLO9WGX3VPOvdcwnJxvjmAACOQxG9Vqe8+ti77WLblQLSS40FDo6jL8ejUc4CwNUL5HQ6Ex2abUaZdVDUttAdlnklp+XdThSDwUhaeRHAiPAq/SKxsYvRqs0YqepMwohKVqwlSSU5ZXrxAGh7jyIj3u2LjkLroUvVqcsll0echR85tXNKu0R2oQhCEIQhHzttJmJq99rlPtJl8plWHUtJABOFYCnF6HiEg+z2e1JTRbGthDSAJWnyiAhCQMqWrkAPnKUfaY0KNSZuq1Fu5K+jcdSnMhIK1TJoPzldbpHE8uEaqVC/qmFJJNsSbnEcJ99J+1tJHrI7Im4AAwBgCKxxavbNKrTiXpqW3ZpH4OaZUW3kdyxry4cI44Yuy3QOhdTX5BJwW3cNzSE6cFeivnxxHSpF30urOiW33JOf5yc4nonR3A+l6sxIIQjVnZGUqMquVnZZqYl3BhTbqQpJ9RiMeTFUoJK7YqBEsMk0yeUXGT2IV6SO7URsU+82FTgp9blnaNPk7qW5kjo3T9W4PNV3cYlMIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCERWdvSVE4qn0Vhysz6dFIlSC22fpueinu4xhTbdWrpLlz1D4gnKabIKLbQGmi1+kvn1CJNIyEpTJNuUkZZqWlmxhDTSAlKR3CNqEIj9Vu+k0mY8DLypqoEebJyqekdJ7QNE+siOf0F23Ao+EOot+RP9GyQ7MrHar0UerMdWj2xSqEVOScsTMr/AAk08ouPOd61a+oadkduEQfAsGraDFsT7uMDhTn1H7Gln+6rsOmxWqZO0qpOXJQW1OPLCfDZFJG7NIHzhrgOAcDz4HlHR/iW+rZWhSRMyE0kpUlWikKH/CpJ9hjxXZq/M2JtbnbSfdK5d9amDlWiiEpU0vGeJSQPWfV9EwhCEIQhHmG1TaY5aCpelUlCHKvMAKJWneDSCQAccyTwHZHmNm0+6WLlm9oE9JuKFMmVLqAWjDju8AHwhGdFIQpSsaDzccdB7oxRnKxcKa5UZhuYk2MKpUuySW0ggHpldaznTkB3xhud2arFWlrUk3nZdEywZmfmW1bqkS4UE7iTxClnIzyAMSeUlGJCUZlJRlDMuygNttoGEoSBgACNiEIRy6tQqZW2OhqEm2+BqlRGFJPWDxB7RHB8T3Lb5zQ6j41kRxkKms9IBp+DfGo04BQI7RG1Sr1ps7Ot02fS/SKqoZEjPo6NS/8A01eg4PzSe4RKIQjUnqfJ1OVVLTss1MMLGChxIUIjHiCtW2nftuc8Lkk/91VBwkAdTTpypJ6grI7o6NFu2Rq80uQdQ7T6q0Mu0+cTuOp7U8lp+kkkRIYQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQiP1q7JKjzKZFtt6oVVwZap8mnfdV2q5IT9JRAjmpoFcuLDtzTvgkmrhSae4Qkjqee0UvqwndHfEokafKUyURKSMu3Ly6BhLbacARtQhEYqF6U6VnF06noerFTScKk6ekOKbPD4xeQhsfnEHqBjVFIuWv4XWqgKRJn/ALvprhLigeTj+hzy8wDvMd6kUKl0KXLFMkmpdKjlRSPOUesk6mOnCEIwTMqxOyrsrMtJdYdSUONrGQoHiDEXtdyZpFVmrUmXHH2ZRlL8g+s5UqXOE7ijxJQdM8wRGZ2juUmumtUt+WlZJ7Jqsu+SltSQCemTjRKxjBzoRxwRHiN4U26pq46fflNlnP40fSuRS2gdK0BuhkKSTqVITvdWuDHpGyraU/d6Zil1dpDVXl0he8hO6l5GgJ3eSgdCO6PT4QhCEIiG0m6l2hZszUGCnwxxSWJbOvnq5454AJ9UeNWfZ113JPMXvU59gstjwhEzPDfLu5w80EEJBB6v2e0bP5d7yJk35zccmJ7fnHyBotTqis8e/HdGtbbirZrTlpTKiJPBeo7iyPOa0KmeslBOn0cdUbl1SU7Kvy9yUhpT09IJKHpZP9aliQVoH0hjeT2jHOO7TajKVenS9Qknkuy0w2HGnBzB9+EbkIQhCNCpUmQrEmqUqEozNMK4odSCO8dR7REb8RV23SHLdn1zskgAeK590qwNNG3TqnTgFZHdHRo92yNUmTIvtvU6ppGVSc4AhZ7U8ljtESKEI5Vat+nV6XQ1PMbym1bzLzaih1lX5SFjVJ7o4CqjWrS82sdJVqOCAKg0j49gZ/pUD0gPy0+sRK5KdlqjKNzcm+2/LuDeQ42rIIjZhCEIQhCEIQhCEIQhCEIQhCEIQhCEI1p6eladKOTU7MNy8u2MrccVupHriK+H1q7sCjlyl0dWip91vD76fqkn0R9JQ7hHdotv0632FNyDAStw7zz6zvOvK/KWs6qMdaEIj9XumRpkyJJlDs/UlejJyg31jtVyQO04jm+Iq9caQq4p5UjJq/7spzhTkdTjw1PcnA7YkdMpFPo0mJSnSbMpLp4NsoCRnrPWe0xvwhCEI0qlUZSk05+oTzyWZZhO+4tXIft5RwrWkZyZfmbkqrZanaglIZlz/VpcapQR+UeKu3A5RrXE4q56uLTllKEokJeqzqeAazowD1rxr9HPXGbaBLLFlzMxJhCJinlualzu6IU2oKGAOwR4zdtmXVbE89e9Lnmi08A+5MSeWy2XCnPmKz5vDr/Z7Hs1uxV42VK1J8p8LbUZea3RgFxONR3gpPriYQhCEI8X+EQh80CiLShRlkziukUNAlZT5uT/AHvZGCX2lWu7svboUlPKlZ/wNqUDTySnJVupWQrhjUnJxE+n7uplquyFKdZeUwiWbW/MNec3KNEhCFLOdElWmeQGeAjrXHQm6/TQ0l0sTbKg9KTSfSZcGoUPuPYYw2vXnKxLPS882JeryK+hnpf8leMhSetChqD+yORMKNi1pycxi2p9zMwANJB8kDpOxtfP8k68CYmqVJWkKSQpJGQQcgiL4QhCEI5dYoVPr0sGahLBzcO824klLjautChqk9oMR8P3BaIw+Ha3RUj8MkZm5cdqRo6kdYwe+JLS6pJVmQanqfMtzEs4MpcbVkdx6iOBB1BjfhCIhOW3OUqcXUrVcbYcUSt+nOHEvMdeMegvtGnXHToNySleQ8hsLl5+WITNyT2jrCuojmDyUNDHchCEIQhCEIQhCEIQhCEIQhCEIQhCOHX7llKChpC23ZqemDuyslLjedeV2DkBzUdBHMk7Zm6rPt1W6XEPvIO9L05s5l5Y6an8tfadOoRLQAAAAABwAi6EaNTqsjR5FydqE23LSzY85xw4Hd2nsGsRrprgu4jwXwihUZWvTLTuzkwNPRSfwST1nzuwR36PQqdQpUsU+VS0FHK1nzluHmVKOqj3x1IQhCEItUoJSVKIAAySeUQiXKr9rLU4c+TNOe3mByn5hOMOEf6NBzgc1DPIR2rlrjlJlmZaRQl+rTq+ik5cn0lc1K6kpGpPZ2xktyhpoFK6Fb3Tzbqi9NzKuLzp9JR7OQ6gBHLp91067nahSmWXky7jLng8w6kBqbbB3FLb1yUhRxnnoRECntpFssbM1W9PTi5mpeBrklssIJ3VJ8xJKjgY9E6GLvg6JmBb1ZUoK8GM02G1fNKw2N7Hq3fsj2qEIQhGtOyUrUZRyVnZdqYl3RuuNOoCkqHaDHzPtetaiUC6afTqJJeDCaa3nW+mUUFRWlKcbx80D2fq3qnPU1NqmWZqtTmLyeLVNnJTp+lRNIyAptI9DowM7pRggnjqY95tqWqkvSUqrLyVz76y8403jo2AeDSOtKRgZ5nJ5xo3JRpwzbNfoYSKxKp3VNFW6mcYzlTKuWeaVHgewmOW1cVVvKmg0CjMeLZhGFzdZBS25nRSUtJ85eNRkkA40J4xrUlFc2eSaWKs6KrRBqH5VlQVIZPolJUoqaHI5ynu4TyTnpWoyqJmSmWphhYylxpYUk+sRswhCEIQiKVO1HWp12sWzMN02qrILyFJJlpvHJ1A5/THnDt4RsUW6GqjNKptQl1U6stJBdk3VZ3uHnNq4LRrxHrAiRwhEfr9tt1d1melJhchV5YHwada4gZBKFjgts4GUn1YOsY6HcL01MqpNZlkyVbaRvLaSSWn083GVH0k9nEcDEkhCEIQhCEIQjn1as0+iSSpupTbUsyNAVq1UeoDiT2CPOrg22SFIf6GXo826SAQ5MrSwkg44A5Vz6o5Q241BTPTi2WQzuBzeM2rRGQMn4vv9kdagbbKdWXeido822vGcyy0zA5ZOBhWmerlHodJrNPrkmJqnzSH284ODgpPUocQewx0YQhCEIQhCEIjVduJ2UmkUikSwn608neSznDbCOHSPH5qezieA6xkt+2UUh12fnJhVQrMyB4TPOjBV9BA4IbHJI9eTrEhhCI1W7qap0yKbT5ddRrTgy3JNH0Rp57iuCEDPE+rMYqXa7zk+3WLkmE1KqIO8ygJxLyfDRpB5/TPnHHLhEqhCEIQhGrOz8pTZVc1PTLUuwgZU46oJAiDVQVzaDKOS9KcNKoWmZiaZO/P8DuhOQUtHgToTy0jO7c1Ys6mE3HRJfxZLoCG5uj5U22AAEpU0rVA5A5IGmcR0rbo80Zly4a2kGsTaN1LQVvJk2eIaR281HmezAjoXLLVSYpJXRXw3UJdxL7TayAh/d4tL+ioZGeRweUeC0qqUvyXaaXWKpLXgwpdNkZUzPRplEggBBB8zcxjeKskkcsDGpsgtmjXBdNRka/J+FFhnfbSXFBClBQCiQDqNB2R9KyUjK02TblJGWalpZobqGmkBKUjsAjahCEIQj5g2xTAnNq62CSQyyyhKcFWVaKxjPWRoOOfZ7BaFp9LOy9zVqmSkpPpl0tScmw2AmUbxnJ61nOp5cIn8Q/aHMTpoKKNS1hFSrDok2FFRG6CCpxRI1AC\r\n\t\t\t\t\t\t\t\tEq4dcb9p1SUqNEZYYlhJvyKUyszI51lVpAG52p00PMYMSGItN2XLibXO0ScmKNNrJKzKn4pwnmto+aT2jBjH4xu+kndnKSxWGRxekXA05y/o1nXnwMXNbQaGlaW6iuYpTh5VBhTKeXzz5vPriRys5KzrIdlZhp9s8FtLCh7RGxCEIQjj1235G4JZDU0lSXWVb8vMNHdcYX+UlQ1H6449Ors/RJ5qj3MtJU6oNydRCd1uYOnmq/JX9h5dUTCEI4twW/LV6UQ24tbEywrpJabaOHGF/lJPq1HONOgV2ZXOLoVbQlisMI3klOiJpvh0iP1jkYk0IQhCEIQhCPIr/wDGKqtX/BkKcqjUgyukJxkpa3j4QpoH+kGOWuMY7PN7CpdIuqUmZGerqafWA6ktPPBJ6RAAzu7x9LPXr+qeONs7F6ehp5l+4RVntApKR0QQkDnnjvDTsiFX9cVGqFKkZyQpjVIrDj28phh1Jw3p5yt3ASrOMc4nuztNVTV7fcmwpFVekH3Kuk6FTOUiWU6OThOcZ84jezw09hhCEIQhCEIRGK/XJhM4mhURIdq7yd5S1DKJRs4+MX+ocSY3qBQmKDJKaQtb0w8rpJmZdOVvL5knq6hyEdmEIiE/XJ6tVF2i20tKS0dycqhAU3LH8lI+e5jlwHOOvQbfkqBKluWSpbzh335l07zr6+alK593Aco7EIQhCMEzNy0kz0s1MMsI/LdWEj2mI47f9DKy1TlzFVeHzKeyp0DvV6I9sY/D7vqygmTpctSGDjL0850rnXo2nQesxfJ2XLGaRPVycmKzOoIKVTR+KbOnoNjzRr2ZiVAADAGAIj921OTp9Edl35cTj08DKy8j86ZWoY3dNca5J5DJjR2fzE0igKo1RXv1CjueBPK3s74CQUKzxIKSNT1GJfHnt5WotqefuWi0yUnJ5xgszsnMN7yJlvTUdSxgEHnjEeTbH5hNP2sqlWnElt5p5vzUlIOiFYCScjGMY7PZ9NwhCEIRybkrLVu25P1d5O8iUZU5u/lHkPWcD1x4jsjt+cvC65q9qw6pYZeKkZwQ66QOvglIwB6uqPoSERGc+W7UKayQejp1OdmDppvurSgfYlXtjcrVrtVOcTU5GbeplXbSEonWMHeSPmuIOjiew+oiOd5R3BQRuXFRHJuXT/3hR0l1J7Vsnz0/o7wjsUi66DXc+LatLPuJ9JrfCXEd6DhQ9YjtxidZafQUvNIcSeKVpBH2xHZqwbamXOlRTRJvcnpF1cssa5zlsjqjD5KVqTx4qvKpoTjHR1BpubT7SEr/AMUU6e/ZAqLkjQ6s0OHg77ko4f0VBaf8Qgb0mpXCaraldkz85xllE02PW0pR/wAMbUlfVsT53G6zLNvaZZmCWXB3pWAfsiQtutup3m1pWOtJzF8I0alTJSryLslPy6JiXdGFIc4H9h6iNREYp8/PWlUGqNWphczSnVBFOqjpG8k8mHz+V+Sv5w468ZrCEcS4rfZr0glvpVSs2wsOyk22PPl3BwUOscingRpGvbVeeqPT02qtIlq5I4TNsJOUrB9F1s821cuYOQdREjhCLSoJGVEAdZizp2hxdR/eEWLnZVGd+ZZTjjlwDEY/GlP0+XSuoyPjk6/bDxpT9Pl0rqMj45Ov2w8aU/T5dK6jI+OTr9sXon5RwAommFA/kuAxmDravRWk9xjm1ugSFel225xDgWyvpGH2XC26yv8AKQoagx5ncGx+YqMyXt6m1BSlbynXUKkphXD0ltAoUdM5LY4eyKq2N3UshlTafBs56NVYJSMY4fE54CJTb2x2bpk0H+mpsgoKCkutJXOTCRpolbm6hJ09IN5/V6VRLep9Al3GpJtwrdVvvzDyy46+vGN5azqTp3DliOop1tBwpaQeomMS56TQSFzbCSNCC4B+uLPGlP0+XSuoyPjk6/bDxpT9Pl0rqMj45Ov2w8aU/T5dK6jI+OTr9sZUzkqs4TMMqPHRYMX9M1/pUf3hGSEIRG7mrz1MDFNpbSZmuT5KZRg+igD0nnOptOcnrOANTG1QKC1QpFTfTOTU4+rpZucd1XMOY1UeocgkaAaCO1CEQmfqEzd0+9RqK+tilMK3KjVWVYJPNhhQ+d+UvgkaceEpptNlKTIMyMjLoYlmk7qEIHD9p7Y3YRYtaG0lS1JSkcSo4ER6cv21pJ3oXK5KLf8A9Ewrpl/3UZMavlpMTY/im1q7Ok43VusJlWz27zqkn7DFA/fs+U7klQ6Q2QN4vPuTjg4fNSEJ6/nRXyTrU7/2teNScT+RTmkSafaN5f8AijNK2BbMq8JhVMTNzAA+OnlqmV8tcuE66RJGmm2Ww202hCBwSgYA9UZI4tUuug0U7lQq0qy7yZC95xXchOVH1COObhuKtqDdAoTknLnjUKwnokgdaGQd9Wn5W7G/Q7VYpk4upzs09U6y6ndcnpjQhP5LaB5radOCePMmNWTSJHaZUWEgpRUJBuZxnQrbVuE47lJ9nslsI+e9rlBnLQu6TvSjPFvp30lQI/BujdH91SRqO/1e3W3WWritunVdkBKJthLu6DndJGqfUcj1R1oQhCEed7bHlNbMJ8JUU778uk4OMjpUn9UW7EUto2ZSRRjKnXCrHXn9gEejQiI+bJ7UiXFaVGlhLWeBW04SoD1LB9XZpLoRyKpbdFrgBqdLlplY4LW2N8cOChqOA4HlHK8iRKK3qRXqxIYGEteEdO0B1brgUftjn1acuS15ZMxNXBS5pne3UImZRSHXVckpCCd5R14D/pfTbnvGYkW5qbstSN4ZU23OoCxoPmqjcN7OsD5bbFcl+1LCXBy/JV2xYdpdsNPNsTc4/JvODKG5mWcQpXcMa+qNxF+Ws4Bu12TSepa90+w4i+Yqdp1uX3Jqdo86yoY3XnG1jlyPqjlizbSUrpaW8ac4rgumTymhy5JO7y6ouTSbkp/nUy62ZxvHms1JlKtNPnoIPI8jxi8XRWaaCa3bj/QgZMzTVCYQOGSU5ChrnkeEbzV8Ww62lwVySSFDO6t0JUOwg6g68IwT9zWdVJJ6TnavS35Z1O642t9OFD28eHDURw7ZvSmUucXb9Qr8rNtMt9JJT6n0npGvyVnPpp4do1iTeWtr/wBv0/8A16ffnDy1tf8At+n/AOvT784eWtr/ANv0/wD16ffnEfuKrUKoPS1WpFwUxutSAKmCqYSlL7ZwVMrOfRVp3HBjcbvGo1lhCrdoTs2CkFUzMOBpgHmEqOq8HmBiM3i+9J4gzFap9OQddyUlS6oaD5y1d/KNd620oSTVr1qqhzxNNy44j8kAjh1xzH5DZ+wsCeuJcwQdOmrDi+rqXHOfmNkEkpKHlyS1HVKVrdcz3ZJyP2dkYpytbJqWhszVBYaSsBTZdphG8M8RvDUcIVCvbMqU0w9O2kGGZjVpa6SlIXoCMZ7MH3OKvV/ZnKyLM/M2kJeSfx0Uw5SUpSvOMYPvwiq69stRTkVJVstpkHCN2ZNJw2TkAYOPfEXtVbZRNSpm0USV8FOQXxTCGxwz5wTgY0jYkW9lFQUPF85Jy7iiAksTjjBB0wBhQA5aR3025VpBpMxblyPut4ymWqChMNL7l+kO/JjVlL7rMzUpqmC0ppVQkt3whsTTaRg8FIyfOSeuN8XLcZx/Iqb1H/8A2s9nb2/ZHKnb/rLNSl6O3ajyarNjLDa5pCkpGmVubuqUjPrjc8l6rONmbua6ZptOAVy9Pc8FYRj6XpHvyI4c23slpqlGdm5F9aDhRem3Jgk+tREYHavsok5MThokp4IrATMCmHcUTwAUU68os8e7LjThUU2ugyBIxNCkfF8celjrAEUbr2zN6mLqbFqJdkEelMopSdxPAYz6wDFJKu7MalJPTspaYek2Pwr6KSCls4BwcDTTBhJ1rZNU23FytDYW21jfW3TjhOcYyQNOUZJSZ2PzK8Sr0olSQPwbryMcuR05R0WZCwHcIkrnfl86AM1lxHV1q7o6LNsqzij3zVE8MJW+3Mj7Rn7Y2DJXzIZMvVqXU0A5CJqWUys8NN5JI6+X/Sx69ZqjtHyhoj8gcEIebcDrC1chvj0cnTKhGhbNYoUmqYq9YuCmO1qoYU+pEwChhHzWW9fRTnXrOSYkflra/wDb9P8A9en35w8tbX/t+n/69Pvzh5a2v/b9P/16ffnEZuK9aXVJtqhU64JSWZdSFz0+l8Do2ifQbOfTVwz80a8Y7lOuWzaTT2JCSrFNZlWEBDbaX04A9z9sZnb5tdlpTqq7IkAZwl0KJ7gOPGNRdzVmopKqJQHOhIymaqS+gbPUQnVR9gjGqnXDOg+MrrZkkqGOipzSUkD89ZJz2gRiFq2c2Urqc2Kg4DkKqVQLucfRKt3Hqjpy1YtCjMhmUn6NJtjCQhhxtA5Y0EUcv+1UZ/juVWRybJX/AMIMaaNpduTEw5LyT01OPtgFxuWllrUjOMZGNOMZBekzMDMla1bfTphS2ktA8PyldsalUuS8panuzcpZyVhCc9GudSXOHHdHHuzGOkzdxXVKqmZW4qdKshW643KyilOtK0ylW+Rg8eIjf8h25pQNWrdYqOmC2uZLTfL5rYT1dcdil27RqIkCmUuVliBjfbbG+e9XE+sx1YREQfDdqRKM7tOphS4R+U6sED2JJiXQjzrba22vZtMqXxRMMqTpz3sfcTFNiDyntl8gkq3g068hJ5Y3ydOrjHo0IQhCPONuOmzOa1xmZl//AMgizYYre2Zyw0819wZHA8I9KhHDuOhqrci34PMeC1CVdD8nNbueicHWNMpIylQ5gxba9berdOmDNS/g89JzC5SabQreQHUAZKDzScgjOuusd6Eas9OsU6nzE7Mq3WZdtTrh6gBkxGLbpzk+rysrqQmcfRvyzLp82SY4gDPBRGqj+yLGrirtxqK7YkZZmnBRSmp1Le3X/pNNJwVJ44UopB5ZjM47etLHTus02ssDVbMqlUs+B9HeUUq7iR3xdNytH2h26zMy7q0ONr35d8AoelH0kZBHFKgRgpMX2xNtVynOs1OSlvGci6ZacR0QxvjHnDI4KGFD/pFa3S7VpFKfqdSpUkmXYSFKUZcKJOQEgDGSSSABzJAiLM7NWLlW3PVaQao0rkKZp8gkNuhPLpXBrnHzRgDvjpv7IrScZUhtidYURo43OugpPIjKscoj4sun2fMtNVht+dojq9xFRD7iHZVRI3Q8EqwU8t8AYwM6ajtTuz2QoYTWrTpjBnmdXZRzzkTrem8jKs4VplKuvsMSWjpoFepctUpGRlVMuJOAphKVIPBSFDGigQQRyIiys2lSqvS1SaZZmWcStLjD7TaQppxJylXDXXlzEaNsuyVTD1PqdMk2K5TsInGQykJVn0XUdaFAZHUcg6iJAKJS07uKdK+boPik/siviWl5SfFsp5ugwyn9keSbQqTL3Ld9NtuVZZlpCWmWG5jo291TjrgK8AjiEtIJ71CJdXrjVTbho9lUN1iTm5pv8KtG+GGkjQJSThSiAePVzjy6cnqsvbOzbNZrlQnqcJpDJQp8tb4UhBBwggDVXL/LRuilSVG24SNOZYCZEOy5DCyVJUlW6OZ7D78K7XJOXom1KnOS8u0wx0Uu8EISEp81wA9XJOvvjofCAYTK3VRJlobpVLkYSMY3XEn9cbG3dPTUe1pgpWQ4woZB04IPH34Rk2tpL+yyypopBIQzk5xjeZB09Y+yF4rE58H23ZhCspQ4wkkd5H6vfkfWX/gtyit9CujW2PNPDE1j2++kXWZ8d8HevNAklBcVlPPRB/V/lGDZgw1NbHbvS5LtuqbbeUhSkAnPg4IIJ4YI9WPZo7Gna6qRrE3S6g4tVPDK/AHXMszCCDvA59FWE6EY7RHq9ZmEVe3pG9aCFKm5NvwhKEEZeZ06VlXWcA4H5QiSzNdkpe2111TvyFMr4UF9aN3eHtERChvItu2Z29bgSTU6ilL7gBKlJQcBphGezHryTHk21ldxIfpMxXagvpZ9lT6qc0opalQFJASNfOODqTxP2dbbBLysrZNnNSzDSMtJWejQElXxadc6d8dXaQEs7B7eQF/0kqAM4z5ijwzGlNuKlfgu0xIBw4tIznhmYUff9UXUUiW+DPOkkDplnBHP4xP7Mfsimzoqk9gl3zCVZ3vCMEEjPydA9UW7F8Slg3dOYBKWwArOhAaOvv1Rb8HpltU1cM26EKDbLIJPA+kc4PD0ez9nM2GU6Vq94VJ2blWX2hKKXuOJChlSka4PDn78MOzmiylwbVqnKTTJVINiYcDSVFCRhaAnAB0xn35blBnK1N7YJ23KVX56QkEzUw22kO9LuJb5AKJB1B9+HpVu3GK/V65Y9fXLzsxKI3FPNI3UzLZAzlOThQzrjv04RCtlrTVv37V7On2GX2VuuFguNglLjYTpqOCmyD+jHtfiWl5SfFsp5ugwyn9kUFEpad3FOlfN0HxSf2RHrmdkaaZWnUykyT1ZnSUSjJYTuoSMbzqwBohI+3A5xvUK0KVRKW1KeDMvuAlbry2wS44r0ldndwEX1kW9QqW5UZ+SlUMsgABEukqUonCUpTjVROAB1xHafYFOrf8AHF00uXM26EqalEp3USbfEI0xlX5R644abNpN5Pus0WRFOojLnRqqgWpT0yUkbyWAThKcjBWQcngOcd+X2P2gyx0a5acdONVLnXc8B1K04Rz17OW7W35ujyDFYkknfdp06gLexzLLp13sfNVoeGREsocjbNUpsvUqZTZFUu8nKSGEgpI0KSMaKBGCDqCMcox3PNpo1OZl6VKS5qs86JaSQWhuhZ4rVgeikZUe6MTDNI2f2+7NTLi1uuLBmJjc335yYVgAADVSlHQJHDsAjGh696qBMMtUuiS6hlDM0hUy/jT091SUp7gTjrix6465bZDl0Ssq7TMhKqnT94JYzpl1tWSBn5ySQOeIrclMcp8x5V0MYm2UhU202MpnWdMggfOA1BiUyM6xUZCXnZVYWxMNpcbUOaSMiNmEcG6K47Q6cyuVlxMzk3Mtycs0pW6kurOAVHkkYJONdIutqhKoUg54TMeF1GbcL87NbuOlcIA0HJIAAA5AR3IR5xtuXubOHxkjemWhoe3P6owbB/8A5Zs4O8PCncEDAOoj06EIQhHnG3E42ZzOuPlUv/8AkEa2wZYOzlKBqUzS8kcDonhHqEIRErcUJK8rqpihul19mot/SS40lCj6lNH2xLYREtoJU5bzEmM7k5Py8u4OtClgqHsEW36S5R6bRkZSzVqixIP7pwehOVuJzy3kIUn9KJU002y0hppCUIQkJShIwEgcAByEZYiDSTS9qDjLOUy9Ypypl1A4dOytCN/vKHEg/mCLpUeDbUJ9tB8ybpqHljPzkr3fuMYqwhNY2jUalOnMtTpZdVcbKchbu8G2c/mkuKHaBEyhGrPSbFRkJiTmUBbL7am1pUMggjBjg2HMvu2wiVmVFbsg85JFZOqg2cAntxiNGoJFm3Kaw2SmiVZ1KKigcGJg4Sh8DkFYCV9yT1xNoi900abeclq5RQBWqfktpzgTTJ9NhZ6jjI6lAHrjq0SrytepMvUpRRLTyc7qtFIUNFJUOSgcgjsjpx5Y0A3tVddcxjx4UecfyqcncwO8K+2Ixd7zkj8IuhzCiQhfRJBzyI3SOPWfflzNoCjTdv0jMnIC3pR/vAKE/wDKffhXbSDKbVKPN53Qptk5GnouiLvhBNE1qiTqSVBySKQASOCwrOc9sbm3wpep9szoTvFTS90gkZyEK/Vn1eym11wzezWz5rzfRRw7UJ7ur35L4Jmvg9Wk+MENGVBI0wQhSYrNDwz4M0iSc9C42Rrww539sUpO698FydToronVEHd00mUq0i7Z0jp9h1ytb28nKyOQ9BPs4RZsWQX9nd3NZOFoUnIPDLGOGffHsx/B785u5EHJBl2uB+iREj2C1RUxRqvR3FEiTmipCVHOEqGox1ZzFr61Gw5S0gvGLk8Takk9Ah4uD/dhPqim2+plt+26K2oJQ9NodWhONQlaQNPXEY+EEopuGhtEHzZMkjPD4wdvZ9ns3NvIU1RbXZyo7rKsgHGSAjnG9tbSW9kNstlJSellzgnUfFmNK6UCW+Djbreg3/B1Zz1q3tNe2CwZb4M0sCfwriCNORXn9UUt7Mv8GWsr38h5bgBAxkFaEaZhs6X4JsOueaySk74BGmcIAzFdieJOwrvqIXgobxvZ0G4wVZx641/g+tlBuGdGcNSrac54Epz6vRi3YG2p69q5NEE4l+JPEqWD+r35Y9jyfGW1yqVDBxuTMxk4131pGf8AFj3029nynp3b5WpkKwhJmQvB44KE9fWPflvsMKXt6ROMqG6qrvsaK47skC5p60j1R7lHNrdYk6BSJipz61JYZHBA3lLUThKUjmokgAdZjk2rRptvp65Wkg1qoYLiN7eEo1xQwg9SeJPNRJ6olEQqm5vG41VZzWiUt4opzZ9GYmBoqYPWE6pR+keqN6+5h9u2zKS7padqEw1JBxPFIcUAojt3d6O7IybFOkZeSlkBDDDaW20jgEgYAjahEPpCPE+0KsUxrSUqMumqIQOCHd7o3cfneYrvJis0Eze1KRaX5yZKmOPIBOgWtYSTjmcJEUeQKttQaYfTvS9HkBMtIUNOneWpIX2lKG1AdW+YmEYnGm3mlNOJC21pKVJUMgg8QYi1jI6Ck1GhqUXGaVPOyTO8cnoMBTaSexKwn9GLtnxCLcdkx6EnOzEujGcBKVnHHsMSyERC5vl94WpS0gkImHqi7g+ilpspTkdRW6n2RL4Qjyzb06pGz1tIIAXPsg5Op4nTWM2whO5szYIUFBU06QRw4gerhHpsIQhCPO9t3/yvnj1Py/8A+VMcn4P682RNI3ioJmzg509FPAco9ahCIZd76Ldq1LupSkol2MyU9kgZYcIwR+asA9xMS9C0uoC0KCkqGUqScgjrEZIjV9Srkzaz7rCCt6Tcbm0IA1V0awoj2AxguaWduC1ZWpUgJem5Z1ipySSrR1SDvbn6SSpPLVUdii1uTuCmtzsi5lKtHG1DC2VjihaeKVA6EGN911thpTrq0obQMqUo4AHWTEQt943HdU3c7QWKWxL+AU9RGA+CoKdeGfmkpQkHmEE9UZaKpNUvqtVJo7zEq2iQQveyFLHnLx2AkDvEW1EimbT6TPulQYqUg7TgrGiXkLDqAfzk9Lj82JjCMEzMNSks7MPrCGmkFa1E4AAGTEcsBpZtszziNxVRmXZ0Jz81Z83/AAgRIJ6SZqMhMSUwgLYfbU2tJ5gjER+zZ2YbZmqBPlZnaSoNBa+LzJGW19umh7REqiFTI8kLrTOIJTRaw6ETKfmy80cBLg6gv0T2gRNY8wvKVep11PTUsgKcm2mahLpI9OYlFecgdqmVEfoxrbS6c3VZS373pat9Eg+y86tGMmXK0qKv0ca/9Ihe3YdBfFDqbOCh2UQUqSc5KHc5BB6lCNj4QjW/UKDPp0SphYODj5yVZ9kZduaUzNCtOoJ9FTa04yOYbIOc8se/JtWKJzZNZc6nKhuMYJOurQ15dUVvs+GbBLWm0glKHGMkdWFD9X+UKqozPwYKS6SMtONDIPIPlPXFtKT4R8GWawclp3Oc8MOJ/b9sW2t8d8Gy4kJUtXROOkFIxw6NenUP+sbWyYJe2TXO0VZSAvBwQPwXKK7AhvWvcSQRklI46j4ocsxy/g+L/jSto4EySTjPHGBnjHS2Dkouq50DROmncsgfsjsPlPl1LoKglJvBxWMZyoSLWPv+2ODtiJd2qWw0okJyyOPW8jhrHP2/uJN90poKJKJBGUk6DLx149n2Rv8AwhHAiat+VzqhpZ3RkD0kDI4e/wBnT22fE7ObeZGB8c1oSc6I5Ro7QAprYBaCMekiTOer4rMLoBkPg5UFnTK1sA4OCclRzx7v+kUB8D+C0yeb6k5I7ZrT7AP+kUtxYlfg01VeCS6tfAccqQPuEW7Ph4JsBu6YQo5dbmRvDT+gSnI9/wDpXY4kSez\r\n\t\t\t\t\t\t\t\t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\r\n\t\t\t\t\t\t\t\t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\r\n\t\t\t\t\t\t\t\t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\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"rearCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"https://github.com/kulkaman/cardamage1/blob/master/client/app/images/CarRear.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-top: 15px; margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"sideCar\">\r\n\t\t\t\t\t\t\t<p>Select the damage area by clicking the location of the\r\n\t\t\t\t\t\t\t\tdamaged part</p>\r\n\t\t\t\t\t\t\t<div class=\"imageMap1\">\r\n\t\t\t\t\t\t\t\t<img-map src=\"https://github.com/kulkaman/cardamage1/blob/master/client/app/images/CarSide.png\" style=\"height:346px\"\r\n\t\t\t\t\t\t\t\t\t[markers]=\"markers\" markerRadius=\"10\"\r\n\t\t\t\t\t\t\t\t\t(change)=\"onChange($event)\" (mark)=\"onMark($event)\"\r\n\t\t\t\t\t\t\t\t\tclass=\"img-fluid rounded float-center\" alt=\"Responsive image\">\r\n\t\t\t\t\t\t\t\t</img-map>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-3 col-md-3 col-lg-3\"\r\n\t\t\t\t\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t\t\t\t\t(click)=\"reselectDamageArea()\">Re-select damage area</button>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse6\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Damage\r\n\t\t\t\t\t\t\tPhotos</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse6\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div style=\"text-align:center;\"><button type=\"submit\" style=\"text-align:center;\" class=\"btn btn-primary btn-sm\"\r\n\t\t\t\t\t(click)=\"getRoverPhoto()\" disabled>Retrieve Damage Report</button></div>\r\n\t\t\t\t\t <div *ngIf=\"roverImage\">\r\n\t\t\t\t<!-- \t<pdf-viewer [src]=\"pdfSrc\" [original-size]=\"true\" style=\"display: block;\" [zoom]=\"0.45\"> </pdf-viewer>-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form>\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera1\" ></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera1')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera2')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera3\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera3')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td width=\"50%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div id=\"camera4\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group\" name=\"photo-one\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=button value=\"Capture\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"take_snapshot('camera4')\">\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h4 class=\"panel-title\">\r\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\"\r\n\t\t\t\t\t\t\thref=\"#collapse7\" class=\"collapsed\">&nbsp;&nbsp;&nbsp;Upload\r\n\t\t\t\t\t\t\tYour Signature</a>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"collapse7\" class=\"panel-collapse collapse\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<signature-pad id=\"signature-pad\"></signature-pad>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div id = \"bloc1\" class=\"col-sm-offset-3 col-sm-4 col-md-4 col-lg-4\"\r\n\t\t\t\tstyle=\"margin-bottom: 10px;\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block \"\r\n\t\t\t\t\t(click)=\"createClaim(fnol)\">\r\n\t\t\t\t\t<div id=\"bloc2\" *ngIf=\"loadingNewClaim\">\r\n                        <span class=\"glyphicon glyphicon-refresh spinning\"></span>\r\n                     </div>\r\n\t\t\t\t\tCreate Claim</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>"

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
    //   markers: number[][] = [];
    //     imgMap: ImgMapComponent;
    //     onChange(marker: number[]) {
    //     console.log('onChange - Marker', marker);
    //   }
    // onMark(marker: number[]) {
    //   console.log('onMark - Marker', marker);
    //   console.log('onMark - Markers', this.markers);
    // }
    //  selectMarker(index: number) {
    //     this.imgMap.markerActive = index;
    //     this.imgMap.draw();
    //   }
    //   removeMarker(index: number) {
    //     this.markers.splice(index, 1);
    //     if (index === this.imgMap.markerActive) {
    //       this.imgMap.markerActive = null;
    //     } else if (index < this.imgMap.markerActive) {
    //       this.imgMap.markerActive--;
    //     }
    //     this.imgMap.draw();
    //   }
    function UserComponent(postsService, router) {
        this.claimCreation = true;
        this.initialImageDS = true;
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