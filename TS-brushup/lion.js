"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var animal_1 = require("./animal");
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(size, wt) {
        var _this = _super.call(this) || this;
        _this.size = size;
        _this.wt = wt;
        console.log("constructor called");
        return _this;
    }
    Lion.prototype.walk = function () {
        console.log("lion is walking");
    };
    Lion.prototype.eat = function () {
        _super.prototype.eat.call(this);
        console.log("lion is eating");
        console.log(this);
    };
    Lion.prototype.locate = function (lat, lng) {
        console.log("I am in locate function");
    };
    return Lion;
}(animal_1.Animal));
var lion = new Lion(12, 100);
lion.size = 34;
lion.wt = 120;
lion.eat();
lion.run();
lion.walk();
lion.locate(20, 10);
