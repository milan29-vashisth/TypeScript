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
var message = 'hello milan';
console.log(message);
var x = 10;
var y = 15;
var sum;
var title = 'hello ts';
var isBeginer = true;
var total = 0;
var name = 'Milan Vashisth';
var sentence = "My name is " + name + "\nI am beginner in ts";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2];
var person = ['cheis', 22];
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Milan';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 10;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 8; }
    if (num2)
        return num1 + num2;
    return num1;
}
add(5, 10);
add(5);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Milan',
    lastName: 'Vashisth'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Chunnu');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manger delagting task");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Vashisth');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
