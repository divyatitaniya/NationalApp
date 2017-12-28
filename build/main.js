webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, device, photoviewer, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.photoviewer = photoviewer;
        this.http = http;
        this.http.get('http://ec2-52-66-148-218.ap-south-1.compute.amazonaws.com:8081/regions').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
            console.log(_this.posts);
        });
    }
    HomePage.prototype.goToHome = function () {
        //this.navCtrl.push(HomePage);
        window.history.back();
    };
    HomePage.prototype.openPhotoViewer = function () {
        this.photoviewer.show('https:www.gstatic.com/webp/gallery3/3.png', 'Optional Title', { share: false });
    };
    HomePage.prototype.deviceDetails = function () {
        var alert = this.alertCtrl.create({
            title: 'Device Details',
            message: '<span> Model : ' + this.device.model + '</span><br><br>' +
                '<span> Platform : ' + this.device.platform + '</span><br><br>' +
                '<span> UUID : ' + this.device.uuid + '</span><br><br>',
            buttons: ['OK'],
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/guestuser/Desktop/Nationalapp/src/pages/home/home.html"*/`<!-- <ion-header color="primary">\n	<ion-navbar color="primary" >\n		<ion-icon ios="ios-arrow-back" (click)="goToHome()" id="arrow"></ion-icon> \n		<ion-title id="myApp"> \n    	My App\n		</ion-title>\n	\n <button ion-button menuToggle right>\n    <ion-icon name="menu"></ion-icon>\n	</button>\n	</ion-navbar> \n</ion-header> -->\n\n\n<ion-content>\n	<ion-toolbar no-border-top color="primary">\n				<button ion-button icon-only menuToggle (click)="goToHome()">\n					<ion-icon name="ios-arrow-back"></ion-icon>\n				</button>\n					<button ion-button icon-only menuToggle (click)="openPhotoViewer()">\n					<ion-icon name="images"></ion-icon>\n					<!-- <ion-icon ios="ios-images" md="md-images"></ion-icon> -->\n					</button>\n				<ion-title>National App</ion-title>\n				<!-- <ion-icon name="ios-phone-portrait" md="md-phone-portrait" class="device" (click)="deviceDetails()" ></ion-icon> -->\n				<ion-buttons end><button ion-button icon-only menuToggle (click)="deviceDetails()" >\n				<ion-icon name="phone-portrait" style="right:0"></ion-icon></button></ion-buttons>\n				\n	</ion-toolbar>\n\n	\n  <ion-grid>\n	<div class="container" *ngFor = "let image of posts" style="padding:10px;margin: 10px;">\n			<ion-card>	\n				<img style="height: 300px;" [src]="image.links[0].href" width="100%"/>\n				<div class="top-left">{{image.name}}</div>\n			</ion-card>\n		</div>\n		<!--<div class="container" *ngFor = "let image of posts" style="padding:10px;margin: 10px;">\n			<ion-card>\n					<div class="top-left">{{image.name}}</div>\n					<img style="height: 300px;" [src]="image.href" width="100%"/>\n			</ion-card>\n		</div>-->\n		<!--<ion-row >\n			<ion-col width-50>\n		 <ion-card class="text-center" padding style="background: #f2a137;" id="apps">\n			<img src="assets/imgs/icon_tow.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				ROAD SIDE ASSISTANCE\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	    </ion-col>\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background:	#2172c4;" id="apps">\n			<img src="assets/imgs/icon_AAA.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				JOINING AAA \n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n		 </ion-col>\n		</ion-row>\n<ion-row >\n		<ion-col width-50>\n		 <ion-card class="text-center" padding style="background: #2E3293;" id="apps">\n			<img src="assets/imgs/icon_service.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				ROAD SIDE SERVICE\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	    </ion-col>\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background:	#EC1F23;" id="apps">\n			<img src="assets/imgs/icon_map.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				AAA MAPS\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	   </ion-col>\n	</ion-row>\n		\n<ion-row > \n			<ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #A30065;" id="apps">\n			<img src="assets/imgs/icon_fuel.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				FUEL FILLING\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n		 </ion-col>\n		 <ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #649B64;" id="apps">\n			<img src="assets/imgs/icon_medical.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				EMERGENCY SUPPORT\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	   </ion-col>\n</ion-row>\n<ion-row >	\n			<ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #3BB44B;" id="apps">\n			<img src="assets/imgs/icon_hotel.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff;font-size : 1.1rem">\n				HOTEL BOOKING\n			  </h4>\n			</ion-card-content>\n\n		 </ion-card>\n	    </ion-col>\n		<ion-col width-50>\n		  <ion-card class="text-center" padding style="background: #D50065;" id="apps"> \n			<img src="assets/imgs/icon_flight.png" class="img-width"/>\n			 <ion-card-content style="padding: 13px 4px;text-align: center;margin-bottom: -4%;">\n			  <h4 class="card-title text-uppercase text-white pane-min-height" style="color: #fff; font-size : 1.1rem">\n				FLIGHT BOOKING\n			  </h4>\n			</ion-card-content>\n		\n		 </ion-card>\n		 </ion-col>\n	 \n		</ion-row>-->\n\n\n\n	  \n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/guestuser/Desktop/Nationalapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/guestuser/Desktop/Nationalapp/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/guestuser/Desktop/Nationalapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map