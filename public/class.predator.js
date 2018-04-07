class Gishatich {
    constructor(x, y, energy) {
        this.x = x;
        this.y = y;
        this.energy = 5;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    sharjvel() {
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(1));

        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 3;
            this.energy--;




        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;


        }
    }


    utel() {
        this.stanalNorKordinatner();
        //  var norVandak2 = random(this.yntrelVandak(4));
        var norVandak3 = random(this.yntrelVandak(2));


        if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;


            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x) {
                    //console.log("keravvvvvv");
                    this.energy = 5;

                    xotakerArr.splice(i, 1);
                }
            }
        }

        else {
            this.sharjvel();
        }


    }
    mahanal() {
        for (var i in gishatichArr) {
            if (gishatichArr[i].energy <= 0) {
                matrix[this.y][this.x] = 0;
                gishatichArr.splice(i, 1);
                // console.log("Gishatich@ merav");
            }
        }
    }
}
