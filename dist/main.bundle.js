webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_new_book_new_book_component__ = __webpack_require__("../../../../../src/pages/new-book/new-book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'newBook', component: __WEBPACK_IMPORTED_MODULE_3__pages_new_book_new_book_component__["a" /* NewBookComponent */] }
    // { path: 'detail/:id', component: HeroDetailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"/home\">Books List</a></li>\n            <li><a routerLink=\"/newBook\">Add New Book</a></li>\n        </ul>\n    </div>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Books Library';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__ = __webpack_require__("../../../../../src/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_book_new_book_component__ = __webpack_require__("../../../../../src/pages/new-book/new-book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_bootstrap_modal__["BootstrapModalModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_new_book_new_book_component__["a" /* NewBookComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* AlertComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'api/booksList';
    }
    /** GET books list */
    AppService.prototype.booksList = function () {
        return this.http.get(this.url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log('books list'); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('books list', [])));
    };
    AppService.prototype.bookDetails = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log("book id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("book id=" + id)));
    };
    /** POST: add a new book to list */
    AppService.prototype.addNewBook = function (book) {
        return this.http.post(this.url, book, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (book) { return console.log("added new book to list w/ id=" + book.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('add new book to list')));
    };
    /** DELETE: delete the book from list */
    AppService.prototype.deleteBook = function (book) {
        var id = typeof book === 'number' ? book : book.id;
        var url = this.url + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log("deleted book from list id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('delete book from list')));
    };
    /** PUT: update the book details */
    AppService.prototype.updateBook = function (book) {
        return this.http.put(this.url, book, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (_) { return console.log("updated book id=" + book.id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('update book')));
    };
    /** handle error*/
    AppService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var booksList = [
            {
                id: 1,
                author: 'Laura Ingalls Wilder',
                date: '28.09.2010',
                title: 'Little house on the prairie',
                image: 'assets/images/LittleHouseOnThePrairie.jpg'
            },
            {
                id: 2,
                author: 'A. A. Milne',
                date: '1.08.1992',
                title: 'The house at pooh corner',
                image: 'assets/images/TheHouseAtPoohCorner.jpg'
            },
            {
                id: 3,
                author: 'J.R.R. Tolkien',
                date: '14.08.2012',
                title: 'The lord of the rings',
                image: 'assets/images/TheLordOfTheRings.jpg'
            },
            {
                id: 4,
                author: 'J.K. Rowling',
                date: '08.09.1999',
                title: 'Harry potter and the sorcerer\'s stone',
                image: 'assets/images/HarryPotterAndTheSorcerer\'sStone.jpg'
            },
            {
                id: 5,
                author: 'Lisa Wingate',
                date: '23.05.1997',
                title: 'Before we were yours',
                image: 'assets/images/BeforeWeWereYours.jpg'
            },
            {
                id: 6,
                author: 'Louisa May Alcott',
                date: '20.11.2005',
                title: 'Little women',
                image: 'assets/images/LittleWomen.jpg'
            }
        ];
        return { booksList: booksList };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"books-container\">\r\n    <div *ngFor=\"let book of books\" class=\"book-container\">\r\n        <img class=\"image-container\" src=\"{{book.image}}\">\r\n        <div class=\"details-container\">\r\n            <h1>{{book.title}}</h1>\r\n            <h6>{{book.author}}</h6>\r\n            <span>{{book.date}}</span>\r\n            <br>\r\n            <button type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getBook(book.id)\">\r\n                Edit book\r\n            </button>\r\n            <button type=button class=\"btn btn-danger\" (click)=\"openConfirm(book)\">Delete book</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" *ngIf=\"book\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">{{bookTitle}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div>\r\n                    <div class=\"form-group required\">\r\n                        <label class='control-label'>Book Title</label>\r\n                        <input type=\"text\" class=\"form-control\"\r\n                               placeholder=\"Book Title\" (keyup)=\"onKey($event)\" (change)=\"checkIfNotExist($event)\"\r\n                               [(ngModel)]=\"book.title\" #title>\r\n                    </div>\r\n                    <div class=\"error-div\"\r\n                         *ngIf=\"title.touched\">\r\n                        <span class=\"error-message\">Book title is required</span>\r\n                    </div>\r\n                    <div *ngIf=\"invalidTitle\" class=\"error-color\">\r\n                        Title already exists\r\n                    </div>\r\n\r\n                    <div class=\"form-group required\">\r\n                        <label class='control-label'>Book Author</label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Book Author\" #author\r\n                               [(ngModel)]=\"book.author\">\r\n                    </div>\r\n                    <div class=\"error-div\"\r\n                         *ngIf=\"author.touched\">\r\n                        <span class=\"error-message\">Book Author is required</span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group required\">\r\n                        <label class='control-label'>Book Date</label>\r\n                        <input type=\"date\" class=\"form-control\" #date [(ngModel)]=\"book.date\">\r\n                    </div>\r\n                    <div class=\"error-div\"\r\n                         *ngIf=\"date.touched\">\r\n                        <span class=\"error-message\">Book Date is not valid</span>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label>Book Image</label>\r\n                        <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\r\n                    </div>\r\n\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                    <button type=\"button\" [disabled]=\"valid\" class=\"btn btn-default\"\r\n                            (click)=\"editBook()\" data-dismiss=\"modal\">Save\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".books-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n  .books-container .book-container {\n    position: relative;\n    text-align: center;\n    overflow: hidden;\n    margin: 1vw;\n    width: calc(20vw) !important; }\n    .books-container .book-container .image-container {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      margin: 0;\n      width: calc(20vw) !important;\n      height: calc(20vw) !important; }\n    .books-container .book-container .details-container {\n      width: 100%;\n      color: #000000;\n      text-align: center;\n      height: auto !important; }\n      .books-container .book-container .details-container h1 {\n        font-weight: bold;\n        font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../src/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(appService, fb, location, sanitizer) {
        this.appService = appService;
        this.fb = fb;
        this.location = location;
        this.sanitizer = sanitizer;
        this.books = [];
        this.booksList = [];
        this.bookTitle = '';
        this.invalidTitle = false;
        this.newTitle = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBooksList();
    };
    HomeComponent.prototype.getBooksList = function () {
        var _this = this;
        this.appService.booksList()
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    HomeComponent.prototype.openConfirm = function (book) {
        if (confirm('Are you sure you want to delete ' + book.title)) {
            this.deleteBook(book.id, book);
        }
        else {
            return;
        }
    };
    HomeComponent.prototype.deleteBook = function (bookId, book) {
        this.getBook(bookId);
        this.books = this.books.filter(function (index) { return index !== book; });
        this.appService.deleteBook(book).subscribe();
    };
    HomeComponent.prototype.getBook = function (bookId) {
        var _this = this;
        this.appService.bookDetails(bookId)
            .subscribe(function (book) {
            _this.book = book;
            _this.bookTitle += book['title'];
        });
    };
    HomeComponent.prototype.editBook = function () {
        var _this = this;
        this.appService.booksList()
            .subscribe(function (books) {
            _this.booksList = books;
            for (var i = 0; i < books.length; i++) {
                if (_this.booksList[i].title === _this.book['title'].trim()) {
                    _this.invalidTitle = true;
                }
            }
        });
        this.appService.updateBook(this.book)
            .subscribe(function () { return _this.goBack(); });
    };
    HomeComponent.prototype.goBack = function () {
        this.location.back();
    };
    HomeComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var sanitizedUrl = _this.sanitizer.bypassSecurityTrustUrl(reader.result.split(',')[1]);
                _this.book['image'] = ('data:image/png;base64, ' + sanitizedUrl['changingThisBreaksApplicationSecurity']);
            };
        }
    };
    HomeComponent.prototype.checkIfNotExist = function (event) {
        var _this = this;
        var inputTitle = event.target.value;
        this.appService.booksList()
            .subscribe(function (books) {
            _this.booksList = books;
            for (var i = 0; i < books.length; i++) {
                if (_this.booksList[i].title === inputTitle.trim()) {
                    _this.invalidTitle = true;
                }
            }
        });
    };
    HomeComponent.prototype.onKey = function (event) {
        this.checkTitleValid(event.target.value);
    };
    HomeComponent.prototype.checkTitleValid = function (title) {
        var tempTitle = [];
        for (var i = 0; i < title.length; i++) {
            if (this.isLetter(title[i]) || title[i] == '' || title[i] == ' ') {
                tempTitle.push(title[i]);
            }
            else if (!(this.isLetter(title[i]))) {
                tempTitle.push('');
            }
        }
        this.newTitle = tempTitle.join('');
        this.newTitle = this.newTitle.charAt(0).toUpperCase() + this.newTitle.substr(1).toLowerCase();
        this.book['title'] = this.newTitle;
    };
    HomeComponent.prototype.isLetter = function (str) {
        return str.length === 1 && str.match(/[a-z]/i);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */])
    ], HomeComponent.prototype, "book", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/pages/new-book/new-book.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"createNewBookForm\">\r\n    <div class=\"form-group required\">\r\n        <label class='control-label'>Book Title</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"title\"\r\n               placeholder=\"Book Title\"\r\n               (keyup)=\"onKey($event)\" (change)=\"checkIfNotExist($event)\">\r\n    </div>\r\n    <div class=\"error-div\"\r\n         *ngIf=\"createNewBookForm.controls.title.hasError('required') && createNewBookForm.controls.title.touched\">\r\n        <span class=\"error-message\">Book title is required</span>\r\n    </div>\r\n    <div *ngIf=\"invalidTitle\" class=\"error-color\">\r\n        Title already exists\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n        <label class='control-label'>Book Author</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"author\" placeholder=\"Book Author\">\r\n    </div>\r\n    <div class=\"error-div\"\r\n         *ngIf=\"createNewBookForm.controls.author.hasError('required') && createNewBookForm.controls.author.touched\">\r\n        <span class=\"error-message\">Book Author is required</span>\r\n    </div>\r\n\r\n    <div class=\"form-group required\">\r\n        <label class='control-label'>Book Date</label>\r\n        <input type=\"date\" class=\"form-control\" formControlName=\"date\">\r\n    </div>\r\n    <div class=\"error-div\"\r\n         *ngIf=\"createNewBookForm.controls.date.hasError('required') && createNewBookForm.controls.date.touched\">\r\n        <span class=\"error-message\">Book Date is not valid</span>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Book Image</label>\r\n        <input type=\"file\" (change)=\"onFileChange($event)\" #fileInput>\r\n    </div>\r\n\r\n    <input type=\"hidden\" formControlName=\"image\">\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createNewBookForm.valid\"\r\n            (click)=\"createNewBook(createNewBookForm.value)\">\r\n        Create\r\n    </button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/pages/new-book/new-book.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  width: 30%;\n  margin: 0 auto; }\n  form .error-div {\n    margin-bottom: 11px; }\n    form .error-div .error-message {\n      color: #FF0000;\n      margin-bottom: 20px;\n      font-size: 13px; }\n  form .error-color {\n    color: #FF0000;\n    margin-bottom: 11px; }\n\n.form-group.required .control-label:after {\n  content: \"*\";\n  color: #FF0000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/pages/new-book/new-book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book__ = __webpack_require__("../../../../../src/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewBookComponent = (function () {
    function NewBookComponent(appService, fb, router, sanitizer) {
        this.appService = appService;
        this.fb = fb;
        this.router = router;
        this.sanitizer = sanitizer;
        this.books = [];
        this.booksList = [];
        this.newTitle = '';
        this.invalidTitle = false;
        this.createNewBookForm = fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            author: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            date: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            image: ['']
        });
    }
    NewBookComponent.prototype.createNewBook = function (book) {
        var _this = this;
        this.appService.addNewBook(book).subscribe(function (response) {
            if (response.id) {
                _this.books.push(response);
                _this.router.navigate(['/home']);
            }
        });
    };
    NewBookComponent.prototype.onKey = function (event) {
        this.checkTitleValid(event.target.value);
    };
    NewBookComponent.prototype.checkTitleValid = function (title) {
        var tempTitle = [];
        for (var i = 0; i < title.length; i++) {
            if (this.isLetter(title[i]) || title[i] == '' || title[i] == ' ') {
                tempTitle.push(title[i]);
            }
            else if (!(this.isLetter(title[i]))) {
                tempTitle.push('');
            }
        }
        this.newTitle = tempTitle.join('');
        this.newTitle = this.newTitle.charAt(0).toUpperCase() + this.newTitle.substr(1).toLowerCase();
        this.createNewBookForm.controls['title'].setValue(this.newTitle);
    };
    NewBookComponent.prototype.isLetter = function (str) {
        return str.length === 1 && str.match(/[a-z]/i);
    };
    NewBookComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                var sanitizedUrl = _this.sanitizer.bypassSecurityTrustUrl(reader.result.split(',')[1]);
                _this.createNewBookForm.controls['image'].setValue('data:image/png;base64, ' + sanitizedUrl['changingThisBreaksApplicationSecurity']);
            };
        }
    };
    NewBookComponent.prototype.checkIfNotExist = function (event) {
        var _this = this;
        var inputTitle = event.target.value;
        this.appService.booksList()
            .subscribe(function (books) {
            _this.booksList = books;
            for (var i = 0; i < books.length; i++) {
                if (_this.booksList[i].title === inputTitle.trim()) {
                    _this.invalidTitle = true;
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_book__["a" /* Book */])
    ], NewBookComponent.prototype, "book", void 0);
    NewBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'new-book-page',
            template: __webpack_require__("../../../../../src/pages/new-book/new-book.component.html"),
            styles: [__webpack_require__("../../../../../src/pages/new-book/new-book.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]])
    ], NewBookComponent);
    return NewBookComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map