"use strict";
exports.__esModule = true;
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// let message;
// message='abc';
// let endWithC =(<string>message).endsWith('c');
// let alternativeWay=(message as string).endsWith('c');
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X' + this.x + ',Y' + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
