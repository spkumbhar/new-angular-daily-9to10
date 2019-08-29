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
var car_1 = require("./car");
var bmw = /** @class */ (function (_super) {
    __extends(bmw, _super);
    function bmw(speed, weight, color) {
        var _this = _super.call(this, speed, weight) || this;
        _this.color = color;
        _this.color = color;
        console.log(_this);
        return _this;
    }
    return bmw;
}(car_1["default"]));
var bmwObj = new bmw(100, 1000, 'black');
bmwObj.color = "red";
var newBmw = new bmw();
