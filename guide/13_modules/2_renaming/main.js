import { create, createReportList } from "./modules/canvas.js";

import {
    name as squareName,
    draw as drawSquare,
    reportArea as reportSquareArea,
    reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
    name as circleName,
    draw as drawCircle,
    reportArea as reportCircleArea,
    reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
    name as triangleName,
    draw as drawTriangle,
    reportArea as reportTriangleArea,
    reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";

// creating canvas and reporting list
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

// drawing a square
let mySquare = drawSquare(myCanvas.ctx, 50, 50, 100, "blue");
reportSquareArea(mySquare.length, reportList);
reportSquarePerimeter(mySquare.length, reportList);

// drawing a circle
let myCircle = drawCircle(myCanvas.ctx, 75, 200, 100, "green");
reportCircleArea(myCircle.radius, reportList);
reportCirclePerimeter(myCircle.radius, reportList);

// drawing a triangle
let myTriangle = drawTriangle(myCanvas.ctx, 100, 250, 180, "yellow");
reportTriangleArea(myTriangle.length, reportList);
reportTrianglePerimeter(myTriangle.length, reportList);
