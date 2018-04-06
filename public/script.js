var matrix = [
    // [0,0,0,0,],
    // [0,0,0,0,],
    // [4,0,0,0,],
   // [0,4,0,],
    // [2,0,0,],
    // [0,0,3,],
];
var side = 10;
var grassArr = [];
var bombArr = [];

var gishatichArr = [];

var xotakerArr = [];
var amenakerArr =[];

var kerparsArr =[];
for (var y = 0; y < 40; y++) {
    matrix[y] = [];
    for (var x = 0; x < 40; x++) {
        matrix[y].push(Math.floor(Math.random() * 2));
    }
}
for (var x = 0; x < 20; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
}

for (var x = 0; x < 10; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
}

for (var x = 0; x < 3; x++) {

    matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
}
for (var x = 0; x < 5; x++) {
    
        matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 5;
    }

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y);
                grassArr.push(xot);
            }
            else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y);
                xotakerArr.push(xot);
            }
            else if (matrix[y][x] == 3) {
                var xot = new Gishatich(x, y);
                gishatichArr.push(xot);
            }
            else if (matrix[y][x] == 4) {
                var xot = new Amenaker(x, y);
                amenakerArr.push(xot);
            }
             else if (matrix[y][x] == 5) {
                var xot = new KerparS(x, y);
                kerparsArr.push(xot);
            }
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
           
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
             else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
        xotakerArr[i].bazmanal();
       xotakerArr[i].mahanal();
        
    }

    for (var i in gishatichArr) {
       
         gishatichArr[i].utel();
         gishatichArr[i].mahanal();
    }

    for(var i in amenakerArr){
        amenakerArr[i].sharjvel();
        amenakerArr[i].utel();
        amenakerArr[i].mahanal();
        
        
    }
    for(var i in kerparsArr){
        kerparsArr[i].sharjvel();
        kerparsArr[i].bazmanal();
        
    }
}
