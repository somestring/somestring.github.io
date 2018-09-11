(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./src/app/components/home/home-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n    <div class=\"content\">\n      <h2 class=\"tile\">Items</h2>\n      <form class=\"form\" *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"addItem()\">\n        <div class=\"row add-wrapper\">\n          <div class=\"col-9\">\n            <input formControlName=\"name\" type=\"text\" class=\"add\" placeholder=\"Type name here...\">\n          </div>\n          <div class=\"col-3\">\n            <button type=\"submit\" class=\"btn btn-info added-btn\" [disabled]=\"!form.value.name\">Add new</button>\n          </div>\n        </div>\n      </form>\n      <div class=\"items\" *ngIf=\"data\">\n        <div class=\"item\" *ngFor=\"let item of data; let i = index;\">\n          <div (click)=\"setComments(item, i)\">\n            <p class=\"item-name\">{{item.text}}</p>\n            <span class=\"point\">{{item.point}}</span>\n            <button type=\"button\" class=\"delete-btn\" (click)=\"deleteItem(i)\">Delete</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-6\">\n    <div class=\"content\" *ngIf=\"comments\">\n      <app-comments [data]=\"comments\" (commentsData)=\"getComments($event, comments)\"></app-comments>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 30px 15px 30px 20px;\n  box-shadow: 0 0 10px 0 #949494;\n  max-height: 95vh;\n  overflow-y: scroll; }\n  .content .title {\n    color: #fff;\n    font-size: 36px; }\n  .content .add-wrapper {\n    margin-top: 25px; }\n  .content .add-wrapper .add {\n      padding: 12px;\n      border-radius: 5px;\n      height: 37px;\n      border: 2px solid #CCCCCC;\n      width: 100%; }\n  .content .add-wrapper .add ::-webkit-input-placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .add :-ms-input-placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .add ::-ms-input-placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .add ::placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .add :-ms-input-placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .add ::-ms-input-placeholder {\n        color: #B3B3B3; }\n  .content .add-wrapper .added-btn {\n      height: 37px;\n      background-color: #27CCC0;\n      width: 100%; }\n  .content .item {\n    margin-top: 20px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #F2F2F2;\n    cursor: pointer; }\n  .content .item .item-name {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 300px;\n      float: left; }\n  .content .item .point {\n      width: 39px;\n      height: 20px;\n      background-color: #27CCC0;\n      color: #fff;\n      font-size: 13px;\n      text-align: center;\n      line-height: 20px;\n      margin-left: 40px;\n      padding: 3px 10px;\n      border-radius: 10%; }\n  .content .item .delete-btn {\n      width: 97px;\n      height: 34px;\n      border: 2px solid #FF3159;\n      color: #FF3159;\n      background-color: #fff;\n      border-radius: 5px;\n      float: right;\n      display: inline-block;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb) {
        this.fb = fb;
        this.data = [];
        var data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            this.data = data;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    HomeComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: [''],
        });
    };
    HomeComponent.prototype.addItem = function () {
        var name = this.form.get('name');
        var obj = {
            text: name.value,
            point: 0,
            comments: []
        };
        this.data.push(obj);
        name.setValue('');
        this.setData(this.data);
    };
    HomeComponent.prototype.deleteItem = function (index) {
        this.data.splice(index, 1);
        this.setData(this.data);
        this.comments = null;
    };
    HomeComponent.prototype.setData = function (data) {
        localStorage.setItem('data', JSON.stringify(data));
    };
    HomeComponent.prototype.setComments = function (item, index) {
        this.comments = [];
        this.comments = item;
        this.commentsIndex = index;
    };
    HomeComponent.prototype.getComments = function (event, comment) {
        var obj = {
            description: event
        };
        this.data[this.commentsIndex].comments.push(obj);
        this.data[this.commentsIndex].point++;
        this.setData(this.data);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/components/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
            ],
            exports: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-home-home-module.js.map