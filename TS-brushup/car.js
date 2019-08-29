"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(speed, weight) {
        this.speed = speed;
        this.weight = weight;
        this.speed = speed;
        this.weight = weight;
    }
    Car.prototype.acccelarate = function () {
        console.log("car method");
    };
    return Car;
}());
exports["default"] = Car;
var car = new Car(12, 100);
car.acccelarate();
