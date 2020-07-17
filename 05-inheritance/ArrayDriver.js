"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectange = new Rectangle_1.Rectangle(0, 0, 10, 15);
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectange);
theShapes.forEach(function (shape) { return console.log(shape.getInfo()); });
