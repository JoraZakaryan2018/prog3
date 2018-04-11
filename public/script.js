var matrix = [
    [0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]

];
var side = 10;
var grassArr = [];
var hivandgrassArr = [];

var bombArr = [];

var gishatichArr = [];

var xotakerArr = [];
var amenakerArr = [];

var kerparsArr = [];

var hivandArr = [];
// for (var y = 0; y < 40; y++) {
//     matrix[y] = [];
//     for (var x = 0; x < 40; x++) {
//         matrix[y].push(Math.floor(Math.random() * 2));
//     }
// }
// for (var x = 0; x < 20; x++) {

//     matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 2;
// }

// for (var x = 0; x < 10; x++) {

//     matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 3;
// }

// for (var x = 0; x < 3; x++) {

//     matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 4;
// }
// for (var x = 0; x < 2; x++) {

//     matrix[Math.floor(Math.random() * 40)][Math.floor(Math.random() * 40)] = 5;
// }

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
            else if (matrix[y][x] == 6) {
                var hiv = new Hivand(x, y);
                hivandArr.push(hiv);
            }
        }
    }
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                //   if (grassArr[i].hivand == true) {
                        //  fill("blue");
                        //  rect(x * side, y * side, side, side);
                        //   matrix[grassArr[i].y][grassArr[i].x] = 7;
                      //  }
                  // else  if (grassArr[i].hivand == false) {
                      if(grassArr[i].hivand == false){
                        fill("green");
                      // console.log("hivand chi");
                     
                      }else if(grassArr[i].hivand == true){
                        //console.log("hivandaaaaaa");
                        fill("blue");
                      }

                        
                        rect(x * side, y * side, side, side);
                  //  } 
                        
                       
                }

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
            else if (matrix[y][x] == 6) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                 fill("blue");
                 rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
        //  grassArr[i].hivandanal();
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

    for (var i in amenakerArr) {
        amenakerArr[i].sharjvel();
        amenakerArr[i].utel();
        amenakerArr[i].mahanal();


    }
    for (var i in kerparsArr) {
        kerparsArr[i].sharjvel();
        kerparsArr[i].bazmanal();

    }
    for (var i in hivandArr) {
        hivandArr[i].sharjvel();
        hivandArr[i].hivandanal();

    }
}
