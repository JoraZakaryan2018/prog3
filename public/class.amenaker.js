class Amenaker extends LivingCreature {
    constructor(x, y, energy) {
        super(x, y);
    }
    stanalNorKordinatner() {
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2]
        ];
    }
    yntrelVandak(ch) {

        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norVandak2 = random(this.yntrelVandak(0));
        var norVandak1 = random(this.yntrelVandak(1));

        if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 4;
        } else if (norVandak1) {
            matrix[this.y][this.x] = 1;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 4;
        }

    }

    utel() {
        this.stanalNorKordinatner();
        var norVandak2 = random(this.yntrelVandak(3));
        var norVandak1 = random(this.yntrelVandak(2));
        // var norVandak2 = random(this.yntrelVandak(0));
        var norVandak3 = random(this.yntrelVandak(1));
        var norVandak5 = random(this.yntrelVandak(5));

        if (norVandak5) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak5[1];
            this.x = norVandak5[0];
            matrix[this.y][this.x] = 4;

            for (var i in kerparsArr) {
                if (norVandak5[1] == kerparsArr[i].y && norVandak5[0] == kerparsArr[i].x) {
                    kerparsArr.splice(i, 1);
                }
            }
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak2[1];
            this.x = norVandak2[0];
            matrix[this.y][this.x] = 4;

            for (var i in gishatichArr) {
                if (norVandak2[1] == gishatichArr[i].y && norVandak2[0] == gishatichArr[i].x) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
        else if (norVandak1) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak1[1];
            this.x = norVandak1[0];
            matrix[this.y][this.x] = 4;

            for (var i in xotakerArr) {
                if (norVandak1[1] == xotakerArr[i].y && norVandak1[0] == xotakerArr[i].x) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 4;

            for (var i in grassArr) {
                if (norVandak3[1] == grassArr[i].y && norVandak3[0] == grassArr[i].x) {
                    grassArr.splice(i, 1);

                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (grassArr.length == 0 && xotakerArr.length == 0 && gishatichArr.length == 0) {
            for (var i in amenakerArr) {
                matrix[amenakerArr[i].y][amenakerArr[i].x] = 0;
                amenakerArr.splice(i, 1);
            }
        }
    }
}

