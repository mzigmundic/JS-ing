import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";

// creating canvas and reporting list
let myCanvas = Canvas.create("myCanvas", document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

// drawing a square
let mySquare = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(mySquare.length, reportList);
Square.reportPerimeter(mySquare.length, reportList);

// drawing a circle
let myCircle = Circle.draw(myCanvas.ctx, 75, 200, 100, "green");
Circle.reportArea(myCircle.radius, reportList);
Circle.reportPerimeter(myCircle.radius, reportList);

// drawing a triangle
let myTriangle = Triangle.draw(myCanvas.ctx, 100, 250, 180, "yellow");
Triangle.reportArea(myTriangle.length, reportList);
Triangle.reportPerimeter(myTriangle.length, reportList);
