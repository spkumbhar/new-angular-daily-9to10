"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log("animal is running");
    };
    Animal.prototype.eat = function () {
        console.log("animal is eating");
    };
    return Animal;
}());
exports.Animal = Animal;
