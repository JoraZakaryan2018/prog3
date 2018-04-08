class Gishatich extends LivingCreature {
    constructor(x, y, energy) {
        super(x, y);
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
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
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
        var norVandak3 = random(this.yntrelVandak(2));


        if (norVandak3) {
            matrix[this.y][this.x] = 0;
            this.y = norVandak3[1];
            this.x = norVandak3[0];
            matrix[this.y][this.x] = 3;


            for (var i in xotakerArr) {
                if (norVandak3[1] == xotakerArr[i].y && norVandak3[0] == xotakerArr[i].x) {

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

            }
        }
    }
}
