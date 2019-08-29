"use strict";
exports.__esModule = true;
var Opts = /** @class */ (function () {
    function Opts() {
    }
    Opts.prototype.SaveData = function (id, name) {
        console.log(id + " saved to db ");
    };
    Opts.prototype.DeleteData = function (id) {
        if (id === void 0) { id = 12; }
        console.log(id + " deleted ");
    };
    return Opts;
}());
exports.Opts = Opts;
var opt = new Opts();
opt.SaveData(12);
opt.DeleteData(40);
var gps = { locate: function (lat, lng) { } }; ///typecast 
gps.locate(1, 2);
var obj = {
    locate: function (lat, lang) {
        console.log("in equality check :lattitude :" + lat + " Longitude " + lang);
    }
};
var gp2 = obj; /// equality by means of shape of object
obj.locate(23, 56);
